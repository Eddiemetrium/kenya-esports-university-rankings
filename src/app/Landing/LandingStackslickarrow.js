"use client";
import { Text, Heading, Img, Slider, Button } from "../../components";
import React from "react";

export default function LandingStackslickarrow() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="relative h-[54.25rem] content-end self-stretch md:h-auto">
      <div className="mx-auto mb-[6.25rem] flex flex-1 justify-center gap-[0.63rem] px-[3.50rem] md:px-[1.25rem]">
        <Button
          onClick={() => sliderRef.current?.slidePrev()}
          shape="round"
          className="w-[3.13rem] rounded-[3px] px-[0.63rem]"
        >
          <Img src="img_slick_arrow_left.svg" width={14} height={22} />
        </Button>
        <Button
          onClick={() => sliderRef.current?.slideNext()}
          shape="round"
          className="w-[3.13rem] rounded-[3px] px-[0.63rem]"
        >
          <Img
            src="img_slick_arrow_left_white_a700.svg"
            width={14}
            height={22}
          />
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[54.25rem] w-full content-center md:h-auto">
        <div className="mx-auto h-[54.25rem] w-[96%] bg-black-900_e5" />

        <div className="absolute left-0 right-0 top-[12%] m-auto flex items-center gap-[1.88rem] sm:relative sm:flex-col">
          <Img
            src="img_overflow_menu_indigo_a200.svg"
            width={30}
            height={30}
            alt="Overflowmenu"
            className="h-[1.88rem] w-[1.88rem] sm:w-full"
          />
          <Heading
            as="h1"
            className="text-[2.88rem] font-bold uppercase tracking-[0.06rem] text-white-a700 md:text-[2.63rem] sm:px-[1.25rem] sm:text-[2.25rem]"
          >
            Meet our teams
          </Heading>
        </div>

        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto w-full">
          <Slider
            autoplay
            autoPlayInterval={2000}
            responsive={{
              0: { items: 1 },
              551: { items: 1 },
              1051: { items: 1 },
            }}
            disableDotsControls
            activeIndex={sliderState}
            onSlideChanged={(e) => setSliderState(e.item)}
            ref={sliderRef}
            items={[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="relative h-[26.88rem] content-center md:h-auto"
              >
                <div className="mx-auto flex flex-1 md:flex-col">
                  <div className="relative h-[26.88rem] flex-1 content-end md:h-auto md:w-full md:flex-none md:self-stretch md:px-[1.25rem]">
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center md:relative md:flex-col">
                      <Img
                        src="img_rectangle_77.svg"
                        width={360}
                        height={430}
                        alt="Image"
                        className="relative z-[4] h-[26.88rem] w-[24%] object-contain md:w-full"
                      />
                      <div className="relative ml-[-20.63rem] flex flex-1 items-center justify-center self-end md:ml-0 md:flex-col md:self-stretch sm:self-auto">
                        <div className="relative z-[3] flex w-[82%] justify-center self-end md:w-full md:self-auto">
                          <div className="flex w-full justify-between gap-[1.25rem] px-[1.88rem] md:flex-col sm:px-[1.25rem]">
                            <Img
                              src="img_rectangle_71.svg"
                              width={360}
                              height={94}
                              alt="Image"
                              className="ml-[6.13rem] h-[5.88rem] w-[32%] object-contain md:ml-0 md:w-full"
                            />
                            <div className="flex w-[32%] justify-center bg-black-900_87 p-[0.50rem] md:w-full">
                              <div className="mb-[0.25rem] flex flex-col items-center">
                                <Heading
                                  size="headingx1"
                                  as="h4"
                                  className="text-[1.50rem] font-semibold tracking-[0.00rem] text-white-a700 md:text-[1.38rem]"
                                >
                                  GEORGI NOZ
                                </Heading>
                                <Text
                                  size="textxl"
                                  as="p"
                                  className="text-[1.13rem] font-normal tracking-[0.00rem] text-blue_gray-200"
                                >
                                  Backend Developer
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Img
                      src="img_mask_group.png"
                      width={176}
                      height={348}
                      alt="Image"
                      className="relative ml-[-4.88rem] h-[21.75rem] w-[14%] object-contain md:ml-0 md:w-full"
                    />
                  </div>
                </div>

                {/* More team members */}
              </div>
            ))}
          />
        </div>
      </div>
    </div>
  );
}
