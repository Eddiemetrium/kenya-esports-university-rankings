import { Text, Heading, Img } from "../../../components";
import UserProfile9 from "../../../components/UserProfile9";
import React from "react";

export default function EventsRowEight() {
  return (
    <div className="flex h-[55.00rem] items-center justify-center self-stretch bg-[url(/images/img_group_2518.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs flex justify-center md:px-[1.25rem]">
        <div className="w-full">
          <div className="flex flex-col gap-[4.38rem] md:gap-[3.25rem] sm:gap-[2.19rem]">
            <div className="flex items-start gap-[1.88rem] sm:flex-col">
              <Img
                src="img_overflow_menu_indigo_a200.svg"
                width={30}
                height={30}
                alt="Overflowmenu"
                className="mt-[1.00rem] h-[1.88rem] w-[1.88rem] sm:mt-0 sm:w-full"
              />
              <Heading
                as="h2"
                className="self-center uppercase tracking-[0.06rem]"
              >
                tournament events
              </Heading>
            </div>

            <div className="flex gap-[2.58rem] md:flex-col">
              <div className="flex flex-1 flex-col gap-[0.63rem] md:self-stretch">
                <div className="flex justify-center bg-gray-400 px-[3.50rem] py-[10.13rem] md:p-[1.25rem]">
                  <Img
                    src="img_overflow_menu.svg"
                    width={30}
                    height={80}
                    alt="Overflowmenu"
                    className="h-[5.00rem] w-[5.00rem]"
                  />
                </div>

                <div className="flex md:flex-col">
                  <div className="h-[7.63rem] w-full bg-gray-400" />
                  <div className="h-[7.63rem] w-full bg-gray-400" />
                  <div className="h-[7.63rem] w-full bg-gray-400" />
                </div>
              </div>

              <div className="flex w-[44%] flex-col gap-[1.25rem] md:w-full">
                <div className="flex flex-col items-start gap-[1.88rem]">
                  <Heading
                    size="heading3x1"
                    as="h3"
                    className="font-avenirnext font-bold uppercase leading-[130%] tracking-[0.06rem]"
                  >
                    dota 2 <br />
                    international cup
                  </Heading>
                  <Text
                    size="textxl"
                    as="p"
                    className="w-[86%] leading-[1.75rem] md:w-full"
                  >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </Text>
                </div>
              </div>
            </div>

            <div className="bg-gray-900_03 p-[2.25rem] sm:p-[1.25rem]">
              <div className="flex gap-[6.88rem] md:flex-row">
                <UserProfile9 className="w-[54%]" />
                <UserProfile9 className="w-[46%] gap-[0.50rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
