// import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/layout";
import { GlobalStyle } from "../theme/GlobalStyle";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "../styles/loader.css";

// pass in router to pass router down to child component
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
