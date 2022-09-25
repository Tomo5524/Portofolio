// import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/layout";
import { GlobalStyle } from "../theme/GlobalStyle";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "../styles/loader.css";
import "../styles/carousel.css";
import { NextPage } from "next";
import { ReactElement, ReactNode, useEffect } from "react";
import { Router } from "next/router";
import * as gtag from "../lib/gtag";
import Script from "next/script";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, router: Router) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// pass in router to pass router down to child component
function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  // useEffect(() => {
  //   const handleRouteChange = (url: URL) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   router.events.on("hashChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //     router.events.off("hashChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);
  // some pages don't have layout (container and header)
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      /> */}
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
