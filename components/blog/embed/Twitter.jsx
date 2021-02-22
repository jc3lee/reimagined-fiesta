import { TwitterTweetEmbed } from "react-twitter-embed"
const twitterRegex = /twitter[a-zA-Z./0-9\-]+/

function getTweetUserAndId(url = "") {
  const tweetSegment = (url.match(twitterRegex) || [""])[0]
  if (!tweetSegment) return {}
  const tweetSegmentArr = tweetSegment.split("/")
  if (tweetSegmentArr.length < 4) return {}
  const tweetUser = tweetSegmentArr[1]
  const tweetId = tweetSegmentArr[3]
  return {
    tweetUser,
    tweetId,
  }
}
const Twitter = ({ url = "-no url-", alt = "", title = "twitter" }) => {
  const { tweetUser, tweetId, } = getTweetUserAndId(url)

  if (!tweetUser || !tweetId) return (
    <div className="flex justify-center items-center text-base border-2 border-black dark:border-white mb-10 text-center mx-auto max-w-sm" style={{ width: "100%", height: "200px", }}>
      <p>Failed to load tweet <span className="font-bold mx-1">{title ? title : alt}</span> at {url}.</p>
    </div>
  )

  return (
    <div className="w-full overflow-auto mb-10" style={{ flexBasis: "100%", }}>
      <div className="w-full max-w-xs sm:max-w-none sm:w-96 mx-auto">
        <TwitterTweetEmbed tweetId={tweetId} />
      </div>
    </div>
  )
}

export default Twitter