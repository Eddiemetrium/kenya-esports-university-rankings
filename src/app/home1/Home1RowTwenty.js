"use client";
import { Button, Input, Heading, Text } from "../../../components";
import React from "react";

export default function Home1RowTwenty() {
  return (
    <div className="flex h-[24.88rem] items-center justify-center bg-[url(/images/img_group_2510.png)] bg-cover bg-no-repeat py-[5.00rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs flex justify-center px-[3.50rem] md:px-[1.25rem]">
        <div className="flex w-[78%] flex-col gap-[3.63rem] md:w-full sm:gap-[1.81rem]">
          <div className="mx-[2.50rem] flex flex-col items-center gap-[0.38rem] md:mx-0">
            <Text size="textxl" as="p" className="uppercase !text-blue-a700">
              newsletter
            </Text>
            <Heading as="h2" className="uppercase tracking-[0.06rem]">
              subscribe to our newsletter
            </Heading>
          </div>

          <div>
            <div className="flex justify-center md:flex-col">
              <Input
                shape="square"
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                className="relative z-[5] flex-grow capitalize"
              />
              <Button
                color="indigo_A200"
                size="3x1"
                shape="square"
                className="relative ml-[-1.13rem] min-w-[15.00rem] font-semibold capitalize md:ml-0"
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
