import styled, { css } from "styled-components";
import { media } from "../../theme/breakpoints";

// interface WidthProps {
//   readonly widthValue: number | undefined;
// }

interface ArrowProps {
  readonly isLeft?: boolean;
  readonly isDisabled: boolean;
}

export const CarouselSection = styled.section`
  position: absolute;
  // inset: 0;
  // top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  top: 30%;
  margin: auto;
  ${media.md} {
    top: 50%;
    bottom: auto;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
  ${media.lg} {
    top: 55%;
    bottom: auto;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
  ${media.xl} {
    top: 50%;
    bottom: auto;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
`;

export const CarouselContainer = styled.div`
  width: 30%;
  margin: 0 auto;
  // position: absolute;
  // top: 45%;
  // left: 50%;
  // margin-right: -50%;
  // transform: translate(-50%, -50%);

  ${media.md} {
    // padding-top: 92px;
    // position: absolute;
    // top: 45%;
    // left: 50%;
    // margin-right: -50%;
    // transform: translate(-50%, -50%);
  }
  ${media.lg} {
    // position: absolute;
    // top: 55%;
    // left: 50%;
    // margin-right: -50%;
    // transform: translate(-50%, -50%);
  }
  ${media.xl} {
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   margin-right: -50%;
    //   transform: translate(-50%, -50%);
  }
`;

export const TextDesktopContainer = styled.div`
  display: none;
  ${media.lg} {
    display: block;
    // padding-top: 32px;
  }
`;

// export const TextTabletContainer = styled.div`
//   display: none;
//   ${media.sm} {
//     display: block;
//     padding: 0 16px;
//     text-align: center;
//   }
//   ${media.md} {
//     display: none;
//   }
// `;

export const TextMobileContainer = styled.div`
  display: block;
  padding: 0 24px;
  text-align: center;
  position: relative;
  bottom: -50px;
  ${media.sm} {
    padding: 0 32px;
    bottom: -30px;
  }
  ${media.lg} {
    display: none;
  }
`;

// width: ${(props) => props.widthValue}px;
export const Item = styled.div`
  min-height: 200px;
  position: relative;
  img {
    // width: 100% !important;
    // height: 100% !important;
    // width: 100%;
    // max-width: 600px;
    // height: auto;
    // position: relative !important;
    // object-fit: cover; // Optional
  }
  // > div {
  //   position: unset !important;
  // }
  // some laptops' screen height is 566px thus having height check prevents errors where back home button overlaps the cards
  ${media.sm} and (min-height: 567px) {
    min-height: 250px;
  }
  ${media.md} {
    img {
      object-fit: cover;
      transition: all 1s ease-in-out;
    }
    &:hover img {
      transform: scale(1.2);
    }
  }
  ${media.lg} and (min-height: 567px) {
    min-height: 400px;
  }
`;

// export const ImageContainer = styled.div`
//   width: 30%;
//   margin: 0 auto;
// `;

export const ItemLinkContainer = styled.div`
  ${media.md} {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

// export const InnerContainer = styled.div`
//   display: none;
//   ${media.md} {
//     display: flex;
//     justify-content: center;
//     height: min-content;
//     opacity: 0;
//     transition: all 0.5s ease-in-out;
//     transform: translateY(-20px);
//     cursor: pointer;
//     width: max-content;
//     &:hover {
//       opacity: 1;
//       transform: translate(0);
//     }
//   }
// `;

export const ItemLinkMobile = styled.a`
  color: #f0ecdb;
  font-size: 16px;
  &:hover {
    border-bottom: 2px solid #fff;
    padding-bottom: 4px;
  }
  ${media.md} {
    display: none;
  }
`;

export const ItemLink = styled.a`
  color: #f0ecdb;
  font-size: 16px;
  padding: 14px;
  border-radius: 100px;
  background-color: #000;
  height: max-content;
`;

export const TitleMobile = styled.h1`
  display: block;
  text-align: center;
  ${media.lg} {
    display: none;
  }
`;

export const ItemTitle = styled.h2`
  margin: 0;
  margin-bottom: 24px;
  font-size: 14px;
  overflow-wrap: break-word;
  // between 480 to 768
  display: none;
  // between 768 to 1280
  // ${media.md} {
  //   font-size: 24px;
  // }
  // after 1280
  ${media.lg} {
    display: block;
    font-size: 32px;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100vw;
  position: absolute;
  left: calc(-50vw + 50%);
  bottom: 0;
`;

export const ItemDescription = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin-top: 24px;
  ${media.lg} {
    font-size: 18px;
  }
`;

export const ItemStack = styled.p`
  font-weight: 600;
  font-size: 14px;
  span {
    font-size: 20px;
  }
  ${media.lg} {
  }
`;

export const ArrowSVG = styled.svg<ArrowProps>`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;
  ${(props) =>
    props.isLeft
      ? css`
          left: -50px;
        `
      : css`
          left: auto;
          right: -50px;
        `}
  ${(props) =>
    props.isDisabled &&
    css`
      fill: rgba(255, 255, 255, 0.5);
    `}
    @media screen and (max-width: 487px) {
    top: 45%;
  }
  @media screen and (min-width: 1440px) {
    top: 45%;
  }
`;

export const NavigationWrapper = styled.div`
  position: relative;
  text-align: center;
`;

// export const InnerContainer = styled.div`
//   display: none;
//   ${media.md} {
//     display: flex;
//     justify-content: center;
//     height: min-content;
//     opacity: 0;
//     transition: all 0.5s ease-in-out;
//     transform: translateY(20px);
//     cursor: pointer;
//     width: max-content;
//     &:hover {
//       opacity: 1;
//       transform: translate(0);
//     }
//   }
// `;
