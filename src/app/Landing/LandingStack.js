import { Img, Text, Heading } from "../../components";
import Link from "next/link";
import React, { Suspense } from "react";

const data = [
  {
    image: "img_maximize.svg",
    marketingmarke: (
      <>
        Marketing
        <br />
        marketing@assasin.com
      </>
    ),
  },
  {
    image: "img_bookmark.svg",
    marketingmarke: (
      <>
        Sponsorship
        <br />
        admin@assasin.com
      </>
    ),
  },
  {
    image: "img_edit.svg",
    marketingmarke: (
      <>
        Media
        <br />
        admin@assasin.com
      </>
    ),
  },
  {
    image: "img_folder.svg",
    marketingmarke: (
      <>
        Administration
        <br />
        admin@assasin.com
      </>
    ),
  },
];

export default function LandingStack() {
  return (
    <div className="relative h-[24.00rem] bg-[url(/images/img_group_2513.png)] bg-cover bg-no-repeat px-[8.38rem] py-[2.88rem] md:p-[1.25rem]">
      <div className="absolute right-[26%] top-[12%] m-auto h-[9.25rem] w-[10%] content-center md:h-auto">
        <div className="mx-auto flex flex-1 flex-col items-start gap-[1.13rem]">
          <Heading
            size="headinglg"
            as="h5"
            className="text-[1.25rem] font-semibold uppercase text-white-a700"
          >
            Menu Left
          </Heading>
          <ul className="flex flex-col items-center gap-[0.63rem]">
            <li>
              <Link href="#">
                <Text
                  size="textmd"
                  as="p"
                  className="text-[0.88rem] font-normal uppercase text-gray-500_05"
                >
                  Home
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text
                  size="textmd"
                  as="p"
                  className="text-[0.88rem] font-normal uppercase text-gray-500_05"
                >
                  Pages
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text
                  size="textmd"
                  as="p"
                  className="text-[0.88rem] font-normal uppercase text-gray-500_05"
                >
                  Games
                </Text>
              </Link>
            </li>
          </ul>
        </div>
        <div className="absolute left-[0.06rem] top-[27%] m-auto h-[0.13rem] w-[50%] bg-indigo-a200" />
      </div>

      <div className="absolute right-[12%] top-[12%] m-auto h-[9.25rem] w-[10%] content-center md:h-auto">
        <div className="mx-auto flex flex-1 flex-col items-start gap-[1.13rem]">
          <Heading
            size="headinglg"
            as="h5"
            className="text-[1.25rem] font-semibold uppercase text-white-a700"
          >
            Menu Right
          </Heading>
          <ul className="flex flex-col items-start gap-[0.63rem]">
            <li>
              <Link href="#">
                <Text
                  size="textmd"
                  as="p"
                  className="text-[0.88rem] font-normal uppercase text-gray-500_05"
                >
                  Events
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text
                  size="textmd"
                  as="p"
                  className="text-[0.88rem] font-normal uppercase text-gray-500_05"
                >
                  Sponsor
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text
                  size="textmd"
                  as="p"
                  className="text-[0.88rem] font-normal uppercase text-gray-500_05"
                >
                  Teams
                </Text>
              </Link>
            </li>
          </ul>
        </div>
        <div className="absolute left-[0.06rem] top-[27%] m-auto h-[0.13rem] w-[42%] bg-indigo-a200" />
      </div>

      <div className="absolute bottom-0 left-[29%] top-my-auto h-[18.00rem] w-[18%] content-center md:h-auto">
        <div className="mx-auto flex flex-1 flex-col items-start gap-[1.25rem]">
          <Heading
            size="headinglg"
            as="h5"
            className="text-[1.25rem] font-semibold uppercase text-white-a700"
          >
            Get in Touch
          </Heading>
          <ul className="flex flex-col gap-[0.75rem] self-stretch">
            <li>
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <Link href="#" key={"listmarketingma" + index}>
                    <div className="flex flex-1 items-start justify-center gap-[0.50rem]">
                      <Img
                        src={d.image}
                        width={18}
                        height={18}
                        alt="Image"
                        className="h-[1.13rem] w-[1.13rem]"
                      />
                      <Text
                        as="p"
                        className="self-center font-hind text-[1.00rem] font-normal leading-[1.44rem] text-white-a700"
                      >
                        {d.marketingmarke}
                      </Text>
                    </div>
                  </Link>
                ))}
              </Suspense>
            </li>
          </ul>
        </div>
        <div className="absolute left-[0.00rem] top-[14%] m-auto h-[0.13rem] w-[28%] bg-indigo-a200" />
      </div>

      <div className="absolute left-0 right-0 top-[12%] m-auto h-[10.38rem] w-[16%] content-center md:h-auto">
        <div className="mx-auto flex flex-1 flex-col items-start gap-[1.25rem]">
          <Heading
            size="headinglg"
            as="h5"
            className="text-[1.25rem] font-semibold uppercase text-white-a700"
          >
            Latest News
          </Heading>
          <ul className="flex flex-col items-start self-stretch">
            <li>
              <Link href="#">
                <Text
                  as="p"
                  className="text-[1.00rem] font-normal text-gray-500_05"
                >
                  Assassin eSport got 2nd place
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text
                  as="p"
                  className="text-[1.00rem] font-normal text-gray-500_05"
                >
                  in PMPL Championship
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#" className="mt-[0.38rem]">
                <Text
                  as="p"
                  className="font-avenirnext text-[1.00rem] font-normal text-white-a700"
                >
                  Hello World!
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#" className="mt-[0.25rem]">
                <Text
                  as="p"
                  className="font-avenirnext text-[1.00rem] font-normal text-white-a700"
                >
                  Introducing our new team at MPL
                </Text>
              </Link>
            </li>
          </ul>
        </div>
        <div className="absolute left-[0.06rem] top-[24%] m-auto h-[0.13rem] w-[24%] bg-indigo-a200" />
      </div>

      <div className="absolute bottom-[35%] left-0 right-0 m-auto flex items-start gap-[1.25rem]">
        <Text
          as="p"
          className="self-center text-[1.00rem] font-normal text-indigo-a200_01"
        >
          View all news here
        </Text>
        <Img
          src="img_arrow_2.svg"
          width={14}
          height={2}
          alt="Arrowtwo"
          className="mt-[0.63rem] h-[0.13rem]"
        />
      </div>

      <div className="absolute left-[9%] top-[13%] m-auto flex w-[14%] flex-col gap-[0.63rem]">
        <Img
          src="img_group_163.svg"
          width={150}
          height={150}
          alt="Image"
          className="mx-[0.75rem] h-[9.38rem] w-[9.38rem] md:mx-0"
        />
        <div className="flex justify-center gap-[1.25rem]">
          <Img
            src="img_facebook.svg"
            width={20}
            height={20}
            alt="Facebook"
            className="h-[1.25rem] w-[1.25rem]"
          />
          <Img
            src="img_trash.svg"
            width={20}
            height={20}
            alt="Trash"
            className="h-[1.25rem] w-[1.25rem]"
          />
          <Img
            src="img_info.svg"
            width={20}
            height={20}
            alt="Info"
            className="h-[1.25rem] w-[1.25rem]"
          />
          <Img
            src="img_group_188.svg"
            width={20}
            height={20}
            alt="Image"
            className="h-[1.25rem] w-[1.25rem]"
          />
          <Img
            src="img_bx_bxl_twitch.svg"
            width={20}
            height={20}
            alt="Bxbxltwitch"
            className="h-[1.25rem] w-[1.25rem]"
          />
        </div>
      </div>
    </div>
  );
}
