import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const HeaderContainer = styled.nav`
  width: 100%;
  display: flex;
  background: #2c302d;

  ${(theme) =>
    theme &&
    `
  background: #ffffff40;
  `}
`;

export const HeaderInnerContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  margin-left: 20px;
  grid-column-start: 1;
`;

export const HeaderMenuContainer = styled.ul`
  display: none;
  ${media.lg} {
    display: flex;
    align-items: center;
    list-style: none;
    grid-column-start: 3;
  }
`;

export const HeaderList = styled.li`
  text-decoration: none;
  padding-left: 24px;
`;

export const HeaderItem = styled.a`
  text-decoration: none;
  padding-bottom: 4px;
  ${(theme) =>
    theme &&
    `
    &:hover {
      border-bottom : 2px solid #fffffb ;
    }
  `}
  &:hover {
    border-bottom: 2px solid #363537;
  }
`;

export const ThemeButton = styled.button`
  user-select: none;
  position: relative;
  white-space: nowrap;
  align-self: center;
  appearance: none;
  // grid-column-start: 4;
  width: 40px;
  height: 30px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  &:active {
    color: #000;
  }
  &:active:after {
    background: transparent;
  }
  &:hover:before {
    opacity: 1;
  }
  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  ${media.lg} {
    grid-column-start: 12;
  }
`;
