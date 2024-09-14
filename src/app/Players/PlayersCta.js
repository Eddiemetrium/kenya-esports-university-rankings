import { Img, Button, Text, Heading } from "../components";
import React from "react";

export default function PlayersCta() {
  return (
    <div className="mt-[4.38rem] h-[31.25rem] self-stretch bg-[url(/images/img_cta.png)] bg-cover bg-no-repeat md:h-auto">
      <div className="flex md:flex-col">
        <div className="flex flex-1 flex-col items-start justify-center bg-black_900_08 py-[5.38rem] pl-[8.38rem] pr-[3.50rem] md:self-stretch md:p-[1.25rem]">
          <Heading
            as="h2"
            className="text-[2.88rem] font-bold uppercase leading-[3.88] tracking-[0.06rem] text-white_a700 md:text-[2.63rem] sm:text-[2.25rem]"
          >
            <span className="text-white_a700">join our&nbsp;</span>
            <span className="text-indigo_a200">
              <br />
              team and <br />
              become a pro!
            </span>
          </Heading>
          <Text
            size="txtxl"
            as="p"
            className="mt-[1.88rem] w-[56%] text-[1.13rem] font-normal leading-[1.75rem] text-gray_500_05 md:w-full"
          >
            Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut
            labore et dolore magna{" "}
          </Text>
          <Button
            color="indigo_A200"
            size="xl"
            shape="square"
            className="mt-[3.75rem] min-w-[12.50rem] px-[2.13rem] font-semibold capitalize sm:px-[1.25rem]"
          >
            View Now
          </Button>
        </div>
        <div className="relative ml-[-16.63rem] flex w-[42%] justify-center md:ml-0 md:w-full md:px-[1.25rem] sm:flex-col">
          <div className="relative ml-[4] h-[31.25rem] w-full bg-gray_400" />
          <div className="relative ml-[-13.88rem] flex w-full flex-col items-start gap-[1.25rem] bg-deep_purple-500_5b sm:ml-0 sm:w-full">
            <Img
              src="img_group_491.svg"
              width={292}
              height={182}
              alt="Image"
              className="h-[11.38rem] w-[46%] object-contain"
            />
            <Img
              src="img_group_490.svg"
              width={182}
              height={296}
              alt="Image"
              className="h-[18.50rem] w-[46%] self-end object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
