
export function getAuthorFromName(name, authors) {
  const author = authors.find(author => author.name === name)
  if (!author) return {
    name: "Unknown author",
  }
  return author
}