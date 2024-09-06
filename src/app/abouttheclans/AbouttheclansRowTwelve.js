import { Button, Text, Heading } from "../../components";
import React from "react";

export default function AboutTheclansRowTwelve() {
  return (
    <div className="flex justify-center">
      <div className="container-xs flex items-center justify-between gap-[1.25rem] md:flex-col md:px-[1.25rem]">
        <div className="h-[25.38rem] w-[52%] bg-gray-400" />
        <div className="flex w-[42%] flex-col items-start md:w-full">
          <Heading
            as="h2"
            className="w-[94%] !font-avenirnext uppercase leading-[130%] tracking-[0.06rem] md:w-full"
          >
            <span className="text-white-a700">game&nbsp;</span>
            <span className="text-indigo-a200">theme for each direction</span>
          </Heading>
          <Text
            size="textxl"
            as="p"
            className="mt-[1.88rem] w-[82%] leading-[1.75rem] md:w-full"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim{" "}
          </Text>
          <Button
            color="indigo_A200"
            size="xl"
            shape="square"
            className="mt-[3.75rem] min-w-[12.50rem] font-semibold capitalize"
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}
