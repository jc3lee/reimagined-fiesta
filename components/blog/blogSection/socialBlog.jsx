import InstaIco from "../../../icons/InstaIco"
import LinkedInIco from "../../../icons/LinkedInIco"
import TwitterIco from "../../../icons/TwitterIco"
import Link from "next/link"

const SocialBlog = () => {
  return (
    <div className="flex justify-center py-6 lg:py-0 space-x-8">
      <Link href="twitter.com/ljc_dev">
        <a className="hover:text-blue-400">
          <span className="sr-only">Twitter</span>
          <TwitterIco icoClasses={"w-10 h-10"} />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/jc-lee-a939831b5/">
        <a className="hover:text-blue-700">
          <span className="sr-only">LinkedIn</span>
          <LinkedInIco icoClasses={"w-10 h-10"} />
        </a>
      </Link>
      <Link href="instagram.com/ljc_dev">
        <a className="hover:text-red-500">
          <span className="sr-only">Instagram</span>
          <InstaIco icoClasses={"w-10 h-10"} />
        </a>
      </Link>
    </div>
  )
}

export default SocialBlog