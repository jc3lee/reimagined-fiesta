import fs from "fs"
import Layout from "../components/layout/layout"
import PostItem from "../components/blog/postItem"
import { useRouter, } from "next/router"
import { getAllPostsTags, } from "../utils/tagsFns"

const Tags = ({ postsData = [], allTags, }) => {
  const router = useRouter()

  const { tag } = router.query
  if (!tag) return <p className="h-screen w-full flex justify-center items-center text-xl">Search for a tag</p>

  const postsResult = postsData.filter(p => p.meta.tags.includes(tag))
  if (postsResult.length === 0) return <p className="h-screen w-full flex justify-center items-center text-xl">No posts with the tag #{tag}</p>

  console.log("postsResult", postsResult)

  function queryThisTag(tag) {
    router.push(`/tags/?tag=${tag}`, `/tags/?tag=${tag}`, { shallow: true })
  }

  return (
    <Layout>
      <div className="pt-5 h-screen">
        {postsResult.map(p => (<PostItem key={p.slug} meta={p.meta} slug={p.slug} />))}
      </div>
    </Layout>
  )
}

export default Tags

export async function getStaticProps() {
  const filenames = fs.readdirSync("pages/posts")

  const postsData = filenames.map(f => ({
    slug: f.replace(".mdx", ""),
    meta: require(`./posts/${f}`).meta
  }))
  const postsTags = postsData.map(p => p.meta.tags)
  const allTags = getAllPostsTags(postsTags)
  return {
    props: {
      postsData,
      allTags,
    },
  }
}