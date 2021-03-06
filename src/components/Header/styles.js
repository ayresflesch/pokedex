import styled, { createGlobalStyle } from "styled-components"

export const HeaderContainer = styled.header`
  height: 36px;
  background: ${({ theme }) => theme.headerBg};
`

export const HeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75vw;
  margin: 0 auto;
  color: ${({ theme }) => theme.primaryText};
  font-size: 18px;

  a {
    color: ${({ theme }) => theme.primaryText};
  }
`

export const IconContainer = styled.div`
  margin: 0 8px;
`

export const ArrowContainer = styled.div`
  font-size: 26px;
  line-height: 1;
`

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ToggleCustomStyle = createGlobalStyle`
  .toggle.react-toggle--checked .react-toggle-track {
    background-color: var(--blue-400);
  }

  .toggle.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: var(--blue-600);
  }

  .toggle.react-toggle--checked .react-toggle-thumb {
    border-color: white;
  }

  .toggle.react-toggle--focus .react-toggle-thumb {
    box-shadow: none;
  }

  .toggle.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    box-shadow: none;
  }
`