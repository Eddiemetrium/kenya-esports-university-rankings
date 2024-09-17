import { Heading } from "../../components";
import UserProfileStats from "../../components/UserProfileStats";
import React, { Suspense } from "react";

const data = [
  { userStatCount: "240K+", userStatLabel: "subscribers" },
  { userStatCount: "150K+", userStatLabel: "followers" },
  { userStatCount: "300+", userStatLabel: "videos" },
  { userStatCount: "500+", userStatLabel: "articles" },
];

export default function SponsorRowSeven() {
  return (
    <div className="flex h-[40.38rem] items-start justify-center bg-[url(/images/img_group_2518.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs mb-[2.50rem] flex justify-center md:px-[1.25rem]">
        <div className="flex w-full items-center justify-between gap-[1.25rem] md:flex-col">
          <div className="h-[25.38rem] w-[52%] bg-gray-400" />
          <div className="mb-[0.38rem] flex w-[40%] flex-col gap-[3.25rem] self-end md:w-full md:self-auto sm:gap-[1.63rem]">
            <Heading
              size="heading8x1"
              as="h2"
              className="font-avenirnext text-[2.63rem] font-bold uppercase leading-[130%] tracking-[0.06rem] text-white-a700 md:text-[2.38rem] sm:text-[2.00rem]"
            >
              <span className="text-white-a700">keep&nbsp;</span>
              <span className="text-indigo-a200">
                support <br />
                our team&nbsp;
              </span>
            </Heading>
            <div className="mr-[5.25rem] grid grid-cols-2 gap-[5.63rem] md:mr-0 md:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <UserProfileStats {...d} key={"grid240Kone" + index} />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
