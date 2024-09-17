import { Img, Heading } from "../../../components";
import WorldCupInfo from "../../../components/WorldCupInfo";
import React from "react";

export default function LandingRowTopHighlight() {
  return (
    <div className="self-stretch">
      <div className="flex flex-col items-center justify-center gap-[2.50rem] bg-black-900_03 py-[6.25rem] md:py-[1.25rem]">
        <div className="container-xs md:px-[1.25rem]">
          <div className="flex flex-col items-center gap-[4.38rem] md:gap-[3.25rem] sm:gap-[2.19rem]">
            <Heading
              as="h3"
              className="text-[2.88rem] font-bold uppercase tracking-[0.06rem] text-white-a700 md:text-[2.63rem] sm:text-[2.25rem]"
            >
              top highlight of 2020
            </Heading>
            <div className="flex justify-center self-stretch bg-gray-400 px-[3.50rem] py-[15.88rem] md:p-[1.25rem]">
              <Img
                src="img_overflow_menu.svg"
                width={100}
                height={100}
                alt="Overflowmenu"
                className="h-[6.25rem] w-[6.25rem]"
              />
            </div>
          </div>
        </div>
        <div className="flex w-[82%] gap-[4.63rem] md:w-full md:flex-col md:px-[1.25rem]">
          <WorldCupInfo />
          <WorldCupInfo
            worldCupText="training"
            dotaCompetitionText="pubg training camp"
            loremIpsumText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          />
        </div>
      </div>
    </div>
  );
}
