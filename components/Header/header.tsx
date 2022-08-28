import Link from "next/link";
import { Grid } from "../Foundations/foundations";
import Logo from "../Logo/logo";
import { HeaderData } from "./data";
// import LightSaver from "./blue-light-saber";
import { useTheme } from "next-themes";
import {
  HeaderContainer,
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
  const { theme, setTheme } = useTheme();
  console.log("🚀 ~ file: header.tsx ~ line 44 ~ Header ~ path", path);
  // const { path } = props

  return (
    <HeaderContainer>
      <Grid>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <HeaderMenuContainer>
          {HeaderData.map((item, idx) => {
            return (
              <HeaderList key={idx}>
                <Link href={item.href} passHref>
                  {item.text}
                </Link>
              </HeaderList>
            );
          })}
        </HeaderMenuContainer>
        <ThemeButton
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {LightSaver()}
        </ThemeButton>
      </Grid>
    </HeaderContainer>
  );
}
