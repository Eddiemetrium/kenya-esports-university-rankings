import React from "react";
import { Text, Heading, Img } from "./.."; // Update the import path as needed

export default function UserProfile6({
  userScore = "498.000",
  userActivity = "games played in 7 days",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center sm:w-full gap-[1.25rem]`}
    >
      <Img
        src="img_star_2_40x40.svg"
        width={40}
        height={40}
        alt="Image"
        className="h-[2.50rem] w-[2.50rem]"
      />
      <div className="flex flex-col items-center self-stretch">
        <Heading size="heading4x1" as="h2" className="relative z-[3] uppercase">
          {userScore}
        </Heading>
        <Text
          size="textmd"
          as="p"
          className="relative mt-[-0.13rem] uppercase !text-blue_gray-200"
        >
          {userActivity}
        </Text>
      </div>
    </div>
  );
}
