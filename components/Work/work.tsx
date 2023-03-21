import { useTheme } from "next-themes";
import { Description, Title, TitleText, WorkContainer } from "./styles";

export default function Work() {
  const { theme } = useTheme();
  return (
    <WorkContainer color={theme}>
      <Title>
        <TitleText>Work 💻</TitleText>
      </Title>
      <Description>
        Hi, I am a full-stack developer, currently based in Japan, working at a
        web design agency 👋 I mostly build web applications with React and
        Typescript at work but also really like Vue as well. My passion lies in
        web development, animation, code optimization, data structure and
        algorithm.
      </Description>
    </WorkContainer>
  );
}
