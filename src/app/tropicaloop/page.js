"use client";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/16/solid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Main_sec = () => {
  return (
    <section>
      <div className="relative lg:min-h-120vh w-full lg:flex lg:items-center lg:">
        <picture>
          <source
            srcSet="/DEATHLOOP-main-mobile.jpg"
            media="(max-width:1039.95px)"
          ></source>
          <source
            srcSet="/DEATHLOOP-main-pc.jpg"
            media="(min-width:1040px)"
          ></source>
          <Image
            alt=""
            fill
            className="h-full -z-10 absolute fill-inherit object-cover"
            src={"/DEATHLOOP-main-mobile.jpg"}
          />
        </picture>

        <div className="flex items-center justify-center lg:justify-end lg:flex-row-reverse min-h-40vh w-full ">
          <div className="mt-64 lg:mt-20 w-3/4 lg:w-2/5 lg:pl-40">
            <div className="relative max-w-[950px]">
              {/* <Image
                alt=""
                width={1000}
                height={1000}
                src={"/Deathloop-left-main.png"}
              /> */}
            </div>
            <div className="relative my-10 w-full ">
              <Image
                alt=""
                width={1000}
                height={1000}
                src={"/DEATHLOOP-logo-main.png"}
              />
            </div>
            <div className="flex font-futura items-center flex-wrap flex-col sm:flex-row mx-auto justify-center">
              <button className="uppercase text-xs xl:text-sm bg-deathloop_orange_hover transition ease-out duration-300 tracking-widest py-6 px-12 m-3 hover:opacity-90 min-w-20 w-full sm:w-max">
                buy now
              </button>
              <button className="uppercase text-xs xl:text-sm bg-deathloop_orange_hover py-6 px-12 m-3 ease-out tracking-widest duration-300 hover:opacity-90 min-w-20 w-full sm:w-max">
                Play With DG Gold
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <ul className="flex justify-center my-5 space-x-5">
            <li>
              <a className="text-gray-500 ease-in-out transition duration-300 hover:text-deathloop_orange">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z"
                    clirrule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a className="text-gray-500 ease-in-out transition duration-300 hover:text-deathloop_orange">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a className="text-gray-500 ease-in-out transition duration-300 hover:text-deathloop_orange">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11 2.5c0-0.275 0.225-0.5 0.5-0.5h2c0.275 0 0.5 0.225 0.5 0.5v2c0 0.275-0.225 0.5-0.5 0.5h-2c-0.275 0-0.5-0.225-0.5-0.5v-2zM8 5c1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.656 0-3-1.344-3-3s1.344-3 3-3zM14 13.5v0c0 0.275-0.225 0.5-0.5 0.5h-11c-0.275 0-0.5-0.225-0.5-0.5v0-6.5h1.1c-0.066 0.322-0.1 0.656-0.1 1 0 2.762 2.237 5 5 5s5-2.238 5-5c0-0.344-0.034-0.678-0.1-1h1.1v6.5z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a className="text-gray-500 ease-in-out transition duration-300 hover:text-deathloop_orange">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M15.841 4.8c0 0-0.156-1.103-0.637-1.587-0.609-0.637-1.291-0.641-1.603-0.678-2.237-0.163-5.597-0.163-5.597-0.163h-0.006c0 0-3.359 0-5.597 0.163-0.313 0.038-0.994 0.041-1.603 0.678-0.481 0.484-0.634 1.587-0.634 1.587s-0.159 1.294-0.159 2.591v1.213c0 1.294 0.159 2.591 0.159 2.591s0.156 1.103 0.634 1.588c0.609 0.637 1.409 0.616 1.766 0.684 1.281 0.122 5.441 0.159 5.441 0.159s3.363-0.006 5.6-0.166c0.313-0.037 0.994-0.041 1.603-0.678 0.481-0.484 0.637-1.588 0.637-1.588s0.159-1.294 0.159-2.591v-1.213c-0.003-1.294-0.162-2.591-0.162-2.591zM6.347 10.075v-4.497l4.322 2.256-4.322 2.241z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const Xbox_sec = () => {
  return (
    <section>
      <div className="xbox bg-deathloop_green text-deathloop_white">
        <div className="flex max-w-[1680px] m-auto items-center flex-col sm:flex-row-reverse ">
          <div className="w-full sm:my-10 pt-52 sm:py-5 px-5">
            <h3 className="uppercase ">
              AVAILABLE ON XBOX GAME PASS , PLAY STATION PLUS , DG GOLD AND PC
              GAME PASS
            </h3>
            <div className="leading-8 mt-3 font-univers55 text-base font-thin">
              You can play Tropicaloop on various free services; you just need
              to have one of the mentioned accounts
            </div>
            <button className="font-futura uppercase text-sm font-bold text-black bg-white transition ease-out duration-300 py-3 px-8 my-3 hover:bg-gray-400 min-w-20 max-w-52">
              play it now
            </button>
          </div>
          <div className="flex justify-center align-middle sm:mx-5 w-full my-5 sm:my-10">
            <div className="relative hover:-translate-y-2 mx-auto sm:mx-auto sm:my-auto max-w-3xl sm:w-full w-11/12 hover:shadow-xbox transition duration-300 cursor-pointer">
              <div className="z-10  max-w-3xl rounded-md bg-image-shadow-top h-40% w-full flex absolute -top-1">
                <span className="flex absolute right-9 top-6 py-2 text-deathloop_white sm:w-24 bg-youtube_red w-10 h-8 rounded-md items-center m-auto">
                  <svg
                    className=" flex align-middle size-7 ml-3 mt-10px"
                    focusable="false"
                    fill="white"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M15.841 4.8c0 0-0.156-1.103-0.637-1.587-0.609-0.637-1.291-0.641-1.603-0.678-2.237-0.163-5.597-0.163-5.597-0.163h-0.006c0 0-3.359 0-5.597 0.163-0.313 0.038-0.994 0.041-1.603 0.678-0.481 0.484-0.634 1.587-0.634 1.587s-0.159 1.294-0.159 2.591v1.213c0 1.294 0.159 2.591 0.159 2.591s0.156 1.103 0.634 1.588c0.609 0.637 1.409 0.616 1.766 0.684 1.281 0.122 5.441 0.159 5.441 0.159s3.363-0.006 5.6-0.166c0.313-0.037 0.994-0.041 1.603-0.678 0.481-0.484 0.637-1.588 0.637-1.588s0.159-1.294 0.159-2.591v-1.213c-0.003-1.294-0.162-2.591-0.162-2.591zM6.347 10.075v-4.497l4.322 2.256-4.322 2.241z"></path>
                  </svg>
                  <span className="hidden sm:block font-futura text-xs">
                    YOUTUBE
                  </span>
                </span>
              </div>
              <picture className="max-w-3xl">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/deathloop-xbox.jpg "}
                  className="w-full rounded-md"
                />
              </picture>
              <div className="text-deathloop_white flex flex-col justify-end font-futura rounded-md max-w-3xl z-10 pl-10 font-bold bg-image-shadow h-40% w-full bottom-0 absolute">
                <span className="flex text-deathloop_white ">
                  <svg
                    className="mr-2 size-4"
                    focusable="false"
                    fill="#DCDBC8"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                  <span className="text-xs"> VIDEO</span>
                </span>
                <div className="text-xl mt-4 mb-10 text-deathloop_white">
                  OFFICIAL XBOX LAUNCHER TRAILER
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Goldenloop_sec = () => {
  return (
    <section>
      <div className="goldloop text-deathloop_white py-3 bg-black">
        <div className="flex max-w-[1680px] m-auto items-center flex-col sm:flex-row">
          <div className="w-full sm:my-10 pt-52 sm:py-5 px-5">
            <h3 className="uppercase text-3xl xl:text-5xl">
              The GOLDENLOOP Update is Live!
            </h3>
            <div className="leading-8 mt-3 font-univers55 text-base font-thin">
              The path to freedom is golden - This new update includes a new
              ability, weapon, trinkets, cross-play matchmaking, and more!
            </div>
            <button className="font-futura uppercase text-sm font-bold text-black bg-deathloop_white transition ease-out duration-300 py-3 px-8 my-3 hover:bg-gray-400 min-w-20 max-w-52">
              Learn More
            </button>
          </div>
          <div className="flex justify-center align-middle sm:mx-5 w-full my-5 sm:my-10">
            <div className="relative hover:-translate-y-2 mx-auto sm:mx-auto sm:my-auto max-w-3xl sm:w-full w-11/12 hover:shadow-round transition duration-300 cursor-pointer">
              <div className="z-10  max-w-3xl rounded-md bg-image-shadow-top h-40% w-full flex absolute -top-1">
                <span className="flex absolute right-9 top-6 py-2 text-deathloop_white sm:w-24 bg-youtube_red w-10 h-8 rounded-md items-center m-auto">
                  <svg
                    className=" flex align-middle size-7 ml-3 mt-10px"
                    focusable="false"
                    fill="white"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M15.841 4.8c0 0-0.156-1.103-0.637-1.587-0.609-0.637-1.291-0.641-1.603-0.678-2.237-0.163-5.597-0.163-5.597-0.163h-0.006c0 0-3.359 0-5.597 0.163-0.313 0.038-0.994 0.041-1.603 0.678-0.481 0.484-0.634 1.587-0.634 1.587s-0.159 1.294-0.159 2.591v1.213c0 1.294 0.159 2.591 0.159 2.591s0.156 1.103 0.634 1.588c0.609 0.637 1.409 0.616 1.766 0.684 1.281 0.122 5.441 0.159 5.441 0.159s3.363-0.006 5.6-0.166c0.313-0.037 0.994-0.041 1.603-0.678 0.481-0.484 0.637-1.588 0.637-1.588s0.159-1.294 0.159-2.591v-1.213c-0.003-1.294-0.162-2.591-0.162-2.591zM6.347 10.075v-4.497l4.322 2.256-4.322 2.241z"></path>
                  </svg>
                  <span className="hidden sm:block font-futura text-xs">
                    YOUTUBE
                  </span>
                </span>
              </div>
              <picture className="max-w-3xl">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/deathloop-glu-black-pc.jpg "}
                  className="w-full rounded-md"
                />
              </picture>
              <div className="text-deathloop_white flex flex-col justify-end font-futura rounded-md max-w-3xl z-10 pl-5 font-bold bg-image-shadow h-40% w-full bottom-0 absolute">
                <span className="flex text-deathloop_white ">
                  <svg
                    className="mr-2 size-4"
                    focusable="false"
                    fill="#DCDBC8"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                  <span className="text-xs"> VIDEO</span>
                </span>
                <div className="text-xl mt-4 mb-10 uppercase text-deathloop_white">
                  Official Game Update Trailer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Latest_sec = () => {
  return (
    <section>
      <div className="bg-black text-deathloop_white">
        <h2 className="text-center py-10">THE LATEST</h2>
        <div className="flex flex-wrap mx-auto max-w-[1660px] px-4">
          <div className="flex justify-center sm:px-3 sm:max-w-[50%] w-full my-5 sm:my-3">
            <div className="relative hover:-translate-y-2 mx-auto sm:mx-auto  sm:w-full w-11/12 hover:shadow-round transition duration-300 cursor-pointer">
              <div className="z-10   rounded-md bg-image-shadow-top h-40% w-full flex absolute -top-1">
                <span className="flex absolute right-9 top-6 py-2 text-deathloop_white sm:w-24 bg-youtube_red w-10 h-8 rounded-md items-center m-auto">
                  <svg
                    className=" flex align-middle size-7 ml-3 mt-10px"
                    focusable="false"
                    fill="white"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M15.841 4.8c0 0-0.156-1.103-0.637-1.587-0.609-0.637-1.291-0.641-1.603-0.678-2.237-0.163-5.597-0.163-5.597-0.163h-0.006c0 0-3.359 0-5.597 0.163-0.313 0.038-0.994 0.041-1.603 0.678-0.481 0.484-0.634 1.587-0.634 1.587s-0.159 1.294-0.159 2.591v1.213c0 1.294 0.159 2.591 0.159 2.591s0.156 1.103 0.634 1.588c0.609 0.637 1.409 0.616 1.766 0.684 1.281 0.122 5.441 0.159 5.441 0.159s3.363-0.006 5.6-0.166c0.313-0.037 0.994-0.041 1.603-0.678 0.481-0.484 0.637-1.588 0.637-1.588s0.159-1.294 0.159-2.591v-1.213c-0.003-1.294-0.162-2.591-0.162-2.591zM6.347 10.075v-4.497l4.322 2.256-4.322 2.241z"></path>
                  </svg>
                  <span className="hidden sm:block font-futura text-xs">
                    YOUTUBE
                  </span>
                </span>
              </div>
              <picture className="">
                <source
                  srcSet="/latest_card_1_pc.jpg"
                  media="(max-width:639.95px)"
                ></source>
                <source
                  srcSet="/latest_card_1_mobile.jpg"
                  media="(min-width:640px)"
                ></source>
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/latest_card_2_mobile.jpg "}
                  className="w-full rounded-md"
                />
              </picture>
              <div className="text-deathloop_white flex flex-col justify-end font-futura rounded-md  z-10 pl-6 font-bold bg-image-shadow h-40% w-full bottom-0 absolute">
                <span className="flex text-deathloop_white ">
                  <svg
                    className="mr-2 size-4"
                    focusable="false"
                    fill="#DCDBC8"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                  <span className="text-xs"> VIDEO</span>
                </span>
                <div className="text-xl mt-4 mb-10 text-deathloop_white">
                  OFFICIAL XBOX LAUNCHER TRAILER
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:px-3 sm:max-w-[25%] w-full my-5 sm:my-3">
            <div className="relative hover:-translate-y-2 sm:max-w-[390px] mx-auto sm:mx-auto sm:my-auto max-w-3xl sm:w-full w-11/12 hover:shadow-round transition duration-300 cursor-pointer">
              <div className="z-10  max-w-3xl rounded-md bg-image-shadow-top h-40% w-full flex absolute -top-1">
                <span className="flex absolute right-9 top-6 py-2 text-deathloop_white bg-youtube_red w-10 h-8 rounded-md items-center m-auto">
                  <svg
                    className=" flex align-middle size-7 ml-3 mt-10px"
                    focusable="false"
                    fill="white"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M15.841 4.8c0 0-0.156-1.103-0.637-1.587-0.609-0.637-1.291-0.641-1.603-0.678-2.237-0.163-5.597-0.163-5.597-0.163h-0.006c0 0-3.359 0-5.597 0.163-0.313 0.038-0.994 0.041-1.603 0.678-0.481 0.484-0.634 1.587-0.634 1.587s-0.159 1.294-0.159 2.591v1.213c0 1.294 0.159 2.591 0.159 2.591s0.156 1.103 0.634 1.588c0.609 0.637 1.409 0.616 1.766 0.684 1.281 0.122 5.441 0.159 5.441 0.159s3.363-0.006 5.6-0.166c0.313-0.037 0.994-0.041 1.603-0.678 0.481-0.484 0.637-1.588 0.637-1.588s0.159-1.294 0.159-2.591v-1.213c-0.003-1.294-0.162-2.591-0.162-2.591zM6.347 10.075v-4.497l4.322 2.256-4.322 2.241z"></path>
                  </svg>
                </span>
              </div>
              <picture className="max-w-3xl">
                <source
                  srcSet="/latest_card_2_mobile.jpg"
                  media="(max-width:639.95px)"
                ></source>
                <source
                  srcSet="/latest_card_2_pc.jpg"
                  media="(min-width:640px)"
                ></source>
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/latest_card_2_mobile.jpg "}
                  className="w-full rounded-md  "
                />
              </picture>
              <div className="text-deathloop_white flex flex-col justify-end font-futura rounded-md max-w-3xl z-10 pl-6 font-bold bg-image-shadow h-40% w-full bottom-0 absolute">
                <span className="flex text-deathloop_white ">
                  <svg
                    className="mr-2 size-4"
                    focusable="false"
                    fill="#DCDBC8"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                  <span className="text-xs"> VIDEO</span>
                </span>
                <div className="text-xl mt-4 mb-10 text-deathloop_white">
                  OFFICIAL PC LAUNCHER TRAILER
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:px-3 sm:max-w-[25%] w-full my-5 sm:my-3">
            <div className="relative hover:-translate-y-2 sm:max-w-[390px] mx-auto sm:mx-auto sm:my-auto max-w-3xl sm:w-full w-11/12 hover:shadow-round transition duration-300 cursor-pointer">
              <div className="z-10  max-w-3xl rounded-md bg-image-shadow-top h-40% w-full flex absolute -top-1">
                <span className="flex absolute right-9 top-6 py-2 text-deathloop_white bg-youtube_red w-10 h-8 rounded-md items-center m-auto">
                  <svg
                    className=" flex align-middle size-7 ml-3 mt-10px"
                    focusable="false"
                    fill="white"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M15.841 4.8c0 0-0.156-1.103-0.637-1.587-0.609-0.637-1.291-0.641-1.603-0.678-2.237-0.163-5.597-0.163-5.597-0.163h-0.006c0 0-3.359 0-5.597 0.163-0.313 0.038-0.994 0.041-1.603 0.678-0.481 0.484-0.634 1.587-0.634 1.587s-0.159 1.294-0.159 2.591v1.213c0 1.294 0.159 2.591 0.159 2.591s0.156 1.103 0.634 1.588c0.609 0.637 1.409 0.616 1.766 0.684 1.281 0.122 5.441 0.159 5.441 0.159s3.363-0.006 5.6-0.166c0.313-0.037 0.994-0.041 1.603-0.678 0.481-0.484 0.637-1.588 0.637-1.588s0.159-1.294 0.159-2.591v-1.213c-0.003-1.294-0.162-2.591-0.162-2.591zM6.347 10.075v-4.497l4.322 2.256-4.322 2.241z"></path>
                  </svg>
                </span>
              </div>
              <picture className="max-w-3xl">
                <source
                  srcSet="/latest_card_3_mobile.jpg"
                  media="(max-width:639.95px)"
                ></source>
                <source
                  srcSet="/latest_card_3_pc.jpg"
                  media="(min-width:640px)"
                ></source>
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/latest_card_2_mobile.jpg "}
                  className="w-full rounded-md  "
                />
              </picture>
              <div className="text-deathloop_white flex flex-col justify-end font-futura rounded-md max-w-3xl z-10 pl-6 font-bold bg-image-shadow h-40% w-full bottom-0 absolute">
                <span className="flex text-deathloop_white ">
                  <svg
                    className="mr-2 size-4"
                    focusable="false"
                    fill="#DCDBC8"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                  <span className="text-xs"> VIDEO</span>
                </span>
                <div className="text-xl mt-4 mb-10 text-deathloop_white">
                  OFFICIAL PS5 LAUNCHER TRAILER
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:px-3 sm:max-w-[25%] w-full my-5 sm:my-3">
            <div className="relative hover:-translate-y-2 sm:max-w-[390px] mx-auto sm:mx-auto sm:my-auto max-w-3xl sm:w-full w-11/12 hover:shadow-round transition duration-300 cursor-pointer">
              {/* <div className="z-10  max-w-3xl rounded-md bg-latest4 h-40% w-full flex absolute -top-1"></div> */}
              <picture className="max-w-3xl">
                <source
                  srcSet="/latest_card_4_mobile.png"
                  media="(max-width:639.95px)"
                ></source>
                <source
                  srcSet="/latest_card_4_pc.png"
                  media="(min-width:640px)"
                ></source>
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/latest_card_4_mobile.png "}
                  className="w-full rounded-md  "
                />
              </picture>
              <div className="text-deathloop_white flex flex-col justify-end font-futura rounded-md max-w-3xl z-10 pl-6 font-bold bg-latest4 h-40% w-full bottom-0 absolute">
                <span className="flex text-deathloop_white ">
                  <svg
                    className="mr-2 size-4"
                    focusable="false"
                    fill="#DCDBC8"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path>
                  </svg>
                  <span className="text-xs"> NEWS</span>
                </span>
                <div className="text-xl mt-4 mb-10 text-deathloop_white">
                  THE COMPLETE GUIDE TO TROPICALOOP
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:px-3 sm:max-w-[25%] w-full my-5 sm:my-3">
            <div className="relative hover:-translate-y-2 sm:max-w-[390px] mx-auto sm:mx-auto sm:my-auto max-w-3xl sm:w-full w-11/12 hover:shadow-round transition duration-300 cursor-pointer">
              {/* <div className="z-10  max-w-3xl rounded-md bg-image-shadow-top h-40% w-full flex absolute -top-1"></div> */}
              <picture className="max-w-3xl">
                <source
                  srcSet="/latest_card_5_mobile.png"
                  media="(max-width:639.95px)"
                ></source>
                <source
                  srcSet="/latest_card_5_pc.jpg"
                  media="(min-width:640px)"
                ></source>
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/latest_card_5_mobile.png "}
                  className="w-full rounded-md  "
                />
              </picture>
              <div className="text-deathloop_white flex flex-col justify-end font-futura rounded-md max-w-3xl z-10 pl-6 font-bold bg-latest5 h-40% w-full bottom-0 absolute">
                <span className="flex text-deathloop_white ">
                  <svg
                    className="mr-2 size-4"
                    focusable="false"
                    fill="#DCDBC8"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path>
                  </svg>
                  <span className="text-xs"> NEWS</span>
                </span>
                <div className="text-xl mt-4 mb-10 text-deathloop_white">
                  TROPICALOOP AVAILABLE ON DG GOLD
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:px-3 sm:max-w-[25%] w-full my-5 sm:my-3">
            <div className="relative hover:-translate-y-2 sm:max-w-[390px] mx-auto sm:mx-auto sm:my-auto max-w-3xl sm:w-full w-11/12 hover:shadow-round transition duration-300 cursor-pointer">
              {/* <div className="z-10  max-w-3xl rounded-md bg-image-shadow-top h-40% w-full flex absolute -top-1"></div> */}
              <picture className="max-w-3xl">
                <source
                  srcSet="/latest_card_6_mobile.png"
                  media="(max-width:639.95px)"
                ></source>
                <source
                  srcSet="/latest_card_6_pc.png"
                  media="(min-width:640px)"
                ></source>
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/latest_card_6_mobile.png "}
                  className="w-full rounded-md  "
                />
              </picture>
              <div className="text-deathloop_white flex flex-col justify-end font-futura rounded-md max-w-3xl z-10 pl-6 font-bold bg-latest6 h-40% w-full bottom-0 absolute">
                <span className="flex text-deathloop_white ">
                  <svg
                    className="mr-2 size-4"
                    focusable="false"
                    fill="#DCDBC8"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path>
                  </svg>
                  <span className="text-xs"> NEWS</span>
                </span>
                <div className="text-xl mt-4 mb-10 text-deathloop_white">
                  WHAT IS TROPICALOOP
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:px-3 sm:max-w-[25%] w-full my-5 sm:my-3">
            <div className="relative hover:-translate-y-2 sm:max-w-[390px] mx-auto sm:mx-auto sm:my-auto max-w-3xl sm:w-full w-11/12 hover:shadow-round transition duration-300 cursor-pointer">
              {/* <div className="z-10  max-w-3xl rounded-md bg-image-shadow-top h-40% w-full flex absolute -top-1"></div> */}
              <picture className="max-w-3xl">
                <source
                  srcSet="/latest_card_7_mobile.png"
                  media="(max-width:639.95px)"
                ></source>
                <source
                  srcSet="/latest_card_7_pc.png"
                  media="(min-width:640px)"
                ></source>
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/latest_card_7_mobile.png "}
                  className="w-full rounded-md  "
                />
              </picture>
              <div className="text-deathloop_white flex flex-col justify-end font-futura rounded-md max-w-3xl z-10 pl-6 font-bold bg-latest7 h-40% w-full bottom-0 absolute">
                <span className="flex text-deathloop_white ">
                  <svg
                    className="mr-2 size-4"
                    focusable="false"
                    fill="#DCDBC8"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path>
                  </svg>
                  <span className="text-xs"> NEWS</span>
                </span>
                <div className="text-xl mt-4 mb-10 text-deathloop_white">
                  TROPICALOOP FREE GOLDENLOOP UPDATE
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mx-auto mt-6 mb-16">
          <button className="border transition duration-500 cursor-pointer bg-transparent text-deathloop_white py-6 px-16 hover:bg-deathloop_gray sm:w-max w-full mx-5 font-futura">
            MORE NEWS
          </button>
        </div>
      </div>
    </section>
  );
};
const Carousel_sec = () => {
  return (
    <Carousel
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? "absolute" : "hidden"
            } top-0 bottom-0 left-0 flex justify-center items-center  opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <ChevronLeftIcon className="size-20 text-white" />
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? "absolute" : "hidden"
            } top-0 bottom-0 right-0 flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <ChevronRightIcon className="size-20 text-white" />
          </div>
        );
      }}
      emulateTouch
      preventMovementUntilSwipeScrollTolerance
      infiniteLoop
      renderThumbs={() => {
        return;
      }}
      statusFormatter={() => {
        return;
      }}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = {
          marginLeft: 20,
          backgroundColor: "black",
          borderRadius: "50%",
          cursor: "pointer",
          width: "16px",
          height: "16px",
          display: "inline-block",
          border: "1px solid white",
        };
        const style = isSelected
          ? { ...defStyle, backgroundColor: "white" }
          : { ...defStyle };
        return (
          <span
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          ></span>
        );
      }}
    >
      <div>
        <img src="carousel_1.jpg" />
        <div className="w-full bg-[#121212] text-deathloop_white h-70vh sm:h-full">
          <div className="drag absolute bottom-1/4  z-10 max-w-4xl xl:top-1/2 sm:left-1/2 xl:px-20 sm:px-5 px-20 sm:-translate-x-1/2 sm:top-1/3">
            <h2 className="pb-5 xl:text-5xl">
              Stunning Graphics that Bring the World to Life
            </h2>
            <p className="leading-5 xl:leading-6 xl:text-2xl">
              Experience a visual feast with Tropicaloop's high-quality
              graphics. The game's detailed environments, lifelike character
              models, and breathtaking special effects create a truly immersive
              experience. Whether you're exploring dense jungles, diving into
              crystal-clear waters, or battling enemies in vibrant, chaotic
              locales, the visual prowess of Tropicaloop will leave you in awe
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="carousel_2.jpg" />
        <div className="w-full bg-[#121212] text-deathloop_white h-70vh sm:h-full">
          <div className="drag absolute bottom-1/4  z-10 max-w-4xl xl:top-1/2 sm:left-1/2 xl:px-20 sm:px-5 px-20 sm:-translate-x-1/2 sm:top-1/3">
            <h2 className="pb-5 xl:text-5xl">
              Exceptional Sound Design and Music
            </h2>
            <p className="leading-5 xl:leading-6 xl:text-2xl">
              Immerse yourself in the world of Tropicaloop with its exceptional
              sound design and music. Every sound, from the rustling of leaves
              to the crackle of gunfire, is meticulously crafted to enhance your
              gaming experience. The game's dynamic soundtrack adapts to your
              actions and surroundings, adding an extra layer of excitement and
              immersion as you progress through your adventure
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="video.jpg" />
        <div className="w-full bg-[#121212] text-deathloop_white h-70vh sm:h-full">
          <div className="drag absolute bottom-1/4  z-10 max-w-4xl xl:top-1/2 sm:left-1/2 xl:px-20 sm:px-5 px-20 sm:-translate-x-1/2 sm:top-1/3">
            <h2 className="pb-5 xl:text-5xl">
              A Strong Storyline that Keeps You Hooked
            </h2>
            <p className="leading-5 xl:leading-6 xl:text-2xl">
              At the heart of Tropicaloop is an immersive and compelling
              narrative that will keep you on the edge of your seat. As you
              navigate through the lush tropical environments, you'll uncover
              secrets, face formidable foes, and make choices that will affect
              the outcome of your journey. The rich storytelling in Tropicaloop
              ensures that every twist and turn is more thrilling than the last
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="carousel_3.jpg" />
        <div className="w-full bg-[#121212] text-deathloop_white h-70vh sm:h-full">
          <div className="drag absolute bottom-1/4  z-10 max-w-4xl xl:top-1/2 sm:left-1/2 xl:px-20 sm:px-5 px-20 sm:-translate-x-1/2 sm:top-1/3">
            <h2 className="pb-5 xl:text-5xl">
              Outstanding Gameplay and Shooting Mechanics
            </h2>
            <p className="leading-5 xl:leading-6 xl:text-2xl">
              Tropicaloop offers an outstanding gameplay experience with smooth
              and responsive shooting mechanics. Whether you're a seasoned
              shooter fan or new to the genre, the game's intuitive controls and
              diverse arsenal of weapons will provide endless fun and challenge.
              Engage in intense firefights, outsmart your enemies, and master
              the game's mechanics to become the ultimate survivor in this
              tropical paradise
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="carousel_4.jpg" />
        <div className="w-full bg-[#121212] text-deathloop_white h-70vh sm:h-full">
          <div className="drag absolute bottom-1/4  z-10 max-w-4xl xl:top-1/2 sm:left-1/2 xl:px-20 sm:px-5 px-20 sm:-translate-x-1/2 sm:top-1/3">
            <h2 className="pb-5 xl:text-5xl">
              Play Tropicaloop on Various Free Services
            </h2>
            <p className="leading-5 xl:leading-6 xl:text-2xl">
              You can play Tropicaloop on a variety of free services. All you
              need is one of the mentioned accounts to dive into this thrilling
              adventure. Enjoy the same high-quality experience across different
              platforms, ensuring you can always continue your journey no matter
              where you are
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

const Outsiders_sec = () => {
  return (
    <section>
      <div className="outsiders bg-black text-white">
        <div className="flex max-w-[1680px] m-auto items-center flex-col-reverse sm:flex-row-reverse ">
          <div className="w-full sm:my-10 pt-5 sm:py-5 px-5">
            <h3 className="uppercase ">
              JOIN DG RELATE OUTSIDERS TO RECEIVE EXCLUSIVE ITEMS!
            </h3>

            <p className="leading-7 mt-3 font-univers55 text-base font-thin">
              JOIN THE COMMUNITY Being an DG RELATE Outsider never looked so
              good! Join now and receive the stylish and exclusive Tropicaloop
              'Eternalist Colt' skin and the 'Ever After' unique weapon.
            </p>
            <p className="leading-7 mt-3 font-univers55 text-base font-thin">
              As a member, you will also receive The Art of DG RELATE digital
              art book. Immerse yourself in the concept art that shaped the
              worlds of DG RELATE. Join now!
            </p>
            <p className="leading-7 mt-3 font-univers55 text-base font-thin">
              Stay in the loop! You can also sign up for emails to receive
              exclusive developer updates and get sneak peeks of DG RELATE
              games.
            </p>
            <p className="leading-7 mt-3 font-univers55 text-base font-thin">
              After signing into the game with your DGRelate.Game account, The
              Tropicaloop 'Eternalist Colt' skin and 'Ever After' unique weapon
              will automatically appear in-game. Go to your Transaction History
              for verification of this bonus content.
            </p>
            <p className="leading-7 mt-3 font-univers55 text-base font-thin">
              Go to your&nbsp;
              <a className="text-deathloop_orange underline hover:text-black">
                Transaction History
              </a>
              &nbsp; to view or download your content.
            </p>
            <button className="font-futura uppercase text-sm font-bold text-white bg-deathloop_orange transition ease-out duration-300 py-4 px-8 my-3 hover:opacity-75 min-w-20 max-w-52">
              log in and join now
            </button>
          </div>
          <div className="flex justify-center align-middle sm:mx-5 w-full my-5 sm:my-10">
            <div className="relative mx-auto sm:mx-auto sm:my-auto max-w-3xl w-11/12 sm:w-9/12">
              <picture className="max-w-3xl">
                <source
                  srcSet="/outsiders_pic_mobile.png"
                  media="(max-width:639.95px)"
                ></source>
                <source
                  srcSet="/outsiders_pic_pc.png"
                  media="(min-width:640px)"
                ></source>
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/outsiders_pic_pc.png"}
                  className="w-full rounded-md"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Edition_sec = () => {
  return (
    <section>
      <div className="edition text-deathloop_white py-3 bg-black">
        <div className="flex max-w-[1680px] m-auto items-center flex-col sm:flex-row">
          <div className="w-full sm:my-10 pt-5 sm:py-5 px-5 sm:px-12">
            <div className="bg-black p-6">
              <div className="uppercase pb-4">select edition</div>
              <Menu>
                <MenuButton
                  className={
                    "border mb-4 w-full flex mx-auto justify-between py-4 text-start pl-3"
                  }
                >
                  Deluxe Edition - Playstation®5
                  <ChevronDownIcon className="size-4 mr-2 mt-1 fill-white/60" />
                </MenuButton>

                <MenuItems
                  anchor="bottom"
                  className={
                    "bg-[#262626] w-[var(--button-width)] border-2 border-[#cf5d20]"
                  }
                >
                  <MenuItem className={" p-4"}>
                    <a
                      href="/Deluxe Edition - Playstation®5"
                      className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer"
                    >
                      Deluxe Edition - Playstation®5
                    </a>
                  </MenuItem>
                  <MenuItem className={" p-4"}>
                    <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                      Deluxe Edition - Playstation®5
                    </a>
                  </MenuItem>
                  <MenuItem className={" p-4"}>
                    <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                      Deluxe Edition - Playstation®5
                    </a>
                  </MenuItem>
                  <MenuItem className={" p-4"}>
                    <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                      Deluxe Edition - Playstation®5
                    </a>
                  </MenuItem>
                  <MenuItem className={" p-4"}>
                    <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                      Deluxe Edition - Playstation®5
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
              <h2 className="uppercase border-t text-lg border-[#2626268c] pt-6">
                Tropicaloop Deluxe Edition - Playstation®5
              </h2>
              <div className="font-roboto text-[14px] tracking-tight pb-3">
                <p className="leading-4 text-sm my-3 mt-3 font-univers55 font-thin">
                  Suit up with the Deluxe Edition for classy character skins,
                  premium weapons, and a digital soundtrack to immerse yourself
                  in the world of Tropicaloop:
                </p>
                <h1 className="uppercase text-[14px]">
                  DELUXE EDITION CONTENT
                </h1>
                <ul className="list-disc pl-10">
                  <li>Base Game</li>
                  <li>Unique Weapon: Transtar Trencher (PS5 Exclusive)</li>
                  <li>Unique Weapon: Eat The Rich Tribunal</li>
                  <li>Unique Weapon: .44 Karat Fourpounder</li>
                  <li>Unique Weapon: Eat The Rich Tribunal</li>
                  <li>Unique Weapon: Eat The Rich Tribunal</li>
                  <li>Unique Weapon: Eat The Rich Tribunal</li>
                  <li>Unique Weapon: Chrome Demon MG-1 Pepper Mill</li>

                  <li>
                    Original Game Soundtrack Selections (*FORMATTED USB STORAGE
                    DEVICE REQUIRED TO ACCESS AND PLAY SOUNDTRACK)
                  </li>
                  <li>Two Trinkets (equippable buffs)</li>
                </ul>
              </div>
              <div className="sm:hidden">
                <picture className="max-w-3xl">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    src={"/edition_pic.jpg"}
                    className="w-10/12 px-3 py-4 m-auto "
                  />
                </picture>
              </div>
              <div className="border-y border-[#2626268c] py-6">
                <h2 className="uppercase py-6 text-base">BUY NOW (DIGITAL)</h2>
                <button className="flex align-middle justify-center items-center font-futura hover:opacity-75 py-4 px-12 uppercase bg-[#00439c]">
                  <img src="ps.svg" className="max-w-10"></img>
                  <div>PlayStation®5</div>
                </button>
              </div>
              <div>
                <h2 className="uppercase py-6 text-base">where to buy</h2>
                <Menu>
                  <MenuButton
                    className={
                      "border mb-4 w-full flex mx-auto justify-between py-4 text-start pl-3"
                    }
                  >
                    United State
                    <ChevronDownIcon className="size-4 mr-2 mt-1 fill-white/60" />
                  </MenuButton>

                  <MenuItems
                    anchor="bottom"
                    className={
                      "bg-[#262626] w-[var(--button-width)] border-2 border-[#cf5d20]"
                    }
                  >
                    <MenuItem className={" p-4"}>
                      <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                        United State
                      </a>
                    </MenuItem>
                    <MenuItem className={" p-4"}>
                      <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                        United State
                      </a>
                    </MenuItem>
                    <MenuItem className={" p-4"}>
                      <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                        United State
                      </a>
                    </MenuItem>
                    <MenuItem className={" p-4"}>
                      <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                        United State
                      </a>
                    </MenuItem>
                    <MenuItem className={" p-4"}>
                      <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                        United State
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
                <Menu>
                  <MenuButton
                    className={
                      "border mb-4 w-full flex mx-auto justify-between py-4 text-start pl-3"
                    }
                  >
                    Amazon
                    <ChevronDownIcon className="size-4 mr-2 mt-1 fill-white/60" />
                  </MenuButton>

                  <MenuItems
                    anchor="bottom"
                    className={
                      "bg-[#262626] w-[var(--button-width)] border-2 border-[#cf5d20]"
                    }
                  >
                    <MenuItem className={" p-4"}>
                      <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                        Amazon
                      </a>
                    </MenuItem>
                    <MenuItem className={" p-4"}>
                      <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                        Amazon
                      </a>
                    </MenuItem>
                    <MenuItem className={" p-4"}>
                      <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                        Amazon
                      </a>
                    </MenuItem>
                    <MenuItem className={" p-4"}>
                      <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                        Amazon
                      </a>
                    </MenuItem>
                    <MenuItem className={" p-4"}>
                      <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                        Amazon
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
                <Menu>
                  <MenuButton
                    className={
                      "border mb-4 w-full flex mx-auto justify-between py-4 text-start pl-3"
                    }
                  >
                    Play Station 5
                    <ChevronDownIcon className="size-4 mr-2 mt-1 fill-white/60" />
                  </MenuButton>

                  <MenuItems
                    anchor="bottom"
                    className={
                      "bg-[#262626] w-[var(--button-width)] border-2 border-[#cf5d20]"
                    }
                  >
                    <MenuItem className={" p-4"}>
                      <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                        Play Station 5
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
                <button className="font-futura uppercase text-sm font-bold text-white bg-deathloop_orange transition ease-out duration-300 py-4 px-8 my-3 hover:opacity-75 min-w-20 w-full ">
                  buy now
                </button>
              </div>
            </div>
          </div>
          <div className="sm:flex justify-center align-middle sm:mx-5 w-full my-5 sm:my-10 hidden">
            <div className="relative sm:hover:-translate-y-2 mx-auto sm:mx-auto sm:my-auto max-w-3xl sm:w-full w-11/12 sm:hover:shadow-round transition duration-300 cursor-pointer">
              <picture className="max-w-3xl">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/edition_pic.jpg"}
                  className="w-full "
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Wallpaper_sec = () => {
  return (
    <section>
      <div className="bg-black text-deathloop_white">
        <h2 className="text-center py-10 uppercase">wallpapers</h2>
        <div className="flex flex-wrap justify-center mx-auto max-w-[1660px] px-4">
          <div className="flex justify-center sm:px-3 sm:max-w-[43%] xl:max-w-[33%] w-full my-5 sm:my-3">
            <div className="relative mx-auto sm:mx-auto max-w-3xl sm:w-full w-11/12 hover:shadow-round">
              <picture className="max-w-3xl">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/wallpaper1.jpg "}
                  className="w-full "
                />
              </picture>
              <div className="flex">
                <Menu>
                  <MenuButton
                    className={
                      "border w-3/4 flex mx-auto justify-between py-4 text-start pl-3 my-3 "
                    }
                  >
                    Select Size
                    <ChevronDownIcon className="size-4 mr-2 mt-1 fill-white/60" />
                  </MenuButton>

                  <MenuItems
                    anchor="bottom"
                    className={
                      "bg-[#262626] w-[var(--button-width)] border-2 border-[#cf5d20]"
                    }
                  >
                    <MenuItem className={" p-4"}>
                      <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                        Select Size
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
                <button className="font-futura mx-auto my-3 text-center uppercase ml-2 text-sm font-bold text-white bg-deathloop_orange w-1/4 hover:opacity-75 transition ease-out duration-300">
                  download
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:px-3 sm:max-w-[43%] xl:max-w-[33%] w-full my-5 sm:my-3">
            <div className="relative mx-auto sm:mx-auto max-w-3xl sm:w-full w-11/12 hover:shadow-round">
              <picture className="max-w-3xl">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/wallpaper2.jpg "}
                  className="w-full "
                />
              </picture>
              <div className="flex">
                <Menu>
                  <MenuButton
                    className={
                      "border w-3/4 flex mx-auto justify-between py-4 text-start pl-3 my-3 "
                    }
                  >
                    Select Size
                    <ChevronDownIcon className="size-4 mr-2 mt-1 fill-white/60" />
                  </MenuButton>

                  <MenuItems
                    anchor="bottom"
                    className={
                      "bg-[#262626] w-[var(--button-width)] border-2 border-[#cf5d20]"
                    }
                  >
                    <MenuItem className={" p-4"}>
                      <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                        Select Size
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
                <button className="font-futura mx-auto my-3 text-center uppercase ml-2 text-sm font-bold text-white bg-deathloop_orange w-1/4 hover:opacity-75 transition ease-out duration-300">
                  download
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:px-3 sm:max-w-[43%] xl:max-w-[33%] w-full my-5 sm:my-3">
            <div className="relative mx-auto sm:mx-auto max-w-3xl sm:w-full w-11/12 hover:shadow-round">
              <picture className="max-w-3xl">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/wallpaper3.jpg "}
                  className="w-full "
                />
              </picture>
              <div className="flex">
                <Menu>
                  <MenuButton
                    className={
                      "border w-3/4 flex mx-auto justify-between py-4 text-start pl-3 my-3 "
                    }
                  >
                    Select Size
                    <ChevronDownIcon className="size-4 mr-2 mt-1 fill-white/60" />
                  </MenuButton>

                  <MenuItems
                    anchor="bottom"
                    className={
                      "bg-[#262626] w-[var(--button-width)] border-2 border-[#cf5d20]"
                    }
                  >
                    <MenuItem className={" p-4"}>
                      <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                        Select Size
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
                <button className="font-futura mx-auto my-3 text-center uppercase ml-2 text-sm font-bold text-white bg-deathloop_orange w-1/4 hover:opacity-75 transition ease-out duration-300">
                  download
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:px-3 sm:max-w-[43%] xl:max-w-[33%] w-full my-5 sm:my-3">
            <div className="relative mx-auto sm:mx-auto max-w-3xl sm:w-full w-11/12 hover:shadow-round">
              <picture className="max-w-3xl">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/wallpaper4.jpg "}
                  className="w-full "
                />
              </picture>
              <div className="flex">
                <Menu>
                  <MenuButton
                    className={
                      "border w-3/4 flex mx-auto justify-between py-4 text-start pl-3 my-3 "
                    }
                  >
                    Select Size
                    <ChevronDownIcon className="size-4 mr-2 mt-1 fill-white/60" />
                  </MenuButton>

                  <MenuItems
                    anchor="bottom"
                    className={
                      "bg-[#262626] w-[var(--button-width)] border-2 border-[#cf5d20]"
                    }
                  >
                    <MenuItem className={" p-4"}>
                      <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                        Select Size
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
                <button className="font-futura mx-auto my-3 text-center uppercase ml-2 text-sm font-bold text-white bg-deathloop_orange w-1/4 hover:opacity-75 transition ease-out duration-300">
                  download
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:px-3 sm:max-w-[43%] xl:max-w-[33%] w-full my-5 sm:my-3">
            <div className="relative mx-auto sm:mx-auto max-w-3xl sm:w-full w-11/12 hover:shadow-round">
              <picture className="max-w-3xl">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/wallpaper5.jpg "}
                  className="w-full "
                />
              </picture>
              <div className="flex">
                <Menu>
                  <MenuButton
                    className={
                      "border w-3/4 flex mx-auto justify-between py-4 text-start pl-3 my-3 "
                    }
                  >
                    Select Size
                    <ChevronDownIcon className="size-4 mr-2 mt-1 fill-white/60" />
                  </MenuButton>

                  <MenuItems
                    anchor="bottom"
                    className={
                      "bg-[#262626] w-[var(--button-width)] border-2 border-[#cf5d20]"
                    }
                  >
                    <MenuItem className={" p-4"}>
                      <a className="block data-[focus]:bg-black data-[focus]:text-[#f5cc89] transition duration-300 cursor-pointer">
                        Select Size
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
                <button className="font-futura mx-auto my-3 text-center uppercase ml-2 text-sm font-bold text-white bg-deathloop_orange w-1/4 hover:opacity-75 transition ease-out duration-300">
                  download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Media_sec = () => {
  return (
    <section>
      <div className="bg-black media text-deathloop_white py-5">
        <h2 className="text-center py-10">Media</h2>
        <div className="flex flex-wrap mx-auto max-w-[1660px] px-4">
          <div className="flex justify-center sm:px-3 max-w-[50%] sm:max-w-[25%] w-full my-5 sm:my-3">
            <div className="relative sm:h-full hover:-translate-y-2 sm:max-w-[390px] mx-auto sm:mx-auto sm:my-auto max-w-3xl sm:w-full w-11/12 hover:shadow-round transition duration-300 cursor-pointer">
              <picture className="max-w-3xl">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/media_mobile_1.jpg "}
                  className="h-full rounded-md sm:object-cover"
                />
              </picture>
              <div className="text-deathloop_white flex flex-col justify-end font-futura rounded-md max-w-3xl z-10 pl-10 pb-5 font-bold bg-image-shadow h-40% w-full bottom-0 absolute">
                <span className="flex text-deathloop_white ">
                  <svg
                    className="mr-2 size-4"
                    focusable="false"
                    fill="#DCDBC8"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
                  </svg>
                  <span className="text-xs"> SCREENSHOT</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:px-3 max-w-[50%] sm:max-w[50%] w-full my-5 sm:my-3">
            <div className="relative hover:-translate-y-2 mx-auto sm:mx-auto max-w-3xl sm:w-full w-11/12 hover:shadow-round transition duration-300 cursor-pointer">
              <picture className="max-w-3xl">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/media_mobile_2.jpg "}
                  className="w-full rounded-md"
                />
              </picture>
              <div className="text-deathloop_white flex flex-col justify-end font-futura rounded-md max-w-3xl z-10 pl-10  pb-5 font-bold bg-image-shadow h-40% w-full bottom-0 absolute">
                <span className="flex text-deathloop_white ">
                  <svg
                    className="mr-2 size-4"
                    focusable="false"
                    fill="#DCDBC8"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
                  </svg>
                  <span className="text-xs"> SCREENSHOT</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:px-3 max-w-[50%] sm:max-w-[25%] w-full my-5 sm:my-3">
            <div className="relative sm:h-full hover:-translate-y-2 sm:max-w-[390px] mx-auto sm:mx-auto sm:my-auto max-w-3xl sm:w-full w-11/12 hover:shadow-round transition duration-300 cursor-pointer">
              <picture className="max-w-3xl">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src={"/media_mobile_3.jpg "}
                  className="h-full rounded-md sm:object-cover"
                />
              </picture>
              <div className="text-deathloop_white flex flex-col justify-end font-futura rounded-md max-w-3xl z-10 pl-10 pb-5 font-bold bg-image-shadow h-40% w-full bottom-0 absolute">
                <span className="flex text-deathloop_white ">
                  <svg
                    className="mr-2 size-4"
                    focusable="false"
                    fill="#DCDBC8"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
                  </svg>

                  <span className="text-xs"> SCREENSHOT</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mx-auto mt-6 mb-16">
          <button className="border transition duration-500 cursor-pointer bg-transparent text-deathloop_white py-6 px-16 hover:bg-deathloop_gray sm:w-max w-full mx-5 font-futura">
            MORE MEDIA
          </button>
        </div>
      </div>
    </section>
  );
};
const Arkane_sec = () => {
  return (
    <section>
      <div className="bg-deathloop_orange relative min-h-[40vh]">
        <div className="">
          <Image
            alt=""
            width={1000}
            height={1000}
            src={"/Arkane_Logo.png"}
            className="sm:w-1/3 px-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      <div className="flex justify-center mx-auto pb-6 pt-10 mb-16 bg-[#262626]">
        <button className="border transition duration-500 cursor-pointer bg-black text-white py-4 px-16 hover:bg-deathloop_gray font-montera">
          <div className="flex">
            <svg
              className=" flex align-middle size-7 mr-2"
              focusable="false"
              fill="white"
              viewBox="0 0 26 26"
              aria-hidden="true"
            >
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
            </svg>
            <div>ENGLISH</div>
          </div>
        </button>
      </div>
    </section>
  );
};
export default function Home() {
  return (
    <main>
      <title>Tropicaloop</title>
      <Main_sec />
      <Xbox_sec />
      <Goldenloop_sec />
      <Latest_sec />
      <Carousel_sec />
      <Outsiders_sec />
      <Edition_sec />
      <Wallpaper_sec />
      <Media_sec />
      <Arkane_sec />
    </main>
  );
}
