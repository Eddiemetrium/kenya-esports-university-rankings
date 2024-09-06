import UserProfile5 from "../../components/UserProfile5";
import React, { Suspense } from "react";

const data = [
  { userStat: "300+", userActivity: "twitch stream" },
  { userStat: "210+", userActivity: "youtube stream" },
  { userStat: "100+", userActivity: "tournaments" },
  { userStat: "400+", userActivity: "pro players" },
];

export default function AboutTheclansRowFifteen() {
  return (
    <div className="relative mt-[-0.13rem]">
      <div className="flex justify-center bg-black-900_03 py-[4.88rem] md:py-[1.25rem]">
        <div className="container-xs flex justify-center md:px-[1.25rem]">
          <div className="flex w-full gap-[10.25rem] md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserProfile5 {...d} key={"listthreehundre" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
