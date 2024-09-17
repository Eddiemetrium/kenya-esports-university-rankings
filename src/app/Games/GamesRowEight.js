import { Button, Text, Heading, Img } from "../../../components";
import React from "react";

export default function GamesRowEight() {
  return (
    <div>
      <div className="flex items-center justify-between gap-[1.25rem] bg-indigo-500_es md:flex-col">
        <div className="flex w-[38%] flex-col gap-[2.13rem] bg-gray-400 md:w-full md:px-[1.25rem]">
          <div className="relative h-[13.25rem] content-center md:h-auto">
            <div className="mx-auto flex flex-1 items-start justify-end">
              <div className="w-[5.00rem] h-[3.25] bg-indigo-400_7F" />
              <div className="relative ml-[5.88rem] h-[13.25rem] w-[1.4%] self-center bg-indigo-400_7F" />
            </div>
          </div>
          <Img
            src="img_light_bulb.svg"
            width={90}
            height={90}
            alt="Lightbulb"
            className="absolute bottom-[0.94rem] right-[22%] w-[5.63rem]"
          />
          <div className="absolute bottom-[0.13rem] right-[1%] w-[1.5rem] rotate-[-90deg] bg-indigo-400_7F" />
        </div>
        <div className="flex flex-col items-start gap-[11.13rem] md:gap-[8.50rem] sm:gap-[5.69rem]">
          <div className="mx-[3.13rem] flex items-start gap-[0.38rem] self-stretch md:mx-0 sm:flex-col">
            <div className="h-[1.88rem] w-[1.88rem] rotate-[-90deg] bg-indigo-400_7F" />
            <div className="flex flex-1 flex-col items-start gap-[0.25rem] self-center sm:self-stretch">
              <div className="h-[1.00rem] w-[1.00rem] rotate-[-90deg] self-end bg-indigo-400_7F" />
              <div className="h-[1.50rem] w-[1.50rem] rotate-[-90deg] self-end bg-indigo-400_7F" />
            </div>
          </div>
          <div className="h-[4.00rem] w-[20%] rotate-[-90deg] bg-indigo-400_7F" />
        </div>
        <div className="flex w-[54%] flex-col items-start md:w-full md:px-[1.25rem]">
          <Heading
            as="h2"
            className="uppercase leading-[130%] tracking-[0.06rem]"
          >
            Find out about our
            <br />
            best game
          </Heading>
          <Text
            size="textxl"
            as="p"
            className="mt-[1.25rem] w-[54%] leading-[1.75rem] !text-blue_gray-100 md:w-full"
          >
            Lorem ipsum Lorem ipsum dolor sit amet consectetur adipiscing elit,
            sed do eiusm tempor incididunt ut labore et dolore ma aliqua. Ut
            enim ad minim{" "}
          </Text>
          <Button
            color="gray_900_02"
            size="xl"
            shape="square"
            className="mt-[3.75rem] min-w-[12.50rem] font-semibold capitalize"
          >
            View Now
          </Button>
        </div>
      </div>
    </div>
  );
}
