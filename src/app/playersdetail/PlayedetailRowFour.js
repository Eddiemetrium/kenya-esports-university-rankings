import { Img, Text, Heading } from "../../../components";
import React from "react";

export default function PlayersdetailRowFour() {
  return (
    <div className="relative ml-[-32.00rem] flex flex-1 justify-center md:ml-0 md:self-stretch md:px-[1.25rem]">
      <div className="container-xs flex items-start justify-center gap-[2.13rem] px-[2.13rem] md:flex-col sm:px-[1.25rem]">
        <div className="h-[39.88rem] flex-1 self-center bg-gray-400 md:self-stretch" />
        <div className="mt-[2.88rem] flex w-[46%] flex-col gap-[1.88rem] md:w-full">
          <Heading
            size="heading9x1"
            as="h1"
            className="font-hind text-[2.75rem] font-bold uppercase leading-[140%] tracking-[0.06rem] text-white-a700 md:text-[2.50rem]"
          >
            <span className="text-white-a700">Stephan Chris&nbsp;</span>
            <span className="text-indigo-a200">&quotMolluscha&quot</span>
          </Heading>
          <div className="flex items-center gap-[0.50rem]">
            <div className="h-[0.19rem] w-[1.00rem] bg-indigo-a200" />
            <Heading
              size="text3x1"
              as="h2"
              className="font-avenirnext text-[1.50rem] font-medium uppercase tracking-[0.00rem] text-gray-400 md:text-[1.38rem]"
            >
              PUBG Mobile Player
            </Heading>
          </div>
          <div className="flex flex-col items-start gap-[1.25rem]">
            <div className="flex w-[82%] justify-center bg-gray-900_cc_01 p-[1.88rem] md:w-full sm:p-[1.25rem]">
              <Text
                size="textx1"
                as="p"
                className="w-full text-[1.13rem] font-normal leading-[1.75rem] text-gray-500_05"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Text>
            </div>
            <div className="mx-[7.13rem] flex items-center justify-end self-stretch md:mx-0 sm:flex-col">
              <Img
                src="img_facebook.svg"
                width={20}
                height={20}
                alt="Facebook"
                className="h-[1.25rem] w-[1.25rem] sm:w-full"
              />
              <Img
                src="img_trash.svg"
                width={20}
                height={20}
                alt="Trash"
                className="ml-[1.25rem] h-[1.25rem] w-[1.25rem] sm:m-0 sm:w-full"
              />
              <Img
                src="img_info.svg"
                width={20}
                height={20}
                alt="Info"
                className="ml-[1.25rem] h-[1.25rem] w-[1.25rem] sm:m-0 sm:w-full"
              />
              <Img
                src="img_group_188.svg"
                width={20}
                height={20}
                alt="Image"
                className="ml-[1.25rem] h-[1.25rem] w-[1.25rem] sm:m-0 sm:w-full"
              />
              <Img
                src="img_thumbs_up.svg"
                width={14}
                height={14}
                alt="Thumbs Up"
                className="ml-[1.13rem] h-[0.88rem] w-[0.88rem] sm:m-0 sm:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
