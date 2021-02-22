import { FiShare2 } from "react-icons/fi"
import { IconContext } from "react-icons/lib"

const ShareIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={{ className: icoClasses, }}>
      <FiShare2 aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default ShareIco