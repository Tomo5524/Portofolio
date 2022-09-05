import { FooterContainer } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Tomo Takebuchi. All Rights Reserved.
    </FooterContainer>
  );
}
