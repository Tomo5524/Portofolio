import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const description = "Tomo Takebuchi's Portfolio";
  const ogimage = "https://www.tomotakebuchi.dev/favicon/apple-touch-icon.png";
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
