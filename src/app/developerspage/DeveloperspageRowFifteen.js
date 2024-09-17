"use client";

import { Heading, Input, Text } from "../../../components";
import React from "react";

export default function DeveloperspageRowFifteen() {
  return (
    <div className="flex h-[24.88rem] items-center justify-center bg-[url(/images/img_group_2268.png)] bg-cover bg-no-repeat py-[5.00rem] md:h-auto md:py-[1.25rem]">
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
            <div className="flex md:flex-col">
              <Input
                shape="square"
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                className="flex-grow capitalize"
              />
              <div className="flex w-[26%] justify-center bg-indigo-a200 p-[1.38rem] md:w-full sm:p-[1.25rem]">
                <Heading size="headings" as="h3" className="capitalize">
                  SUBSCRIBE
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
