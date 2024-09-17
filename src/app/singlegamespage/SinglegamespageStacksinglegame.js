import { Button, Text, Heading } from "../../components";
import React from "react";

export default function SinglegamespageSectiondesciO() {
  return (
    <div className="flex h-[40.38rem] items-center justify-center bg-[url(/images/img_group_2518.png)] bg-cover bg-no-repeat py-[7.50rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs flex justify-center md:px-[1.25rem]">
        <div className="w-full">
          <div className="flex items-center md:flex-col">
            <div className="flex w-[42%] flex-col gap-[1.88rem] md:w-full">
              <Heading
                as="h2"
                className="font-avenirnext text-[2.88rem] font-bold uppercase leading-[130%] tracking-[0.06rem] text-white-a700 md:text-[2.63rem] sm:text-[2.25rem]"
              >
                <span className="text-white-a700">
                  <br />
                  the&nbsp;
                </span>
                <span className="text-indigo-a200">game</span>
              </Heading>
              <div className="flex flex-col items-start gap-[3.75rem] sm:gap-[1.88rem]">
                <Text
                  size="textxl"
                  as="p"
                  className="w-[82%] text-[1.13rem] font-normal leading-[1.75rem] text-gray-500_05 md:w-full"
                >
                  Lorem ipsum ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim{" "}
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
          <div className="flex flex-1 items-center md:flex-col md:self-stretch">
            <div className="relative z-[4] h-[16.25rem] w-[44%] self-end bg-gray-400 md:auto" />
            <div className="relative ml-[-6.50rem] h-[25.38rem] flex-1 bg-blue-gray-400 md:ml-0 md:self-stretch" />
          </div>
        </div>
      </div>
    </div>
  );
}
