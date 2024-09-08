import { Heading, Img } from "../../components";
import React from "react";

export default function DeveloperspageStackmylittle() {
  return (
    <div className="relative z-[4] h-[41rem] content-end md:h-auto">
      <Heading
        size="headinglg"
        as="h2"
        className="mb-[6.13rem] ml-auto mr-[29.63rem] w-[28%] text-center !font-bold uppercase leading-[2rem] !text-indigo-a2ee md:mr-0"
      >
        My Little Monster
      </Heading>
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[41rem] flex-1 items-center justify-center bg-[url(/images/img_group_753.png)] bg-cover bg-no-repeat py-[6.13rem] md:h-auto md:py-[1.25rem]">
        <div className="container-xs flex justify-center md:px-[1.25rem]">
          <div className="w-full">
            <div className="flex flex-col gap-[4.38rem] md:gap-[3.25rem] sm:gap-[2.19rem]">
              <div className="flex items-center gap-[1.88rem] md:flex-col">
                <Img
                  src="img_overflow_menu_indigo_a200.svg"
                  width={30}
                  height={30}
                  alt="Overflow Menu"
                  className="h-[1.88rem] w-[1.88rem] md:w-full"
                />
                <Heading as="h3" className="uppercase tracking-[0.06rem]">
                  Find Out Our Popular Games
                </Heading>
              </div>

              <div className="flex items-center gap-[2.63rem] md:flex-col">
                <div className="flex w-full flex-col items-center gap-[1.25rem]">
                  <div className="h-[16.25rem] w-[16.25rem] bg-gray-500_e5" />
                  <Heading
                    size="headinglg"
                    as="h4"
                    className="text-center !font-bold uppercase leading-[2rem]"
                  >
                    Tower Defence
                  </Heading>
                </div>

                <div className="flex w-full flex-col items-center gap-[1.25rem]">
                  <div className="h-[16.25rem] w-[16.25rem] bg-gray-500_e5" />
                  <Heading
                    size="headinglg"
                    as="h5"
                    className="text-center !font-bold uppercase leading-[2rem]"
                  >
                    Alien Time
                  </Heading>
                </div>

                <div className="h-[16.25rem] w-[16.25rem] self-start bg-gray-500_e5 md:self-auto" />

                <div className="flex w-full flex-col items-center gap-[1.25rem]">
                  <div className="h-[16.25rem] w-[16.25rem] bg-gray-500_e5" />
                  <Heading
                    size="headinglg"
                    as="h6"
                    className="text-center !font-bold uppercase leading-[2rem]"
                  >
                    Zombie Escape
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
