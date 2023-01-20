import { useMemo } from "react";
import { useTheme } from "next-themes";
import {
  KeenSlider,
  Scene,
  StackContainer,
  StackWrapper,
  TechCard,
  // StackContainer,
  TechStack,
  TechStackItem,
  TechStackItemList,
  TechStackTitle,
  Title,
} from "./styles";
import { TitleText } from "../Work/styles";
// import "./styles.css"
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import styles from "./stack-carousel.module.css";

const stackList = [
  {
    title: "Languages",
    items: ["Javascript", "Typescript", "Python"],
  },
  {
    title: "FrameWork",
    items: ["React", "Nextjs", "Vue"],
  },
  {
    title: "CSS Framework",
    items: ["Tailwind", "Bootstrap"],
  },
  {
    title: "CSS in JS",
    items: ["Styled Component"],
  },
  {
    title: "Tools/Methods",
    items: ["Redux", "Vuex", "Webpack", "GraphQL"],
  },
  {
    title: "Backend",
    items: ["Nodejs", "Express"],
  },
  {
    title: "OS",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "CMS",
    items: ["Contentful"],
  },
];

const carousel: KeenSliderPlugin = (slider) => {
  const z = 300;
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
      selector: `.${styles.carouselCell}`,
      renderMode: "custom",
      // mode: "free-snap",
    },
    [carousel]
  );

  const displayedItems = useMemo(() => {
    return stackList.map((item, index) => {
      const slideClassName = `numberSlide${index}`;
      return (
        <div
          className={`${styles.carouselCell} ${styles[slideClassName]}`}
          key={item.title}
        >
          {/* <div
          className={`tech_stack_carousel__cell stack-number-slide${index}`}
          key={item.title}
        > */}
          <TechCard colorVariant={theme!}>
            <TechStackTitle>{item.title}</TechStackTitle>
            <TechStackItemList>
              {item.items.map((value) => {
                return <TechStackItem key={value}>{value}</TechStackItem>;
              })}
            </TechStackItemList>
          </TechCard>
        </div>
      );
    });
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

{
  /* <Title>
<TitleText>Tech Stack 🛠</TitleText>
</Title>
<TechStack>
<TechStackTitle>Languages:</TechStackTitle>
<span>Javascript, Typescript, Python.</span>
</TechStack>
<TechStack>
<TechStackTitle>FrameWork:</TechStackTitle>React, Nextjs, Vue, Nuxt3.
</TechStack>
<TechStack>
<TechStackTitle>CSS Framework:</TechStackTitle>Tailwind, Bootstrap.
</TechStack>
<TechStack>
<TechStackTitle>CSS in JS:</TechStackTitle>Styled Component.
</TechStack>
<TechStack>
<TechStackTitle>Tools/Methods:</TechStackTitle>
Redux, Vuex, Webpack, GraphQL.
</TechStack>
<TechStack>
<TechStackTitle>Backend:</TechStackTitle> Nodejs, Express.
</TechStack>
<TechStack>
<TechStackTitle>Database:</TechStackTitle> MongoDB, PostgreSQL.
</TechStack>
<TechStack>
<TechStackTitle>CMS:</TechStackTitle>Contentful.
</TechStack> */
}
