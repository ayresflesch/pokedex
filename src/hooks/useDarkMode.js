import { useState, useEffect } from "react"
import themes from "../styles/themes"

const useDarkMode = () => {
  const { light } = themes
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    const newTheme = theme === light ? 'dark' : 'light'

    window.localStorage.setItem('theme', newTheme)
    setTheme(themes[newTheme])
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')

    if (localTheme) {
      setTheme(themes[localTheme])
    }
  }, [])

  return { theme, toggleTheme }
}

export default useDarkMode
