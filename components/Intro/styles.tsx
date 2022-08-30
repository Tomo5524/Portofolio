import styled from "styled-components";
import { media } from "../../theme/breakpoints";
// interface IntroContainer {
//   color: boolean;
// }

// export const IntroContainer = styled.section<IntroContainer>`
//   background: ${() => (color ? "#f7f6ee" : "#495049")};
// `;

export const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin-top: 16px;
  padding: 8px;
  background: ${(props) => (props.color === "light" ? "#f7f6ee" : "#495049")};
  ${media.lg} {
    margin-top: 24px;
    padding: 16px;
  }
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const ProjectLink = styled.a`
  text-align: center;
  --c: #495049; /* the color */
  --b: 0.1em; /* border length*/
  --d: 20px; /* the cube depth */
  --_s: calc(var(--d) + var(--b));
  color: var(--c);
  border: ${(props) =>
    props.color === "light" ? "solid #0000" : "solid #9a9a9a"};
  padding: 4px;
  border-width: var(--b) var(--b) var(--_s) var(--_s);
  background: conic-gradient(
        at left var(--d) bottom var(--d),
        #0000 90deg,
        rgb(255 255 255 /0.3) 0 225deg,
        rgb(255 255 255 /0.6) 0
      )
      border-box,
    conic-gradient(at left var(--_s) bottom var(--_s), #0000 90deg, var(--c) 0)
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
  span {
    color: ${(props) => (props.color === "light" ? "#363537" : "#f7f6ee")};
  }
`;
