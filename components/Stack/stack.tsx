import Link from "next/link";
import { useTheme } from "next-themes";
import { StackContainer, TechStack, TechStackTitle } from "./styles";
import { Title, TitleText } from "../Work/styles";

export default function Stack() {
  const { theme } = useTheme();
  return (
    <StackContainer color={theme}>
      <Title>
        <TitleText>Tech Stack</TitleText>
      </Title>
      <TechStack>
        <TechStackTitle>Languages:</TechStackTitle>
        <span>Javascript, Typescript, Python.</span>
      </TechStack>
      <TechStack>
        <TechStackTitle>FrameWork:</TechStackTitle> React, Nextjs, Vue, Nuxt3.
      </TechStack>
      <TechStack>
        <TechStackTitle>CSS Framework:</TechStackTitle>Tailwind, Bootstrap.
      </TechStack>
      <TechStack>
        <TechStackTitle>CSS in JS:</TechStackTitle>Styled Component.
      </TechStack>
      <TechStack>
        <TechStackTitle>Tools/Methods:</TechStackTitle>
        Redux, Vuex, Webpack, GraphQL, Contentful.
      </TechStack>
      <TechStack>
        <TechStackTitle>Backend:</TechStackTitle> Nodejs, Express.
      </TechStack>
      <TechStack>
        <TechStackTitle>Database:</TechStackTitle> MongoDB, PostgreSQL.
      </TechStack>
      <TechStack>
        <TechStackTitle>OS:</TechStackTitle>MacOS, Linux, Windows
      </TechStack>
    </StackContainer>
  );
}
