import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
  &:root {
     /* COLORS */
    --white: rgb(255,255,255);
    --dark-grey: rgb(36,36,36);
    --grey: rgb(49,49,49);
    --yellow: rgb(253,248,55);
    --green: rgb(41,249,46);
    --red: rgb(252,9,27);
    --orange: rgb(253,143,39);
    --blue: rgb(40,229,253);
    --pink: rgb(252,26,159);
    /* FONT SIZE */
    --font-xl: 2.2rem;
    --font-large: 1.6rem;
    --font-regular: 1.4rem;
    --font-small: 1.2rem;
  }
  * {
    box-sizing: border-box;
    padding:0;
    margin:0;
    font-family: 'Roboto Mono', monospace;
    color:var(--white);
  }
  html {
    font-size: 62.5%;
  }
  h1, h2, h3, p {
    margin: 0;
    letter-spacing: 1px;
    font-weight: normal;
  }
  h1 {
    font-weight: 700;
    font-size: var(--font-xl);
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
    font-weight: 400;
    font-size: var(--font-regular);
  }
  span {
    font-weight: 400;
    text-transform:uppercase;
    font-size: var(--font-small);
  }
`;

export default GlobalStyle;
