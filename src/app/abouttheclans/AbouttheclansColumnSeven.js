import { Heading, Text } from "../../../components";
import React from "react";

export default function AboutTheclansColumnSeven() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-xs flex flex-col items-center gap-[4.38rem] md:gap-[3.25rem] md:px-[1.25rem] sm:gap-[2.19rem]">
        <div className="flex w-[48%] flex-col items-center gap-[1.25rem] md:w-full">
          <Heading as="h2" className="uppercase tracking-[0.06rem]">
            Game screenshots
          </Heading>
          <Text
            size="textxl"
            as="p"
            className="self-stretch text-center leading-[1.75rem]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Text>
        </div>
        <div className="flex gap-[1.50rem] self-stretch md:flex-col">
          <div className="h-[17.13rem] w-[24%] bg-gray-500_05" />
          <div className="h-[17.13rem] w-[24%] bg-gray-500_05" />
          <div className="flex w-[24%] flex-col justify-center bg-indigo-a200_cc md:w-full">
            <Heading
              size="headingxl"
              as="h3"
              className="text-center !font-bold uppercase leading-[2.38rem]"
            >
              my little monster
            </Heading>
          </div>
          <div className="h-[17.13rem] w-[24%] bg-gray-500_05" />
        </div>
      </div>
    </div>
  );
}
