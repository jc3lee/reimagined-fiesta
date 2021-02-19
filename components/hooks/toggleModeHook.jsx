import { useEffect, useState } from "react"

export default function useToggleMode() {
  const [currentMode, setCurrentMode] = useState(null)

  function switchToDarkMode() {
    document.documentElement.classList.add('dark')
    localStorage.theme = "dark"
    setCurrentMode("dark")
  }

  function switchToLightMode() {
    document.documentElement.classList.remove('dark')
    localStorage.theme = "light"
    setCurrentMode("light")
  }

  function handleToggleMode() {
    if (localStorage.theme === 'light') {
      switchToDarkMode()
    } else {
      switchToLightMode()
    }
  }

  useEffect(() => {
    if (!localStorage || !window) return
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      switchToDarkMode()
    } else {
      switchToLightMode()
    }
  }, [])
  return { handleToggleMode, currentMode, }
}
