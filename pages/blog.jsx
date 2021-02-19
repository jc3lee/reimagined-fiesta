import fs from "fs"
import Layout from "../components/layout/layout"
import PostItem from "../components/blog/postItem"
import PostSection from "../components/blog/postSection"
import TopPost from "../components/blog/topPost"

const Blog = ({ metas = [] }) => {
  return (
    <Layout title="Blog">
      <TopPost meta={metas[0]} />
      <div className="px-6 py-12 flex flex-col lg:flex-row max-w-screen-lg w-full mx-auto">
        <div className="lg:pr-8">
          {
            metas.map(m => (<PostItem key={m.slug} meta={m} />))
          }
        </div>
        <PostSection />
      </div>
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const filenames = fs.readdirSync("pages/posts")
  const metas = filenames.map(
    f => require(`./posts/${f}`).meta
  )
  return {
    props: {
      metas,
    },
  }
}