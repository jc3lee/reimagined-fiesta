import AllMustRead from "./blogSection/allMustRead"
import SearchBlog from "./blogSection/searchBlog"
import SocialBlog from "./blogSection/socialBlog"
import SubscribeBlog from "./blogSection/subscribeBlog"

const PostSection = ({ tags }) => {
  return (
    <div className="mt-12 lg:mt-0 w-full lg:w-80 flex flex-col flex-shrink-0 space-y-6 sm:space-y-12" >
      <SubscribeBlog />
      <SocialBlog />
      <AllMustRead />
      <SearchBlog tags={tags} />
    </div>
  )
}

export default PostSection