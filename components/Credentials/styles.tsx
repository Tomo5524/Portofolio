import styled, { css } from "styled-components";
import { media } from "../../theme/breakpoints";
import { SystemThemeProps } from "../Common/types";

export const CredentialsContainer = styled.section``;

export const SNSInfo = styled.div`
  display: flex;
  align-items: center;
  a,
  svg {
    display: block;
    height: 48px;
    width: 48px;
  }
  padding: 8px 0;
  ${media.md} {
    svg {
      display: block;
      height: 64px;
      width: 64px;
    }
    padding: 24px 0;
  }
`;

const SNSButtonHover = css`
  border-radius: 100%;
  transform: scale(1.25);
  transition: background-color 0.5s, transform 0.5s;
  svg {
    fill: black;
  }
`;

const NoBlueHighlight = css`
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:focus {
    outline: none !important;
  }
`;

export const SNSButton = styled.button<SystemThemeProps>`
  padding: 0;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 24px;
  border: none;
  ${NoBlueHighlight}
  background: ${(props) =>
    props.systemTheme === "light"
      ? "rgba(255, 255, 255, 0.55)"
      : "rgba(255, 255, 255, 0.1)"};
  &:nth-child(1) {
    svg {
      fill: #26d991;
    }
    &:hover {
      background: #26d991;
      ${SNSButtonHover}
    }
  }
  &:nth-child(2) {
    svg {
      fill: #2691d9;
    }
    &:hover {
      background: #2691d9;
      ${SNSButtonHover}
    }
  }
`;

export const ResumeLink = styled.a`
    margin-right:24px;
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
