import { useRef } from 'react'
import CloseIco from '../../icons/CloseIco'
import FacebookIco from '../../icons/FacebookIco'
import LinkedInIco from '../../icons/LinkedInIco'
import MailIco from '../../icons/MailIco'
import RedditIco from '../../icons/RedditIco'
import ShareIco from '../../icons/ShareIco'
import TwitterIco from '../../icons/TwitterIco'
import { allAuthors } from "../../pages/allAuthors.json"
import { getAuthorFromName } from '../../utils/authorsFns'

const BASE_URL = "https://jclee.netlify.app/posts/"

function getFacebookShareUrl(slug) {
  const postUrl = "https://jclee.netlify.app/"
  // const postUrl = BASE_URL + slug
  return `https://facebook.com/sharer/sharer.php?u=${postUrl}`
}

function getTwitterShareUrl(slug, title, twitterHandle, tags) {
  const postUrl = "https://jclee.netlify.app/"
  // const postUrl = BASE_URL + slug
  const twitterTags = tags.map(t => `#${t}`).join(" ")
  const text = `${title} by ${twitterHandle}.\n\n${twitterTags}`
  const encodedText = encodeURIComponent(text)
  // console.log(encodedText)
  return `https://twitter.com/intent/tweet/?text=${encodedText}&url=${postUrl}`
}

function getLinkedInShareUrl(slug) {
  // const postUrl = BASE_URL + slug
  const postUrl = "https://jclee.netlify.app/"
  return `https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}`
}

function getRedditShareUrl(slug, title) {
  // const postUrl = BASE_URL + slug
  const postUrl = "https://jclee.netlify.app/"
  const encodedTitle = encodeURIComponent(title)
  return `https://reddit.com/submit/?url=${postUrl}&title=${encodedTitle}`
}

function getMailTo(slug, title, authorName) {
  // const postUrl = BASE_URL + slug
  const text = `${title} by ${authorName}.\n`
  const postUrl = "https://jclee.netlify.app/"
  const encodedTitle = encodeURIComponent(title)
  const encodedText = encodeURIComponent(text)
  return `mailto:?subject=${encodedTitle}&body=${text}`
}

const ShareSocial = ({ meta }) => {
  const socialOverlayRef = useRef(null)
  const { tags, description, title, slug, author: authorName } = meta
  const author = getAuthorFromName(authorName, allAuthors)

  function handleShareClick() {
    toggleSocialOverlay()
  }

  function toggleSocialOverlay() {
    socialOverlayRef.current.classList.toggle("hidden")
  }

  return (
    <div className="grid grid-cols-4 gap-x-2">
      <a target="_blank" rel="noreferrer" href={getFacebookShareUrl(slug)} className="flex justify-center items-center py-1 bg-blue-800 text-white hover:opacity-70 transition-opacity duration-75">
        <span className="sr-only">facebook</span>
        <FacebookIco icoClasses={"w-6 h-6"} />
      </a>
      <a target="_blank" rel="noreferrer" href={getTwitterShareUrl(slug, title, author.twitterHandle, tags)} className="flex justify-center items-center py-1 bg-blue-400 text-white hover:opacity-70 transition-opacity duration-75">
        <span className="sr-only">twitter</span>
        <TwitterIco icoClasses={"w-6 h-6"} />
      </a>
      <a target="_blank" rel="noreferrer" href={getLinkedInShareUrl(slug)} className="flex justify-center items-center py-1 bg-blue-700 text-white hover:opacity-70 transition-opacity duration-75">
        <span className="sr-only">linkedin</span>
        <LinkedInIco icoClasses={"w-6 h-6"} />
      </a>
      <button onClick={handleShareClick} className="flex justify-center items-center py-1 bg-red-600 text-white hover:opacity-70 transition-opacity duration-75">
        <span className="uppercase text-lg mr-2">share</span>
        <ShareIco icoClasses={"w-6 h-6"} />
      </button>
      <div ref={socialOverlayRef} className="hidden">
        <div className="fixed z-50 inset-0 w-full h-full flex justify-center items-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}>
          <div className="relative flex max-w-sm flex-wrap space-x-4 justify-center text-white">
            <a onClick={toggleSocialOverlay} target="_blank" rel="noreferrer" href={getFacebookShareUrl(slug)} className="rounded-full w-12 h-12 flex justify-center items-center py-1 bg-blue-800 text-white hover:opacity-70 transition-opacity duration-75">
              <span className="sr-only">facebook</span>
              <FacebookIco icoClasses={"w-6 h-6"} />
            </a>
            <a onClick={toggleSocialOverlay} target="_blank" rel="noreferrer" href={getTwitterShareUrl(slug, title, author.twitterHandle, tags)} className="rounded-full w-12 h-12 flex justify-center items-center py-1 bg-blue-400 text-white hover:opacity-70 transition-opacity duration-75">
              <span className="sr-only">twitter</span>
              <TwitterIco icoClasses={"w-6 h-6"} />
            </a>
            <a onClick={toggleSocialOverlay} target="_blank" rel="noreferrer" href={getLinkedInShareUrl(slug)} className="rounded-full w-12 h-12 flex justify-center items-center py-1 bg-blue-700 text-white hover:opacity-70 transition-opacity duration-75">
              <span className="sr-only">linkedin</span>
              <LinkedInIco icoClasses={"w-6 h-6"} />
            </a>
            <a onClick={toggleSocialOverlay} target="_blank" rel="noreferrer" href={getRedditShareUrl(slug, title)} className="rounded-full w-12 h-12 flex justify-center items-center py-1 bg-red-600 text-white hover:opacity-70 transition-opacity duration-75">
              <span className="sr-only">reddit</span>
              <RedditIco icoClasses={"w-6 h-6"} />
            </a>
            <a onClick={toggleSocialOverlay} target="_blank" rel="noreferrer" href={getMailTo(slug, title, author.name)} className="rounded-full w-12 h-12 flex justify-center items-center py-1 bg-gray-400 text-white hover:opacity-70 transition-opacity duration-75">
              <span className="sr-only">mail to</span>
              <MailIco icoClasses={"w-6 h-6"} />
            </a>
            <button onClick={toggleSocialOverlay} className="absolute -top-12 -right-12 w-8 h-8 rounded-full bg-gray-200 text-black flex justify-center items-center hover:opacity-70 ">
              <span className="sr-only">close</span>
              <CloseIco icoClasses={"w-6 h-6"} />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ShareSocial