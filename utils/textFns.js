function getTruncatedText(text = "", maxWords = 50) {
  const textArr = text.split(/\s+/)
  if (textArr.length < maxWords) return text
  return textArr.slice(0, maxWords).join(" ") + "..."
}

export {
  getTruncatedText,
}