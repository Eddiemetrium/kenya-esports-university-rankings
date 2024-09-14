"use client";

import { Img, Heading, Text, Slider, Button } from "../../components";
import React from "react";

export default function PlayersRowSeven() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="flex h-[53.88rem] items-center justify-center self-stretch bg-[url(/images/img_group_2518.png)] bg-cover bg-no-repeat py-[5.75rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs flex justify-center md:px-[1.25rem]">
        <div className="flex w-full flex-col gap-[2.50rem]">
          <div className="flex items-start gap-[1.88rem] sm:flex-col">
            <Img
              src="img_overflow_menu_indigo_a200.svg"
              width={30}
              height={26}
              alt="Overflow menu"
              className="mt-[0.88rem] h-[1.63rem] sm:mt-0 sm:w-full"
            />
            <Heading
              as="h2"
              className="w-[38%] self-center text-[2.88rem] font-bold uppercase leading-[4.56rem] tracking-[8.86rem] text-white-a700 md:text-[2.63rem] sm:w-full sm:text-[2.25rem]"
            >
              Latest Match
            </Heading>
          </div>

          <div className="mx-[1.25rem] flex flex-col gap-[1.13rem] md:mx-8">
            <div className="flex justify-end gap-[0.63rem]">
              <Button
                onClick={() => {
                  sliderRef?.current?.slidePrev();
                }}
                size="sm"
                shape="round"
                className="w-[3.13rem] rounded-[3px] px-[0.50rem]"
              >
                <Img src="img_slick_arrow_left.svg" width={14} height={20} />
              </Button>
              <Button
                onClick={() => {
                  sliderRef?.current?.slideNext();
                }}
                size="sm"
                shape="round"
                className="w-[3.13rem] rounded-[3px] px-[0.50rem]"
              >
                <Img
                  src="img_slick_arrow_left_white_a700.svg"
                  width={14}
                  height={20}
                />
              </Button>
            </div>

            <div className="relative h-[31.38rem] content-center md:h-auto">
              <div className="sliderlockone mx-auto flex w-full">
                <Slider
                  autoplay
                  autoPlayInterval={2008}
                  responsive={{
                    e: { items: 1 },
                    551: { items: 1 },
                    1851: { items: 1 },
                  }}
                  renderDotsItem={(props) => {
                    return props?.isActive ? (
                      <div className="mr-[1.25rem] inline-block h-[8.75rem] w-[8.88rem] cursor-pointer rounded-[58%] bg-white-a7ee" />
                    ) : (
                      <div className="mr-[1.25rem] inline-block h-[8.75rem] w-[8.88rem] cursor-pointer rounded-[58%] bg-gray-400_66" />
                    );
                  }}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  items={[...Array(3)].map((_, index) => (
                    <React.Fragment key={index}>
                      <div className="flex gap-[1.25rem] md:flex-col">
                        <div className="flex-1 md:self-stretch">
                          <div className="relative z-[3] flex h-[10.38rem] items-center justify-center bg-[url(/images/img_group_513.png)] bg-cover bg-no-repeat p-[1.13rem] md:h-auto">
                            <div className="flex w-[86%] flex-col gap-[0.13rem] md:w-full">
                              <div className="flex sm:flex-col">
                                <div className="flex flex-1 items-center justify-between gap-[1.25rem] sm:self-stretch">
                                  <Img
                                    src="img_lock.svg"
                                    width={80}
                                    height={74}
                                    alt="Lock"
                                    className="h-[4.63rem] w-[24%] object-contain"
                                  />
                                  <Heading
                                    size="heading3x1"
                                    as="h3"
                                    className="w-[12%] text-[1.88rem] font-semibold uppercase leading-[3.0rem] text-indigo-a200 md:text-[1.75rem] sm:text-[1.63rem]"
                                  >
                                    142
                                  </Heading>
                                  <Heading
                                    size="text2x1"
                                    as="h4"
                                    className="w-[6%] text-[1.25rem] font-medium uppercase leading-[2.0rem] text-gray-500_07"
                                  >
                                    VS
                                  </Heading>
                                  <Heading
                                    size="heading3x1"
                                    as="h5"
                                    className="mr-[3.88rem] w-[10%] text-[1.88rem] font-semibold uppercase leading-[3.00rem] text-white-a700 md:text-[1.75rem] sm:text-[1.63rem]"
                                  >
                                    98
                                  </Heading>
                                </div>
                              </div>
                              <div className="mx-[1.75rem] flex flex-col items-center md:mx-0">
                                <Text
                                  size="textx1"
                                  as="p"
                                  className="text-center text-[1.13rem] font-medium uppercase leading-[1.75rem] text-white-a700"
                                >
                                  SUMMER INTERNATIONAL CUP
                                </Text>
                                <Heading
                                  size="texts"
                                  as="h6"
                                  className="text-[0.75rem] font-normal uppercase leading-[1.19rem] text-gray-400"
                                >
                                  January 21, 2020
                                </Heading>
                              </div>
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
