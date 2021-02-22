import Link from "next/link"
import { getTruncatedText } from "../../utils/textFns"
import { PostCover, } from "./postMeta/postCover"
import PostDate from "./postMeta/postDate"
import PostReadTime from "./postMeta/postReadTime"
import PostTag from "./postMeta/postTag"

const TopPost = ({ meta }) => {
  const { title, cover, date, readingTime, description, slug, tags, } = meta
  const truncatedDesc = getTruncatedText(description)
  return (
    <div className="">
      <PostCover alt={title} src={cover} />
      <div className="hidden lg:block relative w-full bg-gray-800 py-16 text-white"
        style={{ boxShadow: "0px -11px 26px -2px rgba(0,0,0,0.23)" }}>
        <div className="mx-auto max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 px-6">
          <div className="flex flex-col">
            <Link href={`/posts/${slug}`}>
              <a className="text-4xl font-bold">{title}</a>
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
                <PostReadTime readingTime={readingTime} />
              </p>
            </div>
            <p className="mt-4 text-lg leading-loose">{truncatedDesc}</p>
            <Link href={`/posts/${slug}`}>
              <a className="mt-8 text-lg font-bold text-red-500 self-end">Read More {`>>`}</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full lg:max-w-screen-sm mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
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
              <PostReadTime readingTime={readingTime} />
            </p>
          </div>
          <p className="mt-4 text-base leading-relaxed">{truncatedDesc}</p>
          <Link href={`/posts/${slug}`}>
            <a className="mt-8 text-lg font-bold text-red-500 self-end">Read More {`>>`}</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopPost