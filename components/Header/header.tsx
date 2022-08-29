import Link from "next/link";
import { Grid } from "../Foundations/foundations";
import Logo from "../Logo/logo";
import { HeaderData } from "./data";
// import LightSaver from "./blue-light-saber";
import { useTheme } from "next-themes";
import {
  HeaderContainer,
  HeaderInnerContainer,
  HeaderItem,
  HeaderList,
  HeaderMenuContainer,
  LogoContainer,
  ThemeButton,
} from "./styles";
import { LightSaver } from "./light-saber";

interface HeaderProps {
  path: string;
}

export default function Header({ path }: HeaderProps) {
  const { theme, setTheme, systemTheme } = useTheme();
  return (
    <HeaderContainer theme={theme === "light"}>
      <HeaderInnerContainer>
        <Grid>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <HeaderMenuContainer>
            {HeaderData.map((item, idx) => {
              return (
                <HeaderList key={idx}>
                  <Link href={item.href} passHref>
                    <HeaderItem theme={theme}>{item.text}</HeaderItem>
                  </Link>
                </HeaderList>
              );
            })}
          </HeaderMenuContainer>
          <ThemeButton
            theme={theme === "light"}
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
          >
            {LightSaver()}
          </ThemeButton>
        </Grid>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
}
