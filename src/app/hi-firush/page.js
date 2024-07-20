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
        <div className="absolute pt-96 bottom-0 bg-hifi_blue_gradient w-full">
          <div className="absolute w-1/2 bottom-40 sm:bottom-20 2xl:bottom-32 hover:-translate-y-2 transition duration-50 sm:w-1/3 left-1/2 -translate-x-1/2 filter drop-shadow-hifilogoshadow">
            <Image alt="" width={1000} height={1000} src={mainpic_logo} />
          </div>
          <div className="relative sm:w-3/4 mx-auto mb-5 flex flex-col sm:flex-row items-center">
            <div className="relative shadowpalseonce text-[#ff0000] hover:cursor-pointer hover:text-[#004aba] h-max w-1/2 sm:px-10 filter drop-shadow-hifilogoshadow pb-3">
              <svg viewBox="0 0 496 100" className="w-full h-full ">
                <path
                  stroke="#000"
                  strokeWidth="5"
                  d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                />
              </svg>
              <div className="absolute font-A2Beckett text-base mb-2 md:mb-3 md:text-lg sm:text-sm sm:mb-3 xl:text-2xl 2xl:mb-0 italic text-white top-0 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
                WATCH VIDEO
              </div>
            </div>
            <div className="relative shadowpalseonce text-[#ffff00] hover:cursor-pointer hover:text-[#004aba] h-max w-1/2 sm:px-10 filter drop-shadow-hifilogoshadow pb-3">
              <svg viewBox="0 0 496 100" className="w-full h-full">
                <path
                  fill="#ffff00"
                  stroke="#000"
                  strokeWidth="5"
                  d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                />
              </svg>
              <div className="absolute font-A2Beckett text-base mb-2 md:mb-3 md:text-lg sm:text-sm sm:mb-3 xl:text-2xl 2xl:mb-0 italic text-black top-0 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
                play now
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
            className="bg-black relative py-5 text-center font-A2Beckett text-xl cursor-pointer"
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
                  ? "rotate-[20deg] transition-all duration-200 absolute bottom-0 -left-10 hidden sm:block size-24"
                  : "absolute bottom-0 transition-all duration-200 -left-10 hidden sm:block size-24"
              }
            />
            <div>NEW HI-FI RUSH GEAR!</div>
            {open ? (
              <ChevronUpIcon className="size-7 absolute top-0 right-3 bg-red-600 translate-y-1/2 rounded-full" />
            ) : (
              <ChevronDownIcon className="size-7 absolute top-0 right-3 bg-red-600 translate-y-1/2 rounded-full" />
            )}
          </div>
          <Collapsible open={open} revealType="bottomFirst">
            <div className="bg-white collapsabale_bg flex">
              <div className="sm:w-1/2 mx-auto z-10">
                <Image
                  src={collapsable_pic}
                  width={0}
                  height={0}
                  alt=""
                  className=""
                />
                <div>
                  <div className="firstsec_title">NEW HI-FI RUSH GEAR!</div>
                  <div className="firstsec_text text-black">
                    Look like a rockstar with our Hi-Fi RUSH t-shirts, deskmats,
                    and more - now available in the Bethesda Gear Store.
                  </div>
                  <div className="firstsec_text">
                    *Stock availability may vary based on your region
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
        <div className="text-center py-10 shadowpalse font-A2Beckett  uppercase text-4xl">
          availble now
        </div>
        <section>
          <div className="bg-[#ffcc44] w-11/12 mx-auto min-h-40 shadowstatic lg:flex mb-10">
            <div className="lg:w-1/3 w-4/5 px-2 lg:px-0 lg:mx-5 mx-auto ">
              <Image
                className="-translate-y-4 shadowpalse"
                src={card_sec2_pic_1}
                width={0}
                height={0}
                alt=""
              />
            </div>
            <div className="lg:w-2/3 w-4/5 px-2 mx-auto pr-5 mt-5">
              <div className="card_header">Standard Edition</div>
              <div className="card_text my-3">
                Feel the beat as wannabe rockstar Chai and his ragtag team fight
                against evil megacorp with raucous rhythm combat! From Tango
                Gameworks comes Hi-Fi RUSH, an all-new action game where the
                world syncs to the music.
              </div>
              <div className="card_header pb-3">Play Now</div>
              <div className="text-[#0e7a0d] shadowpalseonce hover:cursor-pointer hover:text-[#13a111] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-3">
                <svg viewBox="0 0 496 100" className="w-full h-full ">
                  <path
                    stroke="#000"
                    strokeWidth="5"
                    d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                  />
                </svg>
                <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                  Game pass
                </div>
              </div>
              <div className="card_header my-3">BUY Now</div>
              <div className="block sm:flex sm:flex-wrap w-full mb-3">
                <div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      Xbox / windows
                    </div>
                  </div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      steam
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      PlayStation®5
                    </div>
                  </div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      EPIC
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-[#ffcc44] w-11/12 mx-auto min-h-40 shadowstatic lg:flex mb-10">
            <div className="lg:w-1/3 w-4/5 mx-auto">
              <div className=" px-2 lg:px-0 lg:mx-5 mx-auto mb-8 ">
                <Image
                  className="-translate-y-4 shadowpalse"
                  src={card_sec2_pic_2}
                  width={0}
                  height={0}
                  alt=""
                />
              </div>
              <div className="px-2 lg:px-0 lg:mx-5 mx-auto -rotate-3">
                <Image
                  className="-translate-y-4 shadowpalse"
                  src={card_sec2_pic_3}
                  width={0}
                  height={0}
                  alt=""
                />
              </div>
            </div>
            <div className="lg:w-2/3 w-4/5 px-2 mx-auto pr-5 mt-5">
              <div className="card_header">Standard Edition</div>
              <div className="card_text my-3">
                Feel the beat as wannabe rockstar Chai and his ragtag team fight
                against evil megacorp with raucous rhythm combat! From Tango
                Gameworks comes Hi-Fi RUSH, an all-new action game where the
                world syncs to the music.
              </div>
              <div className="card_header pb-3">Play Now</div>
              <div className="text-[#0e7a0d] shadowpalseonce hover:cursor-pointer hover:text-[#13a111] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-3">
                <svg viewBox="0 0 496 100" className="w-full h-full ">
                  <path
                    stroke="#000"
                    strokeWidth="5"
                    d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                  />
                </svg>
                <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                  Game pass
                </div>
              </div>
              <div className="card_header my-3">BUY Now</div>
              <div className="block sm:flex sm:flex-wrap w-full mb-3">
                <div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      Xbox / windows
                    </div>
                  </div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      steam
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      PlayStation®5
                    </div>
                  </div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      EPIC
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-[#ffcc44] w-11/12 mx-auto min-h-40 shadowstatic lg:flex mb-10">
            <div className="lg:w-1/3 w-4/5 px-2 lg:px-0 lg:mx-5 mx-auto ">
              <Image
                className="-translate-y-4 shadowpalse"
                src={card_sec2_pic_4}
                width={0}
                height={0}
                alt=""
              />
            </div>
            <div className="lg:w-2/3 w-4/5 px-2 mx-auto pr-5 mt-5">
              <div className="card_header">Standard Edition</div>
              <div className="card_text my-3">
                Feel the beat as wannabe rockstar Chai and his ragtag team fight
                against evil megacorp with raucous rhythm combat! From Tango
                Gameworks comes Hi-Fi RUSH, an all-new action game where the
                world syncs to the music.
              </div>
              <div className="card_header pb-3">Play Now</div>
              <div className="text-[#0e7a0d] shadowpalseonce hover:cursor-pointer hover:text-[#13a111] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-3">
                <svg viewBox="0 0 496 100" className="w-full h-full ">
                  <path
                    stroke="#000"
                    strokeWidth="5"
                    d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                  />
                </svg>
                <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                  Game pass
                </div>
              </div>
              <div className="card_header my-3">BUY Now</div>
              <div className="block sm:flex sm:flex-wrap w-full mb-3">
                <div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      Xbox / windows
                    </div>
                  </div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      steam
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      PlayStation®5
                    </div>
                  </div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      EPIC
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-[#ffcc44] w-11/12 mx-auto min-h-40 shadowstatic lg:flex mb-10">
            <div className="lg:w-1/3 w-4/5 px-2 lg:px-0 lg:mx-5 mx-auto ">
              <Image
                className="-translate-y-4 shadowpalse"
                src={card_sec2_pic_5}
                width={0}
                height={0}
                alt=""
              />
            </div>
            <div className="lg:w-2/3 w-4/5 px-2 mx-auto pr-5 mt-5">
              <div className="card_header">Standard Edition</div>
              <div className="card_text my-3">
                Feel the beat as wannabe rockstar Chai and his ragtag team fight
                against evil megacorp with raucous rhythm combat! From Tango
                Gameworks comes Hi-Fi RUSH, an all-new action game where the
                world syncs to the music.
              </div>
              <div className="card_header pb-3">Play Now</div>
              <div className="text-[#0e7a0d] shadowpalseonce hover:cursor-pointer hover:text-[#13a111] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-3">
                <svg viewBox="0 0 496 100" className="w-full h-full ">
                  <path
                    stroke="#000"
                    strokeWidth="5"
                    d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                  />
                </svg>
                <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                  Game pass
                </div>
              </div>
              <div className="card_header my-3">BUY Now</div>
              <div className="block sm:flex sm:flex-wrap w-full mb-3">
                <div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      Xbox / windows
                    </div>
                  </div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      steam
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      PlayStation®5
                    </div>
                  </div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      EPIC
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-[#ffcc44] w-11/12 mx-auto min-h-40 shadowstatic lg:flex mb-10">
            <div className="lg:w-1/3 w-4/5 px-2 lg:px-0 lg:mx-5 mx-auto ">
              <Image
                className="-translate-y-4 shadowpalse"
                src={card_sec2_pic_6}
                width={0}
                height={0}
                alt=""
              />
            </div>
            <div className="lg:w-2/3 w-4/5 px-2 mx-auto pr-5 mt-5">
              <div className="card_header">Standard Edition</div>
              <div className="card_text my-3">
                Feel the beat as wannabe rockstar Chai and his ragtag team fight
                against evil megacorp with raucous rhythm combat! From Tango
                Gameworks comes Hi-Fi RUSH, an all-new action game where the
                world syncs to the music.
              </div>
              <div className="card_header pb-3">Play Now</div>
              <div className="text-[#0e7a0d] shadowpalseonce hover:cursor-pointer hover:text-[#13a111] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-3">
                <svg viewBox="0 0 496 100" className="w-full h-full ">
                  <path
                    stroke="#000"
                    strokeWidth="5"
                    d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                  />
                </svg>
                <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                  Game pass
                </div>
              </div>
              <div className="card_header my-3">BUY Now</div>
              <div className="block sm:flex sm:flex-wrap w-full mb-3">
                <div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      Xbox / windows
                    </div>
                  </div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      steam
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      PlayStation®5
                    </div>
                  </div>
                  <div className="text-[#00a2ed] shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                      EPIC
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
          document.documentElement.offsetHeight
        );
        // var percentage = Math.floor((position / limit) * 255);
        // ref.current.style.backgroundColor = `rgb(${percentage * 5}, 71, 185)`;
        // // ref.current.style.backgroundColor = position > 1000 ? "blue" : "red";
        // console.log(percentage);
        function color() {
          // 13 ... 122
          var percentage = Math.floor((position / limit) * 100);
          if (percentage < 5) return 13;
          if (percentage > 40) return 122;
          return Math.floor((position / limit) * 500);
        }
        var colour = color();
        ref.current.style.backgroundColor = `rgb(${colour}, 71, 185)`;
        // ref.current.style.webkitFilter = `blur(${colour}px)`;
        // ref.current.style.backgroundColor = position > 1000 ? "blue" : "red";
        console.log(Math.floor((position / limit) * 100));
        console.log({ colour: colour });
        // console.log(colour);
        setScrollPosition(colour);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <section>
      <div ref={ref} className=" scrollbg pb-20 shadowstatic">
        <section className="relative">
          <div className=" w-full mx-auto overflow-clip lg:overflow-visible lg:flex flex-row items-center sm:mb-10">
            <div className="lg:w-2/3 w-full mx-auto px-10 overflow-clip sm:py-20 py-10 relative">
              <div className="cardbgimage"></div>
              <div className="card_header firstsec_title">
                AN ALL-NEW RHYTHM-ACTION GAME FROM TANGO GAMEWORKS
              </div>
              <div className="card_text my-3 firstsec_text">
                Labeled “defective” after an experiment accidentally fuses a
                music player into his heart, wannabe rockstar Chai must break
                free from a sinister corporation with raucous rhythm-enhanced
                combat - from the studio that brought you The Evil Within and
                Ghostwire: Tokyo!
              </div>

              <div className="shadowpalseonce text-[#ffff00] hover:cursor-pointer hover:text-[#004aba] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-3">
                <svg viewBox="0 0 496 100" className="w-full h-full ">
                  <path
                    stroke="#000"
                    strokeWidth="5"
                    d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                  />
                </svg>
                <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-black hover:text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                  Learn more
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mx-auto w-3/5">
              <Image
                className=" translate-x-10 translate-y-10 scale-125 sm:scale-100"
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
              className="-rotate-6 border-4 border-[#ffff00] mx-auto sm:w-2/3 w-4/5 -translate-y-10"
              src={first_sec_pic_2}
              width={0}
              height={0}
              alt=""
            />
          </div>
        </section>
        <section className="relative">
          <div className=" w-full mx-auto overflow-clip lg:overflow-visible lg:flex flex-row-reverse items-center sm:mb-10">
            <div className="lg:w-2/3 w-full mx-auto px-10 overflow-clip sm:py-20 py-10 relative">
              <div className="cardbgimageRight"></div>
              <div className="card_header firstsec_title">
                AN ALL-NEW RHYTHM-ACTION GAME FROM TANGO GAMEWORKS
              </div>
              <div className="card_text my-3 firstsec_text">
                Labeled “defective” after an experiment accidentally fuses a
                music player into his heart, wannabe rockstar Chai must break
                free from a sinister corporation with raucous rhythm-enhanced
                combat - from the studio that brought you The Evil Within and
                Ghostwire: Tokyo!
              </div>

              <div className="shadowpalseonce text-[#ffff00] hover:cursor-pointer hover:text-[#004aba] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-3">
                <svg viewBox="0 0 496 100" className="w-full h-full ">
                  <path
                    stroke="#000"
                    strokeWidth="5"
                    d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                  />
                </svg>
                <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-black hover:text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                  Learn more
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mx-auto w-3/5">
              <Image
                className="sm:-translate-x-5 "
                src={first_sec_pic_3}
                width={0}
                height={0}
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="relative">
          <div className=" w-full mx-auto overflow-clip lg:overflow-visible lg:flex flex-row items-center sm:mb-10">
            <div className="lg:w-2/3 w-full mx-auto px-10 overflow-clip sm:py-20 py-10 relative">
              <div className="cardbgimage"></div>
              <div className="card_header firstsec_title">
                AN ALL-NEW RHYTHM-ACTION GAME FROM TANGO GAMEWORKS
              </div>
              <div className="card_text my-3 firstsec_text">
                Labeled “defective” after an experiment accidentally fuses a
                music player into his heart, wannabe rockstar Chai must break
                free from a sinister corporation with raucous rhythm-enhanced
                combat - from the studio that brought you The Evil Within and
                Ghostwire: Tokyo!
              </div>

              <div className="shadowpalseonce text-[#ffff00] hover:cursor-pointer hover:text-[#004aba] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-3">
                <svg viewBox="0 0 496 100" className="w-full h-full ">
                  <path
                    stroke="#000"
                    strokeWidth="5"
                    d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                  />
                </svg>
                <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-black hover:text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                  Learn more
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mx-auto w-3/5">
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
      <div className="flex h-[400px] overflow-x-scroll xl:justify-center whitespace-nowrap">
        <a
          className="mx-2 shadowstatic my-4 hover:-translate-y-2 transition-all duration-50 shadowpalseonce min-w-[280px] w-[280px] whitespace-normal relative bg-[#ffcc44]"
          href="#"
        >
          <div className="w-full whitespace-normal">
            <Image src={card_sec_pic_1} width={0} height={0} alt="" />
          </div>
          <div className="px-5">
            <div className="scrollycardtitle whitespace-normal">
              Hi-Fi RUSH Update 9 Patch Notes
            </div>
            <div className="scrollycardtext whitespace-normal mb-10">
              We're stomping out a few more bugs in our latest Hi-Fi RUSH
              update. We're stomping out a few more bugs in our latest Hi-Fi
              RUSH update.
            </div>

            <div className="scrollycardfooter absolute bottom-2 left-2">
              MAY 18
            </div>
          </div>
        </a>
        <a
          className="mx-2 shadowstatic my-4 hover:-translate-y-2 transition-all duration-50 shadowpalseonce min-w-[280px] w-[280px] whitespace-normal relative bg-[#ffcc44]"
          href="#"
        >
          <div className="w-full whitespace-normal">
            <Image src={card_sec_pic_1} width={0} height={0} alt="" />
          </div>
          <div className="px-5">
            <div className="scrollycardtitle whitespace-normal">
              Hi-Fi RUSH Update 9 Patch Notes
            </div>
            <div className="scrollycardtext whitespace-normal mb-10">
              We're stomping out a few more bugs in our latest Hi-Fi RUSH
              update. We're stomping out a few more bugs in our latest Hi-Fi
              RUSH update.
            </div>

            <div className="scrollycardfooter absolute bottom-2 left-2">
              MAY 18
            </div>
          </div>
        </a>
        <a
          className="mx-2 shadowstatic my-4 hover:-translate-y-2 transition-all duration-50 shadowpalseonce min-w-[280px] w-[280px] whitespace-normal relative bg-[#ffcc44]"
          href="#"
        >
          <div className="w-full whitespace-normal">
            <Image src={card_sec_pic_1} width={0} height={0} alt="" />
          </div>
          <div className="px-5">
            <div className="scrollycardtitle whitespace-normal">
              Hi-Fi RUSH Update 9 Patch Notes
            </div>
            <div className="scrollycardtext whitespace-normal mb-10">
              We're stomping out a few more bugs in our latest Hi-Fi RUSH
              update. We're stomping out a few more bugs in our latest Hi-Fi
              RUSH update.
            </div>

            <div className="scrollycardfooter absolute bottom-2 left-2">
              MAY 18
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
export default function HifiRush() {
  return (
    <main className="bg-white">
      <title>HI-FI Rush</title>
      <div className="main_bg">
        <div className="lg:w-3/4 sm:w-11/12 max-w-[70rem] mx-auto items-center">
          <Main_sec />
          <Collapsable />
          <BG_change_sec />

          <Card_sec />
        </div>
      </div>
    </main>
  );
}
