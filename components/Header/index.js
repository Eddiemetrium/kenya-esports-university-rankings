import { Img, Heading, Text } from "./..";
import Link from "next/link";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header {...props} className="flex items-center">
      <div className="relative h-[5.75rem] w-[100%] md:w-auto flex-1">
        <div className="flex justify-center border-b-[0.50rem] border-solid border-gray_500_01 bg-black_900_05 py-[1.25rem]">
          <div className="container flex items-center gap-[1.25rem] px-[0.25rem] md:px-[1.25rem]">
            <Text className="text-sm">Follow us on</Text>
            <div className="flex items-center gap-[1.25rem] self-end">
              <Link href="#">
                <Img
                  src="img_facebook.svg"
                  width={20}
                  height={20}
                  alt="Facebook"
                  className="h-[1.25rem] w-[1.25rem]"
                />
              </Link>
              <Link href="#">
                <Img
                  src="img_trash.svg"
                  width={20}
                  height={20}
                  alt="Trash"
                  className="h-[1.25rem] w-[1.25rem]"
                />
              </Link>
              <Link href="#">
                <Img
                  src="img_info.svg"
                  width={20}
                  height={20}
                  alt="Info"
                  className="h-[1.25rem] w-[1.25rem]"
                />
              </Link>
              <Link href="#">
                <Img
                  src="img_group_188.svg"
                  width={20}
                  height={20}
                  alt="Image"
                  className="h-[1.25rem] w-[1.25rem]"
                />
              </Link>
              <Link href="#">
                <Img
                  src="img_thumbs_up.svg"
                  width={20}
                  height={20}
                  alt="Thumbs Up"
                  className="h-[0.8rem] w-[0.8rem]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[6.25rem] items-end justify-center bg-[url(/images/img_group_2444.png)] bg-cover bg-no-repeat md:h-auto">
        <div className="container mx-[1.25rem] flex justify-center md:px-[1.25rem]">
          <ul className="flex items-center justify-between gap-[1.25rem] md:flex-col md:gap-[0.25rem] md:h-full md:self-center">
            <li>
              <Link href="#">
                <Heading size="heading3" as="h3" className="uppercase">
                  Home
                </Heading>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Heading size="heading3" as="h3" className="uppercase">
                  Pages
                </Heading>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Heading size="heading3" as="h3" className="uppercase">
                  Image
                </Heading>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Heading size="heading3" as="h3" className="uppercase">
                  Players
                </Heading>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Heading size="heading3" as="h3" className="uppercase">
                  Sponsor
                </Heading>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Heading size="heading3" as="h3" className="uppercase">
                  Events
                </Heading>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Img
                  src="img_search.svg"
                  width={18}
                  height={18}
                  alt="Search"
                  className="h-[1.13rem] w-[1.13rem]"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Img
        src="img_header_logo.svg"
        alt="Image"
        className="absolute bottom-0 left-0 right-0 top-0 h-[13.75rem] w-[13.75rem] object-contain"
      />
    </header>
  );
}
