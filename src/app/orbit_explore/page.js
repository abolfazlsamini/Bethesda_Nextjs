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
      </div>
    </main>
  );
}
