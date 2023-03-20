import Link from "next/link";
import { Grid } from "../Foundations/foundations";
import Logo from "../Logo/logo";
import { HeaderData } from "./data";
// import LightSaver from "./blue-light-saber";
import { useTheme } from "next-themes";
import {
  ButtonContainer,
  HeaderContainer,
  HeaderInnerContainer,
  HeaderItem,
  HeaderMenuContainer,
  LogoContainer,
  ThemeButton,
} from "./styles";
import { LightSaver } from "./light-saber";
import DropDownMenu from "./drop-down-menu";
import { useLoadingContext } from "../../context/loading-context";

interface HeaderProps {
  path: string;
}

export default function Header({ path }: HeaderProps) {
  const { theme, setTheme, systemTheme } = useTheme();
  const { loading } = useLoadingContext();
  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <Link href="/" passHref scroll={false}>
          <a>
            <LogoContainer>
              <Logo />
              <h1>T.T</h1>
            </LogoContainer>
          </a>
        </Link>
        <HeaderMenuContainer>
          {HeaderData.map((item, idx) => {
            return (
              <li key={idx}>
                <Link href={item.href} passHref>
                  <HeaderItem systemTheme={theme!}>{item.text}</HeaderItem>
                </Link>
              </li>
            );
          })}
        </HeaderMenuContainer>
        <ButtonContainer>
          <ThemeButton
            aria-label="Toggle theme"
            onClick={() => {
              // if a user has system theme, select the opposite color of system theme. also first time to visit the website, no theme is stored in localstorage
              if (theme === "system") {
                if (systemTheme === "light") {
                  setTheme("dark");
                } else {
                  setTheme("light");
                }
              }
              // if a user does not have system theme or has theme stored in localstorage
              else {
                setTheme(theme === "light" ? "dark" : "light");
              }
            }}
            disabled={loading}
          >
            {LightSaver()}
          </ThemeButton>
          <DropDownMenu />
        </ButtonContainer>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
}
