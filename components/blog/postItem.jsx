import Link from "next/link"
import { getTruncatedText } from "../../utils/textFns"
import { PostCoverCard } from "./postMeta/postCover"
import PostDate from "./postMeta/postDate"
import PostReadTime from "./postMeta/postReadTime"
import PostTag from "./postMeta/postTag"

const PostItem = ({ meta }) => {
  const { title, cover, date, readTime, description, slug, tags, } = meta
  const truncatedDesc = getTruncatedText(description)
  return (
    <div className="mb-12 w-full lg:max-w-screen-sm mx-auto">
      <Link href={`${slug}`}>
        <a className="">
          <PostCoverCard src={cover} alt={title} />
        </a>
      </Link>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
        <div className="flex flex-col">
          <Link href={`/posts/${slug}`}>
            <a className="text-3xl font-bold">{title}</a>
          </Link>
          <hr className="w-full bg-black mt-4" style={{ height: "2px" }} />
          <div className="flex flex-wrap mt-6">
            {tags.map(t => (
              <PostTag key={t} tag={t} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex font-bold">
            <p className="">
              <PostDate date={date} />
            </p>
            <span className="mx-2">·</span>
            <p className="">
              <PostReadTime readTime={readTime} />
            </p>
          </div>
          <p className="mt-4 text-base leading-relaxed">{truncatedDesc}</p>
          <Link href={`/posts/${slug}`}>
            <a className="mt-8 text-lg font-bold text-red-500">Read More {`>>`}</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostItem