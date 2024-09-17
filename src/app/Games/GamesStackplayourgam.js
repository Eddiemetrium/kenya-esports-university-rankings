import { Text, Heading } from "../../../components";
import React from "react";

export default function GamesStackplayourgam() {
  return (
    <div className="absolute bottom-0 left-0 right-0 m-auto h-[38.88rem] flex-1">
      <div className="container-xs absolute left-0 right-0 top-0 my-auto flex md:px-[1.25rem]">
        <div className="flex w-full justify-center bg-gradient8 px-[3.50rem] py-[8.25rem] md:p-[1.25rem]">
          <div className="flex w-[88%] flex-col items-start gap-[1.25rem] md:w-full">
            <Heading
              size="heading9x1"
              as="h1"
              className="!font-avenirnext uppercase leading-[140%] tracking-[0.06rem]"
            >
              <span className="text-white-a700">
                <>
                  play
                  <br />
                  our&nbsp;
                </>
              </span>
              <span className="text-indigo-a200">games</span>
            </Heading>
            <Text
              size="textxl"
              as="p"
              className="w-[42%] leading-[1.75rem] md:w-full"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </Text>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[0.06rem] left-[9%] m-auto flex w-[44%] items-start justify-center bg-gray-900_07 p-[1.63rem] sm:p-[1.25rem]">
        <div className="mb-[0.63rem] flex flex-col items-start">
          <Heading
            size="heading5x1"
            as="h2"
            className="uppercase !text-indigo-a200"
          >
            200+
          </Heading>
          <Text
            as="p"
            className="ml-[0.63rem] uppercase !text-gray-300 md:ml-0"
          >
            games
          </Text>
        </div>
        <div className="flex flex-col items-center px-[2.38rem] sm:px-[1.25rem]">
          <Heading
            size="heading5x1"
            as="h3"
            className="uppercase !text-indigo-a200"
          >
            100+
          </Heading>
          <Text as="p" className="uppercase !text-gray-300">
            players
          </Text>
        </div>
        <div className="flex flex-col items-center px-[2.38rem] sm:px-[1.25rem]">
          <Heading
            size="heading5x1"
            as="h4"
            className="uppercase !text-indigo-a200"
          >
            88
          </Heading>
          <Text as="p" className="uppercase !text-gray-300">
            trophies
          </Text>
        </div>
        <div className="flex flex-col items-end">
          <Heading
            size="heading5x1"
            as="h5"
            className="mr-[1.00rem] uppercase !text-indigo-a200 md:mr-0"
          >
            31
          </Heading>
          <Text as="p" className="uppercase !text-gray-300">
            awards
          </Text>
        </div>
      </div>

      <div className="absolute bottom-0 right-[9%] top-0 my-auto h-[38.88rem] w-[36%] bg-gray-400" />
    </div>
  );
}
