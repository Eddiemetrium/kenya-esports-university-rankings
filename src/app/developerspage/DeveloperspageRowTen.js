"use client";

import { Button, Img, Text, Heading, Slider } from "../../../components";
import React from "react";

export default function DeveloperspageRowTen() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="flex h-[74.25rem] items-center justify-center bg-[url(/images/img_group_713.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs flex justify-center px-[3.50rem] md:px-[1.25rem]">
        <div className="flex w-full flex-col items-center gap-[4.38rem] md:gap-[3.25rem] sm:gap-[2.19rem]">
          <Heading as="h2" className="uppercase tracking-[0.06rem]">
            building immersive stories
          </Heading>

          <div className="relative h-[52.75rem] content-center self-stretch md:h-auto">
            <div className="mx-auto flex w-full">
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
                    <div className="flex flex-col items-start gap-[2.63rem] bg-gray-400">
                      <Img
                        src="img_overflow_menu.svg"
                        width={100}
                        height={100}
                        alt="Overflow menu"
                        className="mt-[14.00rem] h-[6.25rem] w-[6.25rem] self-center"
                      />
                      <div className="flex w-[56%] justify-center bg-black-900_87 p-[1.88rem] md:w-full sm:p-[1.25rem]">
                        <div className="flex w-full flex-col gap-[1.25rem]">
                          <div className="flex items-center justify-center gap-[0.63rem] sm:flex-col">
                            <div className="h-[0.13rem] w-[1.25rem] bg-indigo-a200" />
                            <Heading
                              size="heading2x1"
                              as="h3"
                              className="uppercase"
                            >
                              how to make adventure game
                            </Heading>
                          </div>
                          <Text
                            size="textx1"
                            as="p"
                            className="w-[84%] leading-[1.75rem] !text-blue_gray-200 md:w-full"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>

            <div className="absolute bottom-[2rem] left-0 right-0 m-auto flex justify-between px-[14.25rem] py-[7.75rem] md:p-[1.25rem]">
              <Button
                shape="square"
                onClick={() => {
                  sliderRef?.current?.slidePrev();
                }}
                className="w-[2.75rem]"
              >
                <Img src="img_overflow_menu.svg" width={44} height={44} />
              </Button>

              <Button
                shape="square"
                onClick={() => {
                  sliderRef?.current?.slideNext();
                }}
                className="w-[2.75rem]"
              >
                <Img src="img_overflow_menu.svg" width={44} height={44} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
