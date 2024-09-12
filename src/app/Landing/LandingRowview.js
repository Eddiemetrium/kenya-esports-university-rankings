import { Button, Heading, Text } from "../../components";
import React from "react";

export default function LandingRowView() {
  return (
    <div className="mt-[5.75rem] flex w-full items-start px-[2.50rem] md:flex-col sm:px-[1.25rem]">
      <div className="mt-[3.63rem] flex w-[38%] flex-col items-start gap-[0.63rem] self-end md:w-full md:self-auto">
        <div className="h-[11.25rem] w-[64%] bg-gray-400" />
        <div className="h-[11.25rem] w-[64%] bg-gray-400" />
      </div>
      <div className="mt-[1.25rem] flex flex-1 flex-col items-start md:self-stretch">
        <Text
          size="textxl"
          as="p"
          className="text-[1.13rem] font-normal uppercase text-gray-500_02"
        >
          welcome to our esport
        </Text>
        <Heading
          size="heading12xl"
          as="h1"
          className="mt-[0.63rem] font-hind text-[3.38rem] font-bold uppercase leading-[130%] tracking-[0.13rem] text-white-a700 md:text-[2.88rem] sm:text-[2.50rem]"
        >
          <span className="text-white-a700">Professional&nbsp;</span>
          <span className="text-indigo-a200">
            Gamer
            <br />
          </span>
          <span className="text-white-a700">eSport Organization</span>
        </Heading>
        <Button
          color="indigo_A200"
          size="xl"
          shape="square"
          className="mt-[3.63rem] min-w-[12.50rem] px-[2.13rem] font-semibold capitalize sm:px-[1.25rem]"
        >
          Read More
        </Button>
      </div>
    </div>
  );
}
