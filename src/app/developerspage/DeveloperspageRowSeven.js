import { Button, Text, Heading, Img } from "../../../components";
import React from "react";

export default function DeveloperspageRowSeven() {
  return (
    <div>
      <div className="flex md:flex-col">
        <Img
          src="img_couple_of_gamer_668x668.png"
          width={668}
          height={668}
          alt="Couple of gamer"
          className="relative z-[3] h-[41.75rem] w-[41.75rem] object-cover md:w-full"
        />
        <div className="relative ml-[-9.50rem] flex h-[41.75rem] flex-1 items-center justify-center bg-[url(/images/img_group_331.png)] bg-cover bg-no-repeat px-[3.50rem] py-[9.63rem] md:ml-0 md:h-auto md:self-stretch md:p-[1.25rem]">
          <div className="flex w-[56%] flex-col items-start md:w-full">
            <Heading
              as="h2"
              className="uppercase leading-[130%] tracking-[0.06rem]"
            >
              <span>we&nbsp;</span>
              <span>make</span>
              <span>
                &nbsp;it very <br />
                professionally
              </span>
            </Heading>
            <Text
              size="textxl"
              as="p"
              className="mt-[1.88rem] w-[88%] leading-[1.75rem] md:w-full"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim{""}
            </Text>
            <Button
              color="indigo_A200"
              size="xl"
              shape="square"
              className="mt-[3.75rem] min-w-[12.5rem] font-semibold capitalize"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
