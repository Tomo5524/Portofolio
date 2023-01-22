import styled, { css, keyframes } from "styled-components";
import { media } from "../../../theme/breakpoints";
import { SystemThemeProps } from "../types";

interface LightsaberProps {
  readonly lisghtSaberColor: lisghtSaberColorTypes;
  readonly lisghtSaberPosition: lisghtSaberPositionTypes;
}

type lisghtSaberPositionTypes = "left" | "right";
type lisghtSaberColorTypes = "green" | "red";

export const Container = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  margin: 0 auto;
`;

export const LoadingText = styled.h2`
  font-size: 16px;
  padding-top: 24px;
  ${media.lg} {
    font-size: 24px;
    padding-top: 48px;
  }
`;

const particleAnimationRule = "2s ease-out infinite 1s";
const LightsaberAnimationRule = "2s ease-in-out infinite 1s";

export const LsParticles = styled.div<SystemThemeProps>`
  position: absolute;
  left: 42px;
  top: 10px;
  width: 1px;
  height: 5px;
  -webkit-transform: rotateZ(0deg);
  transform: rotateZ(0deg);
  &:nth-child(1) {
    -webkit-animation: ${(props) =>
        particlesAnimationBuilder(props.systemTheme, 1)}
      ${particleAnimationRule};
    animation: ${(props) => particlesAnimationBuilder(props.systemTheme, 1)}
      ${particleAnimationRule};
  }
  &:nth-child(2) {
    -webkit-animation: ${(props) =>
        particlesAnimationBuilder(props.systemTheme, 2)}
      ${particleAnimationRule};
    animation: ${(props) => particlesAnimationBuilder(props.systemTheme, 2)}
      ${particleAnimationRule};
  }
  &:nth-child(3) {
    -webkit-animation: ${(props) =>
        particlesAnimationBuilder(props.systemTheme, 3)}
      ${particleAnimationRule};
    animation: ${(props) => particlesAnimationBuilder(props.systemTheme, 3)}
      ${particleAnimationRule};
  }
  &:nth-child(4) {
    -webkit-animation: ${(props) =>
        particlesAnimationBuilder(props.systemTheme, 4)}
      ${particleAnimationRule};
    animation: ${(props) => particlesAnimationBuilder(props.systemTheme, 4)}
      ${particleAnimationRule};
  }
  &:nth-child(5) {
    -webkit-animation: ${(props) =>
        particlesAnimationBuilder(props.systemTheme, 5)}
      ${particleAnimationRule};
    animation: ${(props) => particlesAnimationBuilder(props.systemTheme, 5)}
      ${particleAnimationRule};
  }
`;

export const Lightsaber = styled.div<LightsaberProps>`
  position: absolute;
  width: 4px;
  height: 12px;
  background-color: #666;
  border-radius: 1px;
  bottom: 0;
  &:before {
    position: absolute;
    content: " ";
    display: block;
    width: 2px;
    height: 25px;
    max-height: 1px;
    left: 1px;
    top: 1px;
    background-color: #fff;
    border-radius: 1px;
    -webkit-transform: rotateZ(180deg);
    transform: rotateZ(180deg);
    -webkit-transform-origin: center top;
    -ms-transform-origin: center top;
    transform-origin: center top;
  }
  &:after {
    position: absolute;
    content: " ";
    display: block;
    width: 2px;
    height: 2px;
    left: 1px;
    top: 4px;
    background-color: #fff;
    border-radius: 50%;
  }
  ${(props) =>
    props.lisghtSaberPosition === "left" &&
    css`
      left: 0;
      -webkit-animation: ${fightLeft} ${LightsaberAnimationRule};
      animation: ${fightLeft} 2s ease-in-out infinite 1s;
    `}
  ${(props) =>
    props.lisghtSaberPosition === "right" &&
    css`
      right: 0;
      -webkit-animation: ${fightRight} ${LightsaberAnimationRule};
      animation: ${fightRight} ${LightsaberAnimationRule};
    `}
  ${(props) =>
    props.lisghtSaberColor === "green" &&
    css`
      &:before {
        -webkit-animation: ${showLightGreen} ${LightsaberAnimationRule};
        animation: ${showLightGreen} ${LightsaberAnimationRule};
    `}
  ${(props) =>
    props.lisghtSaberColor === "red" &&
    css`
      &:before {
        -webkit-animation: ${showLightRed} ${LightsaberAnimationRule};
        animation: ${showLightRed} ${LightsaberAnimationRule};
      }
    `}
