import { Button, Heading, Text, Img } from "../../../components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Home1ColumnFour from "./Home1ColumnFour";
import Home1Columnoverflowm from "./Home1Columnoverflowm";
import Home1RowFifteen from "./Home1RowFifteen";
import Home1RowNine from "./Home1RowNine";
import Home1RowSeventeen from "./Home1RowSeventeen";
import Home1RowThirteen from "./Home1RowThirteen";
import Home1RowTwenty from "./Home1RowTwenty";
import Home1Rowhunter from "./Home1Rowhunter";
import React from "react";

export default function Home1Page() {
  return (
    <div className="w-full bg-white-a700">
      <div>
        <div>
          <div>
            <Header className="relative z-[1]" />
            <div className="relative mt-[-3.13rem] flex h-[42.75rem] items-start justify-center bg-[url(/images/img_group_770.png)] bg-cover bg-no-repeat py-[9.88rem] md:h-auto md:py-[1.25rem]">
              <div className="container-xs mb-[4.25rem] flex justify-center px-[3.50rem] md:px-[1.25rem]">
                <div className="flex w-[62%] flex-col items-center gap-[3.63rem] md:w-full sm:gap-[1.81rem]">
                  <div className="flex flex-col items-center gap-[0.63rem] self-stretch">
                    <Text size="textxl" as="p" className="uppercase !text-gray-500_02">
                      welcome to our esport
                    </Text>
                    <Heading
                      size="heading12x1"
                      as="h1"
                      className="text-center !font-bold uppercase leading-[130%] tracking-[0.13rem]"
                    >
                      <span className="text-white-a700">Professional&nbsp;</span>
                      <span className="text-indigo-a200">
                        <>
                          Gamer
                          <br />
                        </>
                      </span>
                      <span className="text-white-a700">eSport Organization</span>
                    </Heading>
                  </div>
                  <Button
                    color="indigo_A200"
                    size="x1"
                    shape="square"
                    className="min-w-[12.50rem] font-semibold capitalize"
                  >
                    Read More
                  </Button>
                </div>
              </div>
              <Img
                src="img_group_159.svg"
                width={150}
                height={48}
                alt="Image"
                className="ml-[1.88rem] h-[3.00rem] w-[22%] object-contain md:ml- md:w-full"
              />
            </div>
          </div>
        </div>
        <div className="relative mt-[-4.00rem] overflow-x-scroll">
          <div className="h-[52.00rem] w-[90.00rem] bg-[url(/images/img_group_415.png)] bg-cover bg-no-repeat py-[7.13rem] md:h-auto md:py-[1.25rem]">
            <div className="relative mt-[3.13rem] h-[34.50rem]">
              <Home1Columnoverflowm />
              <div className="container-xs absolute left-0 right-0 top-[0.00rem] my-auto flex flex-col gap-[8.63rem] md:gap-[6.44rem] md:px-[1.25rem] sm:gap-[4.31rem]">
                <div className="flex justify-end gap-[0.63rem]">
                  <Button shape="round" className="w-[3.13rem]">
                    <Img src="img_slick_arrow_left.svg" width={14} height={22} />
                  </Button>
                  <Button shape="round" className="w-[3.13rem]">
                    <Img src="img_slick_arrow_left_white_a700.svg" width={14} height={22} />
                  </Button>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex items-start gap-[1.06rem] self-stretch">
                    <div className="mt-[0.75rem] h-[0.13rem] w-[2.50rem] bg-indigo-a200" />
                    <Text size="textxl" as="p" className="self-center uppercase !text-indigo-a200">
                      tournaments
                    </Text>
                  </div>
                  <Heading as="h3" className="mt-[0.63rem] uppercase leading-[130%] tracking-[0.06rem]">
                    <>
                      best highlight
                      <br />
                      of the season
                    </>
                  </Heading>
                  <Button
                    color="indigo_A200"
                    size="x1"
                    shape="square"
                    className="mt-[3.75rem] min-w-[12.50rem] font-semibold capitalize"
                  >
                    View Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[2] mt-[-4.25rem] flex flex-col">
        <div className="container-xs relative z-[3] self-center md:px-[1.25rem]">
          <div className="flex items-center bg-gray-900_05 p-[1.25rem] shadow-md md:flex-col">
            <div className="flex w-[30%] items-center justify-center md:w-full">
              <div className="flex flex-col items-start gap-[0.25rem]">
                <Heading size="text4x1" as="h2" className="capitalize !text-gray-300_01">
                  Partners
                </Heading>
                <Text size="textxl" as="p">
                  Lorem ipsum dolor sit amet
                </Text>
              </div>
              <div className="h-[5.75rem] w-[0.06rem] bg-gray-400_cc" />
            </div>
            <div className="flex flex-1 justify-center md:flex-col md:self-stretch">
              <Img
                src="img_group_156.svg"
                width={150}
                height={48}
                alt="Image"
                className="h-[3.00rem] w-[22%] object-contain md:w-full"
              />
              <Img
                src="img_group_157.svg"
                width={150}
                height={48}
                alt="Image"
                className="ml-[1.88rem] h-[3.00rem] w-[22%] object-contain md:ml- md:w-full"
              />
              <div className="flex items-center gap-[0.44rem] px-[0.63rem] py-[0.50rem]">
                <Img
                  src="img_contrast_blue_gray_200.svg"
                  width={28}
                  height={28}
                  alt="Contrast"
                  className="h-[1.75rem] w-[1.75rem]"
                />
                <Img
                  src="img_settings.svg"
                  width={90}
                  height={16}
                  alt="Settings"
                  className="h-[1.00rem] w-[60%] self-end object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Home1RowNine />
      <div className="h-[69.88rem] bg-[url(/images/img_group_713.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
        <Home1RowThirteen />
      </div>
      <Home1Rowhunter />
      <Home1RowFifteen />
      <Home1RowSeventeen />
      <div className="h-[55.88rem] bg-[url(/images/img_group_753.png)] bg-cover bg-no-repeat py-[6.13rem] md:h-auto md:py-[1.25rem]"> </div>
      <Home1ColumnFour />
      <Home1RowTwenty />
      <Footer />
    </div>
  );
}
