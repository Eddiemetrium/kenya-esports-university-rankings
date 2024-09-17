"use client";

import { Text, Heading, Img } from "../../../components";
import React from "react";
import {
  AccordionItem,
  Accordion,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function SingleGamePagRowTen() {
  return (
    <div className="container-xs flex justify-center md:px-[1.25rem]">
      <div className="flex w-full flex-col items-center gap-[1.87rem] md:gap-[1.25rem]">
        <div className="bg-[url(/images/img_group_2466.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
          <Heading
            as="h2"
            className="text-[2.18rem] font-bold uppercase tracking-[0.06rem] text-white-a700 md:text-[2.63rem] sm:text-[2.25rem]"
          >
            assassin clash sword team
          </Heading>
        </div>
        <div className="flex gap-[1.25rem] self-stretch md:flex-col">
          <div className="w-[43.5rem] bg-gray-900_03 p-[1.25rem] md:w-full md:self-stretch">
            <Accordion
              preExpanded={[0]}
              className="flex flex-col gap-[1.87rem] md:gap-[1.25rem]"
            >
              {Array(3).map((_, i) => (
                <AccordionItem uuid={i} key={`expandablelist${i}`}>
                  <AccordionItemPanel>
                    <div className="flex flex-col gap-[1.5rem]">
                      <div className="flex items-center gap-[1.06rem]">
                        <Img
                          src="img_lock.svg"
                          width={80}
                          height={80}
                          alt="Lock"
                          className="h-[5.0rem] w-[5.0rem]"
                        />
                      </div>
                      <div className="flex flex-1 flex-col items-start">
                        <Heading
                          size="text2xl"
                          as="h3"
                          className="text-[1.25rem] font-medium capitalize text-gray-300_01"
                        >
                          <span>Assassin&nbsp;</span>
                          <span>Esport</span>
                        </Heading>
                        <Text
                          size="textmd"
                          as="p"
                          className="text-[0.88rem] font-normal text-gray-500_05"
                        >
                          Founded 29 March 2017
                        </Text>
                      </div>
                      <Text
                        size="textxl"
                        as="p"
                        className="text-[1.13rem] font-normal leading-[1.75rem] text-gray-500_05"
                      >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim consectetur adip elit ed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad{" "}
                      </Text>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
