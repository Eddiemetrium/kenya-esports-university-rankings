import { Button, Heading, Text } from "../../components";
import UserProfile2 from "../../components/UserProfile2";
import Link from "next/link";
import React from "react";

export default function Home1RowSeventeen() {
  return (
    <div className="flex h-[63.13rem] items-center justify-center bg-[url(/images/img_group_2518.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs flex justify-center md:px-[1.25rem]">
        <div className="flex w-full items-center md:flex-col">
          {/* Left Section */}
          <div className="flex w-[36%] flex-col items-start gap-[3.75rem] md:w-full sm:gap-[1.88rem]">
            <div className="flex flex-col gap-[0.63rem] self-stretch">
              <div className="flex items-start gap-[0.63rem]">
                <div className="mt-[0.75rem] h-[0.13rem] w-[2.50rem] bg-blue-a700" />
                <Link
                  href="teams"
                  target="_blank"
                  rel="noreferrer"
                  className="self-center"
                >
                  <Text
                    size="textxl"
                    as="p"
                    className="uppercase !text-blue-a700"
                  >
                    teams
                  </Text>
                </Link>
              </div>
              <Heading
                as="h2"
                className="uppercase leading-[130%] tracking-[0.06rem]"
              >
                meet our <br />
                professional
                <br />
                player
              </Heading>
            </div>
            <Button
              color="indigo_A200"
              size="x1"
              shape="square"
              className="min-w-[12.50rem] font-semibold capitalize"
            >
              See more
            </Button>
          </div>

          {/* Right Section */}
          <div className="flex flex-1 gap-[1.25rem] md:flex-col md:self-stretch">
            <UserProfile2 className="mt-[4.38rem] md:mt-0" />
            <UserProfile2
              userName="oslow"
              userNameOne="henrique"
              className="mb-[4.38rem] md:mb-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
