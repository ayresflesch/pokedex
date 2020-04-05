import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import colors from "./colors";

export const Global = createGlobalStyle`
  ${reset}
  ${colors}
  
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  body {
    font: 400 14px Roboto, sans-serif;
    background: var(--grey-200); 
    -webkit-font-smoothing: antialiased;
  }

`;
