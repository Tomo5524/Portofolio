import { Router } from "next/router";
import React, { useEffect, useState } from "react";
import { LoadingContextProvider } from "../../context/loading-context";
import Header from "../Header/header";
import { Container } from "./styles";
import Head from "next/head";
// import Footer from "./footer";

// If I call 3D component here, this will render in every page.
// const Three_D_Component = dynamic(() => import("../Three-d-Image/three-d"), {
//   ssr: false,
//   loading: () => <LightSaberLoader />,
// });

const description =
  "Hi, I am a full-stack developer, currently based in Japan, working at a web design agency 👋 I mostly build web applications with React and Typescript at work but also really like Vue as well. My passion lies in web development, animation, code optimization, data structure and algorithm.";
const ogimage =
  "https://www.tomotakebuchi.dev/images/favicon/mstile-150x150.png";
const sitename = "tomotakebuchi.dev";
const title = "3D Portfolio";

export default function Layout({
  children,
  router,
}: {
  children: React.ReactNode;
  router: Router;
}) {
  const [mounted, setMounted] = useState(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // Because we cannot know the theme on the server, many of the values returned from useTheme will be undefined until mounted on the client.so first render should be null
  // if (!mounted) return null;
  return (
    <>
      <Head>
        <title>Tomo&apos;s Portfolio</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={sitename} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:image" content={ogimage} />
        <meta name="twitter:image" content={ogimage} />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {/* asPath: String - The path as shown in the browser including the search params and respecting the trailingSlash configuration. basePath and locale are not included. */}
      {mounted && (
        <LoadingContextProvider>
          <Header path={router.asPath} />
          <Container>{children}</Container>
          {/* <Footer /> */}
        </LoadingContextProvider>
      )}
    </>
  );
}
