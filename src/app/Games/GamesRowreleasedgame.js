import { Img, Heading } from "../../components";
import UserProfile7 from "../../components/UserProfile7";
import React from "react";

export default function GamesRowreleasedgame() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-[3.38rem] bg-black-900_03 py-[6.25rem] md:py-[1.25rem] sm:gap-[1.69rem]">
        <div className="container-xs flex flex-col items-end pl-[3.50rem] pr-[23.88rem] md:px-[1.25rem] ">
          <Heading as="h2" className="uppercase tracking-[0.06rem]">
            released game
          </Heading>
        </div>
        <div className="flex w-[80%] justify-center bg-gray-400 px-[3.50rem] py-[15.88rem] md:w-full md:p-[1.25rem]">
          <Img
            src="img_overflow_menu.svg"
            width={100}
            height={100}
            alt="Overflowmenu"
            className="h-[6.25rem] w-[6.25rem]"
          />
        </div>
        <div className="flex w-[80%] gap-[4.63rem] md:w-full md:flex-col md:px-[1.25rem]">
          <UserProfile7 />
          <UserProfile7
            strategyText="strategy"
            candyLandHeading="crab the warrior"
            loremIpsumText="Lorem ipslorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
          />
        </div>
      </div>
    </div>
  );
}
