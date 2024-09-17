import { Button, Heading } from "../../../components";
import UserProfile from "../../../components/UserProfile";
import React from "react";

export default function LandingRowSeven() {
  return (
    <div className="flex justify-center">
      <div className="container-xs flex items-start justify-center gap-[2.75rem] md:flex-col md:px-[1.25rem]">
        <div className="mt-[3.38rem] flex w-[32%] flex-col items-start gap-[2.50rem] md:w-full">
          <Heading
            as="h4"
            className="!font-avenirnext uppercase leading-[130%] tracking-[0.06rem]"
          >
            <span className="text-white-a700">
              stay <br />
              with our
              <br />
              latest&nbsp;
            </span>
            <span className="text-indigo-a200">news</span>
          </Heading>
          <Button
            color="indigo_A200"
            size="xl"
            shape="square"
            className="min-w-[12.50rem] font-semibold capitalize"
          >
            View all
          </Button>
        </div>
        <div className="ml-[2.75rem] flex flex-1 gap-[1.25rem] self-center md:ml-0 md:flex-col md:self-stretch">
          <UserProfile />
          <UserProfile
            JanuaryButton="January 21, 2020"
            storiesText="stories"
            sedutHeading="Sed ut perspiciatis unde..."
            loremIpsumText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          />
        </div>
      </div>
    </div>
  );
}
