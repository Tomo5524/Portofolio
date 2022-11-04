import styled from "styled-components";
import { media } from "../../../theme/breakpoints";

export const Container = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  margin: 0 auto;
`;

export const LoadingText = styled.h2`
  font-size: 16px;
  padding-top: 24px;
  ${media.lg} {
    font-size: 24px;
    padding-top: 48px;
  }
`;
