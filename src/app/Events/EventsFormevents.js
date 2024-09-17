"use client";
import { Heading, Input } from "../../../components";
import React from "react";

export default function EventsFormEvents() {
  return (
    <div className="flex h-[24.88rem] items-end justify-center bg-[url(/images/img_group_2510.png)] bg-cover bg-no-repeat py-[5rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs mt-[2.13rem] flex justify-center px-[3.5rem] md:px-[1.25rem]">
        <div className="flex w-[78%] flex-col items-center gap-[3.63rem] md:w-full sm:gap-[1.81rem]">
          <Heading as="h2" className="uppercase tracking-[0.86rem]">
            get more of our events
          </Heading>
          <div className="self-stretch">
            <div className="flex md:flex-col">
              <Input
                shape="square"
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                className="relative z-[6] flex-grow capitalize"
              />
              <div className="relative ml-[-1.13rem] flex h-[4.38rem] w-[28%] items-center justify-end bg-[url(/images/img_group_141.svg)] bg-cover bg-no-repeat py-[1.38rem] pl-[3.50rem] pr-[4.38rem] md:ml-0 md:h-auto md:w-full md:px-[1.25rem] sm:p-[1.25rem]">
                <Heading size="headings" as="h3" className="capitalize">
                  SUBMIT
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
