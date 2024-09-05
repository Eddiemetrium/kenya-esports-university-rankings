import React from "react";
import { Text, Heading } from "./.."; // Update the path as needed

export default function WorldCupInfo({
  worldCupText = "World Cup",
  dotaCompetitionText = "Dota 2 Competition",
  loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col items-center w-[50%] md:w-full gap-[1.88rem]`}
    >
      <div className="h-[13.38rem] w-[44%] bg-gray-400" />
      <div className="flex flex-1 flex-col gap-[1.00rem] sm:gap-[1.00rem]">
        <div className="mr-[0.88rem] flex flex-col items-start gap-[0.88rem] sm:mr-0 sm:gap-[0.88rem]">
          <div className="flex h-[1.50rem] w-[32%] items-center justify-center bg-[url(/images/img_group_543.svg)] bg-cover bg-no-repeat sm:h-auto sm:w-full">
            <Heading size="texts" as="p" className="uppercase">
              {worldCupText}
            </Heading>
          </div>
          <Heading
            size="heading2x1"
            as="h3"
            className="uppercase sm:text-[1.44rem]"
          >
            {dotaCompetitionText}
          </Heading>
        </div>
        <Text
          size="textxl"
          as="p"
          className="leading-[1.75rem] sm:text-[0.94rem]"
        >
          {loremIpsumText}
        </Text>
      </div>
    </div>
  );
}
