import { getTagColors } from "../../../utils/tagsFns"

const PostTag = ({ tag, index }) => {
  const { bg, text } = getTagColors(tag, index)
  return (
    <a className={`text-base px-1 py-0.5 ${bg} ${text}  mr-2 mb-2`} href="#">#{tag}</a>
  )
}

export default PostTag