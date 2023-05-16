import Head from "next/head";
import Intro from "../components/Intro/intro";
import Credentials from "../components/Credentials/credentials";
import Work from "../components/Work/work";
import Stack from "../components/Stack/stack";
import LightSaberLoader from "../components/Three-d-Image/three-d-loader";
import dynamic from "next/dynamic";
import Layout from "../components/Layout/layout";
import { Router } from "next/router";
import Footer from "../components/Footer/footer";
import { Container } from "../components/Foundations/foundations";
import { ReactElement, Suspense } from "react";
import { NextPageWithLayout } from "./_app";

const Three_D_Component = dynamic(
  () => import("../components/Three-d-Image/three-d"),
  {
    ssr: false,
    suspense: true,
  }
);

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Tomo Takebuchi</title>
        <meta name="description" content="Tomo Takebuchi Portfolio" />
        {/* <link rel="icon" href="/kitty.ico" /> */}
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
        {/* preload background image in project page to avoid flickering issue */}
        <link
          rel="preload"
          href="/images/modern-futuristic-sci-fi-background.webp"
          as="image"
        ></link>
      </Head>
      <main>
        <Suspense fallback={<LightSaberLoader />}>
          <Three_D_Component />
        </Suspense>
        <Container>
          <Intro />
          <Credentials />
          <Work />
          <Stack />
        </Container>
      </main>
      <Footer />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement, router: Router) {
  return <Layout router={router}>{page}</Layout>;
};

export default Home;
