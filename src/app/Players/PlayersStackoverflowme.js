"use client";
import { Button, Heading, Text, Img, Slider } from "../../../components";
import React from "react";

export default function PlayersStackoverflowme() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="relative mt-[3.13rem] h-[34.50rem]">
      <div className="absolute bottom-0 left-0 right-0 m-auto w-full">
        <Slider
          autoplay
          autoPlayInterval={2008}
          responsive={{
            0: { items: 1 },
            551: { items: 1 },
            1051: { items: 1 },
          }}
          disableDotsControls
          activeIndex={sliderState}
          onSlideChanged={(e) => setSliderState(e?.item)}
          ref={sliderRef}
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="flex items-center gap-[1.31rem] md:flex-col">
                <div className="flex w-[68%] justify-center bg-gray-400 px-[3.50rem] py-[11.38rem] md:w-full md:p-[1.25rem]">
                  <Img
                    src="img_overflow_menu.svg"
                    width={100}
                    height={100}
                    alt="Overflow menu"
                    className="mt-[1.75rem] h-[6.25rem] w-[6.25rem]"
                  />
                </div>
                <Img
                  src="img_rectangle_250.png"
                  width={114}
                  height={424}
                  alt="Image"
                  className="h-[26.58rem] w-[8%] self-end object-contain md:w-full md:self-auto"
                />
              </div>
            </React.Fragment>
          ))}
        />
      </div>
      <div className="container-xs absolute left-0 right-0 top-0 my-auto flex flex-col gap-[8.63rem] md:gap-[6.44rem] md:px-[1.25rem] sm:gap-[4.31rem]">
        <div className="flex justify-end gap-[0.63rem]">
          <Button
            shape="round"
            onClick={() => sliderRef?.current?.slidePrev()}
            className="w-[3.13rem] rounded-[3px] px-[0.63rem]"
          >
            <Img src="img_slick_arrow_left.svg" width={14} height={22} />
          </Button>
          <Button
            shape="round"
            onClick={() => sliderRef?.current?.slideNext()}
            className="w-[3.13rem] rounded-[3px] px-[0.63rem]"
          >
            <Img
              src="img_slick_arrow_left_white_a780.svg"
              width={14}
              height={22}
            />
          </Button>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-start gap-[1.86rem] self-stretch">
            <div className="mt-[8.75rem] h-[0.13rem] w-[2.58rem] bg-indigo-a280" />
            <Text
              size="textxl"
              as="p"
              className="self-center text-[1.13rem] font-normal uppercase text-indigo-a200"
            >
              Tournaments
            </Text>
          </div>
          <Heading
            as="h2"
            className="mt-[0.63rem] text-[2.88rem] font-bold uppercase leading-[130%] tracking-[0.06rem] text-white-a700 md:text-[2.63rem] sm:text-[2.25rem]"
          >
            Best Highlight <br />
            of the Season
          </Heading>
          <Button
            color="indigo_A200"
            size="xl"
            shape="square"
            className="mt-[3.75rem] min-w-[12.50rem] px-[2.13rem] font-semibold capitalize sm:px-[1.25rem]"
          >
            View Now
          </Button>
        </div>
      </div>
    </div>
  );
}
