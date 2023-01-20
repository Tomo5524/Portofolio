import styled, { css } from "styled-components";
import { media } from "../../theme/breakpoints";

interface colorProps {
  readonly colorVariant: string;
}

export const StackContainer = styled.section``;

const carouselCss = css`
  width: 100%;
  height: 100%;
  overflow-x: visible;
  position: absolute;
  transform: translateZ(-288px);
  transform-style: preserve-3d;
`;

export const Title = styled.div`
  margin: 10px 0 64px 0;
  width: -moz-fit-content;
  width: fit-content;
`;

export const StackWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Scene = styled.div`
  width: 200px;
  height: 250px;
  perspective: 1000px;
  position: relative;
  // ${media.md} {
  //   width: 200px;
  // }
`;

export const KeenSlider = styled.div`
  ${carouselCss}
`;

export const TechCard = styled.div<colorProps>`
  height: 100%;
  text-align: center;
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
