import { Text, Heading, Img } from "./.";
import React from "react";

export default function UserProfile4({
  userName = "STEPHAN CHRIS",
  userTitle = "CEO/Founder",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full`}
    >
      <div className="mt-[5.00rem] flex flex-col items-end self-stretch">
        <Img
          src="img_mask_group.png"
          width={176}
          height={348}
          alt="Image"
          className="h-[21.75rem] w-[48%] object-contain"
        />
        <div className="relative mt-[-5.88rem] flex flex-col items-center self-stretch bg-black-900_87 p-[0.50rem]">
          <Heading size="headingxl" as="h4" className="tracking-[0.00rem]">
            {userName}
          </Heading>
          <Text
            size="textxl"
            as="p"
            className="mb-[0.25rem] tracking-[0.00rem] text-blue_gray-200"
          >
            {userTitle}
          </Text>
        </div>
      </div>
    </div>
  );
}
