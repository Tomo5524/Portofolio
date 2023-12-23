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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
