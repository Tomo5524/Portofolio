import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const CarouselSection = styled.section`
  width: 30%;
  margin: 0 auto;
  position: absolute;
  top: 55%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  ${media.xl} {
    top: 50%;
  }
`;

// export const CarouselContainer = styled.div`
//   width: 40%;
//   margin: 0 auto;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   margin-right: -50%;
//   transform: translate(-50%, -50%);
//   ${media.lg} {
//   }
// `;

export const Item = styled.div`
  width: ${(props) => props.results};
  min-height: 400px;
  // height: 100%;
  // width: 100%;
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
`;

export const ItemLinkContainer = styled.div`
  ${media.lg} {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const InnerContainer = styled.div`
  ${media.lg} {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    height: min-content;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    transform: translateY(-20px);
    cursor: pointer;
    &:hover {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

export const ItemLink = styled.a`
  color: #f0ecdb;
  font-size: 16px;
  padding: 20px;
  border-radius: 100px;
  background-color: #000;
  // ${media.lg} {
  //   opacity: 0;
  //   transition: all 0.5s ease-in-out;
  //   transform: translateY(20px);
  //   position: absolute;
  //   top: 50%;
  //   // display: flex;
  //   // justify-content: center;
  //   // text-align: center;
  //   padding: 10px;
  //   border-radius: 10px;
  //   background-color: #000;
  //   &:hover {
  //     opacity: 1;
  //     transform: translate(0);
  //   }
  // }
`;

export const ItemTitle = styled.h2`
  margin: 0;
  margin-bottom: 24px;
  font-size: 32px;
  overflow-wrap: break-word;
  ${media.lg} {
  }
`;

export const ItemDescription = styled.p`
  font-weight: 600;
  ${media.lg} {
    margin-top: 24px;
  }
`;

export const ItemStack = styled.p`
  font-weight: 600;
  span {
    font-size: 20px;
  }
  ${media.lg} {
  }
`;
