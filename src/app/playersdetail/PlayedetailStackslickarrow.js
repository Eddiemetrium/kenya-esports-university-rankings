"use client";
import { Text, Heading, Button, Slider, Img } from "../../../components";
import React from "react";

export default function Playersdetailstackslickarrow() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="relative h-[40.00rem] md:h-auto">
      <div className="mt-[5.80rem] flex gap-[0.63rem]">
        <Button
          onClick={() => {
            sliderRef?.current?.slidePrev();
          }}
          shape="round"
          className="w-[3.13rem] rounded-[3px] px-[0.63rem]"
        >
          <Img
            src="img_slick_arrow_left.svg"
            width={14}
            height={22}
            alt="Previous"
          />
        </Button>
        <Button
          onClick={() => {
            sliderRef?.current?.slideNext();
          }}
          shape="round"
          className="w-[3.13rem] rounded-[3px] px-[0.63rem]"
        >
          <Img
            src="img_slick_arrow_left_white_a788.svg"
            width={14}
            height={22}
            alt="Next"
          />
        </Button>
      </div>

      <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max flex-col gap-[4.38rem] md:gap-[3.25rem] md:px-[1.25rem] sm:gap-[2.19rem]">
        <div className="flex items-start gap-[1.88rem]">
          <Img
            src="img_overflow_menu_indigo_a288.svg"
            width={30}
            height={30}
            alt="Overflow menu"
            className="mt-[1.00rem] h-[1.88rem] w-[1.88rem]"
          />
          <Heading
            as="h5"
            className="self-center text-[2.88rem] font-bold uppercase tracking-[0.06rem] text-white-a7e8 md:text-[2.63rem] sm:text-[2.25rem]"
          >
            Latest News
          </Heading>
        </div>

        <div className="mx-auto flex w-full">
          <Slider
            autoplay
            autoPlayInterval={2008}
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
                <div className="flex gap-[1.25rem] md:flex-col">
                  <div className="relative h-[31rem] w-full content-center md:h-auto">
                    <div className="mx-auto flex flex-1 flex-col gap-[1.25rem] bg-gray-908_85 shadow-xs">
                      <div className="flex bg-gray-400 p-[1.25rem]">
                        <Button
                          color="gray_960_7f"
                          size="xs"
                          shape="round"
                          className="mb-[18.75rem] min-w-[7.88rem] rounded-[3px] px-[0.38rem] font-medium uppercase"
                        >
                          January 21, 2020
                        </Button>
                      </div>
                      <div className="mx-[1.25rem] mb-[5.38rem] flex flex-col items-start md:mx-8">
                        <div className="flex h-[1.50rem] w-[26%] items-center justify-center bg-[url(/images/img_group_543.svg)] bg-cover bg-no-repeat md:h-auto md:w-full">
                          <Heading
                            size="text"
                            as="h6"
                            className="text-[0.75rem] font-medium uppercase text-white-a7e0"
                          >
                            Stories
                          </Heading>
                        </div>
                        <Heading
                          size="headinglg"
                          as="h5"
                          className="mt-[1.25rem] text-[1.25rem] font-semibold uppercase leading-[2rem] text-white-a7e0"
                        >
                          Sed ut perspiciatis unde...
                        </Heading>
                        <Text
                          size="textx1"
                          as="p"
                          className="mt-[0.25rem] w-full text-[1.13rem] font-normal leading-[1.75rem] text-gray-500_05"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </Text>
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
  );
}
