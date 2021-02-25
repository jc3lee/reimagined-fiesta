import Link from "next/link"
import PostDate from "../postMeta/postDate"

const MustReadBlog = ({ meta }) => {
  return (
    <div className="flex flex-col py-4">
      <div className="self-end text-xl uppercase font-bold">must read</div>
      <Link href={`/posts/${meta.slug}`}>
        <a>
          <img src={meta.cover} alt={meta.title} />
        </a>
      </Link>
      <Link href={`/posts/${meta.slug}`}>
        <a>
          <p className="mt-4 leading-tight text-2xl font-bold">{meta.title}</p>
        </a>
      </Link>
      <hr className="w-full bg-black mt-4" style={{ height: "2px" }} />
      <p className="mt-4 flex font-bold">
        <PostDate date={meta.date} formal={true} />
        <Link href={`/posts/${meta.slug}`}>
          <a className="ml-4 lg:ml-8 flex text-red-500">Read more {">>"}</a>
        </Link>
      </p>
    </div>
  )
}

export default MustReadBlog