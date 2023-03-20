import { Router } from "next/router";
import React, { useEffect, useState } from "react";
import { LoadingContextProvider } from "../../context/loading-context";
import Header from "../Header/header";
import { Container } from "./styles";
// import Footer from "./footer";

// If I call 3D component here, this will render in every page.
// const Three_D_Component = dynamic(() => import("../Three-d-Image/three-d"), {
//   ssr: false,
//   loading: () => <LightSaberLoader />,
// });

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
  if (!mounted) return null;
  return (
    <>
      {/* asPath: String - The path as shown in the browser including the search params and respecting the trailingSlash configuration. basePath and locale are not included. */}
      <LoadingContextProvider>
        <Header path={router.asPath} />
        <Container>
          {/* <Three_D_Component /> */}
          {children}
        </Container>
        {/* <Footer /> */}
      </LoadingContextProvider>
    </>
  );
}
