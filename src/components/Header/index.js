import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMoon, FiSun, FiArrowLeft } from "react-icons/fi"

import { ThemeContextWrapper } from '../../providers/ThemeProviderWrapper'
import themes from '../../styles/themes'

import Toggle from 'react-toggle'
import "react-toggle/style.css"

import {
  HeaderContainer,
  ArrowContainer,
  IconContainer,
  ToggleCustomStyle,
  HeaderWrapper,
  ToggleContainer
} from './styles'

const Header = () => {

  const { theme, toggleTheme } = useContext(ThemeContextWrapper)
  const location = useLocation()

  const isNotIndex = () => {
    return location.pathname !== "/"
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <ArrowContainer>
          {
            isNotIndex() &&
            <Link to={"/"}>
              <FiArrowLeft />
            </Link>
          }
        </ArrowContainer>

        <ToggleContainer>
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
        </ToggleContainer>
      </HeaderWrapper>
    </HeaderContainer >
  )
}

export default Header
