import { Button, Heading, Text } from "../../components";
import React from "react";

export default function LandingRowTwelve() {
  return (
    <div className="flex h-[31.25rem] w-[92%] items-center justify-center bg-[url(/images/img_group_2514.png)] bg-cover bg-no-repeat md:h-auto md:w-full">
      <div className="container-xs flex justify-center px-[1.25rem]">
        <div className="flex w-full items-center justify-between gap-[2.50rem] md:flex-col">
          <div className="flex h-[31.60rem] w-[40%] bg-gray-400_01 self-stretch">
            <div className="flex flex-col items-start gap-[0.63rem]">
              <div className="mt-[0.75rem] h-[0.13rem] w-[2.5rem] bg-gray-400_01" />
              <Text
                size="textxl"
                as="p"
                className="self-center text-[1.13rem] font-normal uppercase text-gray-400_01"
              >
                history
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[1.88rem]">
            <Heading
              as="h2"
              className="text-[2.88rem] font-bold uppercase leading-[1.30%] tracking-[0.06rem] text-white-a700 md:text-[2.63rem] sm:text-[2.25rem]"
            >
              <span className="text-white-a700">
                find out about our <br />
              </span>
              <span className="text-indigo-a200">
                history in the about <br /> page us
              </span>
            </Heading>
            <Button
              color="indigo_A200"
              size="xl"
              shape="square"
              className="min-w-[12.50rem] px-[2.13rem] font-semibold capitalize sm:px-[1.25rem]"
            >
              View Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
