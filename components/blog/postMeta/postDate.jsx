import { getPostFormattedDate } from "../../../utils/dateFns"

const PostDate = ({ date = "" }) => {
  const postFormattedDate = getPostFormattedDate(date)
  return (
    <span>{postFormattedDate}</span>
  )
}

export default PostDate