"use client";
import sec1_pic from "../../../public/orbit_explore/sec1_pic.jpg";
import sec1_logo from "../../../public/orbit_explore/sec1_logo.png";
import sec2_pic from "../../../public/orbit_explore/sec2_pic_pc.jpg";
import sec2_logo from "../../../public/orbit_explore/sec2_logo.png";
import sec3_pic from "../../../public/orbit_explore/sec3_pic_pc.jpg";
import sec3_logo from "../../../public/orbit_explore/sec3_logo.png";

import column_sec_1 from "../../../public/orbit_explore/column_sec_1.jpg";
import column_sec_2 from "../../../public/orbit_explore/column_sec_2.jpg";
import column_sec_3 from "../../../public/orbit_explore/column_sec_3.jpg";

import sec5_pic from "../../../public/orbit_explore/sec5_pic.png";
import sec5_logo from "../../../public/orbit_explore/sec5_logo.png";

import gradient_logo from "../../../public/orbit_explore/gradient_logo.png";

import Image from "next/image";
import Navbar from "../navbar_orbit_explore";
import Navbar2 from "../navbar2";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";
export default function Orbit_explore() {
  const Sec1 = () => {
    return (
      <section>
        <div className="bg-white">
          <div className="relative">
            <div className="relative max-h-[650px] overflow-hidden">
              {/* <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div> */}

              <Image
                placeholder="blur"
                src={sec1_pic}
                width={0}
                height={0}
                alt=""
                className="max-h-[650px] w-full object-cover object-top"
              />
            </div>
            <div className="z-20 flex flex-col items-center px-5 py-10 text-center text-black lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:-translate-y-1/2 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
              <Image src={sec1_logo} width={0} height={0} alt="" className="" />
              <div className="font-CruyffSansExpanded_Heavy text-4xl uppercase xl:text-5xl">
                ORBIT EXPLORE
              </div>
              <div className="font-CruyffSansExpanded_Heavy text-4xl uppercase xl:text-5xl">
                THE FIRST VR
              </div>
              <div className="font-CruyffSansExpanded_Heavy text-4xl uppercase xl:text-5xl">
                MULTIPLAYER GAME
              </div>
              <div className="netogame_p my-2 lg:my-5">
                Play ORBIT EXPLORE™ On NETOGEAR
              </div>
              <div className="md:flex">
                <button className="btn sm:text-md m-2 w-full rounded-3xl bg-[#ff9000] p-5 py-3 font-cruyffsans_medium hover:scale-[102%] sm:max-w-36 md:hover:scale-105">
                  <div className="btn_div">Buy now</div>
                </button>
                <button className="btn sm:text-md m-2 w-full rounded-3xl border-2 border-black bg-transparent p-5 py-3 font-cruyffsans_medium hover:scale-[102%] sm:max-w-36 md:hover:scale-105">
                  <div className="btn_div">Watch Trailer</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Sec2 = () => {
    return (
      <section>
        <div className="bg-[#161616]">
          <div className="relative">
            <div className="relative overflow-hidden">
              {/* <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div> */}
              <picture>
                <source
                  srcSet="./orbit_explore/sec2_pic_mobile.jpg"
                  media="(max-width:1023.95px)"
                ></source>

                <Image
                  placeholder="blur"
                  src={sec2_pic}
                  width={0}
                  height={0}
                  alt=""
                  className="w-full"
                />
              </picture>
            </div>
            <div className="z-20 flex flex-col items-center px-5 py-10 text-center text-white lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-3/5 lg:-translate-y-1/2 lg:bg-transparent lg:px-0 lg:text-start xl:left-32 xl:w-1/3">
              <Image src={sec2_logo} width={0} height={0} alt="" className="" />
              <div className="font-CruyffSansExpanded_Heavy text-4xl uppercase sm:text-3xl 2xl:text-5xl">
                HOW CAN I WIN THE GAME ? PUT ON YOUT GLASSES AND DEFEAT YOUR
                ENEMIES
              </div>
              <div className="netogame_p my-2 lg:my-5">
                In Orbit Explore, you can play online. Keep your eyes open and
                shoot your enemies accurately. Experience a unique first-person
                shooter gameplay
              </div>
              <button className="btn sm:text-md m-2 w-full rounded-3xl bg-[#ff9000] p-5 py-3 font-cruyffsans_medium text-black hover:scale-[102%] sm:max-w-36 md:hover:scale-105">
                <div className="btn_div">Buy Now</div>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Sec3 = () => {
    return (
      <section>
        <div className="bg-[#161616]">
          <div className="relative">
            <div className="relative overflow-hidden">
              {/* <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div> */}
              <picture>
                <source
                  srcSet="./orbit_explore/sec3_pic_mobile.jpg"
                  media="(max-width:1023.95px)"
                ></source>

                <Image
                  placeholder="blur"
                  src={sec3_pic}
                  width={0}
                  height={0}
                  alt=""
                  className="w-full"
                />
              </picture>
            </div>
            <div className="z-20 flex flex-col items-center px-9 py-10 text-center text-white lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/2 lg:-translate-y-1/2 lg:bg-transparent lg:px-16 xl:left-32 xl:w-1/3">
              <Image
                src={sec3_logo}
                width={0}
                height={0}
                alt=""
                className="lg:w-full"
              />

              <div className="netogame_p my-2 lg:my-5">
                In Orbit Explore, there is a ranking mode where you can compete
                for our grand prizes. In this mode, top players will be rewarded
                with valuable prizes through Neto tokens
              </div>
              <button className="btn sm:text-md m-2 w-full rounded-3xl border-2 border-white bg-transparent p-5 py-3 font-cruyffsans_medium hover:scale-[102%] sm:max-w-36 md:hover:scale-105">
                <div className="btn_div">Buy Now</div>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Column_sec = () => {
    return (
      <section>
        <div className="mx-auto text-center md:flex md:w-full md:px-24 xl:w-11/12 xl:px-10">
          <div className="py-3 md:w-1/3 md:px-3">
            <Image
              alt=""
              src={column_sec_1}
              width={0}
              height={0}
              className=""
            />
            <div className="px-8 pb-8 pt-5">
              <div className="font-CruyffSansExpanded_Heavy text-2xl uppercase text-white">
                A NEW EXPERIENCE IN VR
              </div>
              <div className="my-2 font-cruyffsans_medium text-white md:text-base">
                In Orbit Explore, you will experience a new dimension of
                first-person action. Feel every shot and bullet impact with your
                entire being as you enter a new realm and space in gaming
              </div>
            </div>
          </div>
          <div className="py-3 md:w-1/3 md:px-3">
            <Image
              alt=""
              src={column_sec_2}
              width={0}
              height={0}
              className=""
            />
            <div className="px-8 pb-8 pt-5">
              <div className="font-CruyffSansExpanded_Heavy text-2xl uppercase text-white">
                EARN MONEY
              </div>
              <div className="my-2 font-cruyffsans_medium text-white md:text-base">
                By playing Orbit Explore, you can earn income through Neto
                tokens. So, make sure to give your utmost attention to winning
                and losing!
              </div>
            </div>
          </div>
          <div className="py-3 md:w-1/3 md:px-3">
            <Image
              alt=""
              src={column_sec_3}
              width={0}
              height={0}
              className=""
            />
            <div className="px-8 pb-8 pt-5">
              <div className="font-CruyffSansExpanded_Heavy text-2xl uppercase text-white">
                A DIFFERENT FEEL OF VIRTUAL REALITY
              </div>
              <div className="my-2 font-cruyffsans_medium text-white md:text-base">
                Create your own character, wield a unique weapon, and
                personalize the game to your liking. In Orbit Explore, you will
                face no limitations
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex justify-center py-20">
          <button className="btn m-2 w-full rounded-3xl border-2 border-white bg-transparent p-5 py-3 font-druk_text_medium uppercase text-white hover:scale-[102%] sm:w-max sm:text-lg md:hover:scale-105">
            <div className="btn_div">Explore Gameplay Features</div>
          </button>
        </div>
      </section>
    );
  };
  const Row_sec = () => {
    const ref = useRef();
    const progress_ref = useRef();
    const progress_cursor = useRef();
    var scrolledAmount = 0;
    var realscrolledAmount = 0;

    function onProgressbarClick(e) {
      var rect = progress_ref.current.getBoundingClientRect();
      var x = e.clientX - rect.left; //x position within the element.
      realscrolledAmount =
        ref.current.scrollLeft /
        (ref.current.scrollWidth - ref.current.offsetWidth);
      console.log(x);
      if (ref.current) {
        scrolledAmount = ref.current.scrollLeft;
        ref.current.scroll({
          left:
            (x / progress_ref.current.offsetWidth) *
              progress_ref.current.offsetWidth +
            progress_ref.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }
    var trans_x = 0;
    function onClickScrollRight() {
      if (ref.current) {
        scrolledAmount = ref.current.scrollLeft;
        ref.current.scroll({
          left: scrolledAmount + 220,
          behavior: "smooth",
        });
      }
      realscrolledAmount =
        ref.current.scrollLeft /
        (ref.current.scrollWidth - ref.current.offsetWidth);
      //scrollWidth 1593
      //scrollLeft 0    910
      //offsetWidth 683
      scrolledAmount = (ref.current.scrollLeft + 200) / ref.current.scrollWidth; // 0 to 1
      // 0 to 216
      progress_ref.current.offsetWidth * scrolledAmount;
      trans_x += 50;
      trans_x = Math.min(trans_x, 256 - 64);
      progress_cursor.current.style.transform = `translateX(${Math.min(trans_x, 256 - 64)}px)`;
      // console.log(scrolledAmount);
      // console.log(progress_ref.current.offsetWidth * scrolledAmount);
    }
    function onClickScrollLeft() {
      if (ref.current) {
        scrolledAmount = ref.current.scrollLeft;
        ref.current.scroll({
          left: scrolledAmount - 220,
          behavior: "smooth",
        });
      }
      trans_x -= 50;
      trans_x = Math.max(trans_x, 0);
      progress_cursor.current.style.transform = `translateX(${Math.max(trans_x, 0)}px)`;
      // progress_cursor.current.style.transform = `translateX(${-64}px)`;

      // console.log(ref.current.scrollLeft / ref.current.scrollWidth);
    }
    function mouseDown(e) {
      var rect = progress_ref.current.getBoundingClientRect();
      var x = e.clientX - rect.left;
      // console.log(ref.current.scrollWidth);
      // progress_cursor.current.style.transform = `translateX(${Math.max(0, x - 35)}px)`;
    }

    return (
      <section>
        <div className="py-b">
          <div className="py-9 text-center font-CruyffSansExpanded_Heavy text-5xl uppercase">
            MORE GAME MODES
          </div>
          <div className="mx-auto w-11/12 sm:w-2/3 xl:px-10">
            <div className="mx-auto">
              <div
                ref={ref}
                className="flex overflow-x-auto overflow-y-hidden py-5 sm:overflow-x-hidden"
              >
                <div className="relative mr-8 h-[220px] w-[280px] min-w-[280px] bg-white p-10 sm:mx-8">
                  <div className="w-11/12">
                    <div className="font-CruyffSansExpanded_Heavy text-2xl uppercase text-black">
                      Battle Royale Blitz
                    </div>

                    <button className="btn sm:text-md absolute bottom-3 left-7 m-2 w-full max-w-[60%] rounded-3xl bg-[#ff9000] p-5 py-3 font-cruyffsans_medium text-black hover:scale-[102%] sm:max-w-36 md:hover:scale-105">
                      <div className="btn_div">Learn More</div>
                    </button>
                  </div>
                </div>
                <div className="relative mr-8 h-[220px] w-[280px] min-w-[280px] bg-white p-10">
                  <div className="w-11/12">
                    <div className="font-CruyffSansExpanded_Heavy text-2xl uppercase text-black">
                      Team Deathmatch Mayhem
                    </div>
                    <button className="btn sm:text-md absolute bottom-3 left-7 m-2 w-full max-w-[60%] rounded-3xl bg-[#ff9000] p-5 py-3 font-cruyffsans_medium text-black hover:scale-[102%] sm:max-w-36 md:hover:scale-105">
                      <div className="btn_div">Learn More</div>
                    </button>
                  </div>
                </div>
                <div className="relative mr-8 h-[220px] w-[280px] min-w-[280px] bg-white p-10">
                  <div className="w-11/12">
                    <div className="font-CruyffSansExpanded_Heavy text-2xl uppercase text-black">
                      Capture the Core
                    </div>
                    <br />
                    <button className="btn sm:text-md absolute bottom-3 left-7 m-2 w-full max-w-[60%] rounded-3xl bg-[#ff9000] p-5 py-3 font-cruyffsans_medium text-black hover:scale-[102%] sm:max-w-36 md:hover:scale-105">
                      <div className="btn_div">Learn More</div>
                    </button>
                  </div>
                </div>
                <div className="relative mr-8 h-[220px] w-[280px] min-w-[280px] bg-white p-10">
                  <div className="w-11/12">
                    <div className="font-CruyffSansExpanded_Heavy text-2xl uppercase text-black">
                      Sniper Showdown
                    </div>
                    <button className="btn sm:text-md absolute bottom-3 left-7 m-2 w-full max-w-[60%] rounded-3xl bg-[#ff9000] p-5 py-3 font-cruyffsans_medium text-black hover:scale-[102%] sm:max-w-36 md:hover:scale-105">
                      <div className="btn_div">Learn More</div>
                    </button>
                  </div>
                </div>
                <div className="relative mr-8 h-[220px] w-[280px] min-w-[280px] bg-white p-10">
                  <div className="w-11/12">
                    <div className="font-CruyffSansExpanded_Heavy text-2xl uppercase text-black">
                      Survival Siege
                    </div>
                    <button className="btn sm:text-md absolute bottom-3 left-7 m-2 w-full max-w-[60%] rounded-3xl bg-[#ff9000] p-5 py-3 font-cruyffsans_medium text-black hover:scale-[102%] sm:max-w-36 md:hover:scale-105">
                      <div className="btn_div">Learn More</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden py-10 sm:block">
            <div className="mx-auto flex w-max items-center">
              <ArrowLeftCircleIcon
                className="mr-5 w-10 cursor-pointer hover:scale-105 hover:text-white/80"
                onClick={() => onClickScrollLeft()}
              />
              <div
                ref={progress_ref}
                onClick={(e) => {
                  // onProgressbarClick(e);
                  // mouseDown(e);
                }}
                // onMouseDown={(e) => mouseDown(e)}
                className="relative mx-auto h-5 w-64 rounded-3xl bg-gray-400"
              >
                <div
                  ref={progress_cursor}
                  className="absolute left-0 z-10 h-5 w-16 rounded-3xl bg-gray-700 transition-transform duration-200"
                ></div>
              </div>
              <ArrowRightCircleIcon
                className="ml-5 w-10 cursor-pointer hover:scale-105 hover:text-white/80"
                onClick={() => onClickScrollRight()}
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Sec4 = () => {
    return (
      <section>
        <div className="orbitexplore_sec4_bg">
          <div className="mx-auto flex w-11/12 flex-col items-center py-32 text-center sm:w-1/2">
            <div className="font-CruyffSansExpanded_Heavy text-3xl uppercase sm:text-3xl lg:text-5xl">
              THE BEST PERSONALIZATION
            </div>
            <div className="netogame_p my-2 lg:my-5">
              In Orbit Explore, you will experience a true-to-life simulator.
              You can customize your outfits, characters, weapons, and various
              types of vehicles according to your preferences
            </div>
            <button className="btn sm:text-md m-2 w-full rounded-3xl border-2 border-white bg-transparent p-5 py-3 font-cruyffsans_medium hover:scale-[102%] sm:max-w-36 md:hover:scale-105">
              <div className="btn_div">Learn More</div>
            </button>
          </div>
        </div>
      </section>
    );
  };
  const Sec5 = () => {
    return (
      <section>
        <div className="orbitexplore_sec5_bg">
          <div className="flex-row-reverse md:flex">
            <Image
              alt=""
              src={sec5_pic}
              width={0}
              height={0}
              className="h-full md:w-1/2"
            />

            <div className="flex flex-col items-center px-9 py-10 text-center text-white md:w-1/2">
              <div className="mx-auto w-3/4">
                <Image
                  src={sec5_logo}
                  width={0}
                  height={0}
                  alt=""
                  className="lg:w-full"
                />
                <div className="font-CruyffSansExpanded_Heavy text-3xl uppercase sm:text-3xl xl:text-5xl">
                  WELCOME TO THE ORBIT EXPLORE
                </div>
                <div className="netogame_p my-2 lg:my-5">
                  Orbit Explore will offer a simulation that you can play
                  without VR glasses, but the game's appeal will be diminished
                </div>
                <button className="btn sm:text-md m-2 w-full rounded-3xl bg-[#ff9000] p-5 py-3 font-cruyffsans_medium text-black hover:scale-[102%] sm:max-w-36 md:hover:scale-105">
                  <div className="btn_div">Buy Now</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Gradient_sec = () => {
    return (
      <section className="pb-10 md:px-5">
        <div className="gradient_bg mx-auto mt-4 flex w-11/12 flex-col items-center rounded-[3rem] px-10 py-10 text-center md:w-full">
          <Image
            alt=""
            src={gradient_logo}
            width={0}
            height={0}
            className="my-2 w-10/12"
          />
          <div className="my-2 font-druk_wide_super uppercase lg:text-[27px]">
            TRY NOW ON NETO PLAY FUSION
          </div>
          <button className="btn mt-5 w-full rounded-3xl bg-[#ff4747] p-5 py-3 font-druk_text_medium uppercase hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
            <div className="btn_div">Start Now</div>
          </button>
        </div>
      </section>
    );
  };
  const SocialMedia_sec = () => {
    return (
      <section className="mx-auto">
        <div className="overflow-hidden py-10 text-center">
          <div className="combarfield_H1 pb-5 text-black">
            FOLLOW US ON OUR SOCIAL MEDIA
          </div>
          <div className="flex justify-center pb-5">
            <div className="border-r border-black p-5 sm:p-10">
              <a className="cursor-pointer text-black transition duration-300 ease-in-out">
                <svg
                  className="h-8 w-8 transition-all duration-100 hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 40 40"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.623 6.972v4.9565H0v6.061h3.623V36h7.442V17.99h4.994s.4678-2.9062.6945-6.0838h-5.6603v-4.144c0-.6194.8114-1.4525 1.6134-1.4525h4.0548V0h-5.513C3.4388-.0004 3.6228 6.0664 3.6228 6.972z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="border-r border-black p-5 sm:p-10">
              <a className="cursor-pointer text-black transition duration-300 ease-in-out">
                <svg
                  className="h-8 w-8 transition-all duration-100 hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 60 62"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M35.7082 25.9642L58.0445 0H52.7515L33.3569 22.5444L17.8664 0H0L23.4246 34.091L0 61.3185H5.2933L25.7746 37.5109L42.1336 61.3185H60L35.7069 25.9642H35.7082ZM28.4582 34.3914L26.0849 30.9967L7.20055 3.98472H15.3307L30.5706 25.7843L32.944 29.1789L52.754 57.515H44.6238L28.4582 34.3927V34.3914Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="border-r border-black p-5 sm:p-10">
              <a className="cursor-pointer text-black transition duration-300 ease-in-out">
                <svg
                  className="h-8 w-8 transition-all duration-100 hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 192 192"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M180.32,53.36A22.12,22.12,0,0,0,164.76,37.7C151,34,96,34,96,34s-55,0-68.76,3.7A22.12,22.12,0,0,0,11.68,53.36C8,67.18,8,96,8,96s0,28.82,3.68,42.64A22.12,22.12,0,0,0,27.24,154.3C41,158,96,158,96,158s55,0,68.76-3.7a22.12,22.12,0,0,0,15.56-15.66C184,124.82,184,96,184,96S184,67.18,180.32,53.36Z"
                    clipRule="evenodd"
                  ></path>
                  <polygon
                    fill="#fff"
                    stroke="none"
                    points="78 122.17 124 96 78 69.83 78 122.17"
                  ></polygon>
                </svg>
              </a>
            </div>
            <div className="p-5 sm:p-10">
              <a className="cursor-pointer text-black transition duration-300 ease-in-out">
                <svg
                  className="h-8 w-8 transition-all duration-100 hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 40 40"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 0c-4.8885 0-5.5015.0207-7.4214.1083C8.6626.1957 7.3542.5 6.2093.945c-1.1836.46-2.1875 1.0754-3.1882 2.076C2.0205 4.022 1.405 5.0258.945 6.2094.5 7.3543.1957 8.6627.1083 10.5786.0207 12.4986 0 13.1116 0 18c0 4.8885.0207 5.5015.1083 7.4214.0874 1.916.3917 3.2244.8367 4.3693.46 1.1836 1.0754 2.1875 2.076 3.1882 1.0008 1.0006 2.0047 1.616 3.1883 2.076 1.145.445 2.4534.7493 4.3693.8367 1.92.0876 2.533.1083 7.4214.1083 4.8885 0 5.5015-.0207 7.4214-.1083 1.916-.0874 3.2244-.3917 4.3693-.8366 1.1836-.46 2.1875-1.0754 3.1882-2.076 1.0006-1.0008 1.616-2.0047 2.076-3.1883.445-1.145.7493-2.4534.8367-4.3693.0876-1.92.1083-2.533.1083-7.4214 0-4.8885-.0207-5.5015-.1083-7.4214-.0874-1.916-.3917-3.2244-.8366-4.3693-.46-1.1836-1.0754-2.1875-2.076-3.1882-1.0008-1.0006-2.0047-1.616-3.1883-2.076C28.6457.5 27.3373.1957 25.4214.1083 23.5014.0207 22.8884 0 18 0zm0 3.2432c4.8062 0 5.3755.0184 7.2735.105 1.755.08 2.708.3733 3.3424.6198.84.3265 1.4397.7165 2.0695 1.3465.63.6298 1.02 1.2294 1.3465 2.0696.2465.6344.5398 1.5875.6198 3.3425.0866 1.898.105 2.4673.105 7.2735 0 4.8062-.0184 5.3755-.105 7.2735-.08 1.755-.3733 2.708-.6198 3.3424-.3265.84-.7165 1.4397-1.3465 2.0695-.6298.63-1.2294 1.02-2.0696 1.3465-.6344.2465-1.5875.5398-3.3425.6198-1.8977.0866-2.467.105-7.2735.105-4.8066 0-5.3757-.0184-7.2735-.105-1.755-.08-2.708-.3733-3.3424-.6198-.84-.3265-1.4397-.7165-2.0695-1.3465-.63-.6298-1.02-1.2294-1.3465-2.0696-.2465-.6344-.5398-1.5875-.6198-3.3425-.0866-1.898-.105-2.4673-.105-7.2735 0-4.8062.0184-5.3755.105-7.2735.08-1.755.3733-2.708.6198-3.3424.3265-.84.7165-1.4397 1.3465-2.0695.6298-.63 1.2294-1.02 2.0696-1.3465.6344-.2465 1.5875-.5398 3.3425-.6198 1.898-.0866 2.4673-.105 7.2735-.105zm-.1297 5.4098c-5.0843 0-9.206 4.1216-9.206 9.206 0 5.0843 4.1217 9.206 9.206 9.206s9.206-4.1217 9.206-9.206c0-5.0844-4.1217-9.206-9.206-9.206zm0 15.1817c-3.3003 0-5.9758-2.6754-5.9758-5.9757 0-3.3004 2.6755-5.9758 5.9758-5.9758 3.3003 0 5.9758 2.6754 5.9758 5.9758 0 3.3003-2.6754 5.9757-5.9757 5.9757zM29.7838 8.3823c0-1.1963-.9698-2.166-2.166-2.166-1.1963 0-2.1662.9697-2.1662 2.166s.97 2.166 2.166 2.166c1.1964 0 2.1662-.9697 2.1662-2.166z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="combarfield_P text-black">
            <a href="#" className="text-[#F04]">
              Sign-up for our newsletter{" "}
            </a>
            to be the first to know about new updates.
          </div>
        </div>
      </section>
    );
  };
  return (
    <main className="bg-[#161616]">
      <title>Orbit Explore</title>
      <Navbar2 />
      <div className="!font-SST_Light">
        <Navbar />
      </div>
      <div className="mt-32">
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Column_sec />
        <Row_sec />
        <Sec4 />
        <Sec5 />
        <section className="fixed_bg pt-5">
          <div className="mx-auto mb-10 min-h-40  lg:flex">
            <Gradient_sec />
          </div>
          <div className="mx-auto min-h-40  lg:flex">
            <SocialMedia_sec />
          </div>
        </section>
      </div>
    </main>
  );
}
