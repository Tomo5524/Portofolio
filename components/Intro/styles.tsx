import styled from "styled-components";
import { media } from "../../theme/breakpoints";
import { SystemThemeProps } from "../Common/types";

export const IntroContainer = styled.section<SystemThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  // margin-top: 16px;
  padding: 16px;
  text-align: center;
  background: ${(props) =>
    props.systemTheme === "light"
      ? "rgba(255, 255, 255, 0.25)"
      : "rgba(255, 255, 255, 0.1)"};
  z-index: 1;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  ${media.lg} {
    margin-top: 24px;
    padding: 16px;
  }
  h2 {
    font-size: 18px;
    margin-bottom: 0;
    ${media.md} {
      font-size: 24px;
      padding: 16px;
    }
  }
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const ProjectLink = styled.a<SystemThemeProps>`
  -webkit-tap-highlight-color: transparent;
  display: block;
  margin-top: 20px;
  border-bottom: ${(props) =>
    props.systemTheme === "light" ? "4px solid #363537" : "4px solid #9a9a9a"};
  padding-bottom: 6px;

  ${media.lg} {
    margin-top: 0;
    text-align: center;
    --c: #495049; /* the color */
    --b: 0.1em; /* border length*/
    --d: 20px; /* the cube depth */
    --_s: calc(var(--d) + var(--b));
    // color: var(--c);
    &:focus-visible {
      border: 1px solid rgba(66, 153, 225, 0.6);
    }
    border: ${(props) =>
      props.systemTheme === "light" ? "solid #0000" : "solid #9a9a9a"};
    padding: 4px;
    border-width: var(--b) var(--b) var(--_s) var(--_s);
    background: conic-gradient(
          at left var(--d) bottom var(--d),
          #0000 90deg,
          rgb(255 255 255 /0.3) 0 225deg,
          rgb(255 255 255 /0.6) 0
        )
        border-box,
      conic-gradient(
          at left var(--_s) bottom var(--_s),
          #0000 90deg,
          var(--c) 0
        )
        0 100% / calc(100% - var(--b)) calc(100% - var(--b)) border-box;
    transform: translate(calc(var(--d) / -1), var(--d));
    clip-path: polygon(
      var(--d) 0%,
      var(--d) 0%,
      100% 0%,
      100% calc(100% - var(--d)),
      100% calc(100% - var(--d)),
      var(--d) calc(100% - var(--d))
    );
    transition: 0.5s;
    &:hover {
      transform: translate(0, 0);
      clip-path: polygon(
        0% var(--d),
        var(--d) 0%,
        100% 0%,
        100% calc(100% - var(--d)),
        calc(100% - var(--d)) 100%,
        0% 100%
      );
    }
  }
`;
