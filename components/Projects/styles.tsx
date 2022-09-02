import styled from "styled-components";
import { media } from "../../theme/breakpoints";

export const ProjectContainer = styled.section`
  background-image: url("/images/modern-futuristic-sci-fi-background.jpg");
  min-height: 100vh;
  // max-width: 100vw;
  color: #fffffb;
  // equivalent of
  // width : 100%;
  // margin: 0
  background-size: cover;

  // for mobile /////////
  background-repeat: round;
  // background-position: center;

  ${media.lg} {
  }
`;

export const HomeLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 20px;
  ${media.lg} {
    padding-top: 50px;
    padding-bottom: 40px;
  }
`;

export const HomeLink = styled.a`
    margin-right:24px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: solid 1px rgba(0, 214, 252, 0.3);
    background: none;
    color: rgba(0, 214, 252, 0.5);
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
      content: "";
      position: absolute;
      top: 0;
      left: 10%;
      width: 60px;
      height: 1px;
      transform: translateY(-1px);     
      background: rgba(0, 214, 252, 1);
      transition: all 0.25s ease;
    }
    &:after {      
      content: "";
      position: absolute;
      bottom: 0;
      right: 10%;
      width: 60px;
      height: 1px;
      transform: translateY(1px);   
      background: rgba(0, 214, 252, 1);
      transition: all 0.25s ease;
    }
    &:hover {        
      box-shadow: 1px 1px 8px rgba(0, 214, 252, 0.3);      
      color: rgba(0, 214, 252, 1);      
      text-shadow: 0 0 8px rgba(0, 214, 252, 0.4);
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

export const HomeLinkText = styled.span`
  &:before {
    content: "";
    position: absolute;
    bottom: 30%;
    right: 0;
    width: 1px;
    height: 20px;
    transform: translateX(1px);
    background: rgba(0, 214, 252, 1);
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
    background: rgba(0, 214, 252, 1);
    transition: all 0.25s ease;
  }
`;
