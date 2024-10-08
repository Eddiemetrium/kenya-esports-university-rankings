import { Heading, Img } from "../../../components";
import UserProfile1 from "../../../components/UserProfile 1";
import React, { Suspense } from "react";

const data = [
  {
    userName: "hunter",
    userStatus: "watch",
    userLabel: "7 : 12",
    userDate: "January 21, 2020",
    userTitle: "assassin",
    userStatusAlt: "watch",
  },
  {
    userName: "hunter",
    userStatus: "watch",
    userLabel: "7 : 12",
    userDate: "January 21, 2020",
    userTitle: "assassin",
    userStatusAlt: "watch",
  },
  {
    userName: "Grim",
    userStatus: "watch",
    userLabel: "7 : 12",
    userDate: "January 21, 2020",
    userTitle: "assassin",
    userStatusAlt: "watch",
  },
  {
    userName: "hunter",
    userStatus: "watch",
    userLabel: "7 : 12",
    userDate: "January 21, 2020",
    userTitle: "assassin",
    userStatusAlt: "watch",
  },
];

export default function Home1Rowhunter() {
  return (
    <div className="h-[80.38rem] bg-[url(/images/img_group_2502.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
      <div className="mb-[1.25rem] flex flex-col items-center gap-[3.63rem] sm:gap-[1.81rem]">
        <div className="container-xs md:px-[1.25rem]">
          <div className="flex items-center gap-[1.88rem] md:flex-col">
            <Img
              src="/images/img_overflow_menu_indigo_a200.svg"
              width={30}
              height={30}
              alt="Overflow menu"
              className="h-[1.88rem] w-[1.88rem] md:w-full"
            />
            <Heading as="h2" className="uppercase tracking-[0.06rem]">
              upcoming & finished matches
            </Heading>
          </div>
        </div>
        <div className="flex flex-col self-stretch">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile1
                {...d}
                key={"listhunter" + index}
                className="bg-gradient2"
              />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
