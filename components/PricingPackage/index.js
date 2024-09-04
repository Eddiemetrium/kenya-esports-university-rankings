import { Text, Img, Heading, Button } from "./..";
import React from "react";

export default function PricingPackage({
    packageTitle = "Gold package",
    featureText = "Lorem ipsum Lorem ipsum dolor sit",
    featureText1 = "Lorem ipsum Lorem ipsum dolor sit",
    featureText2 = "Lorem ipsum Lorem ipsum dolor sit",
    featureText3 = "Lorem ipsum Lorem ipsum dolor sit",
    featureText4 = "Lorem ipsum Lorem ipsum dolor sit",
    featureText5 = "Lorem ipsum Lorem ipsum dolor sit",
    buttonText = "Select Package",
    ...props
  }) 
{
  return (
    <div>
      <div
        {...props}
        className={`${props.className} flex flex-col items-center lg:w-[32%] md:w-full px-[1.875rem] py-[1.875rem] sm:py-[1.25rem] sm:px-[1.25rem] bg-gray_900_05 shadow-xs`}
      >
        <div className="w-[2.125rem] h-[2.125rem] flex items-center justify-center bg-white_A700 rounded-[34px]">
          <Img
            src="images/img_image_50X50.svg"
            className="w-[1.438rem] h-[1.438rem]"
            alt="Image"
          />
        </div>
        <Heading className="text-center mt-[2.125rem] uppercase">
          <Text className="mt-[1.313rem] font-semibold uppercase">
            {packageTitle}
          </Text>
        </Heading>
        <div className="flex items-start justify-center gap-[0.75rem] flex-col lg:mt-[3rem] lg:mb-[1.5rem] self-stretch">
          <div className="flex items-start gap-[0.75rem]">
            <Img
              src="images/img_checkmark.svg"
              width={18}
              height={18}
              alt="Image"
              className="self-center"
            />
            <Text className="font-normal text-white_A700">{featureText}</Text>
          </div>
          <div className="flex items-start justify-center gap-[0.75rem]">
            <Img
              src="images/img_checkmark.svg"
              width={18}
              height={18}
              alt="Image"
              className="self-center"
            />
            <Text className="font-normal text-white_A700">{featureText1}</Text>
          </div>
          <div className="flex items-start justify-center gap-[0.75rem] opacity-30">
            <Img
              src="images/img_checkmark.svg"
              width={18}
              height={18}
              alt="Image"
              className="self-center"
            />
            <Text className="font-normal text-white_A700">{featureText2}</Text>
          </div>
          <div className="flex items-start justify-center gap-[0.75rem] opacity-30">
            <Img
              src="images/img_checkmark.svg"
              width={18}
              height={18}
              alt="Image"
              className="self-center"
            />
            <Text className="font-normal text-white_A700">{featureText3}</Text>
          </div>
          <div className="flex items-start justify-center gap-[0.75rem] opacity-30">
            <Img
              src="images/img_checkmark.svg"
              width={18}
              height={18}
              alt="Image"
              className="self-center"
            />
            <Text className="font-normal text-white_A700">{featureText4}</Text>
          </div>
          <div className="flex items-start justify-center gap-[0.75rem] opacity-30">
            <Img
              src="images/img_checkmark.svg"
              width={18}
              height={18}
              alt="Image"
              className="self-center"
            />
            <Text className="font-normal text-white_A700">{featureText5}</Text>
          </div>
        </div>
        <Button className="mt-[2rem] w-full bg-yellow-500 text-black py-[0.875rem] text-center rounded-md">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}