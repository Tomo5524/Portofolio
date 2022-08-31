import React, { useState, useEffect, useRef, useMemo, RefObject } from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./section-cards.module.css";
import Slider from "react-slick";
import { usePreventVerticalScroll } from "../../utils/disableScroll";
import { CarouselItems } from "./data";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref: RefObject<HTMLDivElement> = useRef(null);
  const refPrevBtn = useRef(null);
  const refNextBtn = useRef(null);

  const getNextButton = () => {
    return (
      <div
        className={`
      cursor-pointer ${
        activeIndex === CarouselItems.length - 1
          ? "cursor-default"
          : "cursor-pointer"
      }`}
        ref={refNextBtn}
      >
        <button
          aria-label="Next"
          tabIndex={activeIndex === CarouselItems.length - 1 && -1}
          className={`ml-2 sm:ml-0 ${
            activeIndex === CarouselItems.length - 1
              ? "cursor-default"
              : "cursor-pointer"
          }`}
        >
          <svg
            width="24"
            height="40"
            viewBox="0 0 24 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.2597 20L2.47947e-07 37.1638L2.72308 40L24 20L2.72309 -1.86009e-06L3.24896e-06 2.83618L18.2597 20Z"
              className={
                activeIndex === CarouselItems.length - 1
                  ? "fill-neutralGray"
                  : "fill-ecru"
              }
            />
          </svg>
        </button>
      </div>
    );
  };

  const getPrevButton = () => {
    return (
      <div
        className={`
    cursor-pointer ${activeIndex === 0 ? "cursor-default" : "cursor-pointer"}`}
        ref={refPrevBtn}
      >
        <button
          aria-label="Previous"
          tabIndex={activeIndex === 0 ? -1 : 0}
          className={`ml-2 sm:ml-0 ${
            activeIndex === 0 ? "cursor-default" : "cursor-pointer"
          }`}
        >
          <svg
            width="24"
            height="40"
            viewBox="0 0 24 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 sm:ml-0"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.74034 20L24 2.83618L21.2769 0L0 20L21.2769 40L24 37.1638L5.74034 20Z"
              className={activeIndex === 0 ? "fill-neutralGray" : "fill-ecru"}
            />
          </svg>
        </button>
      </div>
    );
  };

  const settings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    // arrows: false,
    nextArrow: getNextButton(),
    prevArrow: getPrevButton(),
    // beforeChange: (oldIndex, newIndex) => {
    //   console.log(
    //     "🚀 ~ file: section-cards.tsx ~ line 103 ~ SectionCards ~ oldIndex, newIndex",
    //     oldIndex,
    //     newIndex
    //   );
    // },
    afterChange: (currentIndex: number) => {
      console.log(
        "🚀 ~ file: section-cards.tsx ~ line 14 ~ SectionCards ~ activeIndex",
        activeIndex
      );
      setActiveIndex(currentIndex);
    },
    responsive: [
      {
        // smaller than 768
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
        },
      },
      // {
      //   breakpoint: 1682,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  useEffect(() => {
    // Create button wrapper to lay out grid logic over library's dom structure.
    const buttonWrapperDesktop = document.createElement("div");
    const rootCarouselContainer = ref.current;
    // const prevButtonDiv = refPrevBtn.current;
    // const nextButtonDiv = refNextBtn.current;
    const prevButton = document.querySelector(".slick-prev");
    prevButton!.classList.add(
      "col-start-1",
      "md:col-start-11",
      "md:justify-self-end",
      "md:self-end",
      "w-10",
      "h-10",
      "left-0"
    );

    const nextButton = document.querySelector(".slick-next");
    nextButton!.classList.add(
      "col-start-2",
      "md:col-start-12",
      "md:justify-self-end",
      "md:self-end",
      "w-10",
      "h-10",
      "right-0"
    );
    buttonWrapperDesktop.classList.add(
      "mb-[47px]",
      "col-start-12",
      "sm:grid-cols-4",
      "sm:col-start-1"
    );
    // insert button div before carousel section
    rootCarouselContainer!.insertAdjacentElement("beforebegin", prevButton!);
    rootCarouselContainer!.insertAdjacentElement("beforebegin", nextButton!);
    // prevButtonDiv.appendChild(prevButton);
    // nextButtonDiv.appendChild(nextButton);
  }, []);

  // custom hook
  usePreventVerticalScroll(ref, 5);

  const getImgDetail = (url: string) => {
    return {
      src: url,
      layout: "fill",
      // objectFit: "scale-down",
    };
  };

  const displayedItems = useMemo(() => {
    return CarouselItems.map((item, index) => {
      return (
        <div
          className={`relative cursor-grab w-[327px] h-[436px] sm:w-[410px] sm:h-[547px] ${
            styles.imageContainer
          } ${index % 2 === 0 ? "sm:mt-[73px]" : ""}
           `}
          key={index}
          id={`item-${index}`}
        >
          <ContentfulImage {...getImgDetail(item.image.url)} />
          <div className="absolute bottom-0 h-[246px] sm:h-[309px] w-full image-card">
            <div className="absolute bottom-0 grid grid-cols-4 gap-x-6">
              <h4
                className={`block sm:hidden pl-6 pb-4 sm:pl-10  ${
                  index === 0 ? "col-span-2" : "col-span-3"
                }`}
              >
                {item.label}
              </h4>
              <h5
                className={`hidden sm:block pl-10 pb-6 ${
                  index === 0 ? "col-span-2" : "col-span-3"
                }`}
              >
                {item.label}
              </h5>
              <CTALink
                href={item.cta.url}
                text={item.cta.label}
                className="col-span-4 ml-6 sm:ml-10 sm:col-span-3 mb-[32px] sm:mb-[50px] w-max uppercase"
                variant="tertiary"
                theme="ecru"
                icon={false}
              />
            </div>
          </div>
        </div>
      );
    });
  }, [CarouselItems]);

  return (
    <section>
      <div className="pt-16 pb-[25px] sm:pt-[117px] sm:pb-[103px]">
        <div className="section-inner grid grid-cols-4 gap-y-0 gap-x-6 sm:grid-cols-12 ">
          {/*  (each image (408) + gap(24)) * 3; // each image width + gap * visible items for desktop (each image (327) + gap(24)) * 3; // each image width + gap * visible items for mobile md:w-[1360px]  */}
          {/* <div
            ref={ref}
            className={`col-span-4 sm:col-span-12 sm:col-start-1 md:col-start-2 lg:col-start-3 mt-[41px] lg:mt-[50px] w-[327px] sm:w-[727px] md:w-[866px] lg:w-[1300px] mx-auto my-0`}

          > */}
          {/* w-[351px] mx-auto md:w-[868px] */}
          <div
            ref={ref}
            className={`${styles.carouselContainer} col-span-4 sm:col-span-12 sm:col-start-1 md:col-start-2 lg:col-start-3 mt-[41px] lg:mt-[50px] w-[327px] md:w-[868px]`}
          >
            {/*  (each image (408) + gap(24)) * 3; // each image width + gap * visible items for desktop (each image (327) + gap(24)) * 3; // each image width + gap * visible items for mobile  */}
            {/* w-[351px] sm:w-[727px] md:w-[866px] lg:w-[1300px] */}

            {/* <AliceCarousel
              mouseTracking
              responsive={responsive}
              disableDotsControls
              keyboardNavigation={true}
              items={displayedItems}
              renderPrevButton={({ isDisabled }) => getPrevButton(isDisabled)}
              renderNextButton={({ isDisabled }) => getNextButton(isDisabled)}
            /> */}
            <Slider {...settings}>{displayedItems}</Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
