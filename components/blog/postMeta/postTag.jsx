import Link from "next/link"
import { tagColors } from "../../../pages/tags/allTags.json"

const PostTag = ({ tag, }) => {
  const { bg, text } = tagColors[tag]
  return (
    <Link href={`/tags/${tag}`}>
      <a className={`text-base px-1 py-0.5 ${bg} ${text}  mr-2 mb-2`}>#{tag}</a>
    </Link>
  )
}

export default PostTag