import React, { useState, useEffect, useRef, useMemo, RefObject } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { CarouselItems } from "./data";
import {
  CarouselContainer,
  CarouselSection,
  DescriptionContainer,
  ImageContainer,
  InnerContainer,
  Item,
  ItemContainer,
  ItemDescription,
  ItemLink,
  ItemLinkContainer,
  ItemLinkMobile,
  ItemStack,
  ItemTitle,
  LinkContainer,
  TextContainer,
  TextDesktopContainer,
  TextMobileContainer,
  TextTabletContainer,
  TitleContainer,
  TitleMobile,
} from "./styles";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const ref: RefObject<HTMLDivElement> = useRef(null);
  const [currentWidth, setCurrentWidth] = useState<number | undefined>(0);
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

  useEffect(() => {
    if (ref.current !== null) {
      setCurrentWidth(ref.current.clientWidth);
    }
  }, []);

  const displayedItems = useMemo(() => {
    return CarouselItems.map((item, index) => {
      return (
        <div className={`keen-slider__slide number-slide${index}`} key={index}>
          <ItemTitle>{item.title}</ItemTitle>
          {/* <ImageContainer> */}
          <Item results={currentWidth}>
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
              <InnerContainer>
                <ItemLink href={item.url}>go to project</ItemLink>
              </InnerContainer>
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
  }, [CarouselItems, currentWidth]);

  return (
    <CarouselSection>
      <TitleMobile>{CarouselItems[currentSlide].title}</TitleMobile>
      <CarouselContainer ref={ref}>
        <div className="navigation-wrapper">
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
        </div>
      </CarouselContainer>
      <TextMobileContainer>
        <ItemLinkMobile href={CarouselItems[currentSlide].url}>
          go to project
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
  const isDisabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${isDisabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
