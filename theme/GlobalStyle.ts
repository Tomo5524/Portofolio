import { createGlobalStyle } from "styled-components";

/* -webkit-font-smoothing: auto;
  -webkit-transition: background-color 1000ms linear;
  -ms-transition: background-color 1000ms linear;
  transition: background-color 1000ms linear; */
export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
   transition: background 0.2s ease-in, color 0.2s ease-in;
}

a {
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
:root {
  /* Your default theme */
  --background: rgb(174, 0, 0);
  --foreground: black;
}

[data-theme="dark"] {
  --background: #d48686;
  --foreground: white;
}
`;
