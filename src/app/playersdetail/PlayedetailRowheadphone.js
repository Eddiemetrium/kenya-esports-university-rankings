import { Img, Heading } from "../../components";
import React from "react";

export default function PlayersdetailRowheadphone() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center justify-center md:relative md:flex-col">
      <Img
        src="img_rectangle_197.svg"
        width={316}
        height={316}
        alt="Image"
        className="h-[19.75rem] w-[19.75rem] md:w-full"
      />
      <div className="flex flex-col items-center gap-[1.13rem] px-[3.50rem] md:px-[1.25rem]">
        <Heading
          size="headingxl"
          as="h4"
          className="text-[1.50rem] font-bold uppercase tracking-[0.00rem] text-white-a700 md:text-[1.38rem]"
        >
          Headphone prodigy
        </Heading>
        <Heading
          size="heading6xl"
          as="h1"
          className="text-[2.25rem] font-bold uppercase tracking-[0.06rem] text-gray-400 md:text-[2.13rem] sm:text-[2.00rem]"
        >
          $211
        </Heading>
      </div>
      <Img
        src="img_rectangle_197.svg"
        width={316}
        height={316}
        alt="Image"
        className="h-[19.75rem] w-[19.75rem] md:w-full"
      />
    </div>
  );
}
