import Link from "next/link";
import { LogoBox } from "./styles";
import { LogoSVG } from "./logoSVG";

const Logo = () => {
  // const logo = `/images/Mylogo-${getTheme("", "-dark")}.png`;
  // const logo = "/images/Mylogo.png";
  // const logo = "/images/footprint.png";

  return (
    <Link href="/" scroll={false} passHref>
      <LogoBox aria-label="go back to home page">
        {/* <Image src={logo} width={80} height={80} alt="logo" /> */}
        {LogoSVG()}
      </LogoBox>
    </Link>
  );
};

export default Logo;
