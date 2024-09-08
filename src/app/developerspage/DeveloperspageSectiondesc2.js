import { Img, Heading } from "../../components";
import UserProfile3 from "../../components/UserProfile3";
import React, { Suspense } from "react";

const data = [
  {
    userHeading: "1",
    bestValueText: "Best value entertainment",
    descriptionText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    userHeading: "2",
    bestValueText: "Best value entertainment",
    descriptionText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    userHeading: "3",
    bestValueText: "Best value entertainment",
    descriptionText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    userHeading: "4",
    bestValueText: "Best value entertainment",
    descriptionText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

export default function Developerspagesectiondesc2() {
  return (
    <div className="h-[54.25rem] bg-[url(/images/img_section_desc_2.png)] bg-cover bg-no-repeat md:h-auto">
      <div className="bg-black-900_ce">
        <div className="relative h-[54.25rem] content-center bg-deep_purple-500_2d md:h-auto">
          <div className="h-[54.25rem] w-[28%] rotate-[-180deg] bg-gradient4" />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[54.25rem] flex-1 bg-gray-900_80">
            <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max flex-col items-center gap-[4.38rem] px-[2.38rem] md:gap-[3.25rem] md:px-[1.25rem] sm:gap-[2.19rem]">
              <Heading as="h2" className="uppercase tracking-[0.06rem]">
                make satisfying result with us
              </Heading>
              <div className="grid grid-cols-2 justify-center gap-[18.75rem] self-stretch md:grid-cols-1">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <UserProfile3 {...d} key={"gridgroup335" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
            <Img
              src="img_rectangle_114.png"
              width={422}
              height={868}
              alt="Image"
              className="absolute bottom-0 right-0 top-0 my-auto h-[54.25rem] w-[28%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
