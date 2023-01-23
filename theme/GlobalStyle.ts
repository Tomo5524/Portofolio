import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  transition: background 0.5s linear, color 0.5s linear;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  text-decoration: none;
  cursor: pointer;
}

`;

// :root {
//   /* Your default theme */
//   --background: #f0ecdb;
//   --foreground: #363537;
// }

// [data-theme="dark"] {
//   --background: #2c302c;
//   --foreground: #fffffb;
// }
