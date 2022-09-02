import React, { useState, useEffect, useRef, useMemo, RefObject } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { CarouselItems } from "./data";
import {
  CarouselContainer,
  CarouselSection,
  InnerContainer,
  Item,
  ItemContainer,
  ItemDescription,
  ItemLink,
  ItemLinkContainer,
  ItemStack,
  ItemTitle,
  LinkContainer,
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
    console.log(currentWidth);
    return CarouselItems.map((item, index) => {
      return (
        <div className={`keen-slider__slide number-slide${index}`} key={index}>
          <ItemTitle>{item.title}</ItemTitle>
          <Item results={currentWidth}>
            {/* <ItemLink href={item.url}>go to project</ItemLink> */}

            <Image
              src={item.imgURL}
              layout="fill"
              objectFit="cover"
              alt="logo"
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
          <ItemDescription>{item.description}</ItemDescription>
          <ItemStack>
            <span>Stacks: </span>
            {item.stack}
          </ItemStack>
        </div>
      );
    });
  }, [CarouselItems, currentWidth]);

  return (
    <CarouselSection ref={ref}>
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
    </CarouselSection>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
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
