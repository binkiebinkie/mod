import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  &:root {
     /* COLORS */
    --dark-grey: rgb(36,36,36);
    --grey: rgb(49,49,49);
    --yellow: rgb(253,248,55);
    --green: rgb(41,249,46);
    --red: rgb(252,9,27);
    --orange: rgb(253,143,39);
    --blue: rgb(40,229,253);
    --pink: rgb(252,26,159);
  }
  * {
    box-sizing: border-box;
    padding:0;
    margin:0;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: Inter, Arial, Helvetica, sans-serif;
  }
  h1, h2, h3, p {
    margin: 0;
    letter-spacing: 1px;
    font-weight: normal;
  }
  h1, h2, h3 {
    font-family: Inter, Arial, Helvetica, sans-serif;
  }
  h1 {
    font-weight: 700;
    font-size: var(--extra-large);
    letter-spacing: 2px;
  }
  h2 {
    font-weight: 700;
    font-size: var(--large);
  }
  h3 {
    font-weight: 600;
    font-size: var(--large);
  }
  p {
    font-weight: 500;
    font-size: var(--regular);
  }
`;

export default GlobalStyle;
