import Link from "next/link";
import { CredentialsContainer, SNSButton, SNSInfo } from "./styles";
import { SNSLinks } from "./data";
import { useTheme } from "next-themes";

export default function Credentials() {
  const { theme } = useTheme();
  return (
    <CredentialsContainer>
      <h1>Tomo Takebuchi</h1>
      <p>( Frontend Engineer )</p>
      {/* Credentials */}
      <SNSInfo>
        {/* <Link href="/resume" passHref>
          <ResumeLink color={theme}>
            <ResumeLinkText color={theme}></ResumeLinkText>Resume
          </ResumeLink>
        </Link> */}
        {SNSLinks.map((item, index) => {
          return (
            <Link href={item.url} passHref key={index}>
              <SNSButton systemTheme={theme!}>{item.svg()}</SNSButton>
            </Link>
          );
        })}
      </SNSInfo>
    </CredentialsContainer>
  );
}
