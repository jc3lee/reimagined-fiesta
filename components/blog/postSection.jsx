import AllMustRead from "./blogSection/allMustRead"
import SearchBlog from "./blogSection/searchBlog"
import SocialBlog from "./blogSection/socialBlog"
import SubscribeBlog from "./blogSection/subscribeBlog"

const PostSection = ({ meta }) => {
  return (
    <div className="mt-6 sm:mt-12 lg:mt-0 w-full lg:w-80 flex flex-col flex-shrink-0 space-y-6 sm:space-y-12" >
      <SubscribeBlog />
      <SocialBlog />
      <AllMustRead />
      <SearchBlog meta={meta} />
    </div>
  )
}

export default PostSection