`;

const showLightGreen = keyframes`
  0% {
    max-height: 0;
    box-shadow: 0 0 0 0 #87c054;
  }

  5% {
    box-shadow: 0 0 4px 2px #87c054;
  }

  10% {
    max-height: 22px;
  }

  80% {
    max-height: 22px;
  }

  85% {
    box-shadow: 0 0 4px 2px #87c054;
  }

  100% {
    max-height: 0;
    box-shadow: 0 0 0 0 #87c054;
  }
`;

const showLightRed = keyframes`
    0% {
      max-height: 0;
      box-shadow: 0 0 0 0 #f06363;
    }

    20% {
      box-shadow: 0 0 4px 2px #f06363;
    }

    25% {
      max-height: 22px;
    }

    80% {
      max-height: 22px;
    }

    85% {
      box-shadow: 0 0 4px 2px #f06363;
    }

    100% {
      max-height: 0;
      box-shadow: 0 0 0 0 #f06363;
    }
`;

const fightLeft = keyframes`
  0% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    left: 0;
    bottom: 0;
  }

  30% {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
    bottom: 0;
  }

  40% {
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
    left: 0;
    bottom: 2px;
  }

  45% {
    -webkit-transform: rotateZ(65deg);
    transform: rotateZ(65deg);
    left: 0;
  }

  65% {
    -webkit-transform: rotateZ(410deg);
    transform: rotateZ(410deg);
    left: 30px;
    bottom: 10px;
  }

  95% {
    -webkit-transform: rotateZ(410deg);
    transform: rotateZ(410deg);
    left: 0;
    bottom: 0;
  }

  100% {
    -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
    left: 0;
    bottom: 0;
  }
`;

const fightRight = keyframes`
    0% {
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
      right: 0;
      bottom: 0;
    }

    30% {
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
      bottom: 0;
    }

    45% {
      -webkit-transform: rotateZ(-45deg);
      transform: rotateZ(-45deg);
      right: 0;
      bottom: 2px;
    }

    50% {
      -webkit-transform: rotateZ(-65deg);
      transform: rotateZ(-65deg);
      right: 0;
    }

    68% {
      -webkit-transform: rotateZ(-410deg);
      transform: rotateZ(-410deg);
      right: 27px;
      bottom: 13px;
    }

    95% {
      -webkit-transform: rotateZ(-410deg);
      transform: rotateZ(-410deg);
      right: 0;
      bottom: 0;
    }

    100% {
      -webkit-transform: rotateZ(-360deg);
      transform: rotateZ(-360deg);
      right: 0;
      bottom: 0;
    }
