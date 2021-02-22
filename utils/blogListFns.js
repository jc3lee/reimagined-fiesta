function getMetasFromTag(metas, tag) {
  return metas.filter(m => m.tags.includes(tag))
}

function getMetasSlice(metas, pageNum, numMetas) {
  const firstPostIndex = (pageNum - 1) * numMetas
  if (metas.length <= firstPostIndex) throw new Error("no more metas to fetch")
  return metas.slice(firstPostIndex, firstPostIndex + numMetas)
}

export {
  getMetasSlice, getMetasFromTag,
}