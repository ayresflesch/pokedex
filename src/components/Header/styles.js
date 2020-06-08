import styled, { createGlobalStyle } from "styled-components"

export const HeaderContainer = styled.header`
  height: 36px;
  background: var(--grey-600);
`

export const HeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 75vw;
  margin: 0 auto;
  color: ${({ theme }) => theme.primaryText};
  font-size: 18px;
`

export const IconContainer = styled.div`
  margin: 0 8px;
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