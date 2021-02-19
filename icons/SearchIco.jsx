import { AiOutlineSearch } from "react-icons/ai"
import { IconContext } from "react-icons/lib"

const SearchIco = ({ icoClasses = "" }) => {
  return (
    <IconContext.Provider value={{ className: icoClasses, }}>
      <AiOutlineSearch aria-hidden="true" />
    </IconContext.Provider>
  )
}

export default SearchIco