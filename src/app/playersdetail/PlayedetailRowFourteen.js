import { Img, Heading, Text, Button } from "../../../components";
import React from "react";

const GameplayCard = ({ score1, score2, date, cupName }) => (
  <div className="h-[11.25rem] bg-[url(/images/img_group_513.png)] bg-cover bg-no-repeat p-[1.25rem] md:h-auto">
    <div className="flex flex-col gap-[0.25rem]">
      <div className="flex items-center justify-center sm:flex-col">
        <Img
          src="img_lock.svg"
          width={80}
          height={80}
          alt="Lock"
          className="h-[5.00rem] w-[5.80rem] sm:w-full"
        />
        <Heading
          size="heading3x1"
          as="h3"
          className="ml-[2.00rem] text-[1.88rem] font-semibold uppercase text-indigo-a200 md:text-[1.75rem] sm:m-0 sm:text-[1.63rem]"
        >
          {score1}
        </Heading>
        <Heading
          size="text2x1"
          as="h4"
          className="ml-[3.13rem] text-[1.25rem] font-medium uppercase text-gray-580_07 sm:ml-0"
        >
          VS
        </Heading>
        <Heading
          size="heading3x1"
          as="h5"
          className="ml-[3.13rem] text-[1.88rem] font-semibold uppercase text-white-a700 md:text-[1.75rem] sm:ml-0 sm:text-[1.63rem]"
        >
          {score2}
        </Heading>
        <Img
          src="img_television.svg"
          width={80}
          height={80}
          alt="Television"
          className="ml-[2.63rem] h-[5.00rem] w-[5.00rem] sm:ml-0 sm:w-full"
        />
      </div>

      <div className="mx-[5.88rem] flex flex-col items-center md:mx-8">
        <Text
          size="textx1"
          as="p"
          className="text-[1.13rem] font-medium uppercase text-white-a780"
        >
          {cupName}
        </Text>
        <Heading
          size="texts"
          as="h6"
          className="text-[0.75rem] font-normal uppercase text-gray-400"
        >
          {date}
        </Heading>
      </div>
    </div>
  </div>
);

export default function PlayersDetailRowFourteen() {
  return (
    <div className="bg-black-900_03">
      <div className="flex h-[46.13rem] items-center justify-center bg-[url(/images/img_group_401.png)] bg-cover bg-no-repeat py-[6.13rem] md:h-auto md:py-[1.25rem]">
        <div className="container-xs flex justify-center md:px-[1.25rem]">
          <div className="flex w-full items-center gap-[1.88rem] md:flex-col">
            <div className="flex w-[34%] flex-col items-start gap-[3.75rem] md:w-full sm:gap-[1.88rem]">
              <Heading
                as="h2"
                className="text-[2.88rem] font-bold uppercase leading-[130%] tracking-[0.06rem] text-white-a700 md:text-[2.63rem] sm:text-[2.25rem]"
              >
                <span className="text-white-a700">
                  <>
                    best gameplay
                    <br />
                    of&nbsp;
                  </>
                </span>
                <span className="text-indigo-a200">&quot;molluscha&quot;</span>
              </Heading>
              <Button
                color="indigo_A200"
                size="xl"
                shape="square"
                className="min-w-[12.50rem] px-[2.13rem] font-semibold capitalize sm:px-[1.25rem]"
              >
                View All
              </Button>
            </div>

            <div className="flex flex-1 md:flex-col md:self-stretch">
              <div className="flex-1 md:self-stretch">
                {/* Gameplay cards */}
                <GameplayCard
                  score1="142"
                  score2="98"
                  cupName="SUMMER INTERNATIONAL CUP"
                  date="January 21, 2020"
                />
                <GameplayCard
                  score1="12"
                  score2="23"
                  cupName="SUMMER INTERNATIONAL CUP"
                  date="March 17, 2020"
                />
                <GameplayCard
                  score1="89"
                  score2="12"
                  cupName="SUMMER INTERNATIONAL CUP"
                  date="August 8, 2020"
                />
                {/* End Gameplay cards */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
