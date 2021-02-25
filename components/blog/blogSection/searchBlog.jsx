import { useReducer, useRef, useState } from "react"
import SearchIco from "../../../icons/SearchIco"
import PostTag from "../postMeta/postTag"
import tagsData from "../../../pages/tags/allTags.json"
import Link from "next/link"

const initialState = {
  searchTag: "",
  suggestionIndex: -1,
  suggestionsArr: [],
}

function searchReduce(state, action) {
  const { searchTag, suggestionIndex, suggestionsArr, } = state
  const { type, value, } = action

  switch (type) {
    case "LINK_CLICKED": {
      const newSearchTag = value
      const newSuggestionIndex = -1
      const newSuggestionsArr = []
      return { searchTag: newSearchTag, suggestionIndex: newSuggestionIndex, suggestionsArr: newSuggestionsArr, }
    }
    case "SEARCH": {
      const newSearchTag = value
      const newSuggestionIndex = -1
      const newSuggestionsArr = getFilteredTags(value)
      return { searchTag: newSearchTag, suggestionIndex: newSuggestionIndex, suggestionsArr: newSuggestionsArr, }
    }
    case "UP": {
      const newSearchTag = suggestionsArr[suggestionIndex - 1]
      const newSuggestionIndex = suggestionIndex - 1
      return { searchTag: newSearchTag, suggestionIndex: newSuggestionIndex, suggestionsArr, }
    }
    case "DOWN": {
      const newSearchTag = suggestionsArr[suggestionIndex + 1]
      const newSuggestionIndex = suggestionIndex + 1
      return { searchTag: newSearchTag, suggestionIndex: newSuggestionIndex, suggestionsArr, }
    }
    case "NO_SUGGEST": {
      const newSuggestionIndex = -1
      const newSuggestionsArr = []
      return { searchTag, suggestionIndex: newSuggestionIndex, suggestionsArr: newSuggestionsArr, }
    }
    default:
      throw new Error(`no such search reducer type: ${type}`)
  }
}

function getFilteredTags(value) {
  return tagsData.allTags.filter(tag => tag.indexOf(value) !== -1)
}

const SearchBlog = ({ tags = [], }) => {
  const [state, dispatch] = useReducer(searchReduce, initialState)
  const searchARef = useRef(null)
  const { searchTag, suggestionIndex, suggestionsArr, } = state

  // console.log(searchTag, suggestionIndex, suggestionsArr,);
  if (!tags || tags.length === 0) {
    // add default tags
    tags = ["html", "css", "js", "react", "tutorial",]
  }

  function handleSubmit(e) {
    dispatch({
      type: "NO_SUGGEST",
    })
    e.preventDefault()
    searchARef.current.click()
  }

  function handleSearch(e) {
    const value = (e.target.value).trim()
    dispatch({
      type: "SEARCH",
      value,
    })
  }

  function handleArrowDown(e) {
    e.preventDefault()
    if (suggestionIndex + 1 < suggestionsArr.length) {
      dispatch({
        type: "DOWN",
      })
    }
  }

  function handleArrowUp(e) {
    e.preventDefault()
    if (suggestionIndex > 0) {
      dispatch({
        type: "UP",
      })
    }
  }

  function handleKeyDown(e) {
    console.log(e.key)
    switch (e.key) {
      case "ArrowDown":
        handleArrowDown(e)
        break
      case "ArrowUp":
        handleArrowUp(e)
        break
      default:
        break
    }
  }

  function handleSuggestionClick(e) {
    // hide suggestions
    dispatch({
      type: "LINK_CLICKED",
      value: e.target.text,
    })
  }

  function handleSearchBlur(e) {
    // hide suggestions

  }

  return (
    <div className="px-4 py-8 lg:px-4 lg:py-4 flex flex-col border-2 dark:border-white border-black">
      <label className="text-2xl font-bold tracking-tight" htmlFor="tagInput">Search article by tag</label>
      <div className="relative mt-4">
        <form onSubmit={handleSubmit}>
          <input value={searchTag} onBlur={handleSearchBlur} onKeyDown={handleKeyDown} onChange={handleSearch} required={true} type="text" className="bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 dark:hover:bg-white dark:focus:bg-white px-2 py-1 block w-full text-black focus:outline-none focus:ring-1 focus:ring-black " />
          <Link href={`/tags/${searchTag}`}>
            <a ref={searchARef} className="z-10 flex justify-center items-center absolute right-0 inset-y-0 w-0 h-0 overflow-hidden" aria-hidden="true">search</a>
          </Link>
          <button className="z-20 flex justify-center items-center absolute right-0 inset-y-0 w-8 text-black">
            <span className="sr-only">search</span>
            <SearchIco icoClasses={"w-6 h-6"} />
          </button>
        </form>
        <div className="relative w-full">
          <div onClick={handleSuggestionClick} className="absolute top-0 flex flex-col inset-y-0 w-full">
            {suggestionsArr.length > 0 && suggestionsArr.map((s, index) => <Link key={s} href={`/tags/${s}`}><a className={`${suggestionIndex !== index ? "bg-white" : "bg-gray-50"} hover:bg-gray-50 text-black py-1 px-4 w-full`}>{s}</a></Link>)}
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