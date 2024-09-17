import React from "react";
import { Img } from "../../components";
import UserProfile8 from "../../components/UserProfile8";

export default function SponsorStackloremipsum() {
  return (
    <div className="relative z-[3] mt-[-11.88rem] h-[54.13rem]">
      <Img
        src="img_group_2502.png"
        width={1440}
        height={686}
        alt="Image"
        className="absolute bottom-0 left-0 right-0 m-auto h-[42.88rem] w-full flex-1 object-cover"
      />
      <div className="container-xs absolute left-0 right-0 top-0 my-auto flex md:px-[1.25rem]">
        <div className="w-full bg-black-900">
          <div className="mb-[1.88rem] grid grid-cols-3 gap-[2.50rem] md:grid-cols-2 sm:grid-cols-1">
            <UserProfile8 />
            <UserProfile8
              loremIpsumText="View Website"
              viewWebsiteText="img_arrow_2.svg"
              className="bg-indigo-a200 p-[1.88rem] sm:p-[1.25rem]"
            />
            <UserProfile8 />
            <UserProfile8 className="bg-white-a700_0c p-[1.88rem] sm:p-[1.25rem]" />
            <div className="h-[8.75rem] w-full bg-white-a700_0c" />
            <UserProfile8 />
            <UserProfile8 />
            <UserProfile8 />
          </div>
        </div>
      </div>
    </div>
  );
}
