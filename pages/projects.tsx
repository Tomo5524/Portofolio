import type { NextPage } from "next";
import Head from "next/head";
import ProjectPage from "../components/Projects/projects";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

const Projects: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <Head>
        {/* <title>Projects - Tomo Takebuchi</title> */}
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* when user enters URL, avoid flickering */}
        <link
          rel="preload"
          href="/images/modern-futuristic-sci-fi-background.webp"
          as="image"
        />
      </Head>
      <main>
        <ProjectPage />
      </main>
    </>
  );
};

export default Projects;
