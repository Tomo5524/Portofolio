import styled, { css } from "styled-components";
import { media } from "../../theme/breakpoints";

export const StackContainer = styled.section`
  padding-bottom: 32px;
`;

const carouselCss = css`
  width: 100%;
  height: 100%;
  overflow-x: visible;
  position: absolute;
  transform: translateZ(-288px);
  transform-style: preserve-3d;
`;

export const Title = styled.div`
  margin: 10px 0 40px 0;
  width: -moz-fit-content;
  width: fit-content;
`;

export const StackWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const Scene = styled.div`
  width: 200px;
  height: 250px;
  // perspective: 1000px;
  perspective: 240px;
  position: relative;
  padding-top: 24px;
  ${media.md} {
    padding-top: 0;
    perspective: 1000px;
  }
`;

export const KeenSlider = styled.div`
  ${carouselCss}
`;

export const TechCard = styled.div`
  height: 100%;
  text-align: center;
`;

export const CarouselCell = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  cursor: pointer;
  &:nth-child(1) {
    background: #12c2e9; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #f64f59,
      #c471ed,
      #12c2e9
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #f64f59,
      #c471ed,
      #12c2e9
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  &:nth-child(2) {
    background: rgb(255, 75, 64);
    background: linear-gradient(
      128deg,
      rgba(255, 154, 63, 1) 0%,
      rgba(255, 75, 64, 1) 100%
    );
  }
  &:nth-child(3) {
    background: rgb(182, 255, 64);
    background: linear-gradient(
      128deg,
      rgba(182, 255, 64, 1) 0%,
      rgba(63, 255, 71, 1) 100%
    );
    background: linear-gradient(
      128deg,
      rgba(167, 226, 72) 0%,
      /* rgba(189, 255, 83, 1) 0%, */ rgba(43, 250, 82, 1) 100%
    );
  }
  &:nth-child(4) {
    background: rgb(64, 255, 242);
    background: linear-gradient(
      128deg,
      rgba(64, 255, 242, 1) 0%,
      rgba(63, 188, 255, 1) 100%
    );
  }
  &:nth-child(5) {
    background: rgb(255, 64, 156);
    background: linear-gradient(
      128deg,
      rgba(255, 64, 156, 1) 0%,
      rgba(255, 63, 63, 1) 100%
    );
  }
  &:nth-child(6) {
    background: rgb(64, 76, 255);
    background: linear-gradient(
      128deg,
      rgba(150, 155, 222, 1) 0%,
      rgba(174, 63, 255, 1) 100%
    );
  }
  &:nth-child(7) {
    background: rgb(230, 255, 64);
    background: linear-gradient(
      128deg,
      rgb(205, 252, 0) 0%,
      rgb(191, 190, 13) 100%
    );
  }
  &:nth-child(8) {
    background: rgb(64, 175, 255);
    background: linear-gradient(
      128deg,
      rgba(64, 175, 255, 1) 0%,
      rgba(63, 97, 255, 1) 100%
    );
  }
`;

// export const TechStack = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: left;
//   padding-left: 16px;
//   padding-top: 8px;
//   padding-bottom: 8px;
//   ${media.md} {
//     flex-direction: row;
//     align-items: center;
//   }
//   ${media.lg} {
//     padding: 16px;
//   }
// `;

export const TechStackTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-top: 24px;
`;

export const TechStackItemList = styled.ul`
  padding-top: 16px;
  margin: 0;
`;

export const TechStackItem = styled.li`
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 8px;
  text-align: left;
  padding-left: 8px;
`;
