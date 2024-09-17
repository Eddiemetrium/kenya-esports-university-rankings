import { Button, Text, Heading } from "../../../components";
import React from "react";

export default function PlayersRowFive() {
  return (
    <div className="flex justify-center">
      <div className="container-xs flex items-center justify-between gap-[1.25rem] md:flex-col md:px-[1.25rem]">
        <div className="h-[25.38rem] w-[52%] bg-gray-400" />
        <div className="flex w-[42%] flex-col gap-[1.88rem] md:w-full">
          <Heading
            size="heading3xl"
            as="h1"
            className="font-avenirnext text-[2.63rem] font-bold uppercase leading-[130%] tracking-[0.06rem] text-white-a700 md:text-[2.38rem] sm:text-[2.00rem]"
          >
            <span className="text-white-a700">
              about
              <br />
              the&nbsp;
            </span>
            <span className="text-indigo-a200">team</span>
          </Heading>
          <div className="flex flex-col items-start gap-[3.75rem] sm:gap-[1.88rem]">
            <Text
              size="textxl"
              as="p"
              className="w-[82%] text-[1.13rem] font-normal leading-[1.75rem] text-gray-500_05 md:w-full"
            >
              Lorem ipsLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim{" "}
            </Text>
            <Button
              color="indigo_A200"
              size="xl"
              shape="square"
              className="min-w-[12.50rem] px-[2.13rem] font-semibold capitalize sm:px-[1.25rem]"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
