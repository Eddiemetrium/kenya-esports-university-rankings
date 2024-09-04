import React from "react";
import { Text, Heading, Img } from "./.."; // Update the path as needed

export default function UserProfile9({
  dateText = "13 March",
  durationText = "duration",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center`}>
      <div className="w-[28%] rounded-[20px] border-2 border-solid border-indigo-a200 p-[0.75rem]">
        <Img
          src="img_star_1_3.svg"
          width={16}
          height={16}
          alt="Star"
          className="h-[1.00rem] w-[1.00rem]"
        />
      </div>
      <Heading
        size="heading4x1"
        as="h2"
        className="relative z-[2] mt-[0.50rem] uppercase"
      >
        {dateText}
      </Heading>
      <Text size="textmd" as="p" className="uppercase !text-blue_gray-200">
        {durationText}
      </Text>
    </div>
  );
}
