import { Img, Text, Heading } from "./..";
import Link from "next/link";
import React, { Suspense } from "react";

const data = [
  {
    image: "img_worldtour.svg",
    marketing: (
      <>
        &quot;Marketing&quot;
        <br />
        marketing@sesain.com
      </>
    ),
  },
  {
    image: "img_bookmark.svg",
    marketing: (
      <>
        &quot;Sponsorship&quot;
        <br />
        sponsorship@sesain.com
      </>
    ),
  },
  {
    image: "img_edit.svg",
    marketing: (
      <>
        &quot;Media&quot;
        <br />
        media@sesain.com
      </>
    ),
  },
  {
    image: "img_folder.svg",
    marketing: (
      <>
        &quot;Administration&quot;
        <br />
        admin@sesain.com
      </>
    ),
  },
];

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex items-center`}>
      <div className="flex">
        <div className="flex-grow basis-[30%] self-start">
          <div className="flex flex-col gap-[9px] items-start justify-center">
            <div className="flex flex-col items-start justify-between gap-[1.25rem] self-stretch w-auto">
              <Img
                src="img_group_163.svg"
                className="h-[60px] w-[60px]"
                alt="image"
              />
              <Text
                size="txtInterRegular16"
                className="leading-[150%] max-w-[312px] md:max-w-full text-gray-900"
              >
                Latest news
              </Text>
            </div>
            <div className="flex flex-col items-start self-stretch">
              <ul className="flex flex-col gap-[0.62rem] items-start self-stretch w-full">
                <li>
                  <Link href="#">
                    <Text size="txtInterMedium16" className="text-gray-900">
                      Assassin esport got 2nd place/
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text size="txtInterMedium16" className="text-gray-900">
                      PMPL Championship/
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mt-[0.38rem]">
                    <Text size="txtInterMedium16" className="text-white-A700">
                      Hello World !
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[6.75rem] items-start justify-between ml-auto w-[243px]">
          <div className="flex flex-col gap-[1.19rem] items-start justify-start w-full">
            <Heading size="heading1g" as="h6" className="uppercase">
              menu left
            </Heading>
            <ul className="flex flex-col items-center gap-[0.69rem]">
              <li>
                <Link href="home" target="_blank" rel="noreferrer">
                  <Text size="txtInterMedium16" className="uppercase">
                    home
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="news" target="_blank" rel="noreferrer">
                  <Text size="txtInterMedium16" className="uppercase">
                    news
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="team" target="_blank" rel="noreferrer">
                  <Text size="txtInterMedium16" className="uppercase">
                    teams
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[1.19rem] items-start justify-start w-full">
            <Heading size="heading1g" as="h6" className="uppercase">
              menu right
            </Heading>
            <ul className="flex flex-col items-start">
              <li>
                <Link href="events" target="_blank" rel="noreferrer">
                  <Text size="txtInterMedium16" className="uppercase">
                    events
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="sponsor" target="_blank" rel="noreferrer">
                  <Text size="txtInterMedium16" className="uppercase">
                    sponsor
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="team" target="_blank" rel="noreferrer">
                  <Text size="txtInterMedium16" className="uppercase">
                    teams
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-[1.25rem]">
        <Text
          size="txtInterMedium16"
          className="self-center text-indigo-A200_01"
        >
          2023 All righ here
        </Text>
      </div>
      <Img
        src="img_arrow_3.svg"
        className="h-[17px] w-[17px]"
        alt="arrowThree"
      />
      <div className="relative h-[11.75rem] mt-auto w-full">
        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
          <div className="flex justify-center border-[0.5px] border-solid border-black-900_01 bg-black-900_01 h-[1.37rem] px-[1.37rem] py-[0.37rem]">
            <div className="flex h-full justify-between gap-[1.25rem] items-center w-[24.25rem]">
              <div className="flex w-[45%] gap-[4.25rem] items-start justify-between">
                <div className="flex flex-col items-start justify-start">
                  <Img
                    src="img_instagram.svg"
                    className="h-[17px] w-[17px]"
                    alt="frame"
                  />
                  <Text
                    size="txtInterMedium14"
                    className="font-inter font-medium leading-[1.43rem] text-white-A700"
                  >
                    Jakarta, Indonesia
                    <br />
                  </Text>
                </div>
                <span className="text-[0.88rem] text-gray-500_95">
                  @sesain 4211
                </span>
              </div>
              <div className="h-[0.06rem] w-[0.06rem] bg-gray-600" />
              <div className="flex w-[25%] flex-col items-start gap-[0.56rem] justify-start min-h-full">
                <Img
                  src="img_linkedin.svg"
                  className="h-[17px] w-[17px]"
                  alt="linkedin"
                />
                <Text
                  size="txtInterMedium14"
                  className="font-inter font-medium leading-[1.43rem] text-white-A700"
                >
                  Bandung, Indonesia
                  <br />
                </Text>
                <span className="text-[0.88rem] text-gray-500_95">
                  @main satu 4211
                </span>
              </div>
            </div>
          </div>
        </div>
        {data.map((item, index) => (
          <div
            key={`${item.image}_${index}`}
            className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[6%] my-auto w-[14%]"
          >
            <Img
              src={item.image}
              className="h-[42px] md:h-auto object-cover w-[42px]"
              alt={`image_${index}`}
            />
            <Text
              className="mt-[13px] text-base text-center text-gray-900"
              size="txtInterBold16"
            >
              {item.marketing}
            </Text>
          </div>
        ))}
      </div>
      <div className="flex w-[24%] items-center justify-between gap-[1.25rem] min-h-full">
        <div className="flex w-[45%] flex-col items-start gap-[0.56rem] justify-start">
          <Img
            src="img_linkedin.svg"
            width={17}
            height={17}
            alt="linkedin"
            className="h-[1.06rem]"
          />
          <span className="text-[1.13rem] font-medium text-white-A700">
            Bandung, Indonesia
            <br />
          </span>
          <span className="text-[0.88rem] text-gray-500_95">
            @kalimancah 4211
          </span>
        </div>
      </div>
      <div className="flex w-[24%] items-center justify-between gap-[1.25rem] min-h-full">
        <div className="flex w-[45%] flex-col items-start gap-[0.56rem] justify-start">
          <Img
            src="img_linkedin.svg"
            width={17}
            height={17}
            alt="linkedin"
            className="h-[1.06rem]"
          />
          <span className="text-[1.13rem] font-medium text-white-A700">
            Yogyakarta, Indonesia
            <br />
          </span>
          <span className="text-[0.88rem] text-gray-500_95">@sanon 4211</span>
        </div>
      </div>
      <div className="flex justify-center bg-indigo-A200 py-[1.06rem]">
        <div className="container mx flex w-[13.25rem]">
          <Text
            size="txtDmSans"
            as="p"
            className="w-[23%] font-medium leading-[1.38rem] text-white-A700"
          >
            ©SESAIN ESPORT COPYRIGHT ALL RESERVED 2024
          </Text>
        </div>
      </div>
      <Img
        src="img_arrow_up.svg"
        width={30}
        height={30}
        alt="arrowup"
        className="absolute bottom-[12%] right-[3%] w-auto h-[1.13rem]"
      />
    </footer>
  );
}
