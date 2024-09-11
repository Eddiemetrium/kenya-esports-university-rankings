"use client";

import { Heading, Input, Text } from "../../components";
import React from "react";

export default function LandingRowFourteen() {
  return (
    <div className="flex h-[24.88rem] w-[92%] items-center justify-center bg-[url(/images/img_group_2510.png)] bg-cover bg-no-repeat py-[5.00rem] md:h-auto md:w-full md:py-[1.25rem]">
      <div className="container-xs flex justify-center px-[3.50rem] md:px-[1.25rem]">
        <div className="flex w-[78%] flex-col gap-[3.63rem] md:w-full sm:gap-[1.81rem]">
          <div className="mx-[2.58rem] flex flex-col items-center gap-[0.38rem] md:mx-8">
            <Text size="textxl" as="p" className="uppercase !text-blue-a700">
              newsletter
            </Text>
            <Heading as="h6" className="uppercase tracking-[0.06rem]">
              subscribe to our newsletter
            </Heading>
          </div>
          <div>
            <div className="flex md:flex-col">
              <Input
                shape="square"
                type="email"
                name="email"
                placeholder="Your Email"
                className="relative z-[12] flex-grow capitalize"
              />
              <div className="relative ml-[-1.13rem] flex h-[4.38rem] w-[28%] items-center justify-end bg-[url(/images/img_group_141.svg)] bg-cover bg-no-repeat py-[1.38rem] pl-[3.50rem] pr-[3.63rem] md:ml-0 md:h-auto md:w-full md:px-[1.25rem] sm:p-[1.25rem]">
                <Heading size="headings" as="h6" className="capitalize">
                  Subscribe
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
