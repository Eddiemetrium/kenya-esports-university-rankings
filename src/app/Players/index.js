import { Text, Heading, Img } from "../../../components";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import VectorImageGallery from "../../../components/VectorImageGallery";
import PlayersCta from "./PlayersCta";
import PlayersRowFive from "./PlayersRowFive";
import PlayersRowSeven from "./PlayersRowSeven";
import PlayersRowMeetThe from "./PlayersRowmeetthe";
import PlayersStackOverflowMe from "./PlayersStackoverflowme";
import React, { Suspense } from "react";

export default function PlayersPage() {
  return (
    <div className="w-full bg-white-a700">
      <div className="flex flex-col items-center">
        <div className="self-stretch">
          <div className="relative z-[1]">
            <Header className="relative z-[2]" />
            <div className="relative mt-[-3.13rem] h-[47.63rem]">
              <Img
                src="img_group_458.png"
                width={1440}
                height={560}
                alt="Image"
                className="absolute left-0 right-0 top-0 m-auto h-[35.00rem] w-full flex-1 object-cover"
              />
              <div className="container-xs absolute bottom-0 left-0 right-0 my-auto md:px-[1.25rem]">
                <div className="flex justify-center bg-gray-500_05 px-[3.50rem] py-[10.25rem] md:p-[1.25rem]">
                  <Heading
                    size="heading12x1"
                    as="h1"
                    className="w-[64%] text-center font-hind text-[3.38rem] font-bold uppercase leading-[130%] tracking-[0.13rem] text-white-a700 md:text-[2.88rem] sm:text-[2.50rem]"
                  >
                    <span className="text-white-a700">
                      Meet our
                      <br />
                    </span>
                    <span className="text-indigo-a200">professional</span>
                    <span className="text-white-a700">&nbsp;player</span>
                  </Heading>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-[-12.88rem] h-[50.75rem] bg-[url(/images/img_group_726.png)] bg-cover bg-no-repeat md:h-auto">
            <div className="mb-[6.25rem] flex flex-col gap-[18.88rem] md:gap-[14.13rem] sm:gap-[9.44rem]">
              <div className="h-[0.25rem] bg-indigo-a200_33" />
              <PlayersRowFive />
            </div>
          </div>
        </div>

        <PlayersRowMeetThe />

        <div className="w-full self-start overflow-x-scroll">
          <div className="h-[52.00rem] w-[90.00rem] bg-[url(/images/img_group_415.png)] bg-cover bg-no-repeat py-[7.13rem] md:h-auto md:py-[1.25rem]">
            <PlayersStackOverflowMe />
          </div>
        </div>

        <PlayersRowSeven />

        <div className="container-xs mt-[4.63rem] px-[0.63rem] md:px-[1.25rem]">
          <div className="flex gap-[6.63rem] md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {[...Array(4)].map((d, index) => (
                <VectorImageGallery
                  key={"listvectorone" + index}
                  className="mb-[0.25rem] w-[26%] md:mb-0 md:w-full"
                />
              ))}
            </Suspense>
          </div>
        </div>

        <PlayersCta />
        <Footer className="self-stretch" />
      </div>
    </div>
  );
}
