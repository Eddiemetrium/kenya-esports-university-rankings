import React from "react";
import { Text, Heading, Img } from "./.."; // Update the path as needed

export default function UserStatistics({
  statisticValue1 = "240+",
  statisticLabel1 = "Games",
  statisticValue2 = "122",
  statisticLabel2 = "Wins",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center flex-1`}>
      <div className="flex-1">
        <div className="flex items-start gap-[1.25rem]">
          <div className="mt-[0.63rem] w-[26%] rounded-[20px] border-2 border-solid border-indigo-a200 p-[0.75rem]">
            <Img
              src="img_star_1.svg"
              width={16}
              height={16}
              alt="Star 1"
              className="h-[1.00rem] w-[1.00rem]"
            />
          </div>
          <div className="flex flex-1 flex-col items-start self-center">
            <Heading
              size="heading4x1"
              as="h2"
              className="relative z-[2] uppercase"
            >
              {statisticValue1}
            </Heading>
            <Text
              size="textmd"
              as="p"
              className="uppercase !text-blue_gray-200"
            >
              {statisticLabel1}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex w-[46%] items-start justify-end gap-[1.25rem]">
        <div className="mt-[0.38rem] w-[32%] rounded-[20px] border-2 border-solid border-indigo-a200 p-[0.75rem]">
          <Img
            src="img_star_2.svg"
            width={16}
            height={16}
            alt="Star 2"
            className="h-[1.00rem] w-[1.00rem]"
          />
        </div>
        <div className="flex flex-col items-start self-center">
          <Heading size="heading4x1" as="h2" className="uppercase">
            {statisticValue2}
          </Heading>
          <Text size="textmd" as="p" className="uppercase !text-blue_gray-200">
            {statisticLabel2}
          </Text>
        </div>
      </div>
    </div>
  );
}
