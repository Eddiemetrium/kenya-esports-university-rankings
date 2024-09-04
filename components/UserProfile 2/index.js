import { Heading, Img } from "./..";
import React from "react";

export default function UserProfile2({
  userName = "James Arthur",
  userNameOne = "alex carball",
  ...props
}) {
  return (
    <div
      {...props}
      className="flex flex-col items-center w-[50%] md:w-full gap-[1.25rem]"
    >
      <div className="self-stretch bg-gray-400">
        <div className="mt-[0.63rem] flex flex-col items-end">
          <Img
            src="img_group_115.png"
            width={176}
            height={348}
            alt="Image"
            className="h-[21.75rem] w-[48%] object-contain"
          />
          <div className="relative mt-[-4.00rem] flex justify-center self-stretch bg-black-900_87 p-[0.75rem]">
            <Heading size="headinglg" as="h5" className="uppercase">
              {userName}
            </Heading>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-400">
        <div className="mt-[0.63rem] flex flex-col items-end">
          <Img
            src="img_group_115.png"
            width={176}
            height={348}
            alt="Image"
            className="h-[21.75rem] w-[48%] object-contain"
          />
          <div className="relative mt-[-4.00rem] flex justify-center self-stretch bg-black-900_87 p-[0.75rem]">
            <Heading size="headinglg" as="h5" className="uppercase">
              {userNameOne}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
