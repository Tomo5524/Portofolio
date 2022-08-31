import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useTheme } from "next-themes";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Intro from "../components/Intro/intro";
import Credentials from "../components/Credentials/credentials";
import Work from "../components/Work/work";
import Stack from "../components/Stack/stack";

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }
  return (
    <div className={styles.container}>
      <Head>
        <title>Tomo Takebuchi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro />
        <Credentials />
        <Work />
        <Stack />
      </main>

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
    </div>
  );
};

export default Home;
