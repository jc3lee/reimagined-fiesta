import ToggleModeBtn from "../lib/ToggleModeBtn"
import Link from "next/link"
import SearchIco from "../../icons/SearchIco"
import { useRouter } from "next/router"

const TopNav = () => {
  const { route } = useRouter()
  return (
    <div className="fixed z-50 inset-x-0 top-0 w-full h-12 dark:bg-primary-dark-acc bg-primary-acc  transition-colors duration-150 border-primary-bd dark:border-primary-bd-dark border-b flex items-center">
      <div className="w-full flex max-w-screen-lg mx-auto px-6 justify-between">
        <div className="flex items-center transition-colors duration-150 text-black dark:text-white">
          <Link href="/">
            <a className="p-1 text-2xl font-bold">JC LEE</a>
          </Link>
          <ul className="flex text-lg font-bold mx-8 sm:mr-8 md:mr-16 space-x-6">
            <li>
              <Link href="/projects">
                <a className={`p-1 block hover:text-red-500 focus:text-red-500 ${route === "/projects" ? "text-red-500" : ""}`}>
                  Projects
            </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={`p-1 block hover:text-red-500 focus:text-red-500 ${route === "/about" ? "text-red-500" : ""}`}>
                  About
            </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className={`p-1 block hover:text-red-500 focus:text-red-500 ${route === "/blog" ? "text-red-500" : ""}`}>
                  <li>Blog</li>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={`p-1 block hover:text-red-500 focus:text-red-500 ${route === "/contact" ? "text-red-500" : ""}`}>
                  Contact
            </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <button className="mr-8 items-center flex h-10 w-10 justify-center transition-colors duration-150 text-black dark:text-white">
            <SearchIco icoClasses={"h-8 w-8"} />
          </button>
          <ToggleModeBtn />
        </div>
      </div>
    </div >
  )
}

export default TopNav