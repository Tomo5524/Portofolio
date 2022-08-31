import Link from "next/link";
import { useTheme } from "next-themes";
import { Description, Title, TitleText, WorkContainer } from "./styles";

export default function Work() {
  const { theme } = useTheme();
  return (
    <WorkContainer color={theme}>
      <Title>
        <TitleText>Work</TitleText>
      </Title>
      <Description>
        Hi, I am a frontend developer, currently based in Japan, working at a
        web design agency 👋 I mostly build web applications with React and
        Typescript at work but also really like Vue as well. My passion lies in
        web development, animation, code optimization, data structure and
        algorithm. With cutting technology, I truly believe that one little
        groundbreaking product can make the world marginally a better place.
      </Description>
    </WorkContainer>
  );
}
