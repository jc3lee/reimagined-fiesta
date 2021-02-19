import Link from "next/link"

const PostTitle = ({ title, slug }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a>
        <h1 className="text-3xl sm:text-3xl lg:text-5xl leading-tight font-bold sm:font-extrabold tracking-tight">{title}</h1>
      </a>
    </Link>
  )
}

export default PostTitle