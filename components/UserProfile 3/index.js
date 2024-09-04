import React from "react";
import { Text, Heading } from "./..";

export default function UserProfile3({
  userHeading = "1",
  bestValueText = "best value entertainment",
  descriptionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-full gap-[1.25rem] p-[1.88rem] sm:p-[1.25rem] bg-black-900_7f`}
    >
      <Heading
        as="h6"
        size="headingmd"
        className="flex h-[2.50rem] w-[2.50rem] items-center justify-center rounded-[20px] border-2 border-solid border-indigo-a200 text-center uppercase"
      >
        {userHeading}
      </Heading>
      <div className="flex flex-col items-center gap-[0.38rem] self-stretch">
        <Heading
          size="headinglg"
          as="h5"
          className="uppercase leading-[2.00rem]"
        >
          {bestValueText}
        </Heading>
        <Text size="textxl" as="p" className="w-full leading-[1.75rem]">
          {descriptionText}
        </Text>
      </div>
    </div>
  );
}
