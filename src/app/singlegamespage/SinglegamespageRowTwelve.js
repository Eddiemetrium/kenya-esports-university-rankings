import { Button, Text, Heading } from "../../../components";
import USERprofileId from "../../../components/USERprofileId";
import React, { Suspense } from "react";

const data = [
  { userName: "STEPHAN CHRIS", userTitle: "MYOUILOSCH", userID: "USER10" },
  { userName: "STEPHAN CHRIS", userTitle: "CEO/Founder", userID: "USER02" },
  { userName: "GEORGI NOZ", userTitle: "STEP12?", userID: "USER03" },
  { userName: "ALEXANDER", userTitle: "KILLER199", userID: "USER01" },
];

export default function SinglegamesPageRowTwelve() {
  return (
    <div>
      <div className="flex justify-center bg-gradients py-[6.25rem] md:py-[1.25rem]">
        <div className="container-xs flex items-center justify-center gap-[2.50rem] md:flex-col md:px-[1.25rem]">
          <div className="flex w-[36x] flex-col items-start gap-[1.75rem] md:w-full sm:gap-[1.88rem]">
            <div className="flex flex-col items-start gap-[1.88rem] self-stretch">
              <Heading
                as="h2"
                className="font-avenirnext text-[2.88rem] font-bold uppercase leading-[1.30] tracking-[0.06rem] text-white-a700 md:text-[2.63rem] sm:text-[2.25rem]"
              >
                <span className="text-white-a700">
                  <br />
                  best&nbsp;
                </span>
                <span className="text-indigo-a200">roaster</span>
              </Heading>
              <Text
                size="textxl"
                as="p"
                className="w-[86%] text-[1.13rem] font-normal leading-[1.75rem] text-gray-500_05 md:w-full"
              >
                Lorem ipsum Lorem ipsum dolor sit amet consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore ma
                aliqua. Ut enim ad minim consectetur{" "}
              </Text>
              <Button
                color="indigo_A200"
                size="xl"
                shape="square"
                className="min-w-[12.5rem] px-[2.13rem] font-semibold capitalize sm:px-[1.25rem]"
              >
                View Detail
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 md:self-stretch">
        <div className="grid grid-cols-2 justify-center md:grid-cols-1">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <USERprofileId
                {...d}
                key={`singlegames${index}`}
                className="bg-gray-500_e5"
              />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
