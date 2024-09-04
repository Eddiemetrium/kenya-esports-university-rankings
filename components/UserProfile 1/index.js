import { Text, Img, Heading } from "./.";
import React from "react";

export default function UserProfile1({
  userName = "hunter",
  userStatus = "watch",
  userLabel,
  userDate = "January 21, 2020",
  userTitle = "Assassin",
  userStatusAlt = "watch",
}) {
  return (
    <div className="flex items-center justify-center p-[1.25rem] flex-1">
      <div className="flex flex-1 flex-col items-center self-stretch">
        <div className="relative p-[9.38rem] self-stretch">
          <div className="absolute bottom-0 left-[22] top-0 my-auto h-[6.25rem] flex w-[6.25rem] flex-1 items-center justify-end bg-[url(/images/img_group_398.svg)] bg-cover bg-no-repeat py-[1.25rem] pl-[1.5rem] pr-[5.06rem] md:pr-0 md:mx-auto md:px-[1.25rem]">
            <Heading
              size="headingsxl"
              as="h4"
              className="uppercase tracking-[0.06rem]"
            >
              {userName}
            </Heading>
            <Img
              src="img_group_290_gray_500_06_150x98.svg"
              className="absolute bottom-0 left-[22] top-0 my-auto h-[9.38rem] w-[9.38rem]"
              width={150}
              height={150}
              alt="watch"
            />
            <Img
              src="img_user.svg"
              width={28}
              height={28}
              alt="Watch"
              className="h-[1.25rem] sm:w-full"
            />
            <div className="flex items-start gap-[0.6rem]">
              <Text
                size="text2xl"
                as="p"
                className="self-center font-medium uppercase"
              >
                {userName}
              </Text>
              <Text
                size="textxl"
                as="p"
                className="font-medium uppercase tracking-[0.18rem]"
              >
                {userLabel}
              </Text>
            </div>
            <Text
              size="textxl"
              as="p"
              className="self-center font-medium uppercase text-indigo-200"
            >
              {userStatusAlt}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center self-end p-[9.6rem] md:self-auto sm:px-[1.25rem]">
          <div className="absolute bottom-0 right-[22] top-0 my-auto h-[9.38rem] w-[9.38rem]">
            <Img src="img_group_163.svg" alt="image" />
            <div className="flex items-start gap-[0.6rem]">
              <Text
                size="text3xl"
                as="p"
                className="self-center font-medium uppercase"
              >
                {userTitle}
              </Text>
            </div>
            <Text
              size="textxl"
              as="p"
              className="self-center font-medium uppercase"
            >
              {userStatusAlt}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
