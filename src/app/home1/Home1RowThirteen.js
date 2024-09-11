import { Text, Heading, Img } from "../../components";
import React from "react";

export default function Home1RowThirteen() {
  return (
    <div className="flex justify-center">
      <div className="container-xs flex justify-center md:px-[1.25rem]">
        <div className="w-full">
          <div className="flex items-start gap-[1.88rem]">
            <Img
              src="img_overflow_menu_indigo_a200.svg"
              width={30}
              height={30}
              alt="Overflowmenu"
              className="mt-[1.00rem] h-[1.88rem] w-[1.88rem]"
            />
            <Heading
              as="h2"
              className="self-center uppercase tracking-[0.06rem]"
            >
              NEWS
            </Heading>
          </div>

          <div className="relative z-[4] mt-[3.63rem] border-b-[0.5px] border-solid border-gray-500_01 bg-indigo-100_19">
            <div className="flex items-center sm:flex-col">
              <div className="flex h-[4.38rem] w-[16%] items-center bg-[url(/images/img_group_410.svg)] bg-cover bg-no-repeat px-[1.88rem] py-[1.25rem] md:h-auto sm:w-full sm:px-[1.25rem]">
                <Heading
                  size="headingmd"
                  as="h3"
                  className="font-semibold uppercase"
                >
                  Tournament
                </Heading>
              </div>
              <div className="flex flex-1 flex-wrap gap-[6.63rem] pl-[3.75rem] pr-[3.50rem] md:gap-[1.25rem] md:px-[1.25rem] sm:self-stretch">
                <Heading
                  size="headingmd"
                  as="h4"
                  className="font-semibold uppercase text-gray-500_06"
                >
                  Events
                </Heading>
                <Heading
                  size="headingmd"
                  as="h5"
                  className="font-semibold uppercase text-gray-500_06"
                >
                  Recruitment
                </Heading>
              </div>
            </div>
          </div>

          <div className="flex md:flex-col">
            <div className="flex-1 md:self-stretch">
              <div className="flex bg-gray-400">
                <div className="mt-[11.13rem] flex w-[88%] flex-col items-start justify-center bg-black-900_87 px-[1.88rem] py-[1.75rem] md:w-full sm:p-[1.25rem]">
                  <div className="flex h-[1.50rem] w-[16%] items-center justify-center bg-[url(/images/img_group_543.svg)] bg-cover bg-no-repeat md:h-auto md:w-full md:px-[1.25rem]">
                    <Heading size="texts" as="h6" className="uppercase">
                      Esport
                    </Heading>
                  </div>
                  <div className="mt-[7.75rem] flex w-[88%] flex-col items-start bg-black-900_87 p-[1.88rem] md:w-full sm:p-[1.25rem]">
                    <div className="flex h-[1.50rem] w-[16%] items-center justify-center bg-[url(/images/img_group_543.svg)] bg-cover bg-no-repeat md:h-auto md:w-full md:px-[1.25rem]">
                      <Heading size="texts" as="p" className="uppercase">
                        Esport
                      </Heading>
                    </div>
                    <div className="mt-[1.25rem] flex items-center gap-[0.63rem] self-stretch sm:flex-col">
                      <div className="h-[0.13rem] w-[1.25rem] bg-indigo-a200" />
                      <Heading size="heading2x1" as="h3" className="uppercase">
                        mlbb mobile legends 2020
                      </Heading>
                    </div>
                    <Text
                      size="textmd"
                      as="p"
                      className="font-medium uppercase text-blue_gray-200"
                    >
                      January 21, 2020
                    </Text>
                    <Text
                      size="textxl"
                      as="p"
                      className="mt-[0.38rem] w-[80%] leading-[1.75rem] text-blue_gray-200 md:w-full"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor{" "}
                    </Text>
                  </div>
                </div>
              </div>

              <div className="w-[42%] bg-gray-400 md:w-full">
                <div className="mt-[34.00rem] flex flex-col items-start justify-center bg-black-900_87 px-[1.88rem] py-[1.75rem] sm:p-[1.25rem]">
                  <div className="flex h-[1.50rem] w-[20%] items-center justify-center bg-[url(/images/img_group_543.svg)] bg-cover bg-no-repeat md:h-auto md:w-full md:px-[1.25rem]">
                    <Heading size="texts" as="p" className="uppercase">
                      Esport
                    </Heading>
                  </div>
                  <Heading
                    size="heading2x1"
                    as="h3"
                    className="mt-[0.88rem] uppercase"
                  >
                    pmpl pubg mobile cham...
                  </Heading>
                  <Text
                    size="textmd"
                    as="p"
                    className="font-medium uppercase text-blue_gray-200"
                  >
                    January 21, 2020
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
