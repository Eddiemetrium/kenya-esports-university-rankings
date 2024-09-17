"use client";
import { Button, Input, TextArea, Heading } from "../../components";
import React from "react";

export default function SponsorRowEleven() {
  return (
    <div className="flex h-[28.63rem] items-center justify-center bg-[url(/images/img_group_2510.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs flex justify-center md:px-[1.25rem]">
        <div className="flex w-full items-start md:flex-col">
          <Heading
            size="heading7x1"
            as="h2"
            className="w-[46%] text-[2.50rem] font-bold uppercase leading-[4.00rem] tracking-[0.06rem] text-white-a700 md:w-full md:text-[2.38rem] sm:text-[2.25rem]"
          >
            <span className="text-white-a700">
              CONTACT US ABOUT PRESS MATTERS, POTENTIAL&nbsp;
            </span>
            <span className="text-indigo-a200">SPONSORSHIPS</span>
          </Heading>

          <div className="flex flex-1 flex-col items-end gap-[0.63rem] self-center md:self-stretch">
            <TextArea
              shape="square"
              name="write_message"
              placeholder="Write message"
              className="w-[90%] px-[1.25rem] font-semibold uppercase text-white-a700"
            />

            <div className="flex justify-center gap-[0.63rem] self-stretch sm:flex-col">
              <Input
                size="xs"
                shape="square"
                type="text"
                name="name"
                placeholder="Your name"
                className="w-[46%] px-[1.13rem] uppercase sm:w-full"
              />

              <Input
                size="xs"
                shape="square"
                type="email"
                name="email"
                placeholder="Your email"
                className="w-[44%] px-[1.13rem] uppercase sm:w-full"
              />
            </div>

            <Button
              color="indigo_A200"
              size="lg"
              shape="square"
              className="min-w-[13.13rem] px-[2.13rem] font-semibold uppercase sm:px-[1.25rem]"
              submit
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
