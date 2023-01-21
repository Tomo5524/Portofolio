import { useMemo } from "react";
import { useTheme } from "next-themes";
import {
  CarouselCell,
  KeenSlider,
  Scene,
  StackContainer,
  StackWrapper,
  TechCard,
  TechStackItem,
  TechStackItemList,
  TechStackTitle,
  Title,
} from "./styles";
import { TitleText } from "../Work/styles";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import { stackList } from "./data";

const carousel: KeenSliderPlugin = (slider) => {
  // space between slides
  const z = 340;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

export default function Stack() {
  const { theme } = useTheme();
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: `.${CarouselCell.styledComponentId}`,
      renderMode: "custom",
      // mode: "free-snap",
    },
    [carousel]
  );

  const displayedItems = useMemo(() => {
    return stackList.map((item) => {
      return (
        <CarouselCell key={item.title}>
          <TechCard>
            <TechStackTitle>{item.title}</TechStackTitle>
            <TechStackItemList>
              {item.items.map((value) => {
                return <TechStackItem key={value}>{value}</TechStackItem>;
              })}
            </TechStackItemList>
          </TechCard>
        </CarouselCell>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StackContainer>
      <Title>
        <TitleText>Tech Stack 🛠</TitleText>
      </Title>
      <StackWrapper>
        <Scene>
          <KeenSlider ref={sliderRef}>{displayedItems}</KeenSlider>
        </Scene>
      </StackWrapper>
    </StackContainer>
  );
}
