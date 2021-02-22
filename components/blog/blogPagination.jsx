const BlogPagination = ({ numOfPages, currentPageNum, updateCurrentPageNum, }) => {
  currentPageNum = Number.parseInt(currentPageNum)
  const pageNumArr = []
  for (let i = 0; i < numOfPages; i++) {
    pageNumArr.push(i + 1)
  }

  function handleGotoPrevPage() {
    updateCurrentPageNum(currentPageNum - 1)
  }

  function handleGotoNextPage() {
    updateCurrentPageNum(currentPageNum + 1)
  }

  function handleGotoPageNum(num) {
    updateCurrentPageNum(num)
  }
  return (
    <div className="flex mt-48 space-x-4">
      {currentPageNum !== 1 &&
        <button onClick={handleGotoPrevPage} className="w-16 h-12 flex justify-center items-center text-2xl border-2 text-white bg-black hover:text-black hover:bg-white dark:hover:text-white dark:hover:bg-black border-black dark:border-white dark:text-black dark:bg-white transition-colors duration-150">
          {"<<"}
        </button>}
      {
        pageNumArr.map(pn => (<PageBtn handleGotoPageNum={handleGotoPageNum} key={pn} num={pn} currentPageNum={currentPageNum} />))
      }
      {currentPageNum < numOfPages &&
        <button onClick={handleGotoNextPage} className="w-16 h-12 flex justify-center items-center text-2xl border-2 text-white bg-black hover:text-black hover:bg-white dark:hover:text-white dark:hover:bg-black border-black dark:border-white dark:text-black dark:bg-white transition-colors duration-150">
          {">>"}
        </button>}
    </div>
  )
}

export default BlogPagination

const PageBtn = ({ num, currentPageNum, handleGotoPageNum, }) => {
  if (currentPageNum === num) {
    return (
      <button disabled={true} className="w-12 h-12 flex justify-center items-center text-2xl border-2 border-black dark:border-white text-black bg-white dark:text-white dark:bg-black transition-colors duration-150">
        {num}
      </button>
    )
  }
  return (
    <button onClick={() => handleGotoPageNum(num)} className="w-12 h-12 flex justify-center items-center text-2xl border-2 text-white bg-black hover:text-black hover:bg-white dark:hover:text-white dark:hover:bg-black border-black dark:border-white dark:text-black dark:bg-white transition-colors duration-150">
      {num}
    </button>
  )
}