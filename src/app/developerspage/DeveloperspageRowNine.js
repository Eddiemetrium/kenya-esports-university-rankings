import { Heading } from "../../../components";
import React from "react";

export default function DeveloperspageRowNine() {
  return (
    <div>
      <div className="flex justify-center bg-black-900_03 py-[4.88rem] md:py-[1.25rem]">
        <div className="container-xs flex justify-center px-[3.50rem] md:flex-col md:px-[1.25rem]">
          <div className="flex w-[20%] flex-col items-start gap-[0.50rem] md:w-full">
            <Heading
              size="heading12x1"
              as="h2"
              className="text-center leading-[5.38rem] !text-indigo-a200"
            >
              60%
            </Heading>
            <Heading
              size="headinglg"
              as="h3"
              className="ml-[1.13rem] text-center uppercase leading-[2.00rem] !text-blue_gray-200 md:ml-0"
            >
              accuracy
            </Heading>
          </div>

          <div className="flex flex-1 flex-col items-center gap-[0.50rem] px-[3.50rem] md:self-stretch md:px-[1.25rem]">
            <Heading
              size="heading12x1"
              as="h4"
              className="text-center leading-[5.38rem] !text-indigo-a200"
            >
              250+
            </Heading>
            <Heading
              size="headinglg"
              as="h5"
              className="text-center uppercase leading-[2.00rem] !text-blue_gray-200"
            >
              games
            </Heading>
          </div>

          <div className="flex flex-1 flex-col items-center gap-[0.50rem] px-[3.50rem] md:self-stretch md:px-[1.25rem]">
            <Heading
              size="heading12x1"
              as="h6"
              className="text-center leading-[5.38rem] !text-indigo-a200"
            >
              150+
            </Heading>
            <Heading
              size="headinglg"
              as="h5"
              className="text-center uppercase leading-[2.00rem] !text-blue_gray-200"
            >
              clients
            </Heading>
          </div>

          <div className="flex w-[20%] flex-col items-end gap-[0.50rem] md:w-full">
            <Heading
              size="heading12x1"
              as="h1"
              className="text-center leading-[5.38rem] !text-indigo-a200"
            >
              178
            </Heading>
            <Heading
              size="headinglg"
              as="h5"
              className="mr-[1.13rem] text-center uppercase leading-[2.00rem] !text-blue_gray-200 md:mr-0"
            >
              awards
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
