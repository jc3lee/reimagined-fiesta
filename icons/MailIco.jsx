import { AiOutlineMail } from "react-icons/ai"
import { IconContext } from "react-icons/lib"

const MailIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={{ className: icoClasses, }}>
      <AiOutlineMail aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default MailIco