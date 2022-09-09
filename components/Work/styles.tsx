import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const WorkContainer = styled.section`
  // background: ${(props) =>
    props.color === "light"
      ? "rgba(255, 255, 255, 0.25)"
      : "rgba(255, 255, 255, 0.1)"};

  // ${media.lg} {
  //   margin-top: 24px;
  //   padding: 16px;
  // }
`;

export const Title = styled.div`
  margin: 10px 0;
  width: -moz-fit-content;
  width: fit-content;
`;

export const TitleText = styled.h3`
  border-bottom: 4px solid #525252;
  padding-bottom: 4px;
`;

export const Description = styled.p`
  text-indent: 1em;
  line-height: 2;
`;
