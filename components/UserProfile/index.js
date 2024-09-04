import { Text, Heading, Button } from "./..";
import React from "react";

export default function UserProfile({
  januaryButton = "January 21, 2020",
  storiesText = "stories",
  sedutHeading = "Sed ut perspiciatis unde...",
  loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[58%] md:w-full bg-gray-900_05 shadow-xs`}
    >
      <div className="flex self-stretch bg-gray-400 p-[1.25rem]">
        <Button color="gray_900_7f" size="xs" shape="round">
          {januaryButton}
        </Button>
      </div>
      <div className="ml-[1.25rem] mt-[1.25rem] flex h-[1.50rem] w-[26%] items-center justify-center self-start bg-[url(/images/img_group_543.svg)] bg-cover bg-no-repeat">
        <Heading size="texts" as="p" className="uppercase">
          {storiesText}
        </Heading>
        <Heading
          size="headinglg"
          as="h5"
          className="mt-[1.25rem] uppercase leading-[2.0rem] !text-indigo-a200"
        >
          {sedutHeading}
        </Heading>
        <Text
          size="textx1"
          as="p"
          className="mb-[5.38rem] mt-[0.25rem] w-[88%] leading-[1.75rem]"
        >
          {loremIpsumText}
        </Text>
      </div>
    </div>
  );
}
