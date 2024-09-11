import Image from "next/image";
import { Button, Heading, Text, Img } from "../../components";
import React from "react";

export default function Home1RowFifteen() {
  return (
    <div className="relative z-[6]">
      <div className="relative h-[34.00rem] bg-indigo-500_e5 md:h-auto">
        {/* First Image */}
        <Image
          src="img_group_208.svg"
          width={696}
          height={278}
          alt="Image"
          className="absolute bottom-[0.00rem] right-[21%] m-auto h-[17.38rem] w-[60%] object-contain"
        />
        {/* Second Image */}
        <Image
          src="img_group_209.svg"
          width={696}
          height={278}
          alt="Image"
          className="h-[17.38rem] w-[48%] object-contain"
        />
        {/* Content Section */}
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center justify-between gap-[1.25rem] md:relative md:flex-col">
          {/* Left Block */}
          <div className="h-[33.88rem] w-[34.00rem] bg-gray-400 md:px-[1.25rem]" />
          {/* Right Block */}
          <div className="flex w-[54%] flex-col items-start md:w-full md:px-[1.25rem]">
            <div className="flex items-start gap-[0.81rem] self-stretch">
              <div className="mt-[0.75rem] h-[0.13rem] w-[2.50rem] bg-gray-400_01" />
              <Text
                size="textxl"
                as="p"
                className="self-center uppercase !text-gray-400_01"
              >
                history
              </Text>
            </div>
            <Heading
              as="h2"
              className="mt-[0.63rem] uppercase leading-[130%] tracking-[0.06rem]"
            >
              find out about our
              <br />
              history in the about
              <br />
              page us
            </Heading>
            <Button
              color="gray_900_02"
              size="xl"
              shape="square"
              className="mt-[3.75rem] min-w-[12.50rem] font-semibold capitalize"
            >
              View Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
