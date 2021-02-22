import ToggleModeBtn from "../lib/ToggleModeBtn"
import Link from "next/link"
import SearchIco from "../../icons/SearchIco"
import { useRouter } from "next/router"
import { useRef } from "react"

const navItems = [
  { path: "/projects", title: "Projects", },
  { path: "/about", title: "About", },
  { path: "/blog", title: "Blog", },
  { path: "/contact", title: "Contact", },
]

function getNavItem(path, route, title) {
  return (
    <Link href={path}>
      <a className={`p-1 block hover:text-red-500 focus:text-red-500 ${route.startsWith(path) ? "text-red-500" : ""}`}>
        {title}
      </a>
    </Link>
  )
}

const TopNav = () => {
  const { route } = useRouter()
  const menuRef = useRef(null)
  const menuOverlayRef = useRef(null)

  function handleMenuClick() {
    menuRef.current.classList.toggle("-translate-x-full")
    menuOverlayRef.current.classList.toggle("hidden")
    menuOverlayRef.current.classList.toggle("fixed")
  }

  return (
    <div className="">
      <div className="fixed z-50 inset-x-0 top-0 w-full h-12 dark:bg-primary-dark-acc bg-primary-acc transition-colors duration-150 border-primary-bd border-b flex items-center">
        <div className="w-full flex max-w-screen-lg mx-auto px-6 justify-between">
          <div className="flex items-center transition-colors duration-150 text-black dark:text-white">
            <button className="md:hidden ml-4 mr-8 focus:outline-none" onClick={handleMenuClick}>MENU</button>
            <Link href="/">
              <a className="p-1 text-2xl font-bold">JC LEE</a>
            </Link>
            <ul className="hidden md:flex text-lg  md:mx-8 md:mr-16 space-x-6">
              {navItems.map(item => <li key={item.title}>{getNavItem(item.path, route, item.title)}</li>)}
            </ul>
          </div>
          <div className="flex">
            {/* <button className="mr-8 items-center flex h-10 w-10 justify-center transition-colors duration-150 text-black dark:text-white">
              <SearchIco icoClasses={"h-8 w-8"} />
            </button> */}
            <ToggleModeBtn />
          </div>
        </div>
      </div>
      <div onClick={handleMenuClick} ref={menuOverlayRef} className="hidden inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}></div>
      <div ref={menuRef} className="fixed top-12 bottom-0 h-full left-0 z-40 w-64 transform -translate-x-full transition-transform duration-150">
        <div className="w-full h-full flex items-center bg-primary-acc dark:bg-primary-dark-acc">
          <ul className="w-full h-full text-black dark:text-white flex flex-col text-lg  pt-4 pl-8 space-y-2 items-start border-r border-primary-bd">
            {navItems.map(item => <li onClick={handleMenuClick} key={item.title}>{getNavItem(item.path, route, item.title)}</li>)}
          </ul>
        </div>
      </div>
    </div >
  )
}

export default TopNav