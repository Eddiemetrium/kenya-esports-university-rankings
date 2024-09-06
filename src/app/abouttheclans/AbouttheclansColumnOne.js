import { Text, Heading, Img } from "../../../components";
import Dota2WorldChampionship from "../../../components/Dota2WorldsChampionship/index";
import React, { Suspense } from "react";

const data = [
  {
    championshipTitle: "DOTA 2 WORLD CHAMPIONSHIP",
    eventDate: "January 21, 2020",
  },
  {
    championshipTitle: "MOBILE LEGENDS WORLD M1",
    eventDate: "January 21, 2020",
  },
  {
    championshipTitle: "PMPL PUBG MOBILE DUBAI SFO",
    eventDate: "January 21, 2020",
  },
  {
    championshipTitle: "LEAGUE OF LEGENDS INDONESIA",
    eventDate: "January 21, 2020",
  },
];

export default function AbouttheclansColumnOne() {
  return (
    <div className="mt-[4.00rem] flex flex-col items-center">
      <div className="container-vs flex items-center px-[0.88rem] md:px-[1.25rem]">
        <Heading as="h2" className="uppercase tracking-[0.06rem]">
          COMPETITION
        </Heading>
      </div>
      <Text className="text-xl as-p className-[1.25rem] w-[48%] text-center leading-[1.75rem] md:w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Text>
      <div className="mt-[1.75rem] flex gap-[1.25rem] self-stretch md:flex-col">
        <div className="flex flex-col gap-[1.25rem] md:self-stretch">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <Dota2WorldChampionship
                {...d}
                key={"listView" + index}
                className="hover:shadow-xs"
              />
            ))}
          </Suspense>
        </div>
      </div>

      <div className="flex w-[44%] flex-col items-center bg-gradientcs px-[2.25rem] py-[2.5rem] md:w-full sm:p-[1.25rem]">
        <Img
          src="img_overflow_menu.svg"
          width={100}
          height={100}
          alt="overflowmenu"
          className="mt-[6.88rem] h-[6.25rem] w-[6.25rem]"
        />
      </div>

      <div className="mt-[7.38rem] flex h-[1.5rem] w-[22%] items-center justify-center self-start bg-[url(/images/img_group_549.svg)] bg-cover bg-no-repeat md:h-auto md:w-full md:px-[1.25rem]">
        <Heading size="texts" as="ha" className="uppercase">
          Esport
        </Heading>
      </div>

      <div className="mt-[0.63rem] flex flex-col items-start gap-[0.25rem] self-stretch">
        <Heading size="heading2xl" as="h4" className="uppercase">
          dota 2 world championship
        </Heading>
        <Text
          size="textmd"
          as="p"
          className="!font-medium uppercase !text-blue_gray-200"
        >
          January 21, 2020
        </Text>
        <Text
          size="textxl"
          as="p"
          className="w-full leading-[1.75rem] !text-blue_gray-200"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor{" "}
        </Text>
      </div>
    </div>
  );
}
