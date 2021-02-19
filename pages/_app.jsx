import { MDXProvider } from '@mdx-js/react'
import { useEffect } from "react"
import smoothscroll from 'smoothscroll-polyfill'
import "../styles/globals.css"
import "../styles/prism/prism.css"
import MyBlockquote from "../components/blog/components/MyBlockquote"
import { MyH1, MyH2, MyH3 } from "../components/blog/components/MyHeading"
import MyHr from "../components/blog/components/MyHr"
import MyImg from "../components/blog/components/MyImg"
import MyInlineCode from "../components/blog/components/MyInlineCode"
import MyLi from "../components/blog/components/MyLi"
import MyLink from "../components/blog/components/MyLink"
import { MyOl, MyUl } from "../components/blog/components/MyList"
import MyP from "../components/blog/components/MyP"
import TopNav from '../components/layout/topNav'
import Wrapper from '../components/blog/components/wrapper'

const components = {
  p: MyP,
  a: MyLink,
  h1: MyH1,
  h2: MyH2,
  h3: MyH3,
  li: MyLi,
  ol: MyOl,
  ul: MyUl,
  inlineCode: MyInlineCode,
  blockquote: MyBlockquote,
  hr: MyHr,
  img: MyImg,
  wrapper: Wrapper,
}

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    //make smooth scroll work on all browsers
    smoothscroll.polyfill()
  }, [])

  return (
    <MDXProvider components={components}>
      <TopNav />
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp