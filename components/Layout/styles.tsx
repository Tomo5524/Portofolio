import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
  ${media.md} {
    padding-left: 0;
    padding-right: 0;
  }
`;
