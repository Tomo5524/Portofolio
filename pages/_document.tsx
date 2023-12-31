import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const description =
    "Hi, I am a full-stack developer, currently based in Japan, working at a web design agency 👋 I mostly build web applications with React and Typescript at work but also really like Vue as well. My passion lies in web development, animation, code optimization, data structure and algorithm.";
  const ogimage =
    "https://www.tomotakebuchi.dev/images/favicon/mstile-150x150.png";
  const sitename = "tomotakebuchi.dev";
  const title = "3D Portfolio";

  return (
    <Html lang="en">
      <Head />
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
