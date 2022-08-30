import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  cursor: pointer;
}

* {
  box-sizing: border-box;
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

// body {
//   background-color: var(--background);
//   color: var(--foreground);
//   /* transition: background 0.2s ease-in, color 0.2s ease-in; */
//   transition: background 0.5s linear, color 0.5s linear;
// }
