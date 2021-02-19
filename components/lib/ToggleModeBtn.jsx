import MoonIco from "../../icons/MoonIco"
import SunIco from "../../icons/SunIco"
import useToggleMode from "../hooks/toggleModeHook"

const ToggleModeBtn = () => {
  const { handleToggleMode, currentMode, } = useToggleMode()
  return (
    <button onClick={handleToggleMode} className={`flex h-10 w-10 justify-center items-center rounded-full focus:outline-none transition-colors duration-150 ${currentMode === "light" ? "hover:bg-gray-100" : "hover:bg-yellow-200"}`}>
      {currentMode === "light" && <div className="">
        <span className="sr-only">switch to dark mode</span>
        <MoonIco icoClasses={"w-6 h-6 text-black"} />
      </div>}
      {currentMode === "dark" && <div className="">
        <span className="sr-only">switch to light mode</span>
        <SunIco icoClasses={"w-6 h-6 text-yellow-500"} />
      </div>}
    </button>
  )
}

export default ToggleModeBtn