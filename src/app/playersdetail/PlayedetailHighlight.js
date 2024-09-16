import { Img, Text, Heading } from "../../components";
import React from "react";

export default function PlayersdetailHighlight() {
  return (
    <div className="flex h-[57.63rem] items-center justify-center bg-[url(/images/img_highlight.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs flex justify-center px-[3.50rem] md:px-[1.25rem]">
        <div className="flex w-full flex-col gap-[4.38rem] md:gap-[3.25rem] sm:gap-[2.19rem]">
          <div className="mx-[13.63rem] flex flex-col items-center gap-[1.25rem] md:mx-0">
            <Heading
              as="h4"
              className="text-[2.88rem] font-bold uppercase tracking-[0.06rem] text-white-a700 md:text-[2.63rem] sm:text-[2.25rem]"
            >
              top highlight of 2020
            </Heading>
            <Text
              size="textxl"
              as="p"
              className="self-stretch text-center text-[1.13rem] font-normal leading-[1.75rem] text-gray-500_05"
            >
              Lorem ipsLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Text>
          </div>
          <div className="ml-[1.25rem] flex justify-center bg-gray-400 px-[3.50rem] py-[12.38rem] md:ml-0 md:p-[1.25rem]">
            <Img
              src="img_overflow_menu.svg"
              width={100}
              height={100}
              alt="Overflowmenu"
              className="h-[6.25rem] w-[6.25rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
