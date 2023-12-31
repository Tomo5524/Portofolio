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
      {/* <Head>
        <meta name="description" content="Tomo Takebuchi Portfolio" />
        <link rel="icon" href="/kitty.ico" />
        preload background image in project page to avoid flickering issue
        <link
          rel="preload"
          href="/images/modern-futuristic-sci-fi-background.webp"
          as="image"
        ></link>
      </Head> */}
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
