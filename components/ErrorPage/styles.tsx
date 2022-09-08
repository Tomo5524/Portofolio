import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const ErrorPageContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 5%;
  height: 100vh;
  background: #0d1731;
  ${media.lg} {
    flex-direction: row;
  }
`;

export const ImageInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  ${(props) => props.itemProp === "pointer" && " cursor:pointer"}
  a {
    height: 100%;
  }
`;

export const TextBox = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  h1 {
    color: red;
    font-size: 50px;
    margin-top: 20px;
    ${media.md} {
      font-size: 100px;
    }
  }
  h2 {
    font-size: 25px;
    color: #fffffb;
    ${media.md} {
      font-size: 50px;
    }
  }
  h3 {
    color: #fffffb;
  }
  h1,
  h2,
  h3 {
    margin-bottom: 20px;
    ${media.md} {
      margin-bottom: 40px;
    }
  }
  height: 50vh;
  // a {
  //   color: #fffffb;
  //   text-decoration: none;
  //   margin-right: 20px;
  //   &:hover {
  //     color: red;
  //     text-decoration: underline;
  //   }
  // }
`;

export const BackToHome = styled.a`
  font-size: 1.17em;
  font-weight: bold;
  color: #fffffb;
  text-decoration: none;
  margin-right: 20px;
  &:hover {
    color: red;
    text-decoration: underline;
  }
`;
