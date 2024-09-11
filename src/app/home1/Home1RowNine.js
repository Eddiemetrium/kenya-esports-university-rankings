import { Heading, Text } from "../../components";
import UserStats from "../../components/UserStats";
import React from "react";

export default function Home1RowNine() {
  return (
    <div className="flex h-[41.63rem] items-center justify-center bg-[url(/images/img_group_2485.png)] bg-cover bg-no-repeat py-[7.25rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs mb-[1.00rem] flex justify-center px-[3.50rem] md:px-[1.25rem]">
        <div className="flex w-full items-center sm:flex-col">
          {/* Left Section */}
          <div className="flex flex-1 flex-col items-end gap-[0.25rem] pl-[3.50rem] pr-[5.00rem] md:px-[1.25rem] sm:self-stretch">
            <Heading
              size="headingmd"
              as="h2"
              className="flex h-[2.50rem] w-[2.50rem] items-center justify-center rounded-[20px] border-2 border-solid border-indigo-a200 text-center uppercase"
            >
              1
            </Heading>
            <div className="mr-[1.13rem] h-[3.13rem] w-[0.06rem] bg-gray-500 md:mr-0" />
            <Heading
              size="headingmd"
              as="h3"
              className="flex h-[2.50rem] w-[2.50rem] items-center justify-center rounded-[20px] border-2 border-solid border-indigo-a200 text-center uppercase"
            >
              2
            </Heading>
            <div className="mr-[1.13rem] h-[3.13rem] w-[0.06rem] bg-gray-500 md:mr-0" />
            <Heading
              size="headingmd"
              as="h4"
              className="flex h-[2.50rem] w-[2.50rem] items-center justify-center rounded-[20px] border-2 border-solid border-indigo-a200 text-center uppercase"
            >
              3
            </Heading>
            <div className="mr-[1.13rem] h-[3.13rem] w-[0.06rem] bg-gray-500 md:mr-0" />
            <Heading
              size="headingmd"
              as="h5"
              className="flex h-[2.50rem] w-[2.50rem] items-center justify-center rounded-[20px] border-2 border-solid border-indigo-a200 text-center uppercase"
            >
              4
            </Heading>
          </div>
          {/* Right Section */}
          <div className="flex w-[44%] flex-col gap-[3.25rem] sm:w-full sm:gap-[1.63rem]">
            <div className="flex flex-col gap-[0.63rem]">
              <div className="flex items-start gap-[0.63rem]">
                <div className="mt-[0.75rem] h-[0.13rem] w-[2.50rem] bg-indigo-a200" />
                <Text
                  size="textxl"
                  as="p"
                  className="self-center uppercase !text-indigo-a200"
                >
                  statistic
                </Text>
              </div>
              <Heading
                as="h6"
                className="uppercase leading-[130%] tracking-[0.06rem]"
              >
                together we do the best
              </Heading>
            </div>
            <div className="mr-[0.88rem] md:mr-0">
              <div className="flex flex-col gap-[1.75rem]">
                <UserStats className="sm:flex-col" />
                <UserStats
                  userScore="92"
                  averageGameText="games"
                  killsText="won"
                  userScoreOne="11"
                  damageText="lost"
                  averageGameTextOne="games"
                  className="ml-[0.25rem] mr-[2.38rem] md:mx-0 sm:flex-col"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
