import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import colors from "./colors"

export const Global = createGlobalStyle`
  ${reset}
  ${colors}
  
  * { 
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box; 
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background: var(--grey-200); 
    -webkit-font-smoothing: antialiased;
  }
`
