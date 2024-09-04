import React from "react";
import { Text, Heading, Img } from "./.."; // Update the path as needed

export default function UserProfileStats({
  userStatCount = "240K+",
  userStatLabel = "subscriber",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-start w-full gap-[1.25rem]`}
    >
      <div className="mt-[0.63rem] w-[30%] rounded-[28px] border-2 border-solid border-indigo-a200 p-[0.75rem]">
        <Img
          src="img_star_1_2.svg"
          width={16}
          height={16}
          alt="Star"
          className="h-[1.00rem] w-[1.00rem]"
        />
      </div>
      <div className="flex flex-1 flex-col items-start self-center">
        <Heading size="heading4x1" as="h2" className="relative z-[4] uppercase">
          {userStatCount}
        </Heading>
        <Text size="textmd" as="p" className="uppercase !text-blue_gray-200">
          {userStatLabel}
        </Text>
      </div>
    </div>
  );
}