`;

const getBackGroundColor = (variant: string, alpha: number) => {
  return variant === "light"
    ? `rgba(51, 51, 51, ${alpha})`
    : `rgba(255, 255, 255, ${alpha})`;
};

const particlesAnimationBuilder = (sysTheme: string, num: number) => {
  switch (num) {
    case 1:
      return keyframes`
          0% {
            background-color: ${getBackGroundColor(sysTheme, 0)};
            -webkit-transform: rotateZ(35deg) translateY(0px);
            transform: rotateZ(35deg) translateY(0px);
          }
          63% {
            background-color: ${getBackGroundColor(sysTheme, 0)};      
            -webkit-transform: rotateZ(35deg) translateY(0px);
            transform: rotateZ(35deg) translateY(0px);
          }
          64% {
            background-color: ${getBackGroundColor(sysTheme, 1)};
            -webkit-transform: rotateZ(35deg) translateY(0px);
            transform: rotateZ(35deg) translateY(0px);
          }
          100% {
            background-color: ${getBackGroundColor(sysTheme, 0)};
            -webkit-transform: rotateZ(35deg) translateY(-30px);
            transform: rotateZ(35deg) translateY(-30px);
          }
      `;
    case 2:
      return keyframes`
        0% {
          background-color: ${getBackGroundColor(sysTheme, 0)};
          -webkit-transform: rotateZ(-65deg) translateY(0px);
          transform: rotateZ(-65deg) translateY(0px);
        }
        63% {
          background-color: ${getBackGroundColor(sysTheme, 0)};      
          -webkit-transform: rotateZ(-65deg) translateY(0px);
          transform: rotateZ(-65deg) translateY(0px);
        }
        64% {
          background-color: ${getBackGroundColor(sysTheme, 1)};
          -webkit-transform: rotateZ(-65deg) translateY(0px);
          transform: rotateZ(-65deg) translateY(0px);
        }
        95% {
          background-color: ${getBackGroundColor(sysTheme, 0)};
          -webkit-transform: rotateZ(-65deg) translateY(-40px);
          transform: rotateZ(-65deg) translateY(-40px);
        }
        100% {
          background-color: ${getBackGroundColor(sysTheme, 0)};
          -webkit-transform: rotateZ(-65deg) translateY(-40px);
          transform: rotateZ(-65deg) translateY(-40px);
        }
      `;
    case 3:
      return keyframes`
          0% {
            background-color: ${getBackGroundColor(sysTheme, 0)};
            -webkit-transform: rotateZ(-75deg) translateY(0px);
            transform: rotateZ(-75deg) translateY(0px);
          }
          63% {
            background-color: ${getBackGroundColor(sysTheme, 0)};
            -webkit-transform: rotateZ(-75deg) translateY(0px);
            transform: rotateZ(-75deg) translateY(0px);
          }

          64% {
            background-color: ${getBackGroundColor(sysTheme, 1)};
            -webkit-transform: rotateZ(-75deg) translateY(0px);
            transform: rotateZ(-75deg) translateY(0px);
          }

          97% {
            background-color: ${getBackGroundColor(sysTheme, 0)};
            -webkit-transform: rotateZ(-75deg) translateY(-35px);
            transform: rotateZ(-75deg) translateY(-35px);
          }

          100% {
            background-color: ${getBackGroundColor(sysTheme, 0)};
            -webkit-transform: rotateZ(-75deg) translateY(-35px);
            transform: rotateZ(-75deg) translateY(-35px);
          }
      `;
    case 4:
      return keyframes`
          0% {
            background-color: ${getBackGroundColor(sysTheme, 0)};      
            -webkit-transform: rotateZ(-25deg) translateY(0px);
            transform: rotateZ(-25deg) translateY(0px);
          }
      
          63% {
            background-color: ${getBackGroundColor(sysTheme, 0)};      
            -webkit-transform: rotateZ(-25deg) translateY(0px);
            transform: rotateZ(-25deg) translateY(0px);
          }
      
          64% {
            background-color: ${getBackGroundColor(sysTheme, 1)};
            -webkit-transform: rotateZ(-25deg) translateY(0px);
            transform: rotateZ(-25deg) translateY(0px);
          }
      
          97% {
            background-color: ${getBackGroundColor(sysTheme, 0)};
            -webkit-transform: rotateZ(-25deg) translateY(-30px);
            transform: rotateZ(-25deg) translateY(-30px);
          }
      
          100% {
            background-color: ${getBackGroundColor(sysTheme, 0)};
            -webkit-transform: rotateZ(-25deg) translateY(-30px);
            transform: rotateZ(-25deg) translateY(-30px);
          }
        `;
    case 5:
      return keyframes`
            0% {
              background-color: ${getBackGroundColor(sysTheme, 0)};
              -webkit-transform: rotateZ(65deg) translateY(0px);
              transform: rotateZ(65deg) translateY(0px);
            }
        
            63% {
              background-color: ${getBackGroundColor(sysTheme, 0)};      
              -webkit-transform: rotateZ(65deg) translateY(0px);
              transform: rotateZ(65deg) translateY(0px);
            }
        
            64% {
              background-color: ${getBackGroundColor(sysTheme, 1)};
              -webkit-transform: rotateZ(65deg) translateY(0px);
              transform: rotateZ(65deg) translateY(0px);
            }
        
            97% {
              background-color: ${getBackGroundColor(sysTheme, 0)};;
              -webkit-transform: rotateZ(65deg) translateY(-35px);
              transform: rotateZ(65deg) translateY(-35px);
            }
        
            100% {
              background-color: ${getBackGroundColor(sysTheme, 0)};
              -webkit-transform: rotateZ(65deg) translateY(-35px);
              transform: rotateZ(65deg) translateY(-35px);
            }
        `;
    default:
      null;
  }
};
