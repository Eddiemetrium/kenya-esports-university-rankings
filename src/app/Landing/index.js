"use client";
import { Img, Text, Button, Slider, Heading } from "../../../components";
import VectorImageGallery from "../../../components/VectotImageGallery/index";
import LandingRowFourteen from "./LandingRowFourteen";
import LandingRowSeven from "./LandingRowSeven";
import LandingRowSix from "./LandingRowSix";
import LandingRowTen from "./LandingRowTen";
import LandingRowTwelve from "./LandingRowTwelve";
import LandingRowgetourmerch from "./LandingRowgetourmerch";
import LandingRowtophighlight from "./LandingRowtophighlight";
import LandingRowview from "./LandingRowview";
import LandingStack from "./LandingStack";
import LandingStackslickarrow from "./LandingStackslickarrow";
import Link from "next/link";
import React, { Suspense } from "react";

export default function LandingPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="w-full bg-white-a780">
      <div className="overflow-auto">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center self-stretch">
            <div className="container-xs relative z-[1] flex flex-col items-center px-[3.58rem] md:px-[1.25rem]">
              <Img
                src="img_group_151.svg"
                width={220}
                height={220}
                alt="Image"
                className="h-[13.75rem] w-[13.75rem]"
              />
            </div>

            <div className="relative mt-[-13.75rem] self-stretch">
              <header className="bg-blue_gray-700">
                <div className="flex justify-center border-b-[8.5px] border-solid border-gray-500_01 bg-black-988_85 py-[1.25rem]">
                  <div className="container-xs flex items-center gap-[1.58rem] px-[0.25rem] md:px-[1.25rem]">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[0.88rem] font-normal text-gray-500_85"
                    >
                      Follow us on
                    </Text>
                    <div className="flex items-center gap-[1.25rem] self-end">
                      <Link href="#">
                        <Img
                          src="img_facebook.svg"
                          width={20}
                          height={20}
                          alt="Facebook"
                          className="h-[1.25rem] w-[1.25rem]"
                        />
                      </Link>
                      <Link href="#">
                        <Img
                          src="img_trash.svg"
                          width={20}
                          height={20}
                          alt="Trash"
                          className="h-[1.25rem] w-[1.25rem]"
                        />
                      </Link>
                      <Link href="#">
                        <Img
                          src="img_info.svg"
                          width={20}
                          height={20}
                          alt="Info"
                          className="h-[1.25rem] w-[1.25rem]"
                        />
                      </Link>
                      <Link href="#">
                        <Img
                          src="img_group_188.svg"
                          width={20}
                          height={20}
                          alt="Group"
                          className="h-[1.25rem] w-[1.25rem]"
                        />
                      </Link>
                      <Img
                        src="img_thumbs_up.svg"
                        width={14}
                        height={14}
                        alt="Thumbs up"
                        className="h-[0.88rem] w-[0.88rem]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex h-[6.25rem] items-end justify-center bg-[url(/images/img_group_2492.png)] bg-cover bg-no-repeat md:h-auto">
                  <div className="container-xs mt-[2.13rem] flex justify-center md:px-[1.25rem]">
                    <div className="flex w-[94%] items-start justify-between gap-[1.25rem] md:w-full md:flex-col">
                      <ul className="flex items-start gap-[4.63rem] self-center">
                        <li>
                          <Link href="#">
                            <div className="flex flex-col items-center gap-[1.75rem]">
                              <Heading
                                size="headingmd"
                                as="h6"
                                className="text-[1.13rem] font-bold uppercase text-white-a700"
                              >
                                home
                              </Heading>
                              <div className="h-[0.38rem] w-[6.25rem] bg-indigo-a200" />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <Heading
                              size="headingmd"
                              as="h6"
                              className="text-[1.13rem] font-bold uppercase text-white-a7e8"
                            >
                              pages
                            </Heading>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <Heading
                              size="headingmd"
                              as="h6"
                              className="text-[1.13rem] font-bold uppercase text-white-a780"
                            >
                              Games
                            </Heading>
                          </Link>
                        </li>
                      </ul>
                      <div className="flex w-[36%] items-start justify-between gap-[1.25rem] md:w-full">
                        <ul className="flex flex-wrap gap-[3.50rem] self-center md:gap-[1.25rem]">
                          <li>
                            <Link href="#">
                              <Heading
                                size="headingmd"
                                as="h6"
                                className="text-[1.13rem] font-bold uppercase text-white-a700"
                              >
                                players
                              </Heading>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <Heading
                                size="headingmd"
                                as="h6"
                                className="text-[1.13rem] font-bold uppercase text-white-a700"
                              >
                                sponsor
                              </Heading>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <Heading
                                size="headingmd"
                                as="h6"
                                className="text-[1.13rem] font-bold uppercase text-white-a700"
                              >
                                events
                              </Heading>
                            </Link>
                          </li>
                        </ul>
                        <Link href="#">
                          <Img
                            src="img_search.svg"
                            width={18}
                            height={18}
                            alt="Search"
                            className="h-[1.13rem] w-[1.13rem]"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              <div className="relative h-[37.50rem] content-center md:h-auto">
                <div className="mx-auto flex w-full">
                  <Slider
                    autoPlay={true}
                    autoPlayInterval={2008}
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
                      <React.Fragment key={index}>
                        <div className="flex h-[37.50rem] items-end bg-[url(/images/img_group_2674.png)] bg-cover bg-no-repeat py-[2.38rem] md:h-auto sm:py-[1.25rem]">
                          <LandingRowview />
                        </div>
                      </React.Fragment>
                    ))}
                  />
                </div>
                <div className="absolute left-0 right-0 top-[22%] mx-[2.5rem] my-auto flex flex-1 gap-[0.63rem] md:mx-8">
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
                      alt="Previous"
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
                      src="img_slick_arrow_right.svg"
                      width={14}
                      height={22}
                      alt="Next"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xs mt-[4.63rem] px-[0.63rem] nd:px-[1.25rem]">
          <div className="flex gap-[6.63rem] md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {[...Array(4)].map((_, index) => (
                <VectorImageGallery
                  key={"listvectorone" + index}
                  className="mb-[0.25rem] w-[26%] md:mb-4 md:w-full"
                />
              ))}
            </Suspense>
          </div>
        </div>

        <LandingRowSix />
        <LandingRowtophighlight />
        <LandingRowSeven />
        <LandingRowTen />
        <LandingStack />
        <LandingRowTwelve />
        <LandingRowFourteen />
        <LandingRowgetourmerch />
        <LandingStackslickarrow />
      </div>
    </div>
  );
}
