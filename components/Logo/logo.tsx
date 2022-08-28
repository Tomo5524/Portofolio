import Link from "next/link";
import Image from "next/image";
import { LogoBox } from "./styles";

const Logo = () => {
  // const footPrintImg = "";
  // const logo = `/images/Mylogo-${getTheme("", "-dark")}.png`;
  const logo = "/images/Mylogo.png";
  // const logo = "/images/footprint.png";

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={logo} width={20} height={20} alt="logo" />
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
