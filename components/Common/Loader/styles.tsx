import styled from "styled-components";
import { media } from "../../../theme/breakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
`;

export const LoadingText = styled.h2`
  font-size: 16px;
  padding-top: 24px;
  ${media.lg} {
    font-size: 24px;
    padding-top: 48px;
  }
`;
