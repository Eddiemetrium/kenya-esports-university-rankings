import { Img, Text } from "../../components";
import Header from "../../components/Header";
import SinglegamespageRowTen from "./SinglegamespageRowTen";
import SinglegamespageRowTwelve from "./SinglegamespageRowTwelve";
import SinglegamespageRowvectortwo from "./SinglegamespageRowvectortwo";
import SinglegamespageSectiondesc1 from "./SinglegamespageSectiondesc1";
import SinglegamespageStack from "./SinglegamespageStack";
import SinglegamespageStackgame from "./SinglegamespageStackgame";
import SinglegamespageStacksinglegame from "./SinglegamespageStacksinglegame";
import React from "react";

export default function SinglegamespagePage() {
  return (
    <div className="w-full bg-white-a700">
      <div>
        <div>
          <Header className="relative z-[3]" />
          <SinglegamespageStacksinglegame />
        </div>
        <SinglegamespageSectiondesc1 />
        <SinglegamespageRowTen />
        <SinglegamespageRowTwelve />
        <SinglegamespageRowvectortwo />
        <SinglegamespageStackgame />
        <div className="relative h-[35.88rem] content-center md:h-auto">
          <footer className="mx-auto flex flex-1 flex-col">
            <SinglegamespageStack />
            <div className="flex justify-center border-t-[0.5px] border-solid border-black-900_01 bg-black-900_01 py-[2.13rem] sm:py-[1.25rem]">
              <div className="container-xs flex justify-center px-[0.50rem] md:px-[1.25rem]">
                <div className="ml-[0.38rem] flex w-full gap-[4.25rem] md:ml-0 md:flex-col">
                  <div className="flex w-[26%] items-center justify-between gap-[1.25rem] md:w-full">
                    <div className="flex w-[64%] items-start justify-center gap-[0.50rem] self-end">
                      <Img
                        src="img_linkedin.svg"
                        width={12}
                        height={16}
                        alt="LinkedIn"
                        className="h-[1.00rem]"
                      />
                      <Text
                        as="p"
                        className="self-center font-hind text-[1.00rem] font-normal leading-[1.44rem] text-white-a700"
                      >
                        <span className="text-[1.13rem] font-medium text-white-a700">
                          Jakarta, Indonesia
                          <br />
                        </span>
                        <span className="text-[0.88rem] text-gray-500_05">
                          Tangerang 4211
                        </span>
                      </Text>
                    </div>
                    <div className="h-[3.88rem] w-[0.06rem] bg-gray-600" />
                  </div>

                  <div className="flex w-[26%] items-center justify-between gap-[1.25rem] md:w-full">
                    <div className="flex w-[68%] items-start justify-center gap-[0.50rem] self-end">
                      <Img
                        src="img_linkedin.svg"
                        width={12}
                        height={16}
                        alt="LinkedIn"
                        className="h-[1.00rem]"
                      />
                      <Text
                        as="p"
                        className="self-center font-hind text-[1.00rem] font-normal leading-[1.44rem] text-white-a700"
                      >
                        <span className="text-[1.13rem] font-medium text-white-a700">
                          Yogyakarta, Indonesia
                          <br />
                        </span>
                        <span className="text-[0.88rem] text-gray-500_05">
                          Sleman 4211
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center bg-indigo-a200 py-[1.00rem]">
              <div className="container-xs flex md:px-[1.25rem]">
                <Text
                  size="textmd"
                  as="p"
                  className="w-[32%] text-[0.88rem] font-medium leading-[1.38rem] text-white-a700"
                >
                  ASSASSIN ESPORT COPYRIGHTS ALL RESERVED 2020
                </Text>
              </div>
            </div>
          </footer>
          <div className="absolute bottom-[6%] right-[3%] m-auto flex rotate-[-90deg] flex-col items-center bg-white-a700 px-[0.63rem] py-[0.88rem]">
            <Img
              src="img_slick_arrow_left_indigo_a200_01.svg"
              width={28}
              height={18}
              alt="Slickarrow"
              className="h-[1.13rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
