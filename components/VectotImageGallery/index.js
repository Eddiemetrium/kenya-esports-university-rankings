import React from "react";
import { Img } from "./.."; // Update the path as needed

export default function VectorImageGallery({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex items-center`}>
      <div className="flex w-full items-end">
        <div className="relative h-[2.75rem] flex-1 self-center">
          <Img
            src="img_vector.svg"
            width={24}
            height={26}
            alt="Vector"
            className="absolute bottom-[8.88rem] left-8 right-8 m-auto h-[1.63rem]"
          />
          <Img
            src="img_vector_gray_588_03.svg"
            width={38}
            height={48}
            alt="Vector"
            className="absolute bottom-8 left-[0.86rem] top-8 my-auto h-[2.58rem]"
          />
          <Img
            src="img_vector.svg"
            width={24}
            height={26}
            alt="Vector"
            className="absolute left-[8.0rem] top-[8.88rem] m-auto h-[1.63rem]"
          />
        </div>
        <div className="flex gap-[0.25rem] h-[1.58rem] w-[8.25rem] self-start bg-gray-580_83">
          <Img
            src="img_vector_gray_588_03_16x16.svg"
            width={16}
            height={16}
            alt="Vector"
            className="mb-[0.63rem] h-[1.60rem] w-[1.88rem]"
          />
          <Img
            src="img_vector_gray_588_03_24x16.svg"
            width={16}
            height={24}
            alt="Vector Eleven"
            className="mb-[0.25rem] h-[1.50rem]"
          />
          <Img
            src="img_vector_16x16.svg"
            width={16}
            height={16}
            alt="Vector Thirteen"
            className="mb-[0.63rem] h-[1.00rem] w-[1.88rem]"
          />
          <Img
            src="img_vector_gray_588_03_22x4.svg"
            width={4}
            height={22}
            alt="Vector Fifteen"
            className="mt-[8.5rem] h-[1.38rem] self-start"
          />
          <Img
            src="img_vector_gray_588_03_22x16.svg"
            width={16}
            height={22}
            alt="Vector"
            className="mb-[0.25rem] h-[1.38rem]"
          />
          <Img
            src="img_vector_gray_588_03_16x12.svg"
            width={12}
            height={16}
            alt="Vector Ten"
            className="mb-[0.63rem] h-[1.00rem]"
          />
          <Img
            src="img_vector_gray_588_03_16x14.svg"
            width={14}
            height={16}
            alt="Vector"
            className="mb-[0.63rem] h-[1.60rem]"
          />
          <Img
            src="img_vector_gray_588_03_16x22.svg"
            width={22}
            height={16}
            alt="Vector"
            className="mb-[0.63rem] h-[1.80rem]"
          />
          <Img
            src="img_vector_gray_588_03_6x6.svg"
            width={6}
            height={6}
            alt="Vector"
            className="mt-[8.58rem] h-[8.38rem] w-[8.38rem] self-start"
          />
        </div>
      </div>
    </div>
  );
}
