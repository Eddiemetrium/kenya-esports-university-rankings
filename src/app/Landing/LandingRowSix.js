import { Heading } from "../../../components";
import UserStatistics from "../../../components/UserStatistics";
import React from "react";

export default function LandingRowSix() {
  return (
    <div className="mt-[4.38rem] flex h-[40.38rem] items-center justify-center self-stretch bg-[url(/images/img_group_2518.png)] bg-cover bg-no-repeat py-[7.50rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs flex justify-center md:px-[1.25rem]">
        <div className="w-full">
          <div className="flex items-center justify-between gap-[1.25rem] md:flex-col">
            <div className="h-[25.38rem] w-[52%] bg-gray-400" />
            <div className="flex w-[40%] flex-col items-center gap-[3.25rem] md:w-full sm:gap-[1.63rem]">
              <Heading
                size="heading8x1"
                as="h2"
                className="!font-avenirnext uppercase leading-[130%] tracking-[0.06rem]"
              >
                <span className="text-white-a700">
                  statistic of <br /> the&nbsp;
                </span>
                <span className="text-indigo-a200">season</span>
              </Heading>
              <div className="self-stretch">
                <div className="mr-[8.88rem] flex flex-col gap-[1.38rem] md:mr-0">
                  <UserStatistics className="mr-[0.88rem] md:mr-0" />
                  <UserStatistics
                    statisticvalue2="87"
                    statisticlabel2="trophies"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
