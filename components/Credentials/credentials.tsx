import Link from "next/link";
import { useTheme } from "next-themes";
import {
  CredentialsContainer,
  ResumeLink,
  ResumeLinkText,
  SNSInfo,
} from "./styles";

export default function Credentials() {
  const { theme } = useTheme();
  return (
    <CredentialsContainer>
      <h1>Tomo Takebuchi</h1>
      <p>( Frontend Engineer )</p>
      {/* Credentials */}
      <SNSInfo>
        <Link href="/resume" passHref>
          <ResumeLink color={theme}>
            <ResumeLinkText color={theme}></ResumeLinkText>Resume
          </ResumeLink>
        </Link>
      </SNSInfo>
    </CredentialsContainer>
  );
}
