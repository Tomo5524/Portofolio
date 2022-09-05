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
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const TechStackTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  padding-right: 16px;
`;
