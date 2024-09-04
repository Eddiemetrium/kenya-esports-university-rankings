import React from "react";
import { Text, Heading } from "./components"; // Update the path to where Text and Heading are actually located

export default function UserProfile7({
  strategyText = "strategy",
  candyLandHeading = "candy land",
  loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col items-center w-[50%] md:w-full gap-[1.88rem]`}
    >
      <div className="h-[13.38rem] w-[42%] bg-gray-400" />
      <div className="flex flex-1 flex-col gap-[1.00rem]">
        <div className="flex flex-col items-start gap-[0.88rem]">
          <div className="flex h-[1.50rem] w-[32%] items-center bg-[url(/images/img_group_543.svg)] bg-cover bg-no-repeat px-[0.50rem]">
            <Heading size="texts" as="p" className="uppercase">
              {strategyText}
            </Heading>
          </div>
          <Heading size="heading2x1" as="h3" className="uppercase">
            {candyLandHeading}
          </Heading>
        </div>
        <Text size="textxl" as="p" className="leading-[1.75rem]">
          {loremIpsumText}
        </Text>
      </div>
    </div>
  );
}
