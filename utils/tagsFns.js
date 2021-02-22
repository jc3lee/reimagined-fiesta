
const PREDEFINED_TAGS = {
  "html": { bg: "bg-red-500", text: "text-white", },
  "js": { bg: "bg-yellow-300", text: "text-black", },
  "javascript": { bg: "bg-yellow-300", text: "text-black", },
  "css": { bg: "bg-blue-500", text: "text-white", },
  "tailwindcss": { bg: "bg-blue-400", text: "text-white", },
  "react": { bg: "bg-green-300", text: "text-black", },
  "reactjs": { bg: "bg-green-300", text: "text-black", },
  "tutorial": { bg: "bg-orange-500", text: "text-white", },
  "technology": { bg: "bg-purple-300", text: "text-black", },
  "journal": { bg: "bg-gray-500", text: "text-white", },
  "codenewbie": { bg: "bg-fuchsia-300", text: "text-black", },
  "webdev": { bg: "bg-teal-500", text: "text-white", },
  "beginners": { bg: "bg-purple-500", text: "text-white", },
}

const randomColors = [
  { bg: "bg-gray-300", text: "text-black", },
  { bg: "bg-yellow-500", text: "text-white", },
  { bg: "bg-red-300", text: "text-black", },
  { bg: "bg-green-500", text: "text-white", },
  { bg: "bg-orange-300", text: "text-black", },
  { bg: "bg-purple-500", text: "text-white", },
  { bg: "bg-fuchsia-300", text: "text-black", },
  { bg: "bg-gray-500", text: "text-white", },
  { bg: "bg-teal-300", text: "text-black", },
]

function getColorsFromIndex(index) {
  // const randNum = Math.floor(Math.random() * randomColors.length)
  const randNum = index % randomColors.length
  return randomColors[randNum]
}

function getTagColors(tag, index) {
  let bg, text
  if (PREDEFINED_TAGS.hasOwnProperty(tag)) {
    bg = PREDEFINED_TAGS[tag].bg
    text = PREDEFINED_TAGS[tag].text
  } else {
    //pick a color pair from its index.
    const colorsFromIndex = getColorsFromIndex(index)
    bg = colorsFromIndex.bg
    text = colorsFromIndex.text
  }
  return { bg, text }
}

function getAllTagsWithColors(tags) {
  return tags.reduce((tagsWithColorsObj, t, index) => {
    tagsWithColorsObj[t] = getTagColors(t, index)
    return tagsWithColorsObj
  }, {})
}

// access only from node js so module exports
module.exports = {
  getAllTagsWithColors,
}