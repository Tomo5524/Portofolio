import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const CredentialsContainer = styled.section`
  // ${media.lg} {
  //   margin-top: 24px;
  //   padding: 16px;
  // }
`;

export const SNSInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ResumeLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: ${(props) =>
      props.color === "light"
        ? "solid 1px rgb(80 80 80)"
        : "solid 1px rgba(0, 214, 252, 0.3)"};
    border-radius: ${(props) => props.color === "light" && "10px"};
    // border: solid 1px rgba(0, 214, 252, 0.3);
    background: none;
    color: ${(props) =>
      props.color === "light" ? "rgb(80 80 81)" : "rgba(0, 214, 252, 0.5)"};
    // color: rgba(0, 214, 252, 0.5);
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 1.8px;
    width: 150px;
    height: 40px;
    padding: 0;
    transition: all 0.25s ease;
    outline: none;
    &:before {
      display: ${(props) => props.color === "light" && "none"};
      content: "";
      position: absolute;
      top: 0;
      left: 10%;
      width: 60px;
      height: 1px;
      transform: translateY(-1px);
      background: ${(props) =>
        props.color === "light" ? "rgb(80 80 82)" : "rgba(0, 214, 252, 1)"};
      // background: rgba(0, 214, 252, 1);
      transition: all 0.25s ease;
    }
    &:after {
      display: ${(props) => props.color === "light" && "none"};
      content: "";
      position: absolute;
      bottom: 0;
      right: 10%;
      width: 60px;
      height: 1px;
      transform: translateY(1px);
      background: ${(props) =>
        props.color === "light" ? "rgb(80 80 82)" : "rgba(0, 214, 252, 1)"};
      // background: rgba(0, 214, 252, 1);
      transition: all 0.25s ease;
    }
    &:hover {
      border-radius: ${(props) => props.color === "light" && "10px"};
      box-shadow: ${(props) =>
        props.color === "light"
          ? "1px 1px 8px rgb(80 80 78)"
          : "1px 1px 8px rgba(0, 214, 252, 0.3)"};
      // box-shadow: 1px 1px 8px rgba(0, 214, 252, 0.3);
      color: ${(props) =>
        props.color === "light" ? "rgb(80 80 80)" : "rgba(0, 214, 252, 1)"};
      // color: rgba(0, 214, 252, 1);
      text-shadow: ${(props) =>
        props.color === "dark" && "0 0 8px rgba(0, 214, 252, 0.4)"};
      // text-shadow: 0 0 8px rgba(0, 214, 252, 0.4);
      &:before {
        left: 0;
        width: 20px;
      }
      &:after {
        right: 0;
        width: 20px;
      }
      span:before {
        bottom: 0;
      }
      span:after {
        top: 0;
      }
    }
  }
`;

export const ResumeLinkText = styled.span`
  display: ${(props) => props.color === "light" && "none"};
  &:before {
    content: "";
    position: absolute;
    bottom: 30%;
    right: 0;
    width: 1px;
    height: 20px;
    transform: translateX(1px);
    background: ${(props) =>
      props.color === "light" ? "rgb(80 80 80)" : "rgba(0, 214, 252, 1)"};
    // background: rgba(0, 214, 252, 1);
    transition: all 0.25s ease;
  }
  &:after {
    content: "";
    position: absolute;
    top: 30%;
    left: 0;
    width: 1px;
    height: 20px;
    transform: translateX(-1px);
    background: ${(props) =>
      props.color === "light" ? "rgb(80 80 80)" : "rgba(0, 214, 252, 1)"};
    // background: rgba(0, 214, 252, 1);
    transition: all 0.25s ease;
  }
`;

//   props.color === "light" ? "solid #0000" : "solid #9a9a9a"};
