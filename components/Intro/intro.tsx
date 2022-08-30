import Link from "next/link";
import { useTheme } from "next-themes";
import { Grid } from "../Foundations/foundations";
import { IntroContainer, ResumeLink, Title } from "./styles";

export default function Intro() {
  const { theme } = useTheme();
  console.log("🚀 ~ file: intro.tsx ~ line 8 ~ Intro ~ theme", theme);

  return (
    <IntroContainer color={theme}>
      <Title>
        Hi, I am a frontend developer working at a web design agency 👋
      </Title>
      <h2>Building Web applications with latest technologies</h2>
      <Link href="/resume" passHref>
        <ResumeLink color={theme}>
          <span>Learn more about my background</span>
        </ResumeLink>
      </Link>
    </IntroContainer>
  );
}
