import Link from "next/link";
import { useTheme } from "next-themes";
import { IntroContainer, ProjectLink } from "./styles";

export default function Intro() {
  const { theme } = useTheme();
  return (
    <IntroContainer color={theme}>
      <h2>Building Web applications with latest technologies</h2>
      <Link href="/projects" passHref>
        <ProjectLink color={theme}>
          <span>View projects</span>
        </ProjectLink>
      </Link>
    </IntroContainer>
  );
}
