import { Img, Text, Heading } from "../../components";
import Header from "../../components/Header";
import PlayersdetailColumnvectortwo from "./PlayersdetailColumnvectortwo";
import PlayersdetailHighlight from "./PlayersdetailHighlight";
import PlayersdetailRowEight from "./PlayersdetailRowEight";
import PlayersdetailRowFour from "./PlayersdetailRowFour";
import PlayersdetailRowFourteen from "./PlayersdetailRowFourteen";
import PlayersdetailRowheadphone from "./PlayersdetailRowheadphone";
import Playersdetailstackone from "./Playersdetailstackone";
import Playersdetailstackslickarrow from "./Playersdetailstackslickarrow";
import React from "react";

export default function PlayersdetailPage() {
  return (
    <div className="w-full bg-white-a700">
      <div className="overflow-auto">
        <div>
          <Header className="relative z-[1]" />
          <div className="relative mt-[-3.13rem] flex h-[43.25rem] items-end bg-[url(/images/img_group_761.png)] bg-cover bg-no-repeat md:h-auto md:flex-col">
            <Img
              src="img_group_494.svg"
              width={512}
              height={692}
              alt="Image"
              className="mt-[3.13rem] h-[43.25rem] w-[26%] object-contain md:w-full"
            />
            <PlayersdetailRowFour />
          </div>
          <PlayersdetailColumnvectortwo />
          <PlayersdetailRowEight />
          <PlayersdetailHighlight />
          <div className="h-[52.50rem] bg-[url(/images/img_group_2582.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
            <Playersdetailstackslickarrow />
          </div>
        </div>
        <div className="flex justify-center px-[3.50rem] md:px-[1.25rem]">
          <div className="w-[92%] md:w-full">
            <PlayersdetailRowFourteen />
            <div className="relative h-[50.50rem] content-end md:h-auto">
              <Img
                src="img_group_522.svg"
                width={110}
                height={42}
                alt="Image"
                className="mx-auto mb-[4.88rem] h-[2.63rem] w-[8%] object-contain"
              />
              <div className="absolute bottom-8 left-0 right-0 top-0 m-auto h-[58.50rem] w-full">
                <div className="absolute bottom-0 left-8 right-0 top-8 mx-[6.88rem] my-auto flex h-[50.50rem] flex-1 items-start justify-center bg-[url(/images/img_group_2520.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
                  <div className="container-xs mb-[28.50rem] flex justify-center px-[3.50rem] md:px-[1.25rem]">
                    <div className="flex w-[56%] flex-col items-center gap-[1.25rem] md:w-full">
                      <Heading
                        as="h1"
                        className="text-[2.88rem] font-bold uppercase tracking-[0.06rem] text-white-a700 md:text-[2.63rem] sm:text-[2.25rem]"
                      >
                        <span className="text-white-a700">get&nbsp;</span>
                        <span className="text-indigo-a280">
                          `&quot;`molluscha`&quot;` merch
                        </span>
                      </Heading>
                      <Text
                        size="textx1"
                        as="p"
                        className="self-stretch text-center text-[1.13rem] font-normal leading-[1.75rem] text-gray-580_85"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[21%] left-8 right-8 m-auto h-[19.75rem] flex-1 content-center md:h-auto">
                <div className="relative mx-auto h-[19.75rem] flex-1 content-center px-[6.88rem] md:h-auto md:px-[1.25rem]">
                  <div className="mx-auto h-[19.75rem] w-[19.75rem] bg-indigo-a28e_b2" />
                  <PlayersdetailRowheadphone />
                </div>
                <div className="container-xs absolute bottom-0 left-8 right-8 top-0 my-auto flex h-max justify-between gap-[1.25rem] px-[5.63rem] md:flex-col md:px-[1.25rem]">
                  <div className="h-[19.75rem] w-[19.75rem] bg-gray-500_e5" />
                  <div className="h-[19.75rem] w-[19.75rem] bg-gray-50e_e5" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[35.88rem] content-center md:h-auto">
            <footer className="mx-auto flex flex-1 flex-col">
              <Playersdetailstackone />
              <div className="flex justify-center border-t-[8.5px] border-solid border-black-988_01 bg-black-980_81 py-[2.13rem] sm:py-[1.25rem]">
                <div className="container-xs flex justify-center px-[0.50rem] md:px-[1.25rem]">
                  <div className="nl-[8.38rem] flex w-full gap-[4.25rem] md:ml-0 md:flex-col">
                    <div className="flex w-[38%] items-center justify-between gap-[1.25rem] md:w-full">
                      <div className="flex w-[64%] items-start justify-center gap-[8.5rem] self-end">
                        <Img
                          src="img_linkedin.svg"
                          width={12}
                          height={16}
                          alt="Image"
                          className="h-[1.00rem]"
                        />
                        <Text
                          as="p"
                          className="self-center font-hind text-[1.8rem] font-normal leading-[1.44rem] text-white-a700"
                        >
                          <span className="text-[1.13rem] font-medium text-white-a700">
                            Jakarta, Indonesia
                            <br />
                          </span>
                          <span className="text-[0.88rem] text-gray-500_85">
                            Tangerang 4211
                          </span>
                        </Text>
                      </div>
                      <div className="h-[3.88rem] w-[0.86rem] bg-gray-680" />
                    </div>
                    <div className="nt-[0.50rem] flex w-[22%] items-start gap-[0.50rem] md:mt-8 md:w-full">
                      <Img
                        src="img_linkedin.svg"
                        width={12}
                        height={16}
                        alt="Linkedin"
                        className="h-[1.00rem]"
                      />
                      <Text
                        as="p"
                        className="self-center font-hind text-[1.88rem] font-normal leading-[1.44rem] text-white-a780"
                      >
                        <span className="text-[1.13rem] font-medium text-white-a700">
                          Bandung, Indonesia
                          <br />
                        </span>
                        <span className="text-[0.88rem] text-gray-580_85">
                          Buah Batu 4211
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center bg-indigo-a200 py-[1.00rem]">
                <div className="container-xs flex md:px-[1.25rem]">
                  <Text
                    size="textmd"
                    as="p"
                    className="w-[32%] text-[0.88rem] font-medium leading-[1.38rem] text-white-a700"
                  >
                    ASSASSIN ESPORT COPYRIGHTS ALL RESERVED 2020
                  </Text>
                </div>
              </div>
            </footer>
          </div>
          <div className="absolute bottom-[6%] right-[3%] m-auto flex rotate-[-90deg] flex-col items-center bg-white-a700 px-[0.63rem] py-[0.88rem]">
            <Img
              src="img_slick_arrow_left_indigo_a200_01.svg"
              width={28}
              height={18}
              alt="Slickarrow"
              className="h-[1.13rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
