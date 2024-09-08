import { Img, Text } from "../../components";
import Header from "../../components/Header";
import DeveloperspageHero from "./DeveloperspageHero";
import DeveloperspageRowFifteen from "./DeveloperspageRowFifteen";
import DeveloperspageRowNine from "./DeveloperspageRowNine";
import DeveloperspageRowSeven from "./DeveloperspageRowSeven";
import DeveloperspageRowTen from "./DeveloperspageRowTen";
import DeveloperspageRowTwelve from "./DeveloperspageRowTwelve";
import Developerspagesectiondesc2 from "./DeveloperspageSectiondesc2";
import DeveloperspageStack from "./DeveloperspageStack";
import DeveloperspageStackmylittle from "./DeveloperspageStackmylittle";
import DeveloperspageTeams from "./DeveloperspageTeams";
import React from "react";

export default function DeveloperspagePage() {
  return (
    <div className="w-full bg-white-a700">
      <Header className="relative z-[2]" />
      <DeveloperspageHero />
      <DeveloperspageStackmylittle />
      <DeveloperspageRowSeven />
      <DeveloperspageRowNine />
      <Developerspagesectiondesc2 />
      <DeveloperspageTeams />
      <DeveloperspageRowTen />
      <DeveloperspageRowTwelve />
      <DeveloperspageRowFifteen />

      <footer className="relative h-[35.88rem] content-center md:h-auto">
        <div className="mx-auto flex flex-1 flex-col">
          <DeveloperspageStack />
          <div className="flex justify-center border-t-[0.5px] border-solid border-black-900_01 bg-black-900_01 py-[2.13rem] sm:py-[1.25rem]">
            <div className="container-xs flex justify-center px-[0.50rem] md:px-[1.25rem]">
              <div className="ml-[0.38rem] flex w-full gap-[4.25rem] md:ml-0 md:flex-col">
                <div className="flex w-[30%] items-center justify-between gap-[1.25rem] md:w-full">
                  <div className="flex w-[64%] items-start justify-center gap-[0.50rem] self-end">
                    <Img
                      src="img_linkedin.svg"
                      width={12}
                      height={16}
                      alt="LinkedIn"
                      className="h-[1.0rem]"
                    />
                    <Text
                      as="p"
                      className="self-center !font-hind leading-[1.44rem] !text-white-a700"
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
                <div className="mt-[0.50rem] flex w-[22%] items-start gap-[0.50rem] md:mt-0 md:w-full">
                  <Img
                    src="img_linkedin.svg"
                    width={12}
                    height={16}
                    alt="LinkedIn"
                    className="h-[1.0rem]"
                  />
                  <Text
                    as="p"
                    className="self-center !font-hind leading-[1.44rem] !text-white-a700"
                  >
                    <span className="text-[1.13rem] font-medium text-white-a700">
                      Bandung, Indonesia
                      <br />
                    </span>
                    <span className="text-[0.88rem] text-gray-500_05">
                      Buah Batu 4211
                    </span>
                  </Text>
                </div>
                <div className="h-[3.88rem] w-[0.06rem] bg-gray-600 md:h-[0.06rem] md:w-[3.88rem]" />
                <div className="mt-[0.50rem] flex w-[24%] items-start gap-[0.50rem] md:mt-0 md:w-full">
                  <Img
                    src="img_linkedin.svg"
                    width={12}
                    height={16}
                    alt="LinkedIn"
                    className="h-[1.0rem]"
                  />
                  <Text
                    as="p"
                    className="self-center !font-hind leading-[1.44rem] !text-white-a700"
                  >
                    <span className="text-[1.13rem] font-medium text-white-a700">
                      Purbalingga, Indonesia
                      <br />
                      Purbalingga, Indonesia
                      <br />
                    </span>
                    <span className="text-[0.88rem] text-gray-500_05">
                      Kalimanah 4211
                    </span>
                  </Text>
                </div>
                <div className="h-[3.88rem] w-[6.86rem] bg-gray-680 md:h-[0.86rem] md:w-[3.88rem]" />
                <div className="mt-[0.50rem] flex w-[24%] items-start gap-[0.50rem] md:mt-0 md:w-full">
                  <Img
                    src="img_linkedin.svg"
                    width={12}
                    height={16}
                    alt="LinkedIn"
                    className="h-[1.0rem]"
                  />
                  <Text
                    as="p"
                    className="self-center !font-hind leading-[1.44rem] !text-white-a700"
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
          <div className="flex justify-center bg-indigo-azee py-[1.13rem]">
            <div className="container-xs flex md:px-[1.25rem]">
              <Text
                size="textmd"
                as="p"
                className="w-[32%] !font-medium leading-[1.38rem] !text-white-a780"
              >
                ASASSIN ESPORT COPYRIGHTS ALL RESERVED 2820
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[6%] right-[3%] m-auto flex rotate-[-98deg] flex-col items-center bg-white-a780 px-[0.63rem] py-[0.88rem]">
          <Img
            src="img_slick_arrow_left_indigo_a2ee_e1.svg"
            width={28}
            height={18}
            alt="Slick arrow"
            className="h-[1.13rem]"
          />
        </div>
      </footer>
    </div>
  );
}
