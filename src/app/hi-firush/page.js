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
                TO WATCH VIDEO
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
                  ? "rotate-[20deg] transition-all translate-y-1/2 duration-200 absolute bottom-1/2 -left-10 hidden sm:block size-40"
                  : "absolute bottom-1/2 translate-y-1/2 transition-all duration-200 -left-10 hidden sm:block size-40"
              }
            />
            <div className="text-2xl">NEW “NETO BALL” PRODUCTS!</div>
            {open ? (
              <ChevronUpIcon className="size-7 absolute top-1/2 right-3 bg-red-600 -translate-y-1/2 rounded-full" />
            ) : (
              <ChevronDownIcon className="size-7 absolute top-1/2 right-3 bg-red-600 -translate-y-1/2 rounded-full" />
            )}
          </div>
          <Collapsible open={open} revealType="bottomFirst">
            <div className="bg-white collapsabale_bg flex text-center ">
              <div className="sm:w-1/2 mx-auto z-10">
                <Image
                  src={collapsable_pic}
                  width={0}
                  height={0}
                  alt=""
                  className=""
                />
                <div>
                  <div className="card_header">NEW “NETO BALL” PRODUCTS!</div>
                  <div className="firstsec_text text-black py-2">
                    Dress like a rock star with t-shirts, desk pads and more
                    from NETO BALL - available now at the NetoGame Store.
                  </div>
                  <div className="firstsec_text text-black py-2">
                    *Product availability may vary by region
                  </div>
                  <div className="text-[#00a2ed] mx-auto shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
                    <svg viewBox="0 0 496 100" className="w-full h-full ">
                      <path
                        stroke="#000"
                        strokeWidth="5"
                        d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                      />
                    </svg>
                    <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
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
        <div className="text-center py-10 shadowpalse font-A2Beckett  uppercase text-5xl sm:text-6xl">
          COMING SOON
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
                The standard version of the game imposes no restrictions but
                will not include certain special features. Additionally,
                watching ads is a part of the standard version of the game!
              </div>
              <div className="card_header pb-3">DOWNLOAD NOW</div>
              <div className="text-[#0e7a0d] shadowpalseonce hover:cursor-pointer hover:text-[#13a111] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-3">
                <svg viewBox="0 0 496 100" className="w-full h-full ">
                  <path
                    stroke="#000"
                    strokeWidth="5"
                    d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
                  />
                </svg>
                <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                  NETO PLAY FUSION
                </div>
              </div>
              <div className="card_header my-3">DOWNLOAD NOW</div>
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
                      APP STORE
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
                      PLAYSTORE
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
                      APP STORE
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
                      PLAYSTORE
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
                      APP STORE
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
                      PLAYSTORE
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
                      APP STORE
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
                      PLAYSTORE
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
                      APP STORE
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
                      PLAYSTORE
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
      <div ref={ref} className=" scrollbg pb-20">
        <section className="relative">
          <div className=" w-full mx-auto overflow-clip lg:overflow-visible lg:flex flex-row items-center sm:mb-10">
            <div className="lg:w-2/3 w-full mx-auto px-10 overflow-clip sm:py-20 py-10 relative">
              <div className="cardbgimage"></div>
              <div className="card_header firstsec_title">
                CHARACTERS LEVEL UP AND GET UPDATED THROUGH CARDS
              </div>
              <div className="card_text my-3 firstsec_text">
                For example, a character in the bronze category will need 10
                upgrade cards to move from level 1 to level 2. These upgrade
                cards are given to the user after victories, in loot boxes, and
                in the Mission section. They can also be purchased in limited
                quantities from the in-game store
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
                  DOWNLOAD NOW
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
                EXPERIENCE A REAL-LIFE STREET FOOTBALL MATCH
              </div>
              <div className="card_text my-3 firstsec_text">
                In NetoBall, experience a fantasy street football match. Face
                your opponent, score goals, and defend your net to win the game.
                Your victory will bring you numerous rewards. So, don't lose;
                focus only on winning
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
                  DOWNLOAD NOW
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
                USE SPECIAL ABILITIES FOR YOUR CHARACTE
              </div>
              <div className="card_text my-3 firstsec_text">
                In this section, you can unlock special abilities for your
                characters. Once purchased, these abilities will be applied to
                all your unlocked characters. The special abilities can be used
                during the game depending on the upgrade level, allowing one or
                multiple uses. The activation duration and effectiveness of
                these abilities range from 2 to 4 seconds
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
                  DOWNLOAD NOW
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
      <div className="text-center py-10 shadowpalse font-A2Beckett  uppercase text-5xl sm:text-6xl">
        MORE ABOUT NETO BALL
      </div>
      <div className="flex overflow-x-auto xl:justify-center whitespace-nowrap">
        <a
          className="mx-2 shadowstatic my-4 hover:-translate-y-2 transition-all duration-50 shadowpalseonce min-w-[280px] w-[280px] whitespace-normal relative bg-[#ffcc44]"
          href="#"
        >
          <div className="w-full whitespace-normal">
            <Image src={card_sec_pic_1} width={0} height={0} alt="" />
          </div>
          <div className="px-5">
            <div className="scrollycardtitle whitespace-normal">
              The initial version of the game will include 5 stadiums
            </div>
            <div className="scrollycardtext whitespace-normal mb-10">
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
          className="mx-2 shadowstatic my-4 hover:-translate-y-2 transition-all duration-50 shadowpalseonce min-w-[280px] w-[280px] whitespace-normal relative bg-[#ffcc44]"
          href="#"
        >
          <div className="w-full whitespace-normal">
            <Image src={card_sec_pic_2} width={0} height={0} alt="" />
          </div>
          <div className="px-5">
            <div className="scrollycardtitle whitespace-normal">
              NETOBALL BUNDLES WILL INCLUDE SPECIAL SKINS
            </div>
            <div className="scrollycardtext whitespace-normal mb-10">
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
          className="mx-2 shadowstatic my-4 hover:-translate-y-2 transition-all duration-50 shadowpalseonce min-w-[280px] w-[280px] whitespace-normal relative bg-[#ffcc44]"
          href="#"
        >
          <div className="w-full whitespace-normal">
            <Image src={card_sec_pic_3} width={0} height={0} alt="" />
          </div>
          <div className="px-5">
            <div className="scrollycardtitle whitespace-normal">
              NETOBALL FOR PS5 AND XBOX
            </div>
            <div className="scrollycardtext whitespace-normal mb-10">
              The game NetoBall will be available on PlayStation 5 and Xbox
              Series X and S consoles
            </div>

            {/* <div className="scrollycardfooter absolute bottom-2 left-2">
              MAY 18
            </div> */}
          </div>
        </a>
      </div>
      <div className="text-[#00a2ed] mx-auto mt-10 shadowpalseonce hover:cursor-pointer hover:text-[#1ab6ff] relative h-max md:w-[190px] lg:w-[210px] xl:w-[240px] w-[210px] sm:w-[160px] sm:px-3 filter drop-shadow-hifilogoshadow pb-5">
        <svg viewBox="0 0 496 100" className="w-full h-full ">
          <path
            stroke="#000"
            strokeWidth="5"
            d="M 407.5,-0.5 C 435.167,-0.5 462.833,-0.5 490.5,-0.5C 474.448,31.27 458.114,62.9367 441.5,94.5C 425.833,94.8333 410.167,95.1667 394.5,95.5C 329.834,94.8798 265.168,94.3798 200.5,94C 192.139,93.7743 183.805,93.2743 175.5,92.5C 116.856,93.4922 58.1895,93.8255 -0.5,93.5C -0.5,90.8333 -0.5,88.1667 -0.5,85.5C 7.07438,60.0928 14.0744,34.4261 20.5,8.5C 98.5007,8.66666 176.501,8.5 254.5,8C 255.743,6.84555 256.743,5.51221 257.5,4C 307.666,2.63507 357.666,1.13507 407.5,-0.5 Z"
          />
        </svg>
        <div className="absolute text-center w-full font-CCCutthroat text-sm md:text-xs sm:text-[9px] xl:text-sm italic text-white -top-3 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
          eXplore store
        </div>
      </div>
    </section>
  );
};
export default function HifiRush() {
  return (
    <main className="bg-white">
      <title>HI-FI Rush</title>
      <div className="main_bg">
        <div className="lg:w-4/5 sm:w-11/12 max-w-[80rem] shadowstaticborder mx-auto items-center">
          <Main_sec />
          <Collapsable />
          <BG_change_sec />

          <Card_sec />
        </div>
      </div>
    </main>
  );
}
