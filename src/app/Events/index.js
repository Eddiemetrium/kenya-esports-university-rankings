"use client";
import { Img, Text, Heading, Button, Slider } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfile10 from "../../components/UserProfile10";
import EventsFormevents from "./EventsFormevents";
import EventsRowEight from "./EventsRowEight";
import EventsRowFifteen from "./EventsRowFifteen";
import EventsRowHunter from "./EventsRowHunter";
import React from "react";

export default function EventsPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="w-full overflow-auto bg-white-a700">
      <div className="flex flex-col items-center gap-[4.50rem] md:gap-[3.38rem] sm:gap-[2.25rem]">
        <div className="self-stretch">
          <div>
            <Header />
            <div className="relative z-[1] mt-[-3.13rem]">
              <div>
                <div className="h-[0.06rem] bg-blue_gray-700" />
                <div className="bg-gray-900_a5">
                  <div className="relative mt-[6.25rem] h-[27.25rem] content-center md:h-auto">
                    <div className="mx-auto flex w-full">
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
                        onSlideChanged={(e) => setSliderState(e?.item)}
                        ref={sliderRef}
                        items={[...Array(3)].map(() => (
                          <React.Fragment key={Math.random()}>
                            <div className="flex flex-col gap-[6.25rem] md:gap-[4.69rem] sm:gap-[3.13rem]">
                              <div className="relative h-[20.88rem]">
                                <div className="absolute left-0 right-0 top-[1.88rem] m-auto flex flex-1 justify-center px-[3.50rem] md:px-[1.25rem]">
                                  <div className="mb-[0.38rem] flex w-[86%] flex-col gap-[1.00rem] md:w-full">
                                    <div className="flex sm:flex-col">
                                      <Button
                                        color="gray_600_4c"
                                        size="4x1"
                                        shape="square"
                                        className="min-w-[6.25rem] font-bold capitalize"
                                      />
                                      <Button
                                        color="gray_600_4c"
                                        size="4x1"
                                        shape="square"
                                        className="ml-[0.75rem] min-w-[6.25rem] font-bold capitalize sm:ml-0"
                                      />
                                      <Button
                                        color="gray_600_4c"
                                        size="4x1"
                                        shape="square"
                                        className="ml-[0.75rem] min-w-[6.25rem] font-bold capitalize sm:ml-0"
                                      />
                                      <Button
                                        color="gray_600_4c"
                                        size="4x1"
                                        shape="square"
                                        className="ml-[0.63rem] min-w-[6.25rem] font-bold capitalize sm:ml-0"
                                      />
                                    </div>
                                    <div className="mx-[1.88rem] flex justify-center md:mx-0 sm:flex-col">
                                      <Heading
                                        size="text2x1"
                                        as="h1"
                                        className="font-normal capitalize text-gray-400"
                                      >
                                        DAY
                                      </Heading>
                                      <div className="flex flex-1 flex-wrap pl-[4.13rem] pr-[3.50rem] md:px-[1.25rem] sm:self-stretch">
                                        <Heading
                                          size="text2x1"
                                          as="h2"
                                          className="font-normal capitalize text-gray-400"
                                        >
                                          HOUR
                                        </Heading>
                                        <Heading
                                          size="text2x1"
                                          as="h3"
                                          className="ml-[3.25rem] font-normal capitalize text-gray-400"
                                        >
                                          MINUTE
                                        </Heading>
                                        <Heading
                                          size="text2x1"
                                          as="h4"
                                          className="ml-[2.38rem] font-normal uppercase text-gray-400"
                                        >
                                          SECOND
                                        </Heading>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bottom-0 right-[9%] top-0 my-auto flex h-max w-[48%] flex-col items-start">
                                  <Heading
                                    size="heading13x1"
                                    as="h5"
                                    className="font-avenirnext uppercase leading-[140%] tracking-[0.13rem]"
                                  >
                                    <span className="text-white-a700">
                                      <>
                                        summer party
                                        <br />
                                      </>
                                    </span>
                                    <span className="text-indigo-a200">
                                      international
                                    </span>
                                    <span className="text-white-a700">
                                      &nbsp;cup
                                    </span>
                                  </Heading>
                                  <Text
                                    size="textxl"
                                    as="p"
                                    className="mt-[0.50rem] w-[62%] leading-[1.75rem] md:w-full md:px-[1.25rem]"
                                  >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipiscing elit, sed do
                                  </Text>
                                  <Button
                                    color="indigo_A200"
                                    size="x1"
                                    shape="square"
                                    className="mt-[3.13rem] min-w-[12.50rem] font-semibold capitalize"
                                  >
                                    Read More
                                  </Button>
                                </div>
                              </div>
                              <div className="h-[0.13rem] bg-gradient7" />
                            </div>
                          </React.Fragment>
                        ))}
                      />
                      <div className="absolute left-0 right-0 top-[33%] m-auto flex flex-1 justify-between gap-[1.25rem]">
                        <Button
                          shape="round"
                          onClick={() => sliderRef?.current?.slidePrev()}
                          className="w-[3.13rem]"
                        >
                          <Img
                            src="img_slick_arrow_left.svg"
                            width={14}
                            height={22}
                          />
                        </Button>
                        <Button
                          shape="round"
                          onClick={() => sliderRef?.current?.slideNext()}
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
              </div>
            </div>
          </div>
        </div>

        <div className="container-xs px-[0.63rem] md:px-[1.25rem]">
          <div className="flex items-center justify-center md:flex-col">
            <div className="flex w-[24%] justify-center md:w-full">
              <div className="flex w-full items-end">
                <div className="relative h-[2.75rem] w-[24%] self-center">
                  <Img
                    src="img_vector.svg"
                    width={24}
                    height={26}
                    alt="Vector"
                    className="absolute bottom-0 left-0 right-0 m-auto h-[1.63rem]"
                  />
                  <Img
                    src="img_vector_gray_500_03.svg"
                    width={38}
                    height={40}
                    alt="Vector"
                    className="absolute bottom-0 left-[0.06rem] top-8 my-auto h-[2.50rem]"
                  />
                </div>
                <div className="mt-[0.50rem] h-[1.50rem] w-[0.25rem] self-start bg-gray-500_03" />
              </div>
            </div>
            <div className="mt-[0.25rem] flex items-end self-start px-[3.25rem] md:self-auto md:px-[1.25rem]">
              <Img
                src="img_vector_gray_500_03_38x42.svg"
                width={42}
                height={38}
                alt="Vector"
                className="h-[2.38rem] self-center"
              />
              <Img
                src="img_vector_gray_500_03_18x4.svg"
                width={4}
                height={18}
                alt="Vector"
                className="mb-[0.38rem] ml-[0.75rem] h-[1.13rem]"
              />
            </div>
          </div>
        </div>

        <EventsRowEight />
      </div>

      <div className="relative h-[47.75rem] content-center md:h-auto">
        <div className="mx-auto flex flex-1 items-center md:flex-col">
          <Img
            src="img_rectangle_77.svg"
            width={400}
            height={250}
            alt="Image"
            className="relative z-[3] mb-[12.00rem] h-[15.63rem] w-[20%] self-end object-cover md:mb-0"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
