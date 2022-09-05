import type { NextPage } from "next";
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

const Home: NextPage = () => {
  // const [mounted, setMounted] = useState(false);
  // const { theme, setTheme } = useTheme();
  // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }
  const Three_D_Component = dynamic(
    () => import("../components/Three-d-Image/three-d"),
    {
      ssr: false,
      loading: () => <LightSaberLoader />,
    }
  );
  return (
    <>
      <Head>
        <title>Tomo Takebuchi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Three_D_Component />
        <Intro />
        <Credentials />
        <Work />
        <Stack />
      </main>
      <Footer />
      {/* <footer className={styles.footer}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer> */}
    </>
  );
};

Home.getLayout = function getLayout(page: typeof Home, router: Router) {
  return <Layout router={router}>{page}</Layout>;
};

export default Home;
