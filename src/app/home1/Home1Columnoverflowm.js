
import React from "react";
import Image from "next/image";
import { Slider } from "../../../components";

export default function Home1ColumnmoveOverflow() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="absolute bottom-[0.00rem] left-0 right-0 m-auto w-full">
      <div className="flex w-full">
        <Slider
          autoPlay
          autoPlayInterval={2000}
          responsive={{
            0: { items: 1 },
            551: { items: 1 },
            1051: { items: 1 },
          }}
          disableDotsControls
          activeIndex={sliderState}
          onSlideChanged={(e) => {
            setSliderState(e.item);
          }}
          ref={sliderRef}
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="flex items-center gap-[1.31rem] md:flex-col">
                <div className="flex w-[60%] justify-center bg-gray-400 px-[3.50rem] py-[11.38rem] md:w-full md:p-[1.25rem]">
                  <Image
                    src="img_overflow_menu_white_a700.svg"
                    width={100}
                    height={100}
                    alt="Overflowmenu"
                    className="mt-[1.75rem] h-[6.25rem] w-[6.25rem]"
                  />
                </div>
                <Image
                  src="img_rectangle_250.png"
                  width={114}
                  height={424}
                  alt="Image"
                  className="h-[26.50rem] w-[8%] self-end object-contain md:w-full md:self-auto"
                />
              </div>
            </React.Fragment>
          ))}
        />
      </div>
    </div>
  );
}
