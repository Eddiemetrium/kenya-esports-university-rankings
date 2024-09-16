import VectorImageGallery from "../../components/VectorImageGallery";
import React, { Suspense } from "react";

export default function PlayersdetailColumnvectortwo() {
  return (
    <div className="flex flex-col items-center gap-[4.50rem] md:gap-[3.38rem] sm:gap-[2.25rem]">
      <div className="h-[0.13rem] w-full self-stretch bg-gradient7" />
      <div className="container-xs px-[0.63rem] md:px-[1.25rem]">
        <div className="flex gap-[6.63rem] md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {[...Array(4)].map((d, index) => (
              <VectorImageGallery
                key={"listvectortone" + index}
                className="mb-[0.25rem] w-[26%] md:mb-0 md:w-full"
              />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
