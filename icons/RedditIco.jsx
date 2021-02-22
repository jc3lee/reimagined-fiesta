import { AiOutlineReddit } from "react-icons/ai"
import { IconContext } from "react-icons/lib"

const RedditIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={{ className: icoClasses, }}>
      <AiOutlineReddit aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default RedditIco