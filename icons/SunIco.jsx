import { FiSun } from "react-icons/fi"
import { IconContext } from "react-icons/lib"

const SunIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={{ className: icoClasses, }}>
      <FiSun aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default SunIco