import React, { useState, useEffect, useRef, useMemo, RefObject } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { CarouselItems } from "./data";
import {
  ArrowSVG,
  CarouselContainer,
  CarouselSection,
  Item,
  ItemDescription,
  ItemLink,
  ItemLinkContainer,
  ItemLinkMobile,
  ItemStack,
  ItemTitle,
  NavigationWrapper,
  TextDesktopContainer,
  TextMobileContainer,
  TitleMobile,
} from "./styles";
import styles from "./carousel.module.css";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const ref: RefObject<HTMLDivElement> = useRef(null);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      spacing: 16,
      origin: "center",
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const displayedItems = useMemo(() => {
    return CarouselItems.map((item, index) => {
      return (
        <div className={`keen-slider__slide number-slide${index}`} key={index}>
          <ItemTitle>{item.title}</ItemTitle>
          {/* <ImageContainer> */}
          <Item>
            <Image
              src={item.imgURL}
              layout="fill"
              objectFit="cover"
              alt={item.alt}
            />

            {/* <Image
              src={item.imgURL}
              width={currentWidth}
              height={400}
              alt="logo"
            /> */}
            <ItemLinkContainer>
              {/* used classname here to avoid hover effect triggered on page reload */}
              <div className={styles.innerContainer}>
                <ItemLink href={item.url}>Go to project</ItemLink>
              </div>
            </ItemLinkContainer>
          </Item>
          {/* </ImageContainer> */}
          <TextDesktopContainer>
            <ItemDescription>{item.description}</ItemDescription>
            <ItemStack>
              <span>Stacks: </span>
              {item.stack}
            </ItemStack>
          </TextDesktopContainer>
        </div>
      );
    });
  }, []);

  return (
    <CarouselSection>
      <TitleMobile>{CarouselItems[currentSlide].title}</TitleMobile>
      <CarouselContainer ref={ref}>
        <NavigationWrapper>
          <div ref={sliderRef} className="keen-slider">
            {displayedItems}
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </NavigationWrapper>
      </CarouselContainer>
      <TextMobileContainer>
        <ItemLinkMobile href={CarouselItems[currentSlide].url}>
          Go to project
        </ItemLinkMobile>
        <ItemDescription>
          {CarouselItems[currentSlide].description}
        </ItemDescription>
        <ItemStack>
          <span>Stacks: </span>
          {CarouselItems[currentSlide].stack}
        </ItemStack>
      </TextMobileContainer>
    </CarouselSection>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  // const isDisabled = props.disabled ? " arrow--disabled" : "";
  return (
    <ArrowSVG
      onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      isLeft={props.left}
      isDisabled={props.disabled}
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </ArrowSVG>
  );
}
