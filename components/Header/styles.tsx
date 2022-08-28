import styled, { css } from "styled-components";
import { media } from "../../theme/breakpoints";

export const HeaderContainer = styled.nav`
  display: flex;
  padding: 8px;
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

// ${({ theme }) =>
//   css`
//     @media ${theme.breakpoints.lg} {
//       // grid-template-columns: repeat(12, minmax(0, 1fr));
//   `}

export const HeaderList = styled.li`
  text-decoration: none;
  padding-left: 24px;
`;

export const HeaderItem = styled.a`
  text-decoration: none;
`;

export const ThemeButton = styled.button`
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: 2px solid transparent;
  outline-offset: 2px;
  line-height: 1.2;
  padding: 0px;
  appearance: none;
  grid-column-start: 4;
  width: 40px;
  ${media.lg} {
    grid-column-start: 12;
  }
`;
