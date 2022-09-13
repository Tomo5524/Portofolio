import Link from "next/link";
import {
  Hamburger,
  HamburgerInput,
  HamburgerSpan,
  IconWrapper,
  ItemList,
  MenuButton,
  MenuButtonWrapper,
  MobileMenuContainer,
  MobileMenuListItem,
} from "./styles";

export default function DropDownMenu() {
  return (
    <MobileMenuContainer>
      <MenuButtonWrapper className="menu-button-wrapper">
        <MenuButton type="checkbox" className="menu-button" />
        <IconWrapper className="icon-wrapper">
          <Hamburger className="hamburger">
            <HamburgerInput className="hamburger-input" type="checkbox" />
            <HamburgerSpan
              className="hamburger-line first"
              itemProp="first"
            ></HamburgerSpan>
            <HamburgerSpan
              className="hamburger-line second"
              itemProp="second"
            ></HamburgerSpan>
            <HamburgerSpan
              className="hamburger-line third"
              itemProp="third"
            ></HamburgerSpan>
          </Hamburger>
        </IconWrapper>
        <ItemList className="item-list">
          <Link href="/" passHref>
            <MobileMenuListItem>Home</MobileMenuListItem>
          </Link>
          {/* <Link href="/resume" passHref>
            <MobileMenuListItem>Resume</MobileMenuListItem>
          </Link> */}
          <Link href="/projects" passHref>
            <MobileMenuListItem>Projects</MobileMenuListItem>
          </Link>
          <Link href="https://github.com/Tomo5524/Portofolio" passHref>
            <MobileMenuListItem>Source</MobileMenuListItem>
          </Link>
        </ItemList>
      </MenuButtonWrapper>
    </MobileMenuContainer>
  );
}
