import SearchIco from "../../../icons/SearchIco"
import PostTag from "../postMeta/postTag"

const SearchBlog = ({ meta = {} }) => {
  let tags = meta.tags
  if (!tags || tags.length === 0) {
    // add default tags
    tags = ["html", "css", "js", "react", "tutorial",]
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("tag", e.target.value)
  }

  return (
    <div className="px-4 py-8 lg:px-4 lg:py-4 flex flex-col border-2 dark:border-white border-black">
      <label className="text-2xl font-bold tracking-tight" htmlFor="tagInput">Search article by tag</label>
      <div className="relative mt-4">
        <form onClick={handleSubmit}>
          <input required={true} type="text" className="bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 dark:hover:bg-white dark:focus:bg-white px-2 py-1 block w-full text-black focus:outline-none focus:ring-1 focus:ring-black " />
          <button className="flex justify-center items-center absolute right-0 inset-y-0 w-8 text-black">
            <span className="sr-only">search</span>
            <SearchIco icoClasses={"w-6 h-6"} />
          </button>
        </form>
      </div>
      <div className="flex flex-wrap mt-4">
        {tags.map((t, index) => (
          <PostTag key={t} tag={t} index={index} />
        ))}
      </div>
    </div>
  )
}

export default SearchBlog