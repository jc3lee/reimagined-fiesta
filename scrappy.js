const fs = require("fs")
const matter = require("gray-matter")
const { mdxComponents } = require("./mdxComponents")
const { getAllTagsWithColors } = require("./utils/tagsFns")

const referenceLinkRegex = /^!\[.+?\]\s*(\[.+?\])/m

function handleMdToMdx() {
  const filenames = fs.readdirSync("rawPosts")
  //save all tags for easier search
  // default tags to include in colors (because present as default in search tag commponent)
  const defaultTagsForColors = ["html", "css", "js", "react", "tutorial",]
  const metas = []
  const mdxWithFilenames = filenames.map(f => {
    const fileContent = fs.readFileSync(`rawPosts/${f}`)
    const { data, content } = matter(fileContent)
    metas.push(data)
    return { filename: `${f}x`, mdx: getMdx(data, content) }
  })

  const allTags = metas.reduce((tmpAllTags, m) => {
    tmpAllTags.push(...m.tags)
    return tmpAllTags
  }, [])

  for (mdxWithFilename of mdxWithFilenames) {
    fs.writeFileSync(`pages/posts/${mdxWithFilename.filename}`, mdxWithFilename.mdx)
  }
  const allTagsWithNoDuplicate = Array.from(new Set(allTags))
  const allTagsWithColors = getAllTagsWithColors(Array.from(new Set([...allTagsWithNoDuplicate, ...defaultTagsForColors])))

  fs.writeFileSync("pages/metas.json", JSON.stringify({ metas, }))
  fs.writeFileSync("pages/tags/allTags.json", JSON.stringify({ allTags: allTagsWithNoDuplicate, tagColors: allTagsWithColors }))
}

function getMdx(data, content) {
  //replace reference link in embeds - and img because same syntax - with links
  const replacedRefContent = replaceEmbedAndImgRefWithRefLink(content)
  //get embeds
  const { componentImports, contentWithEmbeds } = getContentWithEmbedsAndImports(replacedRefContent)
  const mdxContent = `${componentImports.join("\n")}\nexport const meta = ${JSON.stringify(data)}\n${contentWithEmbeds}`
  return mdxContent
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

//only replace reference for images and embeds, not links
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

// 1 - Run this command to transform raw md to mdx

// handleMdToMdx()

// OTHER - Running the following to check if created tags and colors ok

// const tags = require("./pages/tags/allTags.json")
// console.log(tags.tagColors);
// const metas = require("./pages/metas.json")
// console.log(metas.metas);