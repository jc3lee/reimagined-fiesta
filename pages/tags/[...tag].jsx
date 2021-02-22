import { useRouter } from "next/router"
import BlogPagination from "../../components/blog/blogPagination"
import PostItem from "../../components/blog/postItem"
import PostSection from "../../components/blog/postSection"
import SearchTop from "../../components/blog/searchTop"
import Layout from "../../components/layout/layout"
import { getMetasFromTag, getMetasSlice } from "../../utils/blogListFns"
import { allMetas } from "../allMetas.json"
import { allTags } from "./allTags.json"
const NUM_POSTS_PER_PAGE = 4

const Tag = ({ metas, tag, page, pages, }) => {
  const tagTitle = tag.slice(0, 1).toUpperCase() + tag.slice(1)
  const router = useRouter()
  function updateCurrentPageNum(num) {
    if (num === 1) {
      router.push(`/tags/${tag}`,)
    } else {
      router.push(`/tags/${tag}/page/${num}`,)
    }
  }

  return (
    <Layout title={tagTitle}>
      <div className="px-6 py-12 max-w-screen-lg w-full mx-auto">
        <SearchTop text={tag} />
        <div className="mt-12 flex flex-col lg:flex-row w-full">
          <div className="lg:pr-8">
            {
              metas.map(m => (<PostItem key={m.slug} meta={m} />))
            }
            <BlogPagination updateCurrentPageNum={updateCurrentPageNum} numOfPages={pages} currentPageNum={page} />
          </div>
          <PostSection />
        </div>
      </div>
    </Layout>
  )
}

export default Tag

export async function getStaticProps({ params: { tag } }) {
  console.log("tag", tag)
  const tagName = tag[0]
  const tagPage = tag[2] || 1
  const metas = allMetas
  const metasTag = getMetasFromTag(metas, tagName)
  const metasSlice = getMetasSlice(metasTag, tagPage, NUM_POSTS_PER_PAGE)
  return {
    props: {
      metas: metasSlice,
      tag: tagName,
      page: tagPage,
      pages: Math.ceil(metasTag.length / NUM_POSTS_PER_PAGE)
    },
  }
}

export async function getStaticPaths() {
  // using pre-saved tags and metas
  const tags = allTags
  const metas = allMetas
  const paths = tags.reduce((tmpPaths, t) => {
    //don't show index for page 1 
    tmpPaths.push({ params: { tag: [t] } })
    //num of posts with this tag
    const metasTag = getMetasFromTag(metas, t)
    const numOfPosts = metasTag.length
    // num of pages
    const pages = Math.ceil(numOfPosts / NUM_POSTS_PER_PAGE)
    //pages - 1 because not showing page 1 will be just post/tag
    for (let i = 0; i < pages - 1; i++) {
      //index start at 0 and removing page 1 thus +2 to start at page 2
      const path = { params: { tag: [t, "page", `${i + 2}`] } }
      tmpPaths.push(path)
    }
    return tmpPaths
  }, [])

  return {
    paths: paths,
    fallback: false,
  }
}