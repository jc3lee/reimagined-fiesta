import Layout from "../../layout/layout"
import PostDetails from "../postDetails"
import { PostCover } from "../postMeta/postCover"
import PostTitle from "../postMeta/postTitle"
import PostSection from "../postSection"

export default function Wrapper({ children, meta }) {
  return (
    <Layout title={meta.title}>
      <PostCover alt={meta.title} src={meta.cover} />
      <div className="md:mx-4">
        <div className="md:-mt-20 relative max-w-screen-lg w-full mx-auto flex flex-col lg:flex-row px-4 sm:px-6 py-6 dark:bg-primary-dark-acc bg-primary-acc items-start">
          <div className="blogContentWidth lg:pr-8">
            <div className="w-full">
              <PostTitle title={meta.title} slug={meta.slug} />
              <hr className="w-full bg-black mt-4" style={{ height: "2px" }} />
              <PostDetails meta={meta} />
            </div>
            <div className="w-full">
              {children}
            </div>
          </div>
          <PostSection meta={meta} />
        </div>
      </div>
    </Layout>
  )
}
