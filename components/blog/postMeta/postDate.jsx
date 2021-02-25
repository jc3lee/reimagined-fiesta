import { getPostFormattedDate } from "../../../utils/dateFns"

const PostDate = ({ date = "", formal = false }) => {
  const postFormattedDate = getPostFormattedDate(date, formal)
  return (
    <span>{postFormattedDate}</span>
  )
}

export default PostDate