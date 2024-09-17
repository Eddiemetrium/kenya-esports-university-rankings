"use client";
import { Button, Img, Slider, Text, Heading } from "../../../components";
import React from "react";

export default function GamesRowNine() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="relative z-[5] flex h-[50.13rem] items-center justify-center bg-[url(/images/img_group_2298.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs flex justify-center md:px-[1.25rem]">
        <div className="flex w-full flex-col gap-[4.38rem] md:gap-[3.25rem] sm:gap-[2.19rem]">
          <div className="flex items-center gap-[1.88rem] sm:flex-col">
            <Img
              src="img_overflow_menu_indigo_a200.svg"
              width={30}
              height={30}
              alt="Overflowmenu"
              className="h-[1.88rem] w-[1.88rem] sm:w-full"
            />
            <Heading as="h2" className="uppercase tracking-[0.06rem]">
              User Reviews
            </Heading>
          </div>
          <div className="mx-[5.75rem] flex flex-col items-center gap-[3.13rem] md:mx-8">
            <div className="relative h-[22.88rem] content-center self-stretch md:h-auto">
              <div className="mx-auto flex flex-1 flex-col items-center px-[3.50rem] md:px-[1.25rem]">
                <Text
                  size="textx1"
                  as="p"
                  className="self-stretch text-center capitalize leading-[1.75rem] !text-white-a780"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in{" "}
                </Text>
                <Heading
                  size="headingx1"
                  as="h3"
                  className="mt-[7.75rem] tracking-[0.06rem]"
                >
                  ANDY CAROLL
                </Heading>
                <Text
                  size="textxl"
                  as="p"
                  className="tracking-[0.06rem] !text-blue_gray-200"
                >
                  Gamers
                </Text>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto w-full border border-solid border-gray-400_33 px-[3.58rem] py-[8.0rem] md:p-[1.25rem]">
                <Slider
                  autoplay
                  autoPlayInterval={2000}
                  responsive={{
                    0: { items: 1 },
                    551: { items: 1 },
                    1851: { items: 1 },
                  }}
                  disableDotsControls
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="h-[5.0rem] rounded-[40px] bg-gray-400" />
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
            <div className="flex gap-[0.63rem]">
              <Button
                shape="round"
                onClick={() => sliderRef?.current?.slidePrev()}
                className="w-[3.13rem]"
              >
                <Img src="img_slick_arrow_left.svg" width={14} height={22} />
              </Button>
              <Button
                shape="round"
                onClick={() => sliderRef?.current?.slideNext()}
                className="w-[3.13rem]"
              >
                <Img
                  src="img_slick_arrow_left_white_a780.svg"
                  width={14}
                  height={22}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
