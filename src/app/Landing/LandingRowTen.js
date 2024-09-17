"use client";
import { Img, Heading, Text, Slider, Button } from "../../../components";
import React from "react";

export default function LandingRowTen() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="flex h-[57.88rem] items-center justify-center self-stretch bg-[url(/images/img_group_2524.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs flex justify-center md:px-[1.25rem]">
        <div className="flex w-full flex-col gap-[3.13rem]">
          <div className="flex items-start gap-[1.88rem] sm:flex-col">
            <Img
              src="img_overflow_menu_indigo_a200.svg"
              width={30}
              height={30}
              alt="Overflowmenu"
              className="mt-[1.00rem] h-[1.88rem] w-[1.88rem] sm:mt-0 sm:w-full"
            />
            <Heading as="h5" className="self-center uppercase tracking-[0.06rem]">
              Latest Match
            </Heading>
          </div>

          <div className="mx-[1.25rem] flex flex-col gap-[1.25rem] md:mx-0">
            <div className="flex justify-end gap-[0.63rem]">
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
                <Img src="img_slick_arrow_left_white_a700.svg" width={14} height={22} />
              </Button>
            </div>

            <div className="relative h-[33.75rem] content-center md:h-auto">
              <div className="sliderlockone mx-auto flex w-full">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{
                    0: { items: 1 },
                    551: { items: 1 },
                    1051: { items: 1 },
                  }}
                  renderDotsItem={(props) => {
                    return props?.isActive ? (
                      <div className="mr-[1.25rem] inline-block h-[0.88rem] w-[0.88rem] cursor-pointer rounded-[50%] bg-white-a700" />
                    ) : (
                      <div className="mr-[1.25rem] inline-block h-[0.88rem] w-[0.88rem] cursor-pointer rounded-[50%] bg-gray-400_66" />
                    );
                  }}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="flex gap-[1.25rem] md:flex-col">
                        <div className="flex-1 md:self-stretch">
                          <div className="flex h-[11.25rem] items-center justify-center bg-[url(/images/img_group_513.png)] bg-cover bg-no-repeat p-[1.25rem] md:h-auto">
                            <div className="flex w-[86%] flex-col gap-[0.25rem] md:w-full">
                              <div className="flex sm:flex-col">
                                <div className="flex flex-1 items-center justify-between gap-[1.25rem] sm:self-stretch">
                                  <Img
                                    src="img_lock.svg"
                                    width={88}
                                    height={80}
                                    alt="Lock"
                                    className="h-[5.00rem] w-[5.00rem]"
                                  />
                                  <Heading size="heading3x1" as="h6" className="uppercase !text-indigo-a200">
                                    142
                                  </Heading>
                                  <Heading size="text2x1" as="p" className="uppercase !text-gray-500_07">
                                    vs
                                  </Heading>
                                  <Heading size="heading3x1" as="h3" className="mr-[3.88rem] uppercase">
                                    98
                                  </Heading>
                                </div>
                              </div>
                              <Img
                                src="img_television.svg"
                                width={80}
                                height={80}
                                alt="Television"
                                className="h-[5.00rem] w-[5.00rem] sm:w-full"
                              />
                            </div>
                            <div className="mx-[7.13rem] flex flex-col items-center md:mx-0">
                              <Text size="textxl" as="p" className="text-[1.13rem] font-medium uppercase text-white-a700">
                                SUMMER INTERNATIONAL CUP
                              </Text>
                              <Heading size="texts" as="p" className="text-[0.75rem] font-normal uppercase text-gray-400">
                                January 21, 2020
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
