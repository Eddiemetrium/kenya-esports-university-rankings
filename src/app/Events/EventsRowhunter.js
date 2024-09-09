import { Heading, Img } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";

const data = [
  {
    userName: "hunter",
    userStatus: "watch",
    userDate: "January 21, 2020",
    userTitle: "assassin",
  },
  {
    userName: "hunter",
    userStatus: "watch",
    userDate: "January 21, 2020",
    userTitle: "assassin",
  },
  {
    userName: "hunter",
    userStatus: "watch",
    userDate: "January 21, 2020",
    userTitle: "assassin",
  },
];

export default function EventsRowHunter() {
  return (
    <div className="h-[64.50rem] bg-[url(/images/img_group_2502.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
      <div className="flex flex-col items-center gap-[3.63rem] sm:gap-[1.81rem]">
        <div className="container-xs md:px-[1.25rem]">
          <div className="flex items-center gap-[1.88rem] sm:flex-col">
            <Img
              src="img_overflow_menu_indigo_a200.svg"
              width={30}
              height={30}
              alt="Overflow menu"
              className="h-[1.88rem] w-[1.88rem] sm:w-full"
            />
            <Heading as="h2" className="uppercase tracking-[0.06rem]">
              Latest Matches
            </Heading>
          </div>
        </div>

        <div className="flex flex-col self-stretch">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile1
                key={"listhunter" + index}
                userName={d.userName}
                userStatus={d.userStatus}
                userDate={d.userDate}
                userTitle={d.userTitle}
                className="gray_800_gray_700_00_border border-b border-solid bg-gradient2"
              />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
