import { Router } from "next/router";
import React from "react";
import Header from "../Header/header";
import { Container } from "./styles";
// import Footer from "./footer";

export default function Layout({
  children,
  router,
}: {
  children: React.ReactNode;
  router: Router;
}) {
  return (
    <>
      <Container>
        {/* asPath: String - The path as shown in the browser including the search params and respecting the trailingSlash configuration. basePath and locale are not included. */}
        <Header path={router.asPath} />
        <main>{children}</main>
      </Container>
      {/* <Footer /> */}
    </>
  );
}
