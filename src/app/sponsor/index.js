import React from "react";
import { Img, Button, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SponsorRowEight from "./SponsorRowEight";
import SponsorRowEleven from "./SponsorRowEleven";
import SponsorRowSeven from "./SponsorRowSeven";
import SponsorRowwanttohelpus from "./SponsorRowwanttohelpus";
import SponsorStackloremipsum from "./SponsorStackloremipsum";

export default function SponsorPage() {
  return (
    <div className="w-full bg-white-a700">
      <Header className="relative z-[1]" />
      <div className="relative mt-[-3.13rem] flex h-[43.75rem] items-start justify-center bg-[url(/images/img_group_763.png)] bg-cover bg-no-repeat py-[10.00rem] md:h-auto md:py-[1.25rem]">
        <div className="container-xs mb-[7.50rem] flex justify-center px-[3.50rem] md:px-[1.25rem]">
          <div className="flex w-[62%] flex-col items-center gap-[3.63rem] md:w-full sm:gap-[1.81rem]">
            <Heading
              size="heading12x1"
              as="h1"
              className="text-center text-[3.38rem] font-bold uppercase leading-[130%] tracking-[0.13rem] text-white-a700 md:text-[2.88rem] sm:text-[2.50rem]"
            >
              Our
              <br />
              sponsors & partners
            </Heading>
            <Button
              color="indigo_A200"
              size="x1"
              shape="square"
              className="min-w-[12.50rem] px-[2.13rem] font-semibold capitalize sm:px-[1.25rem]"
            >
              Become Sponsor
            </Button>
          </div>
        </div>
      </div>
      <div className="container-xs relative z-[2] mt-[-0.63rem] flex flex-col items-center px-[3.50rem] md:px-[1.25rem]">
        <div className="flex gap-[1.25rem]">
          <Img
            src="img_facebook.svg"
            width={20}
            height={20}
            alt="Facebook"
            className="h-[1.25rem] w-[1.25rem]"
          />
          <Img
            src="img_trash.svg"
            width={20}
            height={20}
            alt="Trash"
            className="h-[1.25rem] w-[1.25rem]"
          />
          <Img
            src="img_info.svg"
            width={20}
            height={20}
            alt="Info"
            className="h-[1.25rem] w-[1.25rem]"
          />
          <Img
            src="img_group_188.svg"
            width={20}
            height={20}
            alt="Image"
            className="h-[1.25rem] w-[1.25rem]"
          />
        </div>
      </div>
      <SponsorStackloremipsum />
      <SponsorRowSeven />
      <SponsorRowEight />
      <SponsorRowwanttohelpus />
      <SponsorRowEleven />
      <Footer />
    </div>
  );
}
