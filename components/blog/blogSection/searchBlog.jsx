import { useRef, useState } from "react"
import SearchIco from "../../../icons/SearchIco"
import PostTag from "../postMeta/postTag"
import tagsData from "../../../pages/tags/allTags.json"
import Link from "next/link"

const SearchBlog = ({ tags = [], }) => {
  const searchARef = useRef(null)
  const suggestionsRef = useRef(null)
  const [searchTag, setSearchTag] = useState("")
  const suggestionsArr = tagsData.allTags.filter(tag => tag.indexOf(searchTag) !== -1)

  if (!tags || tags.length === 0) {
    // add default tags
    tags = ["html", "css", "js", "react", "tutorial",]
  }

  function handleSubmit(e) {
    e.preventDefault()
    searchARef.current.click()
  }

  function handleSearch(e) {
    const searchTag = (e.target.value).trim()
    setSearchTag(searchTag)
    showSuggestions()
  }


  function showSuggestions() {
    suggestionsRef.current.classList.remove("hidden")
  }

  function hideSuggestions() {
    suggestionsRef.current.classList.add("hidden")
  }

  function handleSearchBlur() {
    // hide suggestions
    setTimeout(() => {
      hideSuggestions()
    }, 100)
  }

  return (
    <div className="px-4 py-8 lg:px-4 lg:py-4 flex flex-col border-2 dark:border-white border-black">
      <label className="text-2xl font-bold tracking-tight" htmlFor="tagInput">Search article by tag</label>
      <div className="relative mt-4">
        <form onSubmit={handleSubmit}>
          <input onBlur={handleSearchBlur} onChange={handleSearch} required={true} type="text" className="bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 dark:hover:bg-white dark:focus:bg-white px-2 py-1 block w-full text-black focus:outline-none focus:ring-1 focus:ring-black " />
          <Link href={`/tags/${searchTag}`}>
            <a ref={searchARef} className="z-10 flex justify-center items-center absolute right-0 inset-y-0 w-0 h-0 overflow-hidden" aria-hidden="true">search</a>
          </Link>
          <button className="z-20 flex justify-center items-center absolute right-0 inset-y-0 w-8 text-black">
            <span className="sr-only">search</span>
            <SearchIco icoClasses={"w-6 h-6"} />
          </button>
        </form>
        <div ref={suggestionsRef} className="hidden relative w-full h-full">
          <div className="absolute top-0 flex flex-col inset-y-0 w-full border">
            {suggestionsArr.map(s => <Link key={s} href={`/tags/${s}`}><a className="bg-white hover:bg-gray-50 text-black py-1 px-4 w-full">{s}</a></Link>)}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        {tags.map(t => (
          <PostTag key={t} tag={t} />
        ))}
      </div>
    </div>
  )
}

export default SearchBlog