import Image from "next/image";
import {
  BackToHome,
  ErrorPageContainer,
  ImageContainer,
  ImageInnerContainer,
  TextBox,
} from "./styles";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <ErrorPageContainer>
      <ImageContainer>
        <Link href="/" passHref>
          <a>
            <ImageInnerContainer itemProp="pointer">
              <Image
                src="/images/404Error/backToTheHomepage.webp"
                alt="Back to the Homepage"
                priority
                layout="fill"
                objectFit="contain"
              />
            </ImageInnerContainer>
          </a>
        </Link>

        <ImageInnerContainer>
          <Image
            src="/images/404Error/Delorean.webp"
            alt="El Delorean, El Doc y Marti McFly"
            priority
            layout="fill"
            objectFit="contain"
          />
        </ImageInnerContainer>
      </ImageContainer>

      <TextBox>
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <Link href="/" passHref>
          <BackToHome>BACK TO HOME?</BackToHome>
        </Link>
        {/* <Link href="/">NO</Link> */}
      </TextBox>
    </ErrorPageContainer>
  );
}
