import { useTheme } from "next-themes";
import { useMemo } from "react";
import {
  Container,
  InnerContainer,
  Lightsaber,
  LoadingText,
  LsParticles,
} from "./styles";

const numOfParticles = 5;

export default function Loading() {
  const { theme } = useTheme();
  const displayParticles = () => {
    let particles = [];
    for (let i = 0; i < numOfParticles; i++) {
      particles.push(<LsParticles systemTheme={theme!} />);
    }
    return particles;
  };

  return (
    <Container>
      <InnerContainer>
        {displayParticles()}
        <Lightsaber lisghtSaberColor="green" lisghtSaberPosition="left" />
        <Lightsaber lisghtSaberColor="red" lisghtSaberPosition="right" />
      </InnerContainer>
      <LoadingText>Loading...</LoadingText>
    </Container>
  );
}
