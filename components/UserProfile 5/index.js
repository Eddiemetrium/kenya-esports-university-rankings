import { Heading, Img } from "./..";
import React from "react";

export default function UserProfile5({
  userStat = "300+",
  userActivity = "twitch stream",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[24%] md:w-full gap-[1.00rem]`}
    >
      <Img
        src="img_star_1_50x50.svg"
        width={50}
        height={50}
        alt="Image"
        className="h-[3.13rem] w-[3.13rem]"
      />
      <div className="flex flex-col items-center gap-[0.50rem] self-stretch">
        <Heading
          size="heading12x1"
          as="h1"
          className="text-center leading-[5.38rem] !text-indigo-a200"
        >
          {userStat}
        </Heading>
        <Heading
          size="headinglg"
          as="h5"
          className="text-center uppercase leading-[2.00rem] !text-blue_gray-200"
        >
          {userActivity}
        </Heading>
      </div>
    </div>
  );
}
