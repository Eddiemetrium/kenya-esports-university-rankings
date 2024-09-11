import { Img, Text, Heading } from "../../components";
import Header from "../../components/Header";
import GamesRowEight from "./GamesRowEight";
import GamesRowNine from "./GamesRowNine";
import GamesRowSeven from "./GamesRowSeven";
import GamesRowreleasedgame from "./GamesRowreleasedgame";
import GamesStackOne from "./GamesStackOne";
import GamesStackplayourgam from "./GamesStackplayourgam";
import React from "react";

export default function GamesPage() {
  return (
    <div className="w-full bg-white-a700">
      <div>
        <div>
          <div className="relative z-[1]">
            <Header className="relative z-[2]" />
            <div className="relative mt-[-3.13rem] h-[47.63rem]">
              <Img
                src="img_group_458.png"
                width={1440}
                height={560}
                alt="Image"
                className="absolute left-0 right-0 top-0 m-auto h-[35.00rem] w-full flex-1 object-cover"
              />
              <GamesStackplayourgam />
            </div>
          </div>

          <div className="relative mt-[-12.63rem] flex h-[75.38rem] items-end justify-center bg-[url(/images/img_group_731.png)] bg-cover bg-no-repeat py-[7.50rem] md:h-auto md:py-[1.25rem]">
            <div className="container-xs mt-[12.63rem] flex justify-center md:px-[1.25rem]">
              <div className="grid w-full grid-cols-3 gap-[2.75rem] md:grid-cols-2 sm:grid-cols-1">
                <div className="h-[22.50rem] w-full bg-gray-400" />
                <div className="flex w-full flex-col items-start justify-end bg-gray-400">
                  <div className="mt-[14.13rem] flex w-[82%] flex-col items-start gap-[0.88rem] bg-black-900_87 p-[1.50rem] md:w-full sm:p-[1.25rem]">
                    <div className="flex h-[1.50rem] w-[36%] items-center bg-[url(/images/img_group_543.svg)] bg-cover bg-no-repeat px-[0.50rem] md:h-auto md:w-full">
                      <Heading size="texts" as="h6" className="uppercase">
                        strategy
                      </Heading>
                    </div>
                    <Heading size="heading2x1" as="h3" className="uppercase">
                      clash sword
                    </Heading>
                  </div>
                </div>
                <div className="h-[22.50rem] w-full bg-gray-400" />
                <div className="h-[22.50rem] w-full bg-gray-400" />
                <div className="h-[22.50rem] w-full bg-gray-400" />
                <div className="h-[22.50rem] w-full bg-gray-400" />
              </div>
            </div>
          </div>

          <GamesRowSeven />
          <GamesRowreleasedgame />
          <GamesRowEight />
          <GamesRowNine />

          <div className="relative h-[35.88rem] content-center md:h-auto">
            <footer className="mx-auto flex flex-1 flex-col">
              <GamesStackOne />
              <div className="flex justify-center border-t-[0.5px] border-solid border-black-900_01 bg-black-900_01 py-[2.13rem] sm:py-[1.25rem]">
                <div className="container-xs flex justify-center px-[0.50rem] md:px-[1.25rem]">
                  <div className="ml-[0.38rem] flex w-full gap-[4.25rem] md:ml-0 md:flex-col">
                    <div className="flex w-[28%] items-center justify-between gap-[1.25rem] md:w-full">
                      <div className="flex w-[64%] items-start justify-center gap-[0.50rem] self-end">
                        <Img
                          src="img_linkedin.svg"
                          width={12}
                          height={16}
                          alt="Linkedin"
                          className="h-[1.00rem]"
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

                    <div className="mt-[0.50rem] flex w-[20%] items-start gap-[0.50rem] md:mt-0 md:w-full">
                      <Img
                        src="img_linkedin.svg"
                        width={12}
                        height={16}
                        alt="Linkedin"
                        className="h-[1.00rem]"
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

                    <div className="mt-[0.50rem] flex w-[22%] items-start gap-[0.50rem] md:mt-0 md:w-full">
                      <Img
                        src="img_linkedin.svg"
                        width={12}
                        height={16}
                        alt="Linkedin"
                        className="h-[1.00rem]"
                      />
                      <Text
                        as="p"
                        className="self-center !font-hind leading-[1.44rem] !text-white-a700"
                      >
                        <span className="text-[1.13rem] font-medium text-white-a700">
                          <>
                            Purbalingga, Indonesia
                            <br />
                          </>
                        </span>
                        <span className="text-[0.88rem] text-gray-500_05">
                          Kalimanah 4211
                        </span>
                      </Text>
                    </div>

                    <div className="mt-[0.50rem] flex w-[22%] items-start gap-[0.50rem] md:mt-0 md:w-full">
                      <Img
                        src="img_linkedin.svg"
                        width={12}
                        height={16}
                        alt="Linkedin"
                        className="h-[1.00rem]"
                      />
                      <Text
                        as="p"
                        className="self-center !font-hind leading-[1.44rem] !text-white-a700"
                      >
                        <span className="text-[1.13rem] font-medium text-white-a700">
                          <>
                            Purbalingga, Indonesia
                            <br />
                          </>
                        </span>
                        <span className="text-[0.88rem] text-gray-500_05">
                          Kalimanah 4211
                        </span>
                      </Text>
                    </div>

                    <div className="flex w-[28%] items-center justify-between gap-[1.25rem] md:w-full">
                      <div className="h-[3.88rem] w-[0.06rem] bg-gray-600" />
                      <div className="flex w-[76%] items-start justify-center gap-[0.50rem] self-end">
                        <Img
                          src="img_linkedin.svg"
                          width={12}
                          height={16}
                          alt="Linkedin"
                          className="h-[1.00rem]"
                        />
                        <Text
                          as="p"
                          className="self-center !font-hind leading-[1.44rem] !text-white-a700"
                        >
                          <span className="text-[1.13rem] font-medium text-white-a700">
                            <>
                              Yogyakarta, Indonesia
                              <br />
                            </>
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
                    className="w-[32%] !font-medium leading-[1.38rem] !text-white-a700"
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
    </div>
  );
}
