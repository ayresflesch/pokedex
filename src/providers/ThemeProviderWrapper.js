import React from 'react'
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components'
import useDarkMode from '../hooks/useDarkMode'

export const ThemeContextWrapper = React.createContext()

const ThemeProviderWrapper = ({ children }) => {

  const { theme, toggleTheme } = useDarkMode()

  return (
    <ThemeContextWrapper.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContextWrapper.Provider>
  )
}

ThemeProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default ThemeProviderWrapper
