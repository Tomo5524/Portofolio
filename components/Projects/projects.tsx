import Link from "next/link";
import Carousel from "../Carousel/carousel";
import {
  HomeLink,
  HomeLinkContainer,
  HomeLinkText,
  ProjectContainer,
} from "./styles";

export default function ProjectPage() {
  // Todo. not render 3D image in project page
  return (
    <ProjectContainer>
      <HomeLinkContainer>
        <Link href="/" passHref>
          <HomeLink>
            <HomeLinkText>Home</HomeLinkText>
          </HomeLink>
        </Link>
      </HomeLinkContainer>
      <Carousel />
    </ProjectContainer>
  );
}
