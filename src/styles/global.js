import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import colors from "./colors"

export const Global = createGlobalStyle`
  ${reset}
  ${colors}
  
  body {
    font: 400 14px Roboto, sans-serif;
    background: var(--grey-200); 
    -webkit-font-smoothing: antialiased;
  }
`
