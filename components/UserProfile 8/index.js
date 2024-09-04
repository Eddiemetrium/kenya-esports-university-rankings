import React from "react";
import { Text, Img } from "./.."; // Update the path as needed

export default function UserProfile8({
  loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  viewWebsiteText = "View Website",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full gap-[1.25rem]`}
    >
      <div className="mx-[4.63rem] flex justify-center gap-[1.25rem] self-stretch">
        <Img
          src="img_facebook.svg"
          width={20}
          height={20}
          alt="Facebook"
          className="h-[1.25rem] w-[1.25rem]"
        />
        <Img
          src="img_trash.svg"
          width={20}
          height={20}
          alt="Trash"
          className="h-[1.25rem] w-[1.25rem]"
        />
        <Img
          src="img_info.svg"
          width={20}
          height={20}
          alt="Info"
          className="h-[1.25rem] w-[1.25rem]"
        />
        <Img
          src="img_group_188.svg"
          width={20}
          height={20}
          alt="Image"
          className="h-[1.25rem] w-[1.25rem]"
        />
      </div>
      <div className="flex flex-col items-center gap-[1.88rem] self-stretch">
        <Text
          size="textxl"
          as="p"
          className="self-stretch text-center leading-[1.75rem]"
        >
          {loremIpsumText}
        </Text>
        <Text as="p">{viewWebsiteText}</Text>
      </div>
    </div>
  );
}
