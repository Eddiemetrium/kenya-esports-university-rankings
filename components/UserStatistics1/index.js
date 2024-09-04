import React from "react";
import { Text, Heading, Img } from "./.."; // Update the path as needed

export default function UserStatistics1({
  statisticValue = "498,000",
  statisticDescription = "games played in 7 days",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-start sm:w-full gap-[1.25rem]`}
    >
      <Img
        src="img_star_1_1.svg"
        width={40}
        height={40}
        alt="Star"
        className="mt-[0.63rem] h-[2.50rem] w-[2.50rem]"
      />
      <div className="flex flex-1 flex-col items-start self-center">
        <Heading size="heading4x1" as="h2" className="relative z-[1] uppercase">
          {statisticValue}
        </Heading>
        <Text size="textmd" as="p" className="uppercase !text-blue_gray-200">
          {statisticDescription}
        </Text>
      </div>
    </div>
  );
}
