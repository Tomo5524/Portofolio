import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: 1fr;
  grid-column-gap: 24px;
  ${media.lg} {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
`;
