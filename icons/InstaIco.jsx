import { FiInstagram } from "react-icons/fi"
import { IconContext } from "react-icons/lib"

const InstaIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={{ className: icoClasses, }}>
      <FiInstagram aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default InstaIco