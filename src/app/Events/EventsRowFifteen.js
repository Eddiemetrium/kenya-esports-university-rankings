import { Button, Heading } from "../../components";
import UserProfile11 from "../../components/UserProfile11";
import React from "react";

export default function EventsRowFifteen() {
  return (
    <div>
      <div className="bg-black-900_03">
        <div className="flex h-[43.38rem] items-center justify-center bg-[url(/images/img_group_401.png)] bg-cover bg-no-repeat py-[6.13rem] md:h-auto md:py-[1.25rem]">
          <div className="container-xs flex justify-center md:px-[1.25rem]">
            <div className="flex w-full items-start gap-[2.75rem] md:flex-col">
              <div className="mt-[3.38rem] flex w-[32%] flex-col items-start gap-[2.50rem] md:w-full">
                <Heading
                  as="h2"
                  className="!font-avenirnext uppercase leading-[130%] tracking-[0.06rem]"
                >
                  <span className="text-white-a700">
                    <>
                      stay <br />
                      with our <br />
                      latest&nbsp;
                    </>
                  </span>
                  <span className="text-indigo-a200">news</span>
                </Heading>
                <Button
                  color="indigo_A200"
                  size="x1"
                  shape="square"
                  className="min-w-[12.50rem] font-semibold capitalize"
                >
                  View all
                </Button>
              </div>
              <div className="ml-[2.75rem] flex flex-1 gap-[1.25rem] self-center md:ml-0 md:flex-col md:self-stretch">
                <UserProfile11 />
                <UserProfile11
                  januaryButton="January 21, 2020"
                  storiesText="stories"
                  sedutText="Sed ut perspiciatis unde..."
                  loremIpsumText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
