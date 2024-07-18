"use client";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Carousel from "../carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useInView, InView } from "react-intersection-observer";

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
          <div className="relative sm:w-3/4 mx-auto flex flex-col sm:flex-row items-center">
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
export default function HifiRush() {
  return (
    <main className="bg-white">
      <title>HI-FI Rush</title>
      <div className="main_bg">
        <div className="lg:w-3/4 sm:w-11/12 max-w-[70rem] flex mx-auto items-center">
          <div>
            <Main_sec />
            <Card_sec />
          </div>
        </div>
      </div>
    </main>
  );
}
