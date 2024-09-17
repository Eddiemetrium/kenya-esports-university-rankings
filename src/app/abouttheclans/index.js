"use client";
import { Img, Text, Heading } from "../../../components";
import Header from "../../components/Header";
import AbouttheclansColumnone from "./AbouttheclansColumnOne";
import AbouttheclansColumnSeven from "./AbouttheclansColumnSeven";
import AbouttheclansRowFifteen from "./AbouttheclansRowFifteen";
import AbouttheclansRowTwelve from "./AbouttheclansRowTwelve";
import AbouttheclansRowblurredbackg from "./AbouttheclansRowblurredbackg";
import Abouttheclansstackblurredbac from "./AbouttheclansStackblurredbac";
import Link from "next/link";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function AbouttheclansPage() {
  return (
    <div className="w-full bg-white-a700">
      <div>
        <div className="relative z-[1]">
          <Header className="relative z-[2]" />
          <div className="relative mt-[-3.13rem] flex flex-col">
            <div className="flex flex-col items-end">
              <div className="flex h-[37.25rem] items-center justify-center self-stretch bg-[url(/images/img_group_3887.svg)] bg-cover bg-no-repeat py-[13.00rem] md:h-auto md:py-[1.25rem]">
                <div className="container-xs flex justify-center px-[3.50rem] md:px-[1.25rem]">
                  <div className="flex w-[62%] flex-col items-center gap-[0.63rem] md:w-full">
                    <Text
                      size="textx1"
                      as="p"
                      className="uppercase !text-gray-500_02"
                    >
                      ABOUT THE CLAN
                    </Text>
                    <Heading
                      size="heading12x1"
                      as="h1"
                      className="text-center !font-bold uppercase leading-[130%] tracking-[0.13rem]"
                    >
                      <span className="text-white-a700">
                        <>
                          ASSASSIN OFFICIAL
                          <br />
                        </>
                      </span>
                      <span className="text-indigo-a200">CLAN&nbsp;</span>
                      <span className="text-white-a780">PAGE</span>
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="h-[0.25rem] w-[40%] bg-indigo-a280_33" />
            </div>
            <Img
              src="img_group_419.svg"
              width={890}
              height={128}
              alt="Image"
              className="relative mt-[-4.25rem] h-[8.00rem] w-[62%] object-contain"
            />
          </div>
        </div>
        <div className="relative mt-[-4.00rem] h-[66.00rem] bg-[url(/images/img_group_724.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
          <AbouttheclansColumnone />
        </div>
      </div>
      <Abouttheclansstackblurredbac />
      <div className="h-[38.13rem] bg-[url(/images/img_group_726.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
        <AbouttheclansRowTwelve />
      </div>
      <AbouttheclansRowFifteen />
      <div className="relative h-[77.0rem] content-end md:h-auto">
        <AbouttheclansRowblurredbackg />
        <div className="absolute bottom-0 left-0 right-0 top-8 m-auto flex h-max flex-1 bg-gradients">
          <Tabs
            className="mt-[6.13rem] flex w-[98%] flex-col items-end md:w-full md:px-[1.25rem]"
            selectedTabClassName="text-white-a700 bg-indigo-a200"
            selectedTabPanelClassName="my-auto md:px-[1.25rem] !relative tab-panel--selected"
          >
            <div className="container-xs relative z-[3]">
              <div className="flex flex-col gap-[3.63rem] sm:gap-[1.81rem]">
                <div>
                  <div className="relative z-[4] flex items-start gap-[1.88rem] sm:flex-col">
                    <Img
                      src="img_overflow_menu_indigo_a200.svg"
                      width={30}
                      height={30}
                      alt="Overflow menu"
                      className="mt-[1.00rem] h-[1.88rem] w-[1.88rem] sm:mt-0 sm:w-full"
                    />
                    <Heading
                      as="h2"
                      className="self-center uppercase tracking-[0.06rem]"
                    >
                      LIVE STREAMS
                    </Heading>
                  </div>
                  <div className="relative mt-[-4.63rem] flex items-start gap-[1.88rem] sm:flex-col">
                    <Img
                      src="img_overflow_menu_indigo_a200.svg"
                      width={30}
                      height={30}
                      alt="Overflow menu"
                      className="mt-[1.00rem] h-[1.88rem] w-[1.88rem] sm:mt-0 sm:w-full"
                    />
                    <Heading
                      as="h3"
                      className="self-center uppercase tracking-[0.06rem]"
                    >
                      LIVE STREAMS
                    </Heading>
                  </div>
                </div>
                <div className="border-b-[0.5px] border-solid border-gray-500_01 bg-indigo-100_19">
                  <TabList className="flex flex-wrap gap-[1.00rem]">
                    <Tab className="px-[3.25rem] py-[1.25rem] text-[1.13rem] font-semibold uppercase text-gray-500_06 md:px-[1.25rem]">
                      Twitch
                    </Tab>
                    <Tab className="px-[3.25rem] py-[1.25rem] text-[1.13rem] font-semibold uppercase text-gray-500_06 md:px-[1.25rem]">
                      YouTube
                    </Tab>
                  </TabList>
                </div>
              </div>
            </div>
            <div className="relative h-[58.00rem] self-stretch">
              <Img
                src="img_mask_group_blue_100.png"
                width={230}
                height={472}
                alt="Image Ten"
                className="absolute bottom-[-0.86rem] left-[0.00rem] m-auto h-[29.50rem] w-[18%] object-contain"
              />
              {[...Array(2)].map((__, index) => (
                <TabPanel
                  key={`tab-panel-${index}`}
                  className="absolute right-0 top-0 my-auto flex justify-end md:px-[1.25rem]"
                >
                  <div className="container-xs absolute right-0 top-0 flex w-full justify-end">
                    <div className="w-full">
                      <div className="flex flex-col items-start gap-[0.38rem] bg-gray-500_05">
                        <Img
                          src="img_overflow_menu.svg"
                          width={80}
                          height={80}
                          alt="Overflow menu"
                          className="mt-[11.88rem] h-[5.00rem] w-[5.00rem] self-center"
                        />
                        <div className="flex w-[44%] justify-center bg-black-900_87 p-[1.88rem] md:w-full sm:p-[1.25rem]">
                          <div className="flex w-full flex-col gap-[1.25rem]">
                            <div className="flex items-center gap-[0.63rem] sm:flex-col">
                              <div className="h-[0.13rem] w-[1.25rem] bg-indigo-a200" />
                              <Heading
                                size="heading2x1"
                                as="h4"
                                className="uppercase"
                              >
                                PMPL PUBG INTERNATIONAL
                              </Heading>
                            </div>
                            <Text
                              size="textx1"
                              as="p"
                              className="w-[98%] leading-[1.75rem] !text-blue_gray-200 md:w-full"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
      <div className="bg-black-900_03 py-[6.25rem] md:py-[1.25rem]">
        <AbouttheclansColumnSeven />
      </div>
      <ul className="flex">
        <li>
          <Link href="#">
            <div className="w-full">
              <div className="relative h-[24.00rem] bg-[url(/images/img_group_2513.png)] bg-cover bg-no-repeat px-[8.38rem] py-[2.88rem] md:p-[1.25rem]">
                <div className="absolute right-[26%] top-[12%] m-auto h-[9.88rem] w-[9.88rem]">
                  <Img
                    src="img_overflow_menu_indigo_a200.svg"
                    width={130}
                    height={130}
                    alt="img_menu"
                    className="absolute h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Link>
        </li>
      </ul>
      <footer className="bg-gray-900_33 py-[6.00rem] text-center text-white-a700">
        <div className="container">
          <Heading size="headingx1" as="h4" className="uppercase">
            Assassin Esport
          </Heading>
          <div className="mt-[1.63rem] flex flex-col items-center justify-between gap-[0.38rem] sm:flex-row">
            <Text
              size="textx1"
              as="p"
              className="w-[50%] text-center text-gray-500_07 md:w-full"
            >
              Marketing • Sponsorship • Administration
            </Text>
            <div className="text-center">
              <Text size="textx2" as="p" className="text-gray-500_09">
                Copyright © 2022 ASSASSIN ESPORT
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
