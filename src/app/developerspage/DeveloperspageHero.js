"use client";

import { Button, Heading, Text, Slider, Img } from "../../../components";
import React from "react";

export default function DeveloperspageHero() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="relative mt-[-3.13rem] h-[37.25rem] bg-[url(/images/img_hero.png)] bg-cover bg-no-repeat md:h-auto">
      <div className="mt-[3.13rem] flex items-center md:flex-col">
        <Img
          src="img_couple_of_gamer.png"
          width={608}
          height={596}
          alt="Coupleofgamer"
          className="relative z-[1] h-[37.25rem] w-[34%] object-contain md:w-full"
        />
        <div className="relative ml-[-33.38rem] flex w-[91%] flex-col items-start md:ml-0 md:w-full md:px-[1.25rem]">
          <div className="container-xs flex flex-col items-center px-[3.5rem] md:px-[1.25rem]">
            <div className="flex gap-[0.63rem]">
              <Button
                onClick={() => {
                  sliderRef?.current?.slidePrev();
                }}
                shape="round"
                className="w-[3.13rem]"
              >
                <Img src="img_slick_arrow_left.svg" width={14} height={22} />
              </Button>
              <Button
                onClick={() => {
                  sliderRef?.current?.slideNext();
                }}
                shape="round"
                className="w-[3.13rem]"
              >
                <Img
                  src="img_slick_arrow_left_white_a700.svg"
                  width={14}
                  height={22}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Slider
        className="relative mx-auto mt-[-2.63rem] flex w-[96%] md:w-full"
        autoPlay
        autoPlayInterval={2000}
        responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
        disableDotsControls
        activeIndex={sliderState}
        onSlideChanged={(e) => {
          setSliderState(e?.item);
        }}
        ref={sliderRef}
        items={[...Array(3)].map(() => (
          <React.Fragment key={Math.random()}>
            <div className="flex items-start md:flex-col">
              <div className="flex flex-1 flex-col items-start md:self-stretch">
                <Text
                  size="textxl"
                  as="p"
                  className="uppercase !text-gray-500_02"
                >
                  developers page
                </Text>
                <Heading
                  size="heading2xl"
                  as="h1"
                  className="mt-[0.63rem] !font-bold uppercase leading-[145%] tracking-[0.13rem]"
                >
                  <span className="text-white-a700">WE&nbsp;</span>
                  <span className="text-indigo-a200">DEVELOP</span>
                  <span className="text-white-a700">
                    &nbsp;GAMES WITH <br /> CREATIVE GAMEPLAY&nbsp;
                  </span>
                </Heading>
                <Button
                  color="indigo_A200"
                  size="xl"
                  shape="square"
                  className="mt-[3.63rem] min-w-[12.50rem] font-avenirnext font-semibold capitalize"
                >
                  Read More
                </Button>
              </div>
              <div className="mt-[2.63rem] flex w-[32%] flex-col items-end gap-[0.63rem] self-end md:w-full md:self-auto">
                <div className="h-[11.25rem] w-[82%] bg-gray-400" />
                <div className="h-[11.25rem] w-[82%] bg-gray-400" />
              </div>
            </div>
          </React.Fragment>
        ))}
      />
    </div>
  );
}
