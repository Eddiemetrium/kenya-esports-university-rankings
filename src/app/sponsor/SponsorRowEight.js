import { Text, Heading } from "../../components";
import PricingPackage from "../../components/PricingPackage";
import React, { Suspense } from "react";

// Corrected and properly structured data array
const data = [
  {
    packageTitle: "Gold package",
    packagePrice: "$120",
    featureText1: "Lorem ipsum Lorem ipsum dolor sit",
    featureText2: "Lorem ipsum Lorem ipsum dolor sit",
    featureText3: "Lorem ipsum Lorem ipsum dolor sit",
    featureText4: "Lorem ipsum Lorem ipsum dolor sit",
    featureText5: "Lorem ipsum Lorem ipsum dolor sit",
  },
  {
    packageTitle: "Diamond package",
    packagePrice: "$420",
    featureText1: "Lorem ipsum Lorem ipsum dolor sit",
    featureText2: "Lorem ipsum Lorem ipsum dolor sit",
    featureText3: "Lorem ipsum Lorem ipsum dolor sit",
    featureText4: "Lorem ipsum Lorem ipsum dolor sit",
    featureText5: "Lorem ipsum Lorem ipsum dolor sit",
  },
];

export default function SponsorRowEight() {
  return (
    <div className="flex h-[62.88rem] items-center justify-center bg-[url(/images/img_highlight.png)] bg-cover bg-no-repeat py-[6.25rem] md:h-auto md:py-[1.25rem]">
      <div className="container-xs flex justify-center md:px-[1.25rem]">
        <div className="flex w-full flex-col items-center gap-[4.38rem] md:gap-[3.25rem] sm:gap-[2.19rem]">
          <div className="flex w-[48%] flex-col items-center gap-[1.25rem] md:w-full">
            <Heading
              as="h2"
              className="text-[2.88rem] font-bold uppercase tracking-[0.06rem] text-white-a700 md:text-[2.63rem] sm:text-[2.25rem]"
            >
              Sponsor Package
            </Heading>
            <Text
              size="textx1"
              as="p"
              className="self-stretch text-center text-[1.13rem] font-normal leading-[1.75rem] text-gray-500_05"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>

          <div className="flex gap-[1.25rem] self-stretch md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <PricingPackage {...d} key={"listcontrast" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
