import { FiMoon } from "react-icons/fi"
import { IconContext } from "react-icons/lib"

const MoonIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={{ className: icoClasses, }}>
      <FiMoon aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default MoonIco