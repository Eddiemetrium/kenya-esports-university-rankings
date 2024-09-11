import { Text, Heading, Button, Slider, Img } from "../../components";
import React from "react";

export default function Home1ColumnFour() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="flex flex-col items-center">
      <div className="container-xs flex flex-center gap-[2.75rem] md:px-[1.25rem]">
        <div className="flex items-start justify-between gap-[1.25rem] self-stretch sm:flex-col sm:self-stretch">
          <div className="mb-[1.88rem] flex flex-1 items-start gap-[1.88rem] sm:flex-col sm:self-stretch">
            <Img
              src="img_overflow_menu_indigo_a200.svg"
              width={30}
              height={30}
              alt="Overflowmenu"
              className="mt-[1.00rem] h-[1.88rem] w-[1.88rem] sm:mt-0 sm:w-full"
            />
            <Heading
              as="h2"
              className="self-center uppercase tracking-[0.06rem]"
            >
              From the blog
            </Heading>
          </div>
          <div className="flex gap-[0.63rem] self-end sm:self-auto">
            <Button
              onClick={() => {
                sliderRef?.current?.slidePrev();
              }}
              shape="round"
              className="w-[3.13rem]"
            >
              <Img src="img_slick_arrow_left.svg" width={14} height={22} />
            </Button>
          </div>
        </div>
        <Slider
          autoPlay
          autoPlayInterval={2000}
          responsive={{
            0: { items: 1 },
            551: { items: 1 },
            1051: { items: 3 },
          }}
          disableDotsControls
          activeIndex={sliderState}
          onSlideChanged={(e) => {
            setSliderState(e.item);
          }}
          ref={sliderRef}
          items={[...Array(9)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="px-[0.63rem]">
                <div className="flex flex-col gap-[1.25rem] bg-gray-900_05 shadow-xs">
                  <div className="flex bg-gray-400 p-[1.25rem]">
                    <Button
                      color="gray_900_7f"
                      size="xs"
                      shape="round"
                      className="mb-[10.75rem] min-w-[7.88rem] font-medium uppercase"
                    >
                      January 21, 2020
                    </Button>
                  </div>
                  <div className="mx-[1.25rem] mb-[5.38rem] flex flex-col items-start md:mx-0">
                    <div className="flex h-[1.50rem] w-[26%] items-center justify-center bg-[url(/images/img_group_543.svg)] bg-cover bg-no-repeat md:h-auto md:w-full">
                      <Heading size="texts" as="h3" className="uppercase">
                        Stories
                      </Heading>
                    </div>
                    <Heading
                      size="headinglg"
                      as="h4"
                      className="mt-[1.25rem] uppercase leading-[2.00rem]"
                    >
                      Sed ut perspiciatis unde...
                    </Heading>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        />
        <div className="flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <>
              {sliderState >=
                i * (sliderRef?.current?.state?.itemsInSlide || 1) &&
              sliderState <
                (i + 1) * (sliderRef?.current?.state?.itemsInSlide || 1) ? (
                <div
                  onClick={() => {
                    sliderRef?.current?.slideTo(
                      i * sliderRef?.current?.state?.itemsInSlide
                    );
                  }}
                  className="mr-[1.25rem] inline-block h-[0.38rem] w-[3.75rem] cursor-pointer bg-indigo-a200"
                />
              ) : (
                <div
                  onClick={() => {
                    sliderRef?.current?.slideTo(
                      i * sliderRef?.current?.state?.itemsInSlide
                    );
                  }}
                  className="mr-[1.25rem] inline-block h-[0.38rem] w-[3.75rem] cursor-pointer bg-white-a700_4f"
                />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
