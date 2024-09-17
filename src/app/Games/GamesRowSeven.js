import { Heading } from "../../../components";
import UserProfile6 from "../../../components/UserProfile6";
import React from "react";

export default function GamesRowSeven() {
  return (
    <div className="flex h-[40.38rem] items-center justify-center bg-[url(/images/img_group_2518.png)] bg-cover bg-no-repeat py-[7.50rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs flex justify-center md:px-[1.25rem]">
        <div className="flex w-full items-center justify-between gap-[1.25rem] md:flex-col">
          <div className="h-[25.38rem] w-[52%] bg-gray-400" />
          <div className="flex w-[40%] flex-col gap-[3.88rem] md:w-full sm:gap-[1.94rem]">
            <Heading
              size="heading8xl"
              as="h2"
              className="w-[96%] !font-avenirnext uppercase leading-[130%] tracking-[0.06rem] md:w-full"
            >
              <span className="text-white-a700">feel the&nbsp;</span>
              <span className="text-indigo-a200">excitement of our game</span>
            </Heading>
            <div className="mr-[5.38rem] flex gap-[3.75rem] md:mr-0 md:flex-row sm:flex-col">
              <UserProfile6 className="w-[48%]" />
              <UserProfile6
                userScore="323"
                userActivity="games trending in 7 days"
                className="w-[52%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
