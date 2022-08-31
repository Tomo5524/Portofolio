import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const StackContainer = styled.section`
  // background: ${(props) =>
    props.color === "light"
      ? "rgba(255, 255, 255, 0.25)"
      : "rgba(255, 255, 255, 0.1)"};

  // ${media.lg} {
  //   margin-top: 24px;
  //   padding: 16px;
  // }
`;

export const TechStack = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const TechStackTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  padding-right: 16px;
`;
