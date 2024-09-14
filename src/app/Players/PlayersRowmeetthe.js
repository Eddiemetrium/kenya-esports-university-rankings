import { Text, Heading } from "../../components";
import UserProfile4 from "../../components/UserProfile4";
import React, { Suspense } from "react";

const data = [
  { userName: "STEPHAN CHRIS", userTitle: "MOLLUSCHA™" },
  { userName: "STEPHAN CHRIS", userTitle: "CEO/Founder" },
  { userName: "MAHMED ENN", userTitle: "MILLENATION™" },
  { userName: "ALEXANDER", userTitle: "KILLER119™" },
  { userName: "GEORGI NOZ", userTitle: "STEP112™" },
  { userName: "SARAH QUIN", userTitle: "PALEOJAVANTICUS™" },
];

export default function PlayersRowMeetThe() {
  return (
    <div className="self-stretch">
      <div className="flex flex-col items-center justify-center bg-black-900_03 py-[6.25rem] md:py-[1.25rem]">
        <div className="container-xs flex flex-col items-center gap-[4.38rem] md:gap-[3.25rem] md:px-[1.25rem] sm:gap-[2.19rem]">
          <div className="flex w-[48%] flex-col items-center gap-[1.25rem] md:w-full">
            <Heading
              as="h2"
              className="text-[2.88rem] font-bold uppercase tracking-[0.06rem] text-white-a700 md:text-[2.63rem] sm:text-[2.25rem]"
            >
              meet the roaster
            </Heading>
            <Text
              size="textxl"
              as="p"
              className="self-stretch text-center text-[1.13rem] font-normal leading-[1.75rem] text-gray-500_05"
            >
              Lorem ipsLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Text>
          </div>
          <div className="grid grid-cols-3 justify-center gap-[2.75rem] self-stretch md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserProfile4
                  {...d}
                  key={"players" + index}
                  className="bg-gray-500_05"
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
