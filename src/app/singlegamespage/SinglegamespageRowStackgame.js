"use client";
import { Img, Button, Slider, Text, Heading } from "../../components";
import React from "react";

export default function SinglegamespageStackgame() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="relative h-[51.88rem] overflow-auto">
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-center justify-center md:relative md:flex-col">
        <Img
          src="img_rectangle_197.svg"
          width={316}
          height={316}
          alt="Image Ten"
          className="relative z-[9] mb-[12.00rem] h-[19.75rem] w-[19.75rem] self-end md:w-full md:self-auto"
        />
        <div className="relative ml-[-12.88rem] flex h-[51.88rem] w-[86%] items-center justify-center bg-[url(/images/img_group_2466.png)] bg-cover bg-no-repeat py-[6.25rem] md:ml-0 md:h-auto md:w-full md:p-[1.25rem]">
          <div className="container-xs flex justify-center px-[3.50rem] md:px-[1.25rem]">
            <div className="flex w-[92%] flex-col items-center gap-[3.75rem] md:w-full sm:gap-[1.88rem]">
              <div className="mx-[13.25rem] flex flex-col items-center gap-[1.25rem] self-stretch md:mx-0">
                <Heading
                  as="h2"
                  className="text-[2.88rem] font-bold uppercase tracking-[0.06rem] text-white-a700 md:text-[2.63rem] sm:text-[2.25rem]"
                >
                  game screenshots
                </Heading>
                <Text
                  size="textxl"
                  as="p"
                  className="self-stretch text-center text-[1.13rem] font-normal leading-[1.75rem] text-gray-500_05"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </div>
              <div className="mx-auto flex w-full gap-[1.25rem] self-stretch md:mx-0 md:flex-col">
                <Slider
                  autoplay
                  autoPlayInterval={2000}
                  responsive={{
                    0: { items: 1 },
                    551: { items: 1 },
                    1051: { items: 3 },
                  }}
                  disableDotsControls
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  items={[...Array(9)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="px-[0.63rem]">
                        <div className="h-[19.75rem] bg-gray-500_05" />
                      </div>
                    </React.Fragment>
                  ))}
                />
                <div className="flex gap-[0.63rem]">
                  <Button
                    shape="round"
                    onClick={() => {
                      sliderRef?.current?.slidePrev();
                    }}
                    className="w-[3.13rem] rounded-[3px] px-[0.63rem]"
                  >
                    <Img
                      src="img_slick_arrow_left.svg"
                      width={14}
                      height={22}
                    />
                  </Button>
                  <Button
                    shape="round"
                    onClick={() => {
                      sliderRef?.current?.slideNext();
                    }}
                    className="w-[3.13rem] rounded-[3px] px-[0.63rem]"
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
        </div>
        <Img
          src="img_rectangle_197.svg"
          width={316}
          height={316}
          alt="Image Eleven"
          className="absolute bottom-[23%] right-[-6.88rem] m-auto h-[19.75rem] w-[19.75rem]"
        />
      </div>
    </div>
  );
}
