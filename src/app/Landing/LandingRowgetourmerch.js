"use client";

import { Button, Img, Heading, Slider, Text } from "../../components";
import React from "react";

export default function LandingRowgetourmerch() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="flex h-[58.50rem] w-[92%] items-center justify-center bg-[url(/images/img_group_2520.png)] bg-cover bg-no-repeat py-[4.88rem] md:h-auto md:w-full md:py-[1.25rem]">
      <div className="flex w-full flex-col items-center gap-[3.75rem] sm:gap-[1.88rem]">
        <div className="container-xs flex flex-col items-center gap-[1.25rem] px-[3.50rem] md:px-[1.25rem]">
          <Heading as="h3" className="uppercase tracking-[0.06rem]">
            Get Our Merch
          </Heading>
          <Text
            size="textxl"
            as="p"
            className="w-[52%] text-center leading-[1.75rem] md:w-full"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>
        <div className="mx-auto flex w-full px-[3.50rem] md:px-[1.25rem]">
          <Slider
            autoplay
            autoPlayInterval={2000}
            responsive={{
              0: { items: 1 },
              551: { items: 1 },
              1951: { items: 1 },
            }}
            disableDotsControls
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setSliderState(e?.item);
            }}
            ref={sliderRef}
            items={[...Array(3)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex md:flex-col">
                  <div className="flex w-[94%] justify-center md:w-full md:flex-col">
                    <Img
                      src="img_rectangle_197.svg"
                      width={316}
                      height={316}
                      alt="Image"
                      className="h-[19.75rem] w-[19.75rem] md:w-full"
                    />
                    <div className="relative h-[19.75rem] flex-1 content-center px-[1.25rem] md:h-auto md:w-full md:flex-none md:self-stretch">
                      <div className="flex w-full justify-center gap-[1.25rem] overflow-x-scroll md:flex-col">
                        <div className="h-[19.75rem] w-[19.75rem] bg-gray-500_e5" />
                        <div className="flex w-[19.75rem] flex-col items-center justify-center gap-[1.13rem] bg-indigo-a28e_b2 px-[1.63rem] py-[5.88rem] md:py-[1.25rem] sm:p-[1.25rem]">
                          <Heading
                            size="headingx1"
                            as="h4"
                            className="font-bold uppercase tracking-[0.06rem]"
                          >
                            Headphone Prodigy
                          </Heading>
                          <Heading
                            size="heading6x1"
                            as="h5"
                            className="mb-[0.25rem] uppercase tracking-[0.06rem] !text-gray-400"
                          >
                            $211
                          </Heading>
                        </div>
                        <div className="h-[19.75rem] w-[19.75rem] bg-gray-500_e5" />
                      </div>
                    </div>
                    <Img
                      src="img_rectangle_197.svg"
                      width={316}
                      height={316}
                      alt="Image"
                      className="relative z-[11] ml-[-5.63rem] h-[19.75rem] w-[19.75rem] md:ml-0 md:w-full"
                    />
                  </div>
                </div>
              </React.Fragment>
            ))}
          />
        </div>
        <div className="container-xs flex flex-col items-center px-[3.50rem] md:px-[1.25rem]">
          <div className="flex gap-[0.63rem]">
            <Button
              shape="round"
              onClick={() => {
                sliderRef?.current?.slidePrev();
              }}
              className="w-[3.13rem]"
            >
              <Img src="img_slick_arrow_left.svg" width={14} height={22} />
            </Button>
            <Button
              shape="round"
              onClick={() => {
                sliderRef?.current?.slideNext();
              }}
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
  );
}
