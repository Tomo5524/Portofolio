import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const HeaderContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  background: rgba(255, 255, 255, 0.25);
  z-index: 1;
  backdrop-filter: blur(10px);
`;

export const HeaderInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  ${media.md} {
    max-width: 768px;
    margin: 0 auto;
    padding: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: end;
  svg {
    transition: 200ms ease;
  }
  &:hover svg {
    transform: rotate(20deg);
  }
}
`;

export const HeaderMenuContainer = styled.ul`
  display: none;
  ${media.md} {
    display: flex;
    padding: 0;
    list-style: none;
  }
`;

export const HeaderList = styled.li`
  text-decoration: none;
  padding-left: 24px;
`;

export const HeaderItem = styled.a`
  text-decoration: none;
  padding-bottom: 4px;
  ${(props) =>
    props.color === "light"
      ? " &:hover {border-bottom : 2px solid #363537}"
      : " &:hover {border-bottom: 2px solid #fffffb}"}
`;

export const ThemeButton = styled.button`
  user-select: none;
  position: relative;
  white-space: nowrap;
  appearance: none;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
  }
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
`;

export const MobileMenuContainer = styled.div`
  margin-left: 16px;
  padding-bottom: 5px;
  ${media.md} {
    display: none;
  }
`;

export const Hamburger = styled.label`
  position: relative;
  width: 40px;
  height: 40px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background: #e2e8f0; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #e2e8f0,
      #a2a2a2
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #e2e8f0,
      #a2a2a2
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    transform: rotate(0deg);
    transition: all 0.4s cubic-bezier(0.54, -0.1, 0.57, 0.57);
  }

  .hamburger-input {
    position: absolute;
    opacity: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    cursor: pointer;
  }

  .hamburger-line {
    width: 100%;
    background: #fff;
    height: 2px;
    display: block;
    border-radius: 6px;
    transition: transform 0.4s cubic-bezier(0.54, -0.81, 0.57, 0.57);
    position: relative;

    &.first,
    &.third {
      width: 50%;
    }

    &.third {
      margin-left: 50%;
      transform-origin: left;
    }
  }
`;

export const MenuButtonWrapper = styled.label`
  position: relative;
  display: inline-block;
  .item-list {
    list-style: none;
    margin-top: 15px;
    position: absolute;
    transform: translateX(-50%) scale(0);
    transform-origin: center;
    transition: all 0.4s cubic-bezier(0.54, -0.1, 0.57, 0.57);
    background-color: #303242;
    color: #fff;
    width: 140px;
    left: -20px;
    padding: 16px;
    text-align: left;
    border-radius: 10px;
    font-weight: 300;
    opacity: 0;
    user-select: none;

    div {
      padding: 10px 30px;
      cursor: pointer;
    }
  }

  .menu-button {
    margin: 0;
    position: absolute;
    width: 40px;
    height: 40px;
    left: 0;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
  }
`;

export const MenuButton = styled.input`
  &:checked ~ .item-list {
    transform: translateX(-50%) scale(1);
    border-radius: 10px;
    opacity: 1;
    user-select: auto;
  }

  &:checked ~ .icon-wrapper .hamburger-line.second {
    transform: rotate(-45deg);
  }

  &:checked ~ .icon-wrapper .hamburger-line.first {
    transform: translate(2px, 8px) rotate(-135deg);
  }

  &:checked ~ .icon-wrapper .hamburger-line.third {
    transform: translate(11px, -3px) rotate(-135deg);
  }

  &:checked ~ .icon-wrapper .hamburger:before {
    transform: rotate(45deg);
  }
`;

export const HamburgerInput = styled.input``;

export const HamburgerSpan = styled.span``;

// ${(props) => {
//   if (props.itemProp === "first") {
//     return "width: 50%";
//   } else if (props.itemProp === "third") {
//     return "margin-left: 50%: transform-origin: left'";
//   }
// }}

export const ItemList = styled.div``;

export const IconWrapper = styled.div``;

export const MobileMenuListItem = styled.li`
  margin: 16px 0;
  cursor: pointer;
`;
