// import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/layout";
import { GlobalStyle } from "../theme/GlobalStyle";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "../styles/loader.css";
import "../styles/carousel.css";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { Router } from "next/router";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, router: Router) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// pass in router to pass router down to child component
function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  // some pages don't have layout (container and header)
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        {/* <Layout router={router}>
          <Component {...pageProps} />
        </Layout> */}
        {getLayout(<Component {...pageProps} />, router)}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
