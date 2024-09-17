import { Heading, Img, Button } from "../../components";
import React from "react";

export default function SponsorRowWantToHelpUs() {
  return (
    <div>
      <div className="relative h-[30.00rem] bg-deep_purple-500_e5">
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center md:relative md:flex-col">
          <div className="relative z-[7] h-[29.88rem] w-[36%] bg-gray-400 md:px-[1.25rem]" />
          <div className="relative ml-[-9.13rem] flex h-[17.38rem] w-[44%] items-start justify-center self-end bg-[url(/images/img_group_288.svg)] bg-cover bg-no-repeat px-[3.50rem] py-[6.13rem] md:m-0 md:h-auto md:w-full md:self-auto md:p-[1.25rem]">
            <Button
              color="gray_900_02"
              size="xl"
              shape="square"
              className="mb-[1.38rem] min-w-[12.50rem] px-[2.13rem] font-semibold capitalize sm:px-[1.25rem]"
            >
              Become Sponsor
            </Button>
          </div>
        </div>
        <Img
          src="/images/img_group_209.svg"
          width={696}
          height={278}
          alt="Image"
          className="absolute right-[0.06rem] top-0 m-auto h-[17.38rem] w-[48%] object-contain"
        />
        <Heading
          as="h2"
          className="absolute right-[12%] top-1/4 m-auto w-[48%] text-[2.88rem] font-bold uppercase leading-[130%] tracking-[0.06rem] text-white-a700 md:text-[2.63rem] sm:text-[2.25rem]"
        >
          Want to help us grow? Sponsor us!
        </Heading>
      </div>
    </div>
  );
}
