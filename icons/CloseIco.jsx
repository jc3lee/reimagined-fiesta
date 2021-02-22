import { FiX } from "react-icons/fi"
import { IconContext } from "react-icons/lib"

const CloseIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={{ className: icoClasses, }}>
      <FiX aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default CloseIco