import { Img, Text, Heading } from "../../components";
import React from "react";

export default function AboutTheClansStackBlurredBackground() {
  return (
    <div className="relative z-[5] h-[87.88rem] content-end md:h-auto">
      <Img
        src="img_blurred_backgro.png"
        width={1440}
        height={1158}
        alt="Blurred Background"
        className="mx-auto h-[72.38rem] w-full flex-1 object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[87.88rem] flex-1 bg-gradient5">
        <Img
          src="img_mask_group.png"
          width={230}
          height={538}
          alt="Mask Group"
          className="absolute right-[0.06rem] top-[0.00rem] m-auto h-[33.63rem] w-[16%] object-contain"
        />
        <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto h-max md:px-[1.25rem]">
          <div className="flex items-start gap-[1.88rem] sm:flex-col">
            <Img
              src="img_overflow_menu_indigo_a200.svg"
              width={30}
              height={30}
              alt="Overflow Menu"
              className="mt-[1.00rem] h-[1.88rem] w-[1.88rem] sm:mt-0 sm:w-full"
            />
            <Heading
              as="h2"
              className="self-center uppercase tracking-[0.06rem]"
            >
              Trending matches
            </Heading>
          </div>
          <div className="mt-[3.63rem] border-b-[0.5px] border-solid border-gray-500_01 bg-indigo-100_19">
            <div className="flex items-center gap-[2.50rem] sm:flex-col">
              <div className="flex h-[4.38rem] w-[18%] items-center justify-center bg-[url(/images/img_group_410.svg)] bg-cover bg-no-repeat p-[1.25rem] md:h-auto sm:w-full">
                <Heading
                  size="headingmd"
                  as="h3"
                  className="!font-semibold uppercase"
                >
                  LAST MATCHES
                </Heading>
              </div>
              <Heading
                size="headingmd"
                as="h4"
                className="!font-semibold uppercase !text-gray-500_06"
              >
                Upcoming matches
              </Heading>
            </div>
          </div>

          <div className="flex flex-col gap-[3.13rem] bg-gray-900_cc">
            <div className="mx-[5.00rem] mt-[3.13rem] md:mx-0">
              <div className="flex items-center justify-center md:flex-col">
                <div className="flex flex-1 items-center gap-[1.88rem] md:self-stretch sm:flex-col">
                  <Img
                    src="img_group_99_gray_500_05_150x150.svg"
                    width={150}
                    height={150}
                    alt="Image"
                    className="h-[9.38rem] w-[9.38rem] sm:w-full"
                  />
                  <div className="flex flex-1 flex-col items-start gap-[1.00rem] self-end sm:self-stretch">
                    <Heading
                      size="heading6x1"
                      as="h5"
                      className="uppercase tracking-[0.06rem]"
                    >
                      Hunter
                    </Heading>
                    <div className="flex items-start gap-[0.63rem] self-stretch">
                      <Img
                        src="img_overflow_menu_gray_600_01.svg"
                        width={20}
                        height={20}
                        alt="Overflow Menu"
                        className="h-[1.25rem] w-[1.25rem]"
                      />
                      <Text
                        size="textxl"
                        as="p"
                        className="self-center !font-medium uppercase !text-gray-600_01"
                      >
                        Watch
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="mt-[0.50rem] flex flex-col items-center gap-[0.25rem] self-start px-[3.25rem] md:self-auto md:px-[1.25rem]">
                  <Heading
                    size="heading11x1"
                    as="h6"
                    className="uppercase tracking-[0.13rem] !text-gray-600_01"
                  >
                    7 : 12
                  </Heading>
                  <Text size="textxl" as="p" className="!font-medium uppercase">
                    January 21, 2020
                  </Text>
                </div>
                <div className="flex flex-1 items-center gap-[1.88rem] md:self-stretch sm:flex-col">
                  <div className="flex flex-1 flex-col items-end gap-[1.00rem] self-end sm:self-stretch">
                    <Heading
                      size="heading6x1"
                      as="h1"
                      className="uppercase tracking-[0.06rem]"
                    >
                      Assassin
                    </Heading>
                    <div className="flex items-start justify-end gap-[0.63rem] self-stretch">
                      <Img
                        src="img_overflow_menu_gray_600_01.svg"
                        width={20}
                        height={20}
                        alt="Overflow Menu"
                        className="h-[1.25rem] w-[1.25rem]"
                      />
                      <Text
                        size="textxl"
                        as="p"
                        className="self-center !font-medium uppercase !text-gray-600_01"
                      >
                        Watch
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="img_group_163.svg"
                    width={150}
                    height={150}
                    alt="Image"
                    className="h-[9.38rem] w-[9.38rem] sm:w-full"
                  />
                </div>
              </div>
            </div>
            <div className="h-[0.13rem] bg-gradient7" />
          </div>

          <div className="relative mt-[-0.13rem] h-[15.63rem] content-center md:h-auto">
            <div className="mx-auto flex flex-1 bg-gradient3 p-[3.13rem] md:flex-col md:p-[1.25rem]">
              <div className="flex w-full items-center">
                <Img
                  src="img_group_163.svg"
                  width={150}
                  height={150}
                  alt="Image"
                  className="h-[9.38rem] w-[9.38rem]"
                />
                <div className="flex flex-1 items-start gap-[0.63rem] self-end px-[1.88rem] sm:px-[1.25rem]">
                  <Img
                    src="img_user.svg"
                    width={20}
                    height={20}
                    alt="User"
                    className="h-[1.25rem] w-[1.25rem]"
                  />
                  <Text
                    size="textxl"
                    as="p"
                    className="self-center !font-medium uppercase !text-indigo-a200"
                  >
                    Watch
                  </Text>
                </div>
              </div>
              <div className="flex w-full items-center gap-[1.88rem]">
                <div className="flex flex-1 items-start justify-end gap-[0.63rem] self-end">
                  <Img
                    src="img_user.svg"
                    width={20}
                    height={20}
                    alt="User"
                    className="h-[1.25rem] w-[1.25rem]"
                  />
                  <Text
                    size="textxl"
                    as="p"
                    className="self-center !font-medium uppercase !text-indigo-a200"
                  >
                    Watch
                  </Text>
                </div>
                <Img
                  src="img_group_100.svg"
                  width={150}
                  height={150}
                  alt="Image"
                  className="h-[9.38rem] w-[9.38rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
