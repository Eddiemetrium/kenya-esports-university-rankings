import React from "react";
import { Heading } from "./.."; // Update the path as needed

export default function UserStats({
  userScore = "7.2",
  averageGameText = "avg game",
  killsText = "KILLS",
  userScoreOne = "7.0",
  averageGameTextOne = "avg game",
  damageText = "damage",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center flex-1`}>
      <div className="flex w-full items-center justify-center gap-[1.88rem]">
        <Heading
          size="heading11x1"
          as="h1"
          className="uppercase !text-indigo-a200"
        >
          {userScore}
        </Heading>
        <div className="mb-[0.75rem] flex flex-1 flex-col items-start self-end">
          <Heading
            size="headingxs"
            as="p"
            className="uppercase !text-blue_gray-200"
          >
            {averageGameText}
          </Heading>
          <Heading size="headinglg" as="h5" className="!font-bold uppercase">
            {killsText}
          </Heading>
        </div>
      </div>
      <div className="flex w-full items-center justify-end gap-[1.94rem]">
        <Heading
          size="heading11x1"
          as="h1"
          className="uppercase !text-indigo-a200"
        >
          {userScoreOne}
        </Heading>
        <div className="flex flex-col items-start">
          <Heading
            size="headingxs"
            as="p"
            className="uppercase !text-blue_gray-200"
          >
            {averageGameTextOne}
          </Heading>
          <Heading size="headinglg" as="h5" className="!font-bold uppercase">
            {damageText}
          </Heading>
        </div>
      </div>
    </div>
  );
}
