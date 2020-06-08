import React, { useContext } from 'react'
import { ThemeContextWrapper } from '../../providers/ThemeProviderWrapper'
import themes from '../../styles/themes'

import { FiMoon, FiSun } from "react-icons/fi"
import Toggle from 'react-toggle'
import "react-toggle/style.css"

import { HeaderContainer, IconContainer, ToggleCustomStyle, HeaderWrapper } from './styles'

const Header = () => {

  const { theme, toggleTheme } = useContext(ThemeContextWrapper)

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <IconContainer>
          <FiSun />
        </IconContainer>

        <label>
          <ToggleCustomStyle />
          <Toggle
            checked={theme === themes.dark}
            icons={false}
            className="toggle"
            onChange={toggleTheme} />
        </label>

        <IconContainer>
          <FiMoon />
        </IconContainer>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header
