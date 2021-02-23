import { useRouter } from "next/router"
import BlogPagination from "../../components/blog/blogPagination"
import PostItem from "../../components/blog/postItem"
import PostSection from "../../components/blog/postSection"
import TopPost from "../../components/blog/topPost"
import Layout from "../../components/layout/layout"
import { getMetasSlice } from "../../utils/blogListFns"
import { allMetas } from "../allMetas.json"
const NUM_POSTS_PER_PAGE = 2

const Blog = ({ metas, page, pages, }) => {
  const router = useRouter()
  function updateCurrentPageNum(num) {
    if (num === 1) {
      router.push(`/blog`,)
    } else {
      router.push(`/blog/page/${num}`,)
    }
  }
  console.log(page);
  return (
    <Layout title="Blog">
      {page === 1 && <TopPost meta={metas[0]} />}
      <div className="px-6 py-12 flex flex-col lg:flex-row max-w-screen-lg w-full mx-auto">
        <div className="lg:pr-8">
          {
            metas.map(m => (<PostItem key={m.slug} meta={m} />))
          }
          <BlogPagination updateCurrentPageNum={updateCurrentPageNum} numOfPages={pages} currentPageNum={page} />
        </div>
        <PostSection />
      </div>
    </Layout>
  )
}

export default Blog

export async function getStaticProps({ params: { blog } }) {
  const page = blog ? blog[1] : 1
  const metas = allMetas
  const metasSlice = getMetasSlice(metas, page, NUM_POSTS_PER_PAGE)

  return {
    props: {
      metas: metasSlice,
      page,
      pages: Math.ceil(metas.length / NUM_POSTS_PER_PAGE),
    },
  }
}

export async function getStaticPaths() {
  const metas = allMetas
  // num of posts = num of metas
  const numOfPosts = metas.length
  // num of pages
  const pages = Math.ceil(numOfPosts / NUM_POSTS_PER_PAGE)
  const paths = []
  //don't show index for page 1
  paths.push({ params: { blog: [] } })

  //pages - 1 because not showing page 1 will be just blog
  for (let i = 0; i < pages - 1; i++) {
    //index start at 0 and removing page 1 thus +2 to start at page 2
    const path = { params: { blog: ["page", `${i + 2}`] } }
    paths.push(path)
  }

  return {
    paths: paths,
    fallback: false,
  }
}