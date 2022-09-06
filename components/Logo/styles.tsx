import styled from "styled-components";

export const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  height: 80px;
  width: 80px;
  line-height: 20px;
  svg {
    transition: 200ms ease;
  }
  &:hover svg {
    transform: rotate(20deg);
  }
`;
