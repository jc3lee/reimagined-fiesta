import TwitterIco from '../../icons/TwitterIco'
import { AuthorThumbTiny, } from './postMeta/authorThumb'
import PostDate from './postMeta/postDate'
import PostReadTime from './postMeta/postReadTime'
const author = {
  name: "JC Lee",
  pic: "/images/blog/author-pic.webp",
  twitterHandle: "@ljc_dev",
  twitterUrl: "https://twitter.com/ljc_dev",
}

const PostDetails = ({ meta, }) => {
  const { date, readTime, } = meta
  return (
    <div className="mt-4">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
        <div className="flex text-lg md:text-xl">
          <AuthorThumbTiny author={author.name} authorPic={author.pic} />
          <div className="mt-2 ml-4 flex flex-col text-blue-400 font-bold">
            <p className="flex ml-0.5">
              <span className="text-black dark:text-white transition-colors duration-150">by</span>
              <a href="#" className="ml-2 uppercase">{author.name}</a>
            </p>
            <a href={author.twitterUrl} className="flex mt-2 items-center">
              <p>
                <span className="sr-only">Twitter</span>
                <TwitterIco icoClasses="h-8 w-8" />
              </p>
              <p className="ml-1">{author.twitterHandle}</p>
            </a>
          </div>
        </div>
        <div className="flex items-center text-base font-bold mt-6 sm:mt-2 justify-end">
          <p className="">
            <PostDate date={date} />
          </p>
          <span className="mx-2">·</span>
          <p style={{ wordSpacing: "0.15rem" }}>
            <PostReadTime readTime={readTime} />
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostDetails