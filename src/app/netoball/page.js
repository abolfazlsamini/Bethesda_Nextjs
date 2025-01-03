"use client";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useInView, InView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import { Collapsible } from "collapsible-react-component";
import "collapsible-react-component/dist/index.css";

import mainpic from "../../../public/hifi/mainpic.png";
import mainpic_logo from "../../../public/hifi/mainpic_logo.png";
import card_sec_pic_1 from "../../../public/hifi/card_sec_pic_1.png";
import card_sec_pic_2 from "../../../public/hifi/card_sec_pic_2.png";
import card_sec_pic_3 from "../../../public/hifi/card_sec_pic_3.png";
import card_sec2_pic_1 from "../../../public/hifi/card_sec2_pic_1.png";
import card_sec2_pic_2 from "../../../public/hifi/card_sec2_pic_2.png";
import card_sec2_pic_3 from "../../../public/hifi/card_sec2_pic_3.png";
import card_sec2_pic_4 from "../../../public/hifi/card_sec2_pic_4.png";
import card_sec2_pic_5 from "../../../public/hifi/card_sec2_pic_5.png";
import card_sec2_pic_6 from "../../../public/hifi/card_sec2_pic_6.png";
import first_sec_pic_1 from "../../../public/hifi/first_sec_pic_1.png";
import first_sec_pic_2 from "../../../public/hifi/first_sec_pic_2.png";
import first_sec_pic_3 from "../../../public/hifi/first_sec_pic_3.png";
import first_sec_pic_4 from "../../../public/hifi/first_sec_pic_4.png";
import float_cat from "../../../public/hifi/float_cat.png";
import collapsable_pic from "../../../public/hifi/collapsable_pic.png";
// import gradient_logo from "../../../public/hifi/gradient_logo.png";

import carousel4_pic_1 from "../../../public/carousel4_pic_1.webp";
import carousel4_logo_1 from "../../../public/carousel4_logo_1.webp";
import carousel4_pic_2 from "../../../public/carousel4_pic_2.webp";
import carousel4_logo_2 from "../../../public/carousel4_logo_2.webp";
import carousel4_pic_3 from "../../../public/carousel4_pic_3.webp";
import carousel4_logo_3 from "../../../public/carousel4_logo_3.webp";
import carousel4_pic_4 from "../../../public/carousel4_pic_4.webp";
import carousel4_logo_4 from "../../../public/carousel4_logo_4.webp";
import carousel4_pic_5 from "../../../public/carousel4_pic_5.webp";
import carousel4_logo_5 from "../../../public/carousel4_logo_5.webp";
import carousel4_pic_6 from "../../../public/carousel4_pic_6.webp";
import carousel4_logo_6 from "../../../public/carousel4_logo_6.webp";

import x from "../../../public/X.png";
import Ticktok from "../../../public/Tiktok.png";
import TEl from "../../../public/TEl.png";
import Discord from "../../../public/Discord.png";
import yt from "../../../public/YT.png";
import Facebook from "../../../public/Facebook.png";
import Insta from "../../../public/Insta.png";

import {
  // ArrowLeftIcon,
  // ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusIcon,
} from "@heroicons/react/16/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Main_sec = () => {
  return (
    <section>
      <div className="relative">
        <picture>
          <source
            srcSet="./hifi/mainpic_mobile.png"
            media="(max-width:639.95px)"
          ></source>
          <source
            srcSet="./hifi/mainpic.png"
            media="(min-width:640px)"
          ></source>
          <Image
            alt=""
            className="w-full"
            width={1000}
            height={1000}
            src={mainpic}
          />
        </picture>
        <div className="absolute bottom-0 w-full bg-hifi_blue_gradient pt-96">
          <div className="duration-50 absolute bottom-40 left-1/2 w-1/2 -translate-x-1/2 drop-shadow-hifilogoshadow filter transition hover:-translate-y-2 sm:bottom-20 sm:w-1/3 2xl:bottom-32">
            <Image alt="" width={1000} height={1000} src={mainpic_logo} />
          </div>
          <div className="relative mx-auto mb-5 flex flex-col items-center sm:w-3/4 sm:flex-row">
            <div className="shadowpalseonce relative h-max w-1/2 pb-3 text-[#ff0000] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#004aba] sm:px-10">
              <svg viewBox="0 0 496 100" className="h-full w-full">
                <path
                  stroke="#000"
                  strokeWidth="5"
                  d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                />
              </svg>
              <div className="absolute bottom-1/2 right-1/2 top-0 mb-2 w-max translate-x-1/2 translate-y-1/2 font-A2Beckett text-base italic text-white sm:mb-3 sm:text-sm md:mb-3 md:text-lg xl:text-2xl 2xl:mb-0">
                TO WATCH VIDEO
              </div>
            </div>
            <div className="shadowpalseonce relative h-max w-1/2 pb-3 text-[#ffff00] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#004aba] sm:px-10">
              <svg viewBox="0 0 496 100" className="h-full w-full">
                <path
                  fill="#ffff00"
                  stroke="#000"
                  strokeWidth="5"
                  d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                />
              </svg>
              <div className="absolute bottom-1/2 right-1/2 top-0 mb-2 w-max translate-x-1/2 translate-y-1/2 font-A2Beckett text-base italic text-black sm:mb-3 sm:text-sm md:mb-3 md:text-lg xl:text-2xl 2xl:mb-0">
                DOWNLOAD NOW
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Collapsable = () => {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div>
        <div>
          <div
            className="relative cursor-pointer bg-black py-5 text-center font-A2Beckett text-xl"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Image
              src={float_cat}
              width={0}
              height={0}
              alt=""
              className={
                open
                  ? "absolute -left-10 bottom-1/2 hidden size-40 translate-y-1/2 rotate-[20deg] transition-all duration-200 sm:block"
                  : "absolute -left-10 bottom-1/2 hidden size-40 translate-y-1/2 transition-all duration-200 sm:block"
              }
            />
            <div className="text-2xl">NEW “NETO BALL” PRODUCTS!</div>
            {open ? (
              <ChevronUpIcon className="absolute right-3 top-1/2 size-7 -translate-y-1/2 rounded-full bg-red-600" />
            ) : (
              <ChevronDownIcon className="absolute right-3 top-1/2 size-7 -translate-y-1/2 rounded-full bg-red-600" />
            )}
          </div>
          <Collapsible open={open} revealType="bottomFirst">
            <div className="collapsabale_bg flex bg-white text-center">
              <div className="z-10 mx-auto sm:w-1/2">
                <Image
                  src={collapsable_pic}
                  width={0}
                  height={0}
                  alt=""
                  className=""
                />
                <div>
                  <div className="card_header">NEW “NETO BALL” PRODUCTS!</div>
                  <div className="firstsec_text py-2 text-black">
                    Dress like a rock star with t-shirts, desk pads and more
                    from NETO BALL - available now at the NetoGame Store.
                  </div>
                  <div className="firstsec_text py-2 text-black">
                    *Product availability may vary by region
                  </div>
                  <div className="shadowpalseonce relative mx-auto h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      EXPLORE STORE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};
const Card_sec = () => {
  return (
    <section>
      <div className="cards_bg min-h-40">
        <div className="shadowpalse py-10 text-center font-A2Beckett text-5xl uppercase sm:text-6xl">
          COMING SOON
        </div>
        <section>
          <div className="shadowstatic mx-auto mb-10 min-h-40 w-11/12 bg-[#ffcc44] lg:flex">
            <div className="mx-auto w-4/5 px-2 lg:mx-5 lg:w-1/3 lg:px-0">
              <Image
                className="shadowpalse -translate-y-4"
                src={card_sec2_pic_1}
                width={0}
                height={0}
                alt=""
              />
            </div>
            <div className="mx-auto mt-5 w-4/5 px-2 pr-5 lg:w-2/3">
              <div className="card_header">Standard Edition</div>
              <div className="card_text my-3">
                The standard version of the game imposes no restrictions but
                will not include certain special features. Additionally,
                watching ads is a part of the standard version of the game!
              </div>
              <div className="card_header pb-3">DOWNLOAD NOW</div>
              <div className="shadowpalseonce relative h-max w-[210px] pb-3 text-[#0e7a0d] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#13a111] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                <svg viewBox="0 0 496 100" className="h-full w-full">
                  <path
                    stroke="#000"
                    strokeWidth="5"
                    d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                  />
                </svg>
                <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                  NETO PLAY FUSION
                </div>
              </div>
              <div className="card_header my-3">DOWNLOAD NOW</div>
              <div className="mb-3 block w-full sm:flex sm:flex-wrap">
                <div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      Xbox / windows
                    </div>
                  </div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      APP STORE
                    </div>
                  </div>
                </div>
                <div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      PlayStation®5
                    </div>
                  </div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      PLAYSTORE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="shadowstatic mx-auto mb-10 min-h-40 w-11/12 bg-[#ffcc44] lg:flex">
            <div className="mx-auto w-4/5 lg:w-1/3">
              <div className="mx-auto mb-8 px-2 lg:mx-5 lg:px-0">
                <Image
                  className="shadowpalse -translate-y-4"
                  src={card_sec2_pic_2}
                  width={0}
                  height={0}
                  alt=""
                />
              </div>
              <div className="mx-auto -rotate-3 px-2 lg:mx-5 lg:px-0">
                <Image
                  className="shadowpalse -translate-y-4"
                  src={card_sec2_pic_3}
                  width={0}
                  height={0}
                  alt=""
                />
              </div>
            </div>
            <div className="mx-auto mt-5 w-4/5 px-2 pr-5 lg:w-2/3">
              <div className="card_header">Standard Edition</div>
              <div className="card_text my-3">
                Get the VIP treatment with the NETO BALL Deluxe Edition:
                <ul className="list-disc py-2 pl-5">
                  <li> NETOBALL (base game)</li>
                  <li>Two VIP outfits</li>
                  <li>No Ads</li>
                  <li>
                    You will benefit from additional discounts in the store
                  </li>
                  <li>You will receive a special bundle for free</li>
                </ul>
              </div>

              <div className="card_header my-3">DOWNLOAD NOW</div>
              <div className="mb-3 block w-full sm:flex sm:flex-wrap">
                <div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      Xbox / windows
                    </div>
                  </div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      APP STORE
                    </div>
                  </div>
                </div>
                <div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      PlayStation®5
                    </div>
                  </div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      PLAYSTORE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="shadowstatic mx-auto mb-10 min-h-40 w-11/12 bg-[#ffcc44] lg:flex">
            <div className="mx-auto w-4/5 px-2 lg:mx-5 lg:w-1/3 lg:px-0">
              <Image
                className="shadowpalse -translate-y-4"
                src={card_sec2_pic_4}
                width={0}
                height={0}
                alt=""
              />
            </div>
            <div className="mx-auto mt-5 w-4/5 px-2 pr-5 lg:w-2/3">
              <div className="card_header">PURCHASE VARIOUS GAME MODES</div>
              <div className="card_text my-3">
                Various game modes with time limits will be designed. These
                modes will include different types of gameplay. For example, you
                can purchase a zombie mode for this game.
              </div>
              <div className="card_text my-3">
                In this zombie mode, the characters will be zombies, the ball
                will be a severed head, and the goals will be made of flesh and
                blood.
              </div>
              <div className="card_text my-3">
                While the core gameplay objective of scoring goals and defending
                remains unchanged, the game's appearance and abilities will
                undergo significant changes
              </div>
              <div className="card_header pb-3">Play Now</div>

              <div className="card_header my-3">DOWNLOAD NOW</div>
              <div className="mb-3 block w-full sm:flex sm:flex-wrap">
                <div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      Xbox / windows
                    </div>
                  </div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      APP STORE
                    </div>
                  </div>
                </div>
                <div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      PlayStation®5
                    </div>
                  </div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      PLAYSTORE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="shadowstatic mx-auto mb-10 min-h-40 w-11/12 bg-[#ffcc44] lg:flex">
            <div className="mx-auto w-4/5 px-2 lg:mx-5 lg:w-1/3 lg:px-0">
              <Image
                className="shadowpalse -translate-y-4"
                src={card_sec2_pic_5}
                width={0}
                height={0}
                alt=""
              />
            </div>
            <div className="mx-auto mt-5 w-4/5 px-2 pr-5 lg:w-2/3">
              <div className="card_header">
                YOU CAN EARN ENERGY BY WATCHING ADVERTISEMENTS
              </div>
              <div className="card_text my-3">
                Watching 1 ad provides you with the energy needed to play one
                game.
              </div>
              <div className="card_text my-3">
                Additionally, you can purchase the Premium game mode for $10 to
                play without interruptions. In the ad section, you can also
                watch ads to earn coins, which is a feature available only in
                the Premium version of the game
              </div>

              <div className="card_header my-3">DOWNLOAD NOW</div>
              <div className="mb-3 block w-full sm:flex sm:flex-wrap">
                <div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      Xbox / windows
                    </div>
                  </div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      APP STORE
                    </div>
                  </div>
                </div>
                <div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      PlayStation®5
                    </div>
                  </div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      PLAYSTORE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="shadowstatic mx-auto min-h-40 w-11/12 bg-[#ffcc44] pb-10 lg:flex">
            <div className="mx-auto w-4/5 px-2 lg:mx-5 lg:w-1/3 lg:px-0">
              <Image
                className="shadowpalse -translate-y-4"
                src={card_sec2_pic_6}
                width={0}
                height={0}
                alt=""
              />
            </div>
            <div className="mx-auto mt-5 w-4/5 px-2 pr-5 lg:w-2/3">
              <div className="card_header">ENJOY THE SOUNDS OF THE GAME</div>
              <div className="card_text my-3">
                The game's sound design is being developed so that there will be
                a sound effect for every event in the game..
              </div>
              <div className="card_text my-3">
                The game will feature a commentator (available in both English
                and Arabic, with language options in the settings).
              </div>
              <div className="card_text my-3">
                In each match, you will encounter a sound effect for every
                header, shot, and other actions. The background music will
                change between relaxing and stressful tones depending on the
                game's conditions. Additionally, the spectators will have
                various sound effects based on the game's situation
              </div>

              <div className="card_header my-3">DOWNLOAD NOW</div>
              <div className="mb-3 block w-full sm:flex sm:flex-wrap">
                <div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      Xbox / windows
                    </div>
                  </div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      APP STORE
                    </div>
                  </div>
                </div>
                <div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      PlayStation®5
                    </div>
                  </div>
                  <div className="shadowpalseonce relative h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                    <svg viewBox="0 0 496 100" className="h-full w-full">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
                      PLAYSTORE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="fixed_bg pt-5">
          <div className="mx-auto mb-10 min-h-40 w-11/12 lg:flex">
            <Gradient_sec />
          </div>
          <div className="mx-auto min-h-40 w-11/12 lg:flex">
            <SocialMedia_sec />
          </div>
        </section> */}
      </div>
    </section>
  );
};
const BG_change_sec = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const position = window.scrollY;
        var limit = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight,
        );
        // var percentage = Math.floor((position / limit) * 255);
        // ref.current.style.backgroundColor = `rgb(${percentage * 5}, 71, 185)`;
        // // ref.current.style.backgroundColor = position > 1000 ? "blue" : "red";
        // console.log(percentage);
        function color() {
          // 13 ... 122
          var percentage = Math.floor((position / limit) * 100);
          if (percentage < 5) return `rgb(${13}, 71, 185)`;
          if (percentage > 44) return `rgb(253,0,117)`;
          return `rgb(${Math.floor((position / limit) * 500)}, 71, 185)`;
        }
        var colour = color();
        ref.current.style.backgroundColor = colour;

        setScrollPosition(position);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <section>
      <div ref={ref} className="scrollbg pb-20">
        <section className="relative">
          <div className="mx-auto w-full flex-row items-center overflow-clip sm:mb-10 lg:flex lg:overflow-visible">
            <div className="relative mx-auto w-full overflow-clip px-10 py-10 sm:py-20 lg:w-2/3">
              <div className="cardbgimage"></div>
              <div className="card_header firstsec_title">
                CHARACTERS LEVEL UP AND GET UPDATED THROUGH CARDS
              </div>
              <div className="card_text firstsec_text my-3">
                For example, a character in the bronze category will need 10
                upgrade cards to move from level 1 to level 2. These upgrade
                cards are given to the user after victories, in loot boxes, and
                in the Mission section. They can also be purchased in limited
                quantities from the in-game store
              </div>

              <div className="shadowpalseonce relative h-max w-[210px] pb-3 text-[#ffff00] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#004aba] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                <svg viewBox="0 0 496 100" className="h-full w-full">
                  <path
                    stroke="#000"
                    strokeWidth="5"
                    d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                  />
                </svg>
                <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-black hover:text-white sm:text-[9px] md:text-xs xl:text-sm">
                  DOWNLOAD NOW
                </div>
              </div>
            </div>
            <div className="mx-auto w-3/5 lg:w-1/2">
              <Image
                className="translate-x-10 translate-y-10 scale-125 sm:scale-100"
                src={first_sec_pic_1}
                width={0}
                height={0}
                alt=""
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <Image
              className="mx-auto w-4/5 -translate-y-10 -rotate-6 border-4 border-[#ffff00] sm:w-2/3"
              src={first_sec_pic_2}
              width={0}
              height={0}
              alt=""
            />
          </div>
        </section>
        <section className="relative">
          <div className="mx-auto w-full flex-row-reverse items-center overflow-clip sm:mb-10 lg:flex lg:overflow-visible">
            <div className="relative mx-auto w-full overflow-clip px-10 py-10 sm:py-20 lg:w-2/3">
              <div className="cardbgimageRight"></div>
              <div className="card_header firstsec_title">
                EXPERIENCE A REAL-LIFE STREET FOOTBALL MATCH
              </div>
              <div className="card_text firstsec_text my-3">
                In NetoBall, experience a fantasy street football match. Face
                your opponent, score goals, and defend your net to win the game.
                Your victory will bring you numerous rewards. So, don't lose;
                focus only on winning
              </div>

              <div className="shadowpalseonce relative h-max w-[210px] pb-3 text-[#ffff00] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#004aba] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                <svg viewBox="0 0 496 100" className="h-full w-full">
                  <path
                    stroke="#000"
                    strokeWidth="5"
                    d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                  />
                </svg>
                <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-black hover:text-white sm:text-[9px] md:text-xs xl:text-sm">
                  DOWNLOAD NOW
                </div>
              </div>
            </div>
            <div className="mx-auto w-3/5 lg:w-1/2">
              <Image
                className="sm:-translate-x-5"
                src={first_sec_pic_3}
                width={0}
                height={0}
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="relative">
          <div className="mx-auto w-full flex-row items-center overflow-clip sm:mb-10 lg:flex lg:overflow-visible">
            <div className="relative mx-auto w-full overflow-clip px-10 py-10 sm:py-20 lg:w-2/3">
              <div className="cardbgimage"></div>
              <div className="card_header firstsec_title">
                USE SPECIAL ABILITIES FOR YOUR CHARACTE
              </div>
              <div className="card_text firstsec_text my-3">
                In this section, you can unlock special abilities for your
                characters. Once purchased, these abilities will be applied to
                all your unlocked characters. The special abilities can be used
                during the game depending on the upgrade level, allowing one or
                multiple uses. The activation duration and effectiveness of
                these abilities range from 2 to 4 seconds
              </div>

              <div className="shadowpalseonce relative h-max w-[210px] pb-3 text-[#ffff00] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#004aba] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
                <svg viewBox="0 0 496 100" className="h-full w-full">
                  <path
                    stroke="#000"
                    strokeWidth="5"
                    d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                  />
                </svg>
                <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-black hover:text-white sm:text-[9px] md:text-xs xl:text-sm">
                  DOWNLOAD NOW
                </div>
              </div>
            </div>
            <div className="mx-auto w-3/5 lg:w-1/2">
              <Image
                className="translate-x-10"
                src={first_sec_pic_4}
                width={0}
                height={0}
                alt=""
              />
            </div>
          </div>
        </section>
        <Card_row_sec />
      </div>
    </section>
  );
};
const Card_row_sec = () => {
  return (
    <section>
      <div className="shadowpalse py-10 text-center font-A2Beckett text-5xl uppercase sm:text-6xl">
        MORE ABOUT NETO BALL
      </div>
      <div className="flex overflow-x-auto whitespace-nowrap xl:justify-center">
        <a
          className="shadowstatic duration-50 shadowpalseonce relative mx-2 my-4 w-[280px] min-w-[280px] whitespace-normal bg-[#ffcc44] transition-all hover:-translate-y-2"
          href="#"
        >
          <div className="w-full whitespace-normal">
            <Image src={card_sec_pic_1} width={0} height={0} alt="" />
          </div>
          <div className="px-5">
            <div className="scrollycardtitle whitespace-normal">
              The initial version of the game will include 5 stadiums
            </div>
            <div className="scrollycardtext mb-10 whitespace-normal">
              The stadiums will become more attractive, bustling, and have more
              spectators according to their level. This will influence the
              cheers and fireworks in the stadium during goals and the start of
              the game
            </div>

            {/* <div className="scrollycardfooter absolute bottom-2 left-2">
              MAY 18
            </div> */}
          </div>
        </a>
        <a
          className="shadowstatic duration-50 shadowpalseonce relative mx-2 my-4 w-[280px] min-w-[280px] whitespace-normal bg-[#ffcc44] transition-all hover:-translate-y-2"
          href="#"
        >
          <div className="w-full whitespace-normal">
            <Image src={card_sec_pic_2} width={0} height={0} alt="" />
          </div>
          <div className="px-5">
            <div className="scrollycardtitle whitespace-normal">
              NETOBALL BUNDLES WILL INCLUDE SPECIAL SKINS
            </div>
            <div className="scrollycardtext mb-10 whitespace-normal">
              In the initial release, four bundles will be available for one
              season and can be purchased in future seasons (with some
              exceptions)
            </div>

            {/* <div className="scrollycardfooter absolute bottom-2 left-2">
              MAY 18
            </div> */}
          </div>
        </a>
        <a
          className="shadowstatic duration-50 shadowpalseonce relative mx-2 my-4 w-[280px] min-w-[280px] whitespace-normal bg-[#ffcc44] transition-all hover:-translate-y-2"
          href="#"
        >
          <div className="w-full whitespace-normal">
            <Image src={card_sec_pic_3} width={0} height={0} alt="" />
          </div>
          <div className="px-5">
            <div className="scrollycardtitle whitespace-normal">
              NETOBALL FOR PS5 AND XBOX
            </div>
            <div className="scrollycardtext mb-10 whitespace-normal">
              The game NetoBall will be available on PlayStation 5 and Xbox
              Series X and S consoles
            </div>

            {/* <div className="scrollycardfooter absolute bottom-2 left-2">
              MAY 18
            </div> */}
          </div>
        </a>
      </div>
      <div className="shadowpalseonce relative mx-auto mt-10 h-max w-[210px] pb-5 text-[#00a2ed] drop-shadow-hifilogoshadow filter hover:cursor-pointer hover:text-[#1ab6ff] sm:w-[160px] sm:px-3 md:w-[190px] lg:w-[210px] xl:w-[240px]">
        <svg viewBox="0 0 496 100" className="h-full w-full">
          <path
            stroke="#000"
            strokeWidth="5"
            d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
          />
        </svg>
        <div className="absolute -top-3 bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2 text-center font-CCCutthroat text-sm italic text-white sm:text-[9px] md:text-xs xl:text-sm">
          eXplore store
        </div>
      </div>
    </section>
  );
};
// const Gradient_sec = () => {
//   return (
//     <section className="pb-10">
//       <div className="gradient_bg_netoball mx-auto mt-4 flex w-11/12 flex-col items-center rounded-[3rem] px-10 py-10 text-center md:w-full">
//         <Image
//           alt=""
//           src={gradient_logo}
//           width={0}
//           height={0}
//           className="my-2 w-10/12"
//         />
//         <div className="my-2 font-druk_wide_super uppercase lg:text-[27px]">
//           TRY NOW ON NETO PLAY FUSION
//         </div>
//         <a className="btn mt-5 w-full cursor-pointer rounded-3xl bg-[#ff4747] p-5 py-3 font-druk_text_medium uppercase hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
//           <div className="btn_div">Start Now</div>
//         </a>
//       </div>
//     </section>
//   );
// };
// const SocialMedia_sec = () => {
//   return (
//     <section className="mx-auto">
//       <div className="overflow-hidden py-10 text-center">
//         <div className="combarfield_H1 pb-5 text-black">
//           FOLLOW US ON OUR SOCIAL MEDIA
//         </div>
//         <div className="flex justify-center pb-5">
//           <div className="border-r border-black p-5 sm:p-10">
//             <a className="cursor-pointer text-black transition duration-300 ease-in-out">
//               <svg
//                 className="h-8 w-8 transition-all duration-100 hover:scale-110"
//                 fill="currentColor"
//                 viewBox="0 0 40 40"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M3.623 6.972v4.9565H0v6.061h3.623V36h7.442V17.99h4.994s.4678-2.9062.6945-6.0838h-5.6603v-4.144c0-.6194.8114-1.4525 1.6134-1.4525h4.0548V0h-5.513C3.4388-.0004 3.6228 6.0664 3.6228 6.972z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </a>
//           </div>
//           <div className="border-r border-black p-5 sm:p-10">
//             <a className="cursor-pointer text-black transition duration-300 ease-in-out">
//               <svg
//                 className="h-8 w-8 transition-all duration-100 hover:scale-110"
//                 fill="currentColor"
//                 viewBox="0 0 60 62"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M35.7082 25.9642L58.0445 0H52.7515L33.3569 22.5444L17.8664 0H0L23.4246 34.091L0 61.3185H5.2933L25.7746 37.5109L42.1336 61.3185H60L35.7069 25.9642H35.7082ZM28.4582 34.3914L26.0849 30.9967L7.20055 3.98472H15.3307L30.5706 25.7843L32.944 29.1789L52.754 57.515H44.6238L28.4582 34.3927V34.3914Z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </a>
//           </div>
//           <div className="border-r border-black p-5 sm:p-10">
//             <a className="cursor-pointer text-black transition duration-300 ease-in-out">
//               <svg
//                 className="h-8 w-8 transition-all duration-100 hover:scale-110"
//                 fill="currentColor"
//                 viewBox="0 0 192 192"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M180.32,53.36A22.12,22.12,0,0,0,164.76,37.7C151,34,96,34,96,34s-55,0-68.76,3.7A22.12,22.12,0,0,0,11.68,53.36C8,67.18,8,96,8,96s0,28.82,3.68,42.64A22.12,22.12,0,0,0,27.24,154.3C41,158,96,158,96,158s55,0,68.76-3.7a22.12,22.12,0,0,0,15.56-15.66C184,124.82,184,96,184,96S184,67.18,180.32,53.36Z"
//                   clipRule="evenodd"
//                 ></path>
//                 <polygon
//                   fill="#fff"
//                   stroke="none"
//                   points="78 122.17 124 96 78 69.83 78 122.17"
//                 ></polygon>
//               </svg>
//             </a>
//           </div>
//           <div className="p-5 sm:p-10">
//             <a className="cursor-pointer text-black transition duration-300 ease-in-out">
//               <svg
//                 className="h-8 w-8 transition-all duration-100 hover:scale-110"
//                 fill="currentColor"
//                 viewBox="0 0 40 40"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M18 0c-4.8885 0-5.5015.0207-7.4214.1083C8.6626.1957 7.3542.5 6.2093.945c-1.1836.46-2.1875 1.0754-3.1882 2.076C2.0205 4.022 1.405 5.0258.945 6.2094.5 7.3543.1957 8.6627.1083 10.5786.0207 12.4986 0 13.1116 0 18c0 4.8885.0207 5.5015.1083 7.4214.0874 1.916.3917 3.2244.8367 4.3693.46 1.1836 1.0754 2.1875 2.076 3.1882 1.0008 1.0006 2.0047 1.616 3.1883 2.076 1.145.445 2.4534.7493 4.3693.8367 1.92.0876 2.533.1083 7.4214.1083 4.8885 0 5.5015-.0207 7.4214-.1083 1.916-.0874 3.2244-.3917 4.3693-.8366 1.1836-.46 2.1875-1.0754 3.1882-2.076 1.0006-1.0008 1.616-2.0047 2.076-3.1883.445-1.145.7493-2.4534.8367-4.3693.0876-1.92.1083-2.533.1083-7.4214 0-4.8885-.0207-5.5015-.1083-7.4214-.0874-1.916-.3917-3.2244-.8366-4.3693-.46-1.1836-1.0754-2.1875-2.076-3.1882-1.0008-1.0006-2.0047-1.616-3.1883-2.076C28.6457.5 27.3373.1957 25.4214.1083 23.5014.0207 22.8884 0 18 0zm0 3.2432c4.8062 0 5.3755.0184 7.2735.105 1.755.08 2.708.3733 3.3424.6198.84.3265 1.4397.7165 2.0695 1.3465.63.6298 1.02 1.2294 1.3465 2.0696.2465.6344.5398 1.5875.6198 3.3425.0866 1.898.105 2.4673.105 7.2735 0 4.8062-.0184 5.3755-.105 7.2735-.08 1.755-.3733 2.708-.6198 3.3424-.3265.84-.7165 1.4397-1.3465 2.0695-.6298.63-1.2294 1.02-2.0696 1.3465-.6344.2465-1.5875.5398-3.3425.6198-1.8977.0866-2.467.105-7.2735.105-4.8066 0-5.3757-.0184-7.2735-.105-1.755-.08-2.708-.3733-3.3424-.6198-.84-.3265-1.4397-.7165-2.0695-1.3465-.63-.6298-1.02-1.2294-1.3465-2.0696-.2465-.6344-.5398-1.5875-.6198-3.3425-.0866-1.898-.105-2.4673-.105-7.2735 0-4.8062.0184-5.3755.105-7.2735.08-1.755.3733-2.708.6198-3.3424.3265-.84.7165-1.4397 1.3465-2.0695.6298-.63 1.2294-1.02 2.0696-1.3465.6344-.2465 1.5875-.5398 3.3425-.6198 1.898-.0866 2.4673-.105 7.2735-.105zm-.1297 5.4098c-5.0843 0-9.206 4.1216-9.206 9.206 0 5.0843 4.1217 9.206 9.206 9.206s9.206-4.1217 9.206-9.206c0-5.0844-4.1217-9.206-9.206-9.206zm0 15.1817c-3.3003 0-5.9758-2.6754-5.9758-5.9757 0-3.3004 2.6755-5.9758 5.9758-5.9758 3.3003 0 5.9758 2.6754 5.9758 5.9758 0 3.3003-2.6754 5.9757-5.9757 5.9757zM29.7838 8.3823c0-1.1963-.9698-2.166-2.166-2.166-1.1963 0-2.1662.9697-2.1662 2.166s.97 2.166 2.166 2.166c1.1964 0 2.1662-.9697 2.1662-2.166z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </a>
//           </div>
//         </div>
//         <div className="combarfield_P text-black">
//           <a href="#" className="text-[#F04]">
//             Sign-up for our newsletter{" "}
//           </a>
//           to be the first to know about new updates.
//         </div>
//       </div>
//     </section>
//   );
// };
const Carousel_4 = () => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ChevronLeftIcon
        className="absolute left-5 top-1/2 z-10 hidden size-9 -translate-y-1/2 cursor-pointer rounded-full bg-blue-700 lg:block"
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ChevronRightIcon
        className="absolute right-5 top-1/2 z-10 hidden size-9 -translate-y-1/2 cursor-pointer rounded-full bg-blue-700 lg:block"
        onClick={onClick}
      />
    );
  }
  const settings = {
    // className: "center",
    centerMode: true,
    swipeToSlide: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 300,
    dots: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    // appendDots: (dots) => (
    //   <div className="pt-">
    //     <ul> {dots} </ul>
    //   </div>
    // ),
    customPaging: (i) => (
      <MinusIcon
        className={
          i === currentSlideNumber ? "h-8 text-blue-500" : "h-8 text-gray-500"
        }
      />
    ),
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlideNumber(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "30px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="netogame_H1 px-10 py-16 text-center text-2xl text-black lg:text-4xl">
        The latest news from PlayStation Blog
      </div>

      <div className="slider-container relative w-full pb-10">
        <Slider {...settings}>
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[50vh] xl:h-[66vh]">
            <div className="carousel4_card_shadow relative mx-2 h-full cursor-pointer overflow-hidden rounded-xl bg-[#fcfcfc] p-1 px-4">
              <Image
                placeholder="blur"
                src={carousel4_pic_1}
                width={0}
                height={0}
                alt=""
                className="carouselimg h-auto w-full rounded-xl"
              />

              <div className="text-black">
                <div className="netogame_H2 mt-5">NetoBall Release Date</div>
                <div className="netogame_H3 mt-3 pb-20 lg:my-5">
                  NetoBall will be released in the second quarter of 2025.
                  According to our schedule, a demo version of the game will be
                  available on the store two months before the official release
                </div>
              </div>
              <div className="absolute bottom-3 text-black">
                <div className="flex">
                  <Image
                    placeholder="blur"
                    src={carousel4_logo_1}
                    width={0}
                    height={0}
                    alt=""
                    className="size-12"
                  />
                  <div className="ml-2">
                    <div className="">Neto Reporter</div>
                    <div className="text-xs text-black/50">
                      Content Communications Specialist, Neto Interactive
                      Entertainment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[50vh] xl:h-[66vh]">
            <div className="carousel4_card_shadow relative mx-2 h-full cursor-pointer overflow-hidden rounded-xl bg-[#fcfcfc] p-1 px-4">
              <Image
                placeholder="blur"
                src={carousel4_pic_2}
                width={0}
                height={0}
                alt=""
                className="carouselimg h-auto w-full rounded-xl"
              />

              <div className="text-black">
                <div className="netogame_H2 mt-5">
                  Netoball Release on Consoles
                </div>
                <div className="netogame_H3 mt-3 pb-20 lg:my-5">
                  Netoball will be available for Xbox Series X and PlayStation 5
                  in the second half of 2025. The PC version will also be
                  released simultaneously on Steam alongside the console
                  versions
                </div>
              </div>
              <div className="absolute bottom-3 text-black">
                <div className="flex">
                  <Image
                    placeholder="blur"
                    src={carousel4_logo_2}
                    width={0}
                    height={0}
                    alt=""
                    className="size-12"
                  />
                  <div className="ml-2">
                    <div className="">Neto Reporter</div>
                    <div className="text-xs text-black/50">
                      Content Communications Specialist, Neto Interactive
                      Entertainment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[50vh] xl:h-[66vh]">
            <div className="carousel4_card_shadow relative mx-2 h-full cursor-pointer overflow-hidden rounded-xl bg-[#fcfcfc] p-1 px-4">
              <Image
                placeholder="blur"
                src={carousel4_pic_3}
                width={0}
                height={0}
                alt=""
                className="carouselimg h-auto w-full rounded-xl"
              />

              <div className="text-black">
                <div className="netogame_H2 mt-5">
                  Mythus Arena: A Unique Strategy Game Experience
                </div>
                <div className="netogame_H3 mt-3 pb-20 lg:my-5">
                  You'll have to wait until 2026 for Mythus Arena. The Neto team
                  is working tirelessly on this game, and we aim to deliver the
                  best strategy game experience for our users
                </div>
              </div>
              <div className="absolute bottom-3 text-black">
                <div className="flex">
                  <Image
                    placeholder="blur"
                    src={carousel4_logo_3}
                    width={0}
                    height={0}
                    alt=""
                    className="size-12"
                  />
                  <div className="ml-2">
                    <div className="">Neto Reporter</div>
                    <div className="text-xs text-black/50">
                      Content Communications Specialist, Neto Interactive
                      Entertainment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[50vh] xl:h-[66vh]">
            <div className="carousel4_card_shadow relative mx-2 h-full cursor-pointer overflow-hidden rounded-xl bg-[#fcfcfc] p-1 px-4">
              <Image
                placeholder="blur"
                src={carousel4_pic_4}
                width={0}
                height={0}
                alt=""
                className="carouselimg h-auto w-full rounded-xl"
              />

              <div className="text-black">
                <div className="netogame_H2 mt-5">
                  Stay Tuned for Neto Affiliate
                </div>
                <div className="netogame_H3 mt-3 pb-20 lg:my-5">
                  You can join the large Neto family with an initial free
                  registration. If you're among the first 10,000 members, you'll
                  receive 1,000 Neto tokens as a gift for signing up, which you
                  can sell anytime you wish
                </div>
              </div>
              <div className="absolute bottom-3 text-black">
                <div className="flex">
                  <Image
                    placeholder="blur"
                    src={carousel4_logo_4}
                    width={0}
                    height={0}
                    alt=""
                    className="size-12"
                  />
                  <div className="ml-2">
                    <div className="">Neto Reporter</div>
                    <div className="text-xs text-black/50">
                      Content Communications Specialist, Neto Interactive
                      Entertainment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[50vh] xl:h-[66vh]">
            <div className="carousel4_card_shadow relative mx-2 h-full cursor-pointer overflow-hidden rounded-xl bg-[#fcfcfc] p-1 px-4">
              <Image
                placeholder="blur"
                src={carousel4_pic_5}
                width={0}
                height={0}
                alt=""
                className="carouselimg h-auto w-full rounded-xl"
              />

              <div className="text-black">
                <div className="netogame_H2 mt-5">
                  You Can Be a Part of NetoBall
                </div>
                <div className="netogame_H3 mt-3 pb-20 lg:my-5">
                  Neto's first game to offer shares is NetoBall. The pre-sale or
                  initial offering of revenue and partnership shares for
                  NetoBall works in such a way that each user must pay the
                  equivalent of 330,000 Neto tokens per share. The number of
                  shares is limited, and once 5,000 shares are reached, no
                  further shares of NetoBall will be available to the public
                </div>
              </div>
              <div className="absolute bottom-3 text-black">
                <div className="flex">
                  <Image
                    placeholder="blur"
                    src={carousel4_logo_5}
                    width={0}
                    height={0}
                    alt=""
                    className="size-12"
                  />
                  <div className="ml-2">
                    <div className="">Neto Reporter</div>
                    <div className="text-xs text-black/50">
                      Content Communications Specialist, Neto Interactive
                      Entertainment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[50vh] xl:h-[66vh]">
            <div className="carousel4_card_shadow relative mx-2 h-full cursor-pointer overflow-hidden rounded-xl bg-[#fcfcfc] p-1 px-4">
              <Image
                placeholder="blur"
                src={carousel4_pic_6}
                width={0}
                height={0}
                alt=""
                className="carouselimg h-auto w-full rounded-xl"
              />

              <div className="text-black">
                <div className="netogame_H2 mt-5">
                  The Combat Field game engine will be Unreal Engine
                </div>
                <div className="netogame_H3 mt-3 pb-20 lg:my-5">
                  Combat Field offers an unparalleled experience of a
                  first-person shooter, thanks to the Unreal Engine, which will
                  provide realistic graphics and physics. A specific release
                  date for the game has not yet been determined
                </div>
              </div>
              <div className="absolute bottom-3 text-black">
                <div className="flex">
                  <Image
                    placeholder="blur"
                    src={carousel4_logo_6}
                    width={0}
                    height={0}
                    alt=""
                    className="size-12"
                  />
                  <div className="ml-2">
                    <div className="">Neto Reporter</div>
                    <div className="text-xs text-black/50">
                      Content Communications Specialist, Neto Interactive
                      Entertainment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
const Social_bar = () => {
  return (
    <div className="flex w-full items-center bg-black py-2">
      <div className="left-5 hidden text-[#616161] sm:text-sm md:block lg:absolute">
        Visit Other NetoGame Channels
      </div>
      <div className="mx-auto flex items-center">
        <div className="mx-4 cursor-pointer">
          <Image
            width={0}
            height={0}
            className="w-16 hover:opacity-70"
            alt=""
            src={Ticktok}
          />
        </div>
        <div className="mr-4 cursor-pointer">
          <Image
            width={0}
            height={0}
            className="w-16 hover:opacity-70"
            alt=""
            src={TEl}
          />
        </div>
        <div className="mr-4 cursor-pointer">
          <Image
            width={0}
            height={0}
            className="w-16 hover:opacity-70"
            alt=""
            src={x}
          />
        </div>
        <div className="mr-4 cursor-pointer">
          <Image
            width={0}
            height={0}
            className="w-16 hover:opacity-70"
            alt=""
            src={Discord}
          />
        </div>
        <div className="mr-4 cursor-pointer">
          <Image
            width={0}
            height={0}
            className="w-16 hover:opacity-70"
            alt=""
            src={Facebook}
          />
        </div>
        <div className="mr-4 cursor-pointer">
          <Image
            width={0}
            height={0}
            className="w-16 hover:opacity-70"
            alt=""
            src={Insta}
          />
        </div>
        <div className="mr-4 cursor-pointer">
          <Image
            width={0}
            height={0}
            className="w-16 hover:opacity-70"
            alt=""
            src={yt}
          />
        </div>
      </div>
    </div>
  );
};
export default function HifiRush() {
  return (
    <main className="bg-white">
      <title>NETOBALL</title>
      <div className="main_bg mt-16">
        <div className="shadowstaticborder mx-auto max-w-[80rem] items-center sm:w-11/12 lg:w-4/5">
          <Main_sec />
          <Collapsable />
          <BG_change_sec />

          <Card_sec />
          <div className="w-full"></div>
          <section className="fixed_bg pt-5">
            <Carousel_4 />
          </section>
          <Social_bar />
        </div>
      </div>
    </main>
  );
}
