import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const LoadingBox = styled.div`
  margin: 0 auto;
  position: relative
  width: 280px;
  height: 280px;
  margin-top: -20px;
  margin-bottom: -40px;
  ${media.lg} {
    width: 640px;
    height: 640px;
    margin-top: -120px;
    margin-bottom: -200px;
  }
  // ${media.sm} {
  //   width: 480px;
  //   height: 480px;
  //   margin-top: -60px;
  //   margin-bottom: -140px;
  // }
`;
