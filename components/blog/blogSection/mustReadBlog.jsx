import PostReadTime from "../postMeta/postReadTime"
import Link from "next/link"

const meta = {
  tags: ["tutorial", "codenewbie", "javascript", "css", "unknown", "boss", "king", "sniper",],
  date: "06/02/2021",
  readTime: "5 min read",
  cover: "/images/blog/bg-hero.jpg",
  title: "Introduction to scroll animations with Intersection Observer",
  slug: "hello",
  description: "The Intersection Observer (IO) detects when an element enters or leaves the viewport (or a parent element). It can be used to easily add animation on scroll without external libraries. IO is asynchronous and more efficient than scroll listeners 👍.",
}

const MustReadBlog = () => {
  return (
    <div className="flex flex-col py-4">
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
        <PostReadTime readTime={meta.readTime} />
        <Link href={`/posts/${meta.slug}`}>
          <a className="ml-4 lg:ml-8 flex text-red-500">Read more {">>"}</a>
        </Link>
      </p>
    </div>
  )
}

export default MustReadBlog