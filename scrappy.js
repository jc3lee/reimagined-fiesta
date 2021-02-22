const fs = require("fs")
const matter = require("gray-matter")
const { mdxComponents } = require("./mdxComponents")
const { getAllTagsWithColors } = require("./utils/tagsFns")
const slugify = require("slugify")
const readingTime = require("reading-time")

const referenceLinkRegex = /^!\[.+?\]\s*(\[.+?\])/m

function getAllMds(filenames = []) {
  return filenames.map(filename => {
    const fileContent = fs.readFileSync(`rawPosts/${filename}`)
    const { data, content } = matter(fileContent)
    return { data, content }
  })
}

function getAllTagsFromMds(mds) {
  const allTagsWithDuplicates = mds.reduce((tmpAllTags, md) => {
    tmpAllTags.push(...md.data.tags)
    return tmpAllTags
  }, [])
  const allTagsWithNoDuplicates = Array.from(new Set(allTagsWithDuplicates))
  return allTagsWithNoDuplicates
}

function extractTagsFromMds(mds) {
  // get all tags
  const allTags = getAllTagsFromMds(mds)

  // get all tags colors
  // a few tags are present in Search Blog but don't exist in blog posts.
  // when search blog tries to get the colors for those tags that aren't present in metas => error.
  // it's a bug. Need to either change default tags to existing ones or create posts with those tags. 
  // For now cheat by including them with defaultTagsInSearchBlog
  const defaultTagsInSearchBlog = ["html", "css", "js", "react", "tutorial",]
  const tagColors = getAllTagsWithColors(Array.from(new Set([...allTags, ...defaultTagsInSearchBlog])))

  // save tags and tags colors to json
  fs.writeFileSync("pages/tags/allTags.json", JSON.stringify({ allTags, tagColors }))
}

function addReadingTimeToMds(allMds = []) {
  const result = allMds.map(md => {
    const { text } = readingTime(md.content,)
    md.data["readingTime"] = text
    console.log("readingTime", text)
    return md
  })
  return result
}

function getSlug(text) {
  const slug = slugify(text, {
    replacement: '-',  // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true,      // convert to lower case, defaults to `false`
    strict: true,     // strip special characters except replacement, defaults to `false`
    locale: 'vi'       // language code of the locale to use
  })
  console.log("slug", slug)
  return slug
}

function addSlugsToMds(mds) {
  //add slug from title if no slug
  const result = mds.map(md => {
    if (!md.data.slug) md.data.slug = getSlug(md.data.title)
    return md
  })
  return result
}

function handleMdToMdx() {
  const filenames = fs.readdirSync("rawPosts")

  // extract all markdowns (matter and content)
  const allMds = getAllMds(filenames)

  // get all tags from metas and save them to json
  extractTagsFromMds(allMds)

  // get all slugs from metas and save them to json
  const allMdsWithSlugs = addSlugsToMds(allMds)

  // add reading time
  const allMdsWithSlugsAndReadingTime = addReadingTimeToMds(allMdsWithSlugs)

  // save all metas to json
  fs.writeFileSync("pages/allMetas.json", JSON.stringify({ allMetas: allMdsWithSlugsAndReadingTime.map(md => md.data), }))

  // save mdx to posts folder
  for (const md of allMdsWithSlugsAndReadingTime) {
    fs.writeFileSync(`pages/posts/${md.data.slug}.mdx`, getMdx(md))
  }
}

function getMdx(md) {
  const { data, content } = md
  // replace ref link in embeds - and img because same syntax - with links
  const replacedRefContent = replaceEmbedAndImgRefWithRefLink(content)
  // replace links with embeds and imports
  const { componentImports, contentWithEmbeds } = getContentWithEmbedsAndImports(replacedRefContent)
  const mdx = `${componentImports.join("\n")}\nexport const meta = ${JSON.stringify(data)}\n${contentWithEmbeds}`
  return mdx
}

const referenceRegex = /^\[(.+)?\]:\s*\<?(\S+)\>?\s+([("'](.+)?[)"'])?/gm

function getReferences(content) {
  const matches = [...content.matchAll(referenceRegex)]
  const refObj = matches.reduce((tmpRefObj, m) => {
    // 1 ref, 2 link, 4 title
    tmpRefObj[m[1]] = [m[2], m[4] || ""]
    return tmpRefObj
  }, {})
  return refObj
}

//only replace reference for img & embeds, not links
// syntax => ![]()
function replaceEmbedAndImgRefWithRefLink(content) {
  let replacedRefContent = content
  const myAllRefObj = getReferences(content)
  let match, z = 0
  do {
    match = replacedRefContent.match(referenceLinkRegex)
    if (!match) break
    const matchString = match[0]
    const ref = match[1].slice(1, -1)
    if (!myAllRefObj.hasOwnProperty(ref)) throw new Error(`Markdown - missing reference link for ${matchString}. Have you forgotten to define [${ref}]?`)
    const newString = matchString.replace(match[1], `(${myAllRefObj[ref][0]}${myAllRefObj[ref][1] ? ` "${myAllRefObj[ref][1]}"` : ""})`)
    replacedRefContent = replacedRefContent.replace(matchString, newString)
    z++
  } while (match && z < 200)
  return replacedRefContent
}

function getContentWithEmbedsAndImports(content) {
  let componentImports = []
  let contentWithEmbeds = content
  for (component of mdxComponents) {
    const { name, regex, replacedValue, path, } = component
    if (content.search(regex) !== -1) {
      componentImports.push(`import ${name} from "${path}"`)
      contentWithEmbeds = contentWithEmbeds.replace(regex, replacedValue)
    }
  }
  return { contentWithEmbeds, componentImports, }
}


// just hard coding author
// const author = {
//   name: "JC Lee",
//   pic: "/images/blog/author-pic.webp",
//   twitterHandle: "@ljc_dev",
//   twitterUrl: "https://twitter.com/ljc_dev",
// }

// function saveAuthor() {
//   fs.writeFileSync("pages/author.json", JSON.stringify({ author, }))
// }
// saveAuthor()

// 1 - Run this command to transform raw md posts to mdx

// handleMdToMdx()

// OTHER - Running the following to check tags and metas json files

// const allTags = require("./pages/tags/allTags.json")
// console.log(allTags.allTags);
// console.log(allTags.tagColors);
// const allMetas = require("./pages/allMetas.json")
// console.log(allMetas.metas);