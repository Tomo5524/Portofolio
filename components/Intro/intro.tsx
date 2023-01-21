import Link from "next/link";
import { useTheme } from "next-themes";
import { IntroContainer, ProjectLink, Title } from "./styles";

export default function Intro() {
  const { theme } = useTheme();
  return (
    <IntroContainer systemTheme={theme!}>
      <h2>Building Web applications with latest technologies</h2>
      <Link href="/projects" passHref>
        <ProjectLink systemTheme={theme!}>
          <span>View projects</span>
        </ProjectLink>
      </Link>
    </IntroContainer>
  );
}
