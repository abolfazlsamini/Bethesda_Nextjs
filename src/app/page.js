"use client";
import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusIcon,
} from "@heroicons/react/16/solid";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import main_pic_1_logo from "../../public/netogame/main_pic_1_logo.webp";
import main_pic_1_pc from "../../public/netogame/main_pic_1_pc.webp";
import main_pic_1_controller from "../../public/netogame/main_pic_1_controller.webp";

import main_pic_2_logo from "../../public/netogame/main_pic_2_logo.webp";
import main_pic_2_pc from "../../public/netogame/main_pic_2_pc.webp";
import main_pic_2_controller from "../../public/netogame/main_pic_2_controller.webp";

import main_pic_3_logo from "../../public/netogame/main_pic_3_logo.webp";
import main_pic_3_pc from "../../public/netogame/main_pic_3_pc.webp";
import main_pic_3_controller from "../../public/netogame/main_pic_3_controller.webp";

import main_pic_4_logo from "../../public/netogame/main_pic_4_logo.webp";
import main_pic_4_pc from "../../public/netogame/main_pic_4_pc.webp";
import main_pic_4_controller from "../../public/netogame/main_pic_4_controller.webp";

import main_pic_5_logo from "../../public/netogame/main_pic_5_logo.webp";
import main_pic_5_pc from "../../public/netogame/main_pic_5_pc.webp";
import main_pic_5_controller from "../../public/netogame/main_pic_5_controller.webp";

import main_pic_6_logo from "../../public/netogame/main_pic_6_logo.webp";
import main_pic_6_pc from "../../public/netogame/main_pic_6_pc.webp";
import main_pic_6_controller from "../../public/netogame/main_pic_6_controller.webp";

import main_pic_7_logo from "../../public/netogame/main_pic_7_logo.webp";
import main_pic_7_pc from "../../public/netogame/main_pic_7_pc.webp";
import main_pic_7_controller from "../../public/netogame/main_pic_7_controller.webp";

import main_pic_8_logo from "../../public/netogame/main_pic_8_logo.webp";
import main_pic_8_pc from "../../public/netogame/main_pic_8_pc.webp";
import main_pic_8_controller from "../../public/netogame/main_pic_8_controller.webp";

// import carousel2_pic_1 from "../../public/netogame/carousel2_pic_1.webp";
// import carousel2_pic_2 from "../../public/netogame/carousel2_pic_2.webp";
// import carousel2_pic_3 from "../../public/netogame/carousel2_pic_3.webp";
// import carousel2_pic_4 from "../../public/netogame/carousel2_pic_4.webp";
// import carousel2_pic_5 from "../../public/netogame/carousel2_pic_5.webp";

import carousel_2_pic_1 from "../../public/netogame/carousel_2_pic_1.webp";
import carousel_2_pic_2 from "../../public/netogame/carousel_2_pic_2.webp";
import carousel_2_pic_3 from "../../public/netogame/carousel_2_pic_3.webp";
import carousel_2_pic_4 from "../../public/netogame/carousel_2_pic_4.webp";
import carousel_2_pic_5 from "../../public/netogame/carousel_2_pic_5.webp";
// import carousel_2_pic_6 from "../../public/netogame/carousel_2_pic_6.jpg";

import carousel3_pic_1_pc from "../../public/netogame/carousel3_pic_1_pc.webp";
import carousel3_pic_2_pc from "../../public/netogame/carousel3_pic_2_pc.webp";
import carousel3_pic_3_pc from "../../public/netogame/carousel3_pic_3_pc.webp";
import carousel3_icon from "../../public/netogame/carousel3_icon.svg";

import carousel4_pic_1 from "../../public/netogame/carousel4_pic_1.webp";
import carousel4_logo_1 from "../../public/netogame/carousel4_logo_1.webp";
import carousel4_pic_2 from "../../public/netogame/carousel4_pic_2.webp";
import carousel4_logo_2 from "../../public/netogame/carousel4_logo_2.webp";
import carousel4_pic_3 from "../../public/netogame/carousel4_pic_3.webp";
import carousel4_logo_3 from "../../public/netogame/carousel4_logo_3.webp";
import carousel4_pic_4 from "../../public/netogame/carousel4_pic_4.webp";
import carousel4_logo_4 from "../../public/netogame/carousel4_logo_4.webp";
import carousel4_pic_5 from "../../public/netogame/carousel4_pic_5.webp";
import carousel4_logo_5 from "../../public/netogame/carousel4_logo_5.webp";
import carousel4_pic_6 from "../../public/netogame/carousel4_pic_6.webp";
import carousel4_logo_6 from "../../public/netogame/carousel4_logo_6.webp";

// import sec2_pc from "../../public/netogame/sec2_pc.webp";

import jiggle_1 from "../../public/netogame/jiggle_1.png";
import jiggle_2 from "../../public/netogame/jiggle_2.png";
import jiggle_3 from "../../public/netogame/jiggle_3.png";
import jiggle_4 from "../../public/netogame/jiggle_4.png";

import sec1_pc from "../../public/netogame/sec1_pic_pc.webp";

import category_pic_1 from "../../public/netogame/category_pic_1.webp";
import category_pic_2 from "../../public/netogame/category_pic_2.webp";
import category_pic_3 from "../../public/netogame/category_pic_3.webp";
import category_pic_4 from "../../public/netogame/category_pic_4.webp";
import category_pic_5 from "../../public/netogame/category_pic_5.webp";
import category_pic_6 from "../../public/netogame/category_pic_6.webp";

import carousel5_pic_1 from "../../public/netogame/carousel5_pic_1.png";
import carousel5_pic_2 from "../../public/netogame/carousel5_pic_2.png";
import carousel5_pic_3 from "../../public/netogame/carousel5_pic_3.png";
import carousel5_pic_4 from "../../public/netogame/carousel5_pic_4.png";
import carousel5_pic_5 from "../../public/netogame/carousel5_pic_5.png";

import x from "../../public/netogame/X.png";
import Ticktok from "../../public/netogame/Tiktok.png";
import TEl from "../../public/netogame/TEl.png";
import Discord from "../../public/netogame/Discord.png";
import yt from "../../public/netogame/YT.png";
import Facebook from "../../public/netogame/Facebook.png";
import Insta from "../../public/netogame/Insta.png";

import { useEffect, useRef, useState } from "react";
import Navbar2 from "./navbar2";
import Navbar from "./navbar";

const Main_sec = () => {
  const controller_ref = useRef();
  const ref = useRef();

  const [index, setIndex] = useState(1);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "1px",
    slidesToShow: 1,
    speed: 300,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    arrows: false,

    beforeChange: (oldIndex, newIndex) => {
      setIndex(newIndex + 1);
    },
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "160px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "260px",
        },
      },
    ],
  };
  return (
    <section>
      <div className="">
        <div>
          <div>
            <div className={index === 1 ? "relative" : "hidden"}>
              <div className="relative max-h-[40vh] overflow-hidden sm:max-h-max">
                <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div>
                <div className="netogame_gradientMainimage_pc absolute bottom-0 z-10 hidden h-full w-full lg:block"></div>
                <picture>
                  <source
                    srcSet="./netogame/main_pic_1_mobile.webp"
                    media="(max-width:1023.95px)"
                  ></source>
                  <source
                    srcSet="./netogame/main_pic_1_pc.webp"
                    media="(min-width:1024px)"
                  ></source>

                  <Image
                    placeholder="blur"
                    priority
                    src={main_pic_1_pc}
                    width={0}
                    height={0}
                    alt=""
                    className="object-cover"
                  />
                </picture>
              </div>
              <div className="netogame_appear_animation z-20 flex flex-col items-center bg-[#1f1f1f] px-5 text-center text-white lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
                <Image
                  src={main_pic_1_logo}
                  width={0}
                  height={0}
                  alt=""
                  className="netogame_appear_animation_mobile w-2/3 lg:w-40 xl:w-full"
                />
                <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:block">
                  From the depths of darkness
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 hidden lg:my-5 lg:block">
                  From the depths of darkness, heroes rise to return the God Of
                  Light to the earth . Who will you choose?
                </div>
                <div className="netogame_H1 netogame_appear_animation_mobile lg:hidden">
                  From the depths
                  <br /> of darkness
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 lg:my-5 lg:hidden">
                  From the depths of darkness, heroes rise to return the God Of
                  Light to the earth . Who will you choose?
                </div>
                <a
                  href="/mythus_arena"
                  className="netogame_appear_animation_mobile my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white"
                >
                  Find out more
                </a>
              </div>
            </div>
            <div className={index === 2 ? "relative" : "hidden"}>
              <div className="relative max-h-[40vh] overflow-hidden sm:max-h-max">
                <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div>
                <div className="netogame_gradientMainimage_pc absolute bottom-0 z-10 hidden h-full w-full lg:block"></div>
                <picture>
                  <source
                    srcSet="./netogame/main_pic_2_mobile.webp"
                    media="(max-width:1023.95px)"
                  ></source>
                  <source
                    srcSet="./netogame/main_pic_2_pc.webp"
                    media="(min-width:1024px)"
                  ></source>

                  <Image
                    placeholder="blur"
                    priority
                    src={main_pic_2_pc}
                    width={0}
                    height={0}
                    alt=""
                    className="object-cover"
                  />
                </picture>
              </div>
              <div className="netogame_appear_animation z-20 flex flex-col items-center bg-[#1f1f1f] px-5 text-center text-white lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
                <Image
                  src={main_pic_2_logo}
                  width={0}
                  height={0}
                  alt=""
                  className="netogame_appear_animation_mobile w-2/3 lg:w-40 xl:w-full"
                />
                <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:block">
                  Are you ready for real death ?
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 hidden lg:my-5 lg:block">
                  In Orbit Explore, experience the thrill of getting hit, kill
                  your enemies, and enjoy an immersive VR game
                </div>
                <div className="netogame_H1 netogame_appear_animation_mobile lg:hidden">
                  Are you ready <br /> for real death ?
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 lg:my-5 lg:hidden">
                  In Orbit Explore, experience the thrill <br /> of getting hit,
                  kill your enemies, <br /> and enjoy an immersive VR game
                </div>
                <a
                  href="/orbit_explore"
                  className="netogame_appear_animation_mobile my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white"
                >
                  Find out more
                </a>
              </div>
            </div>
            <div className={index === 3 ? "relative" : "hidden"}>
              <div className="relative max-h-[40vh] overflow-hidden sm:max-h-max">
                <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div>
                <div className="netogame_gradientMainimage_pc absolute bottom-0 z-10 hidden h-full w-full lg:block"></div>
                <picture>
                  <source
                    srcSet="./netogame/main_pic_3_mobile.webp"
                    media="(max-width:1023.95px)"
                  ></source>
                  <source
                    srcSet="./netogame/main_pic_3_pc.webp"
                    media="(min-width:1024px)"
                  ></source>

                  <Image
                    placeholder="blur"
                    priority
                    src={main_pic_3_pc}
                    width={0}
                    height={0}
                    alt=""
                    className="object-cover"
                  />
                </picture>
              </div>
              <div className="netogame_appear_animation z-20 flex flex-col items-center bg-[#1f1f1f] px-5 text-center text-white lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
                <Image
                  src={main_pic_3_logo}
                  width={0}
                  height={0}
                  alt=""
                  className="netogame_appear_animation_mobile w-2/3 lg:w-40 xl:w-full"
                />
                <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:block">
                  Join the crew of the NetoBall
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 hidden lg:my-5 lg:block">
                  Experience the thrill of high-flying action and intense
                  competition in the ultimate head-to-head soccer showdown
                </div>
                <div className="netogame_H1 netogame_appear_animation_mobile lg:hidden">
                  Join the crew of <br /> the NetoBall
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 lg:my-5 lg:hidden">
                  Experience the thrill of high-flying <br /> action and intense
                  competition in the ultimate <br />
                  head-to-head soccer showdown
                </div>
                <a
                  href="/netoball"
                  className="netogame_appear_animation_mobile my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white"
                >
                  Find out more
                </a>
              </div>
            </div>
            <div className={index === 4 ? "relative" : "hidden"}>
              <div className="relative max-h-[40vh] overflow-hidden sm:max-h-max">
                <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div>
                <div className="netogame_gradientMainimage_pc absolute bottom-0 z-10 hidden h-full w-full lg:block"></div>
                <picture>
                  <source
                    srcSet="./netogame/main_pic_4_mobile.webp"
                    media="(max-width:1023.95px)"
                  ></source>
                  <source
                    srcSet="./netogame/main_pic_4_pc.webp"
                    media="(min-width:1024px)"
                  ></source>

                  <Image
                    placeholder="blur"
                    priority
                    src={main_pic_4_pc}
                    width={0}
                    height={0}
                    alt=""
                    className="object-cover"
                  />
                </picture>
              </div>
              <div className="netogame_appear_animation z-20 flex flex-col items-center bg-[#1f1f1f] px-5 text-center text-white lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
                <Image
                  src={main_pic_4_logo}
                  width={0}
                  height={0}
                  alt=""
                  className="netogame_appear_animation_mobile w-2/3 lg:w-40 xl:w-full"
                />
                <div className="netogame_H1 netogame_appear_animation_mobile textEllipsis2line">
                  Create Chaos in CombatField ™ Upheaval
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 lg:my-5">
                  Join the ultimate battle royale, where strategy, skill, and
                  teamwork determine your path to legendary victory
                </div>
                <a
                  href="/combatfield"
                  className="netogame_appear_animation_mobile my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white"
                >
                  Find out more
                </a>
              </div>
            </div>
            <div className={index === 5 ? "relative" : "hidden"}>
              <div className="relative max-h-[40vh] overflow-hidden sm:max-h-max">
                <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div>
                <div className="netogame_gradientMainimage_pc absolute bottom-0 z-10 hidden h-full w-full lg:block"></div>
                <picture>
                  <source
                    srcSet="./netogame/main_pic_5_mobile.webp"
                    media="(max-width:1023.95px)"
                  ></source>
                  <source
                    srcSet="./netogame/main_pic_5_pc.webp"
                    media="(min-width:1024px)"
                  ></source>

                  <Image
                    placeholder="blur"
                    priority
                    src={main_pic_5_pc}
                    width={0}
                    height={0}
                    alt=""
                    className="object-cover"
                  />
                </picture>
              </div>
              <div className="netogame_appear_animation z-20 flex flex-col items-center bg-[#1f1f1f] px-5 text-center text-white lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
                <Image
                  src={main_pic_5_logo}
                  width={0}
                  height={0}
                  alt=""
                  className="netogame_appear_animation_mobile w-2/3 lg:w-40 xl:w-full"
                />
                <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:block">
                  Welcome to the new Basketball
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 hidden lg:my-5 lg:block">
                  Step onto the court and dominate with skill, strategy, and
                  style in the Hoops Heat
                </div>
                <div className="netogame_H1 netogame_appear_animation_mobile lg:hidden">
                  Welcome to the <br /> new Basketball
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 lg:my-5 lg:hidden">
                  Step onto the court and <br />
                  dominate with skill, strategy, and
                  <br />
                  style in the Hoops Heat
                </div>
                <a className="netogame_appear_animation_mobile my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white">
                  Find out more
                </a>
              </div>
            </div>
            <div className={index === 6 ? "relative" : "hidden"}>
              <div className="relative max-h-[40vh] overflow-hidden sm:max-h-max">
                <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div>
                <div className="netogame_gradientMainimage_pc absolute bottom-0 z-10 hidden h-full w-full lg:block"></div>
                <picture>
                  <source
                    srcSet="./netogame/main_pic_6_mobile.webp"
                    media="(max-width:1023.95px)"
                  ></source>
                  <source
                    srcSet="./netogame/main_pic_6_pc.webp"
                    media="(min-width:1024px)"
                  ></source>

                  <Image
                    placeholder="blur"
                    priority
                    src={main_pic_6_pc}
                    width={0}
                    height={0}
                    alt=""
                    className="object-cover"
                  />
                </picture>
              </div>
              <div className="netogame_appear_animation z-20 flex flex-col items-center bg-[#1f1f1f] px-5 text-center text-white lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
                <Image
                  src={main_pic_6_logo}
                  width={0}
                  height={0}
                  alt=""
                  className="netogame_appear_animation_mobile w-2/3 lg:w-40 xl:w-full"
                />
                <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:block">
                  Darkness calls upon you
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 hidden lg:my-5 lg:block">
                  What starts as a small-town murder investigation becomes a
                  living nightmare
                </div>
                <div className="netogame_H1 netogame_appear_animation_mobile lg:hidden">
                  Darkness calls <br />
                  upon you
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 lg:my-5 lg:hidden">
                  What starts as a small-town
                  <br /> murder investigation becomes a<br />
                  living nightmare
                </div>
                <a className="netogame_appear_animation_mobile my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white">
                  Find out more
                </a>
              </div>
            </div>
            <div className={index === 7 ? "relative" : "hidden"}>
              <div className="relative max-h-[40vh] overflow-hidden sm:max-h-max">
                <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div>
                <div className="netogame_gradientMainimage_pc absolute bottom-0 z-10 hidden h-full w-full lg:block"></div>
                <picture>
                  <source
                    srcSet="./netogame/main_pic_7_mobile.webp"
                    media="(max-width:1023.95px)"
                  ></source>
                  <source
                    srcSet="./netogame/main_pic_7_pc.webp"
                    media="(min-width:1024px)"
                  ></source>

                  <Image
                    placeholder="blur"
                    priority
                    src={main_pic_7_pc}
                    width={0}
                    height={0}
                    alt=""
                    className="object-cover"
                  />
                </picture>
              </div>
              <div className="netogame_appear_animation z-20 flex flex-col items-center bg-[#1f1f1f] px-5 text-center text-white lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
                <Image
                  src={main_pic_7_logo}
                  width={0}
                  height={0}
                  alt=""
                  className="netogame_appear_animation_mobile w-2/3 lg:w-40 xl:w-full"
                />
                <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:block">
                  New savings on NetoGame Store
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 hidden lg:my-5 lg:block">
                  Explore the latest discounts and seasonal sales on new games
                  and accessories
                </div>
                <div className="netogame_H1 netogame_appear_animation_mobile lg:hidden">
                  New savings on
                  <br /> NetoGame Store
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 lg:my-5 lg:hidden">
                  Explore the latest discounts
                  <br /> and seasonal sales on
                  <br /> new games and accessories
                </div>
                <a className="netogame_appear_animation_mobile my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white">
                  Find out more
                </a>
              </div>
            </div>
            <div className={index === 8 ? "relative" : "hidden"}>
              <div className="relative max-h-[40vh] overflow-hidden sm:max-h-max">
                <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div>
                <div className="netogame_gradientMainimage_pc absolute bottom-0 z-10 hidden h-full w-full lg:block"></div>
                <picture>
                  <source
                    srcSet="./netogame/main_pic_8_mobile.webp"
                    media="(max-width:1023.95px)"
                  ></source>
                  <source
                    srcSet="./netogame/main_pic_8_pc.webp"
                    media="(min-width:1024px)"
                  ></source>

                  <Image
                    placeholder="blur"
                    priority
                    src={main_pic_8_pc}
                    width={0}
                    height={0}
                    alt=""
                    className="object-cover"
                  />
                </picture>
              </div>
              <div className="netogame_appear_animation z-20 flex flex-col items-center bg-[#1f1f1f] px-5 text-center text-white lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
                <Image
                  src={main_pic_8_logo}
                  width={0}
                  height={0}
                  alt=""
                  className="netogame_appear_animation_mobile w-2/3 lg:w-40 xl:w-full"
                />
                <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:block">
                  Discover Neto PlayFusion
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 hidden lg:my-5 lg:block">
                  By having a Neto PlayFusion account, you can benefit from
                  special services
                </div>
                <div className="netogame_H1 netogame_appear_animation_mobile lg:hidden">
                  Discover <br />
                  Neto PlayFusion
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 lg:my-5 lg:hidden">
                  By having a Neto PlayFusion account,
                  <br /> you can benefit from
                  <br />
                  special services
                </div>
                <a className="netogame_appear_animation_mobile my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white">
                  Find out more
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:px-6">
            <div className="main_small_image_container relative flex max-h-52 snap-x snap-mandatory overflow-x-auto overflow-y-hidden py-6 lg:overflow-hidden">
              <Image
                placeholder="blur"
                onClick={() => {
                  setIndex(1);
                }}
                className={
                  index === 1
                    ? "main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl p-1 outline-none outline-2 outline-offset-0 outline-blue-600 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                    : "main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 opacity-70 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                }
                src={main_pic_1_controller}
                width={0}
                height={0}
                alt=""
              />
              <Image
                placeholder="blur"
                onClick={() => {
                  setIndex(2);
                }}
                className={
                  index === 2
                    ? "main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl p-1 outline-none outline-2 outline-offset-0 outline-blue-600 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                    : "main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 opacity-70 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                }
                src={main_pic_2_controller}
                width={0}
                height={0}
                alt=""
              />
              <Image
                placeholder="blur"
                onClick={() => {
                  setIndex(3);
                }}
                className={
                  index === 3
                    ? "main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl p-1 outline-none outline-2 outline-offset-0 outline-blue-600 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                    : "main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 opacity-70 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                }
                src={main_pic_3_controller}
                width={0}
                height={0}
                alt=""
              />
              <Image
                placeholder="blur"
                onClick={() => {
                  setIndex(4);
                }}
                className={
                  index === 4
                    ? "main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl p-1 outline-none outline-2 outline-offset-0 outline-blue-600 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                    : "main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 opacity-70 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                }
                src={main_pic_4_controller}
                width={0}
                height={0}
                alt=""
              />
              <Image
                placeholder="blur"
                onClick={() => {
                  setIndex(5);
                }}
                className={
                  index === 5
                    ? "main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl p-1 outline-none outline-2 outline-offset-0 outline-blue-600 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                    : "main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 opacity-70 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                }
                src={main_pic_5_controller}
                width={0}
                height={0}
                alt=""
              />
              <Image
                placeholder="blur"
                onClick={() => {
                  setIndex(6);
                }}
                className={
                  index === 6
                    ? "main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl p-1 outline-none outline-2 outline-offset-0 outline-blue-600 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                    : "main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 opacity-70 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                }
                src={main_pic_6_controller}
                width={0}
                height={0}
                alt=""
              />
              <Image
                placeholder="blur"
                onClick={() => {
                  setIndex(7);
                }}
                className={
                  index === 7
                    ? "main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl p-1 outline-none outline-2 outline-offset-0 outline-blue-600 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                    : "main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 opacity-70 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                }
                src={main_pic_7_controller}
                width={0}
                height={0}
                alt=""
              />
              <Image
                placeholder="blur"
                onClick={() => {
                  setIndex(8);
                }}
                className={
                  index === 8
                    ? "main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl p-1 outline-none outline-2 outline-offset-0 outline-blue-600 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                    : "main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 opacity-70 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                }
                src={main_pic_8_controller}
                width={0}
                height={0}
                alt=""
              />

              {/* <div className="opacityhover absolute top-0 h-full max-h-0 w-full bg-white opacity-0 transition-opacity duration-300"></div> */}
            </div>
          </div>
          <div className="block py-5 lg:hidden">
            <Slider {...settings} ref={ref}>
              <Image
                onClick={() => {
                  // setIndex(1);
                  if (index === 8) ref.current.slickGoTo(9);
                  else ref.current.slickGoTo(0);
                }}
                placeholder="blur"
                className="main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                src={main_pic_1_controller}
                width={0}
                height={0}
                alt=""
              />
              <Image
                onClick={() => {
                  // setIndex(2);
                  ref.current.slickGoTo(1);
                }}
                placeholder="blur"
                className="main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                src={main_pic_2_controller}
                width={0}
                height={0}
                alt=""
              />
              <Image
                onClick={() => {
                  // setIndex(3);
                  ref.current.slickGoTo(2);
                }}
                placeholder="blur"
                className="main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                src={main_pic_3_controller}
                width={0}
                height={0}
                alt=""
              />
              <Image
                onClick={() => {
                  // setIndex(4);
                  ref.current.slickGoTo(3);
                }}
                placeholder="blur"
                className="main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                src={main_pic_4_controller}
                width={0}
                height={0}
                alt=""
              />
              <Image
                onClick={() => {
                  // setIndex(5);
                  ref.current.slickGoTo(4);
                }}
                placeholder="blur"
                className="main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                src={main_pic_5_controller}
                width={0}
                height={0}
                alt=""
              />
              <Image
                onClick={() => {
                  // setIndex(6);
                  ref.current.slickGoTo(5);
                }}
                placeholder="blur"
                className="main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                src={main_pic_6_controller}
                width={0}
                height={0}
                alt=""
              />
              <Image
                onClick={() => {
                  // setIndex(7);
                  ref.current.slickGoTo(6);
                }}
                placeholder="blur"
                className="main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                src={main_pic_7_controller}
                width={0}
                height={0}
                alt=""
              />
              <Image
                onClick={() => {
                  // setIndex(8);
                  if (index === 1) ref.current.slickGoTo(-1);
                  else ref.current.slickGoTo(7);
                }}
                placeholder="blur"
                className="main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                src={main_pic_8_controller}
                width={0}
                height={0}
                alt=""
              />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
const Category_sec = () => {
  const [selectedCategoty, setSelectedCategory] = useState("all");
  function inCategoty(list) {
    const found = list.find(
      (category) => selectedCategoty === category || selectedCategoty === "all",
    );
    if (found) return true;
    return false;
  }
  return (
    <section>
      <div className="bg-[#121314] py-10">
        <div className="netogame_H1 p-10 text-center text-2xl lg:text-4xl">
          Great PS4 & PS5 games out now or coming soon
        </div>
        <div className="min-h-[55vh] lg:h-[66vh]">
          <div className="mx-auto flex w-max flex-wrap-reverse rounded-3xl bg-[#1c1d21] text-xs text-black sm:text-sm lg:text-base">
            <div
              onClick={() => setSelectedCategory("all")}
              className={
                selectedCategoty === "all"
                  ? "cursor-pointer rounded-3xl bg-white px-4 py-2 transition-all duration-200 lg:mx-1"
                  : "cursor-pointer rounded-3xl px-2 py-2 text-white transition-all duration-200 hover:text-blue-600 lg:mx-1"
              }
            >
              All
            </div>
            <div
              onClick={() => setSelectedCategory("console")}
              className={
                selectedCategoty === "console"
                  ? "cursor-pointer rounded-3xl bg-white px-4 py-2 transition-all duration-200 lg:mx-1"
                  : "cursor-pointer rounded-3xl px-2 py-2 text-white transition-all duration-200 hover:text-blue-600 lg:mx-1"
              }
            >
              Console
            </div>
            <div
              onClick={() => setSelectedCategory("mobile")}
              className={
                selectedCategoty === "mobile"
                  ? "cursor-pointer rounded-3xl bg-white px-4 py-2 transition-all duration-200 lg:mx-1"
                  : "cursor-pointer rounded-3xl px-2 py-2 text-white transition-all duration-200 hover:text-blue-600 lg:mx-1"
              }
            >
              Mobile
            </div>
            <div
              onClick={() => setSelectedCategory("netogear")}
              className={
                selectedCategoty === "netogear"
                  ? "cursor-pointer rounded-3xl bg-white px-4 py-2 transition-all duration-200 lg:mx-1"
                  : "cursor-pointer rounded-3xl px-2 py-2 text-white transition-all duration-200 hover:text-blue-600 lg:mx-1"
              }
            >
              Neto Gear
            </div>
            <div
              onClick={() => setSelectedCategory("netovr")}
              className={
                selectedCategoty === "netovr"
                  ? "cursor-pointer rounded-3xl bg-white px-4 py-2 transition-all duration-200 lg:mx-1"
                  : "cursor-pointer rounded-3xl px-2 py-2 text-white transition-all duration-200 hover:text-blue-600 lg:mx-1"
              }
            >
              Neto VR
            </div>
            <div
              onClick={() => setSelectedCategory("cloud")}
              className={
                selectedCategoty === "cloud"
                  ? "cursor-pointer rounded-3xl bg-white px-4 py-2 transition-all duration-200 lg:mx-1"
                  : "cursor-pointer rounded-3xl px-2 py-2 text-white transition-all duration-200 hover:text-blue-600 lg:mx-1"
              }
            >
              Cloud
            </div>
          </div>
          <div className="relative overflow-hidden px-5 py-8">
            <div className="category_container z-10 mx-auto flex flex-wrap xl:w-max">
              <a
                href="/netoball"
                className={
                  inCategoty(["console", "mobile", "netogear"])
                    ? "main_small_image duration-50 max-w-[29vw] cursor-pointer overflow-hidden rounded-md p-1 transition-transform hover:z-10 lg:max-w-[15.7vw] xl:max-w-[15.7vw] hover:[&_.carouselimg]:scale-105"
                    : "hidden"
                }
              >
                <Image
                  placeholder="blur"
                  src={category_pic_1}
                  width={0}
                  height={0}
                  alt=""
                  className="carouselimg mx-auto h-[17vh] cursor-pointer rounded-md object-cover lg:h-[25vh]"
                />
                <div className="ml-1">Neto Ball</div>
              </a>
              <a
                href="/mythus_arena"
                className={
                  inCategoty(["console", "mobile"])
                    ? "main_small_image duration-50 max-w-[29vw] cursor-pointer overflow-hidden rounded-md p-1 transition-transform hover:z-10 lg:max-w-[15.7vw] xl:max-w-[15.7vw] hover:[&_.carouselimg]:scale-105"
                    : "hidden"
                }
              >
                <Image
                  placeholder="blur"
                  src={category_pic_2}
                  width={0}
                  height={0}
                  alt=""
                  className="carouselimg mx-auto h-[17vh] cursor-pointer rounded-md object-cover lg:h-[25vh]"
                />
                <div className="ml-1">Mythus Arena</div>
              </a>
              <a
                href="/orbit_explore"
                className={
                  inCategoty(["netovr"])
                    ? "main_small_image duration-50 max-w-[29vw] cursor-pointer overflow-hidden rounded-md p-1 transition-transform hover:z-10 lg:max-w-[15.7vw] xl:max-w-[15.7vw] hover:[&_.carouselimg]:scale-105"
                    : "hidden"
                }
              >
                <Image
                  placeholder="blur"
                  src={category_pic_3}
                  width={0}
                  height={0}
                  alt=""
                  className="carouselimg mx-auto h-[17vh] cursor-pointer rounded-md object-cover lg:h-[25vh]"
                />
                <div className="ml-1">Orbit Explore</div>
              </a>
              <a
                href="/combatfield"
                className={
                  inCategoty(["console", "netogear"])
                    ? "main_small_image duration-50 max-w-[29vw] cursor-pointer overflow-hidden rounded-md p-1 transition-transform hover:z-10 lg:max-w-[15.7vw] xl:max-w-[15.7vw] hover:[&_.carouselimg]:scale-105"
                    : "hidden"
                }
              >
                <Image
                  placeholder="blur"
                  src={category_pic_4}
                  width={0}
                  height={0}
                  alt=""
                  className="carouselimg mx-auto h-[17vh] cursor-pointer rounded-md object-cover lg:h-[25vh]"
                />
                <div className="ml-1">CombatField</div>
              </a>
              <div
                className={
                  inCategoty(["mobile"])
                    ? "main_small_image duration-50 max-w-[29vw] cursor-pointer overflow-hidden rounded-md p-1 transition-transform hover:z-10 lg:max-w-[15.7vw] xl:max-w-[15.7vw] hover:[&_.carouselimg]:scale-105"
                    : "hidden"
                }
              >
                <Image
                  placeholder="blur"
                  src={category_pic_5}
                  width={0}
                  height={0}
                  alt=""
                  className="carouselimg mx-auto h-[17vh] cursor-pointer rounded-md object-cover lg:h-[25vh]"
                />
                <div className="ml-1">Hoops Heat</div>
              </div>
              <div
                className={
                  inCategoty(["console", "cloud"])
                    ? "main_small_image duration-50 max-w-[29vw] cursor-pointer overflow-hidden rounded-md p-1 transition-transform hover:z-10 lg:max-w-[15.7vw] xl:max-w-[15.7vw] hover:[&_.carouselimg]:scale-105"
                    : "hidden"
                }
              >
                <Image
                  placeholder="blur"
                  src={category_pic_6}
                  width={0}
                  height={0}
                  alt=""
                  className="carouselimg mx-auto h-[17vh] cursor-pointer rounded-md object-cover lg:h-[25vh]"
                />
                <div className="ml-1">Life Elevated</div>
              </div>

              {/* <div className="opacityhover absolute top-0 h-full max-h-0 w-full bg-[#1c1d21] opacity-0 transition-opacity duration-300"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Carousel_3 = () => {
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
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "130px",
    slidesToShow: 1,
    // variableWidth: true,
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
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section>
      <div>
        <Image
          src={carousel3_icon}
          width={0}
          height={0}
          alt=""
          className="mx-auto h-auto w-1/2 lg:w-1/5"
        />
        <div className="netogame_H1 p-10 py-7 text-center font-FuturaNowHeadlineBlack text-2xl uppercase text-white lg:text-4xl xl:text-5xl">
          Discover Neto PlayFusion
        </div>
        <div className="netogame_P mb-7 px-10 text-center text-sm text-white lg:px-20 xl:text-lg">
          By having a Neto PlayFusion account, you can benefit from special
          services
        </div>
        <div className="">
          <div className="slider-container relative w-full">
            <Slider {...settings}>
              <div className="w-full">
                <div className="relative mx-2 h-full cursor-pointer overflow-hidden rounded-xl">
                  <div className="netogame_gradientcarousel2 absolute bottom-24 z-10 h-1/2 w-full lg:hidden"></div>
                  <picture>
                    <source
                      srcSet="./netogame/carousel3_pic_1_mobile.webp"
                      media="(max-width:1023.95px)"
                    ></source>
                    <source
                      srcSet="./netogame/carousel3_pic_1_pc.webp"
                      media="(min-width:1024px)"
                    ></source>

                    <Image
                      placeholder="blur"
                      src={carousel3_pic_1_pc}
                      width={0}
                      height={0}
                      alt=""
                      className="h-auto w-full"
                    />
                  </picture>
                  <div className="relative h-24 bg-black lg:hidden">
                    <div className="absolute -top-3 z-10 pl-4">
                      <a className="my-2 border border-white/30 bg-white px-8 text-xs uppercase text-[#333333] xl:text-xl">
                        PREMIUM
                      </a>
                      <div className="netogame_H2 xl:text-4xl">
                        Neto PlayFusion Premium
                      </div>
                      <div className="netogame_H3 mt-1 lg:text-lg">
                        Online Multiplayer for NetoGear Console , NetoStore
                        Discound
                      </div>
                    </div>
                  </div>

                  <div className="netogame_gradientMainimage_pc absolute top-0 z-10 hidden h-full w-1/2 flex-col justify-center pb-10 pl-4 lg:flex">
                    <a className="my-2 w-max border border-white/30 bg-white px-8 text-xs uppercase text-[#333333] xl:text-xl">
                      PREMIUM
                    </a>
                    <div className="netogame_H2 my-2 xl:my-5 xl:text-4xl">
                      Neto PlayFusion Premium
                    </div>
                    <div className="netogame_H3 mt-1 lg:text-lg">
                      Online Multiplayer for NetoGear Console , NetoStore
                      Discound
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="relative mx-2 h-full cursor-pointer overflow-hidden rounded-xl">
                  <div className="netogame_gradientcarousel2 absolute bottom-24 z-10 h-1/2 w-full lg:hidden"></div>
                  <picture>
                    <source
                      srcSet="./netogame/carousel3_pic_2_mobile.webp"
                      media="(max-width:1023.95px)"
                    ></source>
                    <source
                      srcSet="./netogame/carousel3_pic_2_pc.webp"
                      media="(min-width:1024px)"
                    ></source>

                    <Image
                      placeholder="blur"
                      src={carousel3_pic_2_pc}
                      width={0}
                      height={0}
                      alt=""
                      className="h-auto w-full"
                    />
                  </picture>
                  <div className="relative h-24 bg-black lg:hidden">
                    <div className="absolute -top-3 z-10 pl-4">
                      <a className="my-2 border border-white/30 bg-[#333333] px-8 text-xs uppercase text-[#fdc100] xl:text-xl">
                        ELITE
                      </a>
                      <div className="netogame_H2 xl:text-4xl">
                        Neto PlayFusion ELITE
                      </div>
                      <div className="netogame_H3 mt-1 lg:text-lg">
                        Online Multiplayer for NetoGear Console , NetoStore
                        Discound , Early Access to unreleased Games
                      </div>
                    </div>
                  </div>

                  <div className="netogame_gradientMainimage_pc absolute top-0 z-10 hidden h-full w-1/2 flex-col justify-center pb-10 pl-4 lg:flex">
                    <a className="my-2 w-max border border-white/30 bg-[#333333] px-8 text-xs uppercase text-[#fdc100] xl:text-xl">
                      ELITE
                    </a>
                    <div className="netogame_H2 my-2 xl:my-5 xl:text-4xl">
                      Neto PlayFusion ELITE
                    </div>
                    <div className="netogame_H3 mt-1 lg:text-lg">
                      Online Multiplayer for NetoGear Console , NetoStore
                      Discound , Early Access to unreleased Games
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="relative mx-2 h-full cursor-pointer overflow-hidden rounded-xl">
                  <div className="netogame_gradientcarousel2 absolute bottom-24 z-10 h-1/2 w-full lg:hidden"></div>
                  <picture>
                    <source
                      srcSet="./netogame/carousel3_pic_3_mobile.webp"
                      media="(max-width:1023.95px)"
                    ></source>
                    <source
                      srcSet="./netogame/carousel3_pic_3_pc.webp"
                      media="(min-width:1024px)"
                    ></source>

                    <Image
                      placeholder="blur"
                      src={carousel3_pic_3_pc}
                      width={0}
                      height={0}
                      alt=""
                      className="h-auto w-full"
                    />
                  </picture>
                  <div className="relative h-24 bg-black lg:hidden">
                    <div className="absolute -top-3 z-10 pl-4">
                      <a className="my-2 border border-white/30 bg-[#fdc100] px-8 text-xs uppercase text-[#333333] xl:text-xl">
                        ULTIMATE
                      </a>
                      <div className="netogame_H2 xl:text-4xl">
                        Neto PlayFusion Ultimate
                      </div>
                      <div className="netogame_H3 mt-1 lg:text-lg">
                        Online Multiplayer for NetoGear Console , NetoStore
                        Discound , Early Access to unreleased Games , increase
                        earning in crypto game
                      </div>
                    </div>
                  </div>

                  <div className="netogame_gradientMainimage_pc absolute top-0 z-10 hidden h-full w-1/2 flex-col justify-center pb-10 pl-4 lg:flex">
                    <a className="my-2 w-max border border-white/30 bg-[#fdc100] px-8 text-xs uppercase text-[#333333] xl:text-xl">
                      ULTIMATE
                    </a>
                    <div className="netogame_H2 my-2 xl:my-5 xl:text-4xl">
                      Neto PlayFusion Ultimate
                    </div>
                    <div className="netogame_H3 mt-1 lg:text-lg">
                      Online Multiplayer for NetoGear Console , NetoStore
                      Discound , Early Access to unreleased Games , increase
                      earning in crypto game
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="flex pt-16">
          <a className="mx-auto my-6 cursor-pointer rounded-2xl bg-[#0068bd] px-3 py-2 font-SST_Bold text-sm font-bold text-white outline-none outline-2 delay-75 hover:bg-[#0064b7] hover:outline-offset-2 hover:outline-[#0068bd] xl:text-lg">
            Find out more
          </a>
        </div>
      </div>
    </section>
  );
};
// const Carousel_2 = () => {
//   const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
//   const ref = useRef();
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <ChevronLeftIcon
//         className="absolute left-5 top-1/2 z-10 hidden size-9 -translate-y-1/2 cursor-pointer rounded-full bg-blue-700 text-white lg:block"
//         onClick={onClick}
//       />
//     );
//   }
//   function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <ChevronRightIcon
//         className="absolute right-5 top-1/2 z-10 hidden size-9 -translate-y-1/2 cursor-pointer rounded-full bg-blue-700 text-white lg:block"
//         onClick={onClick}
//       />
//     );
//   }
//   console.log(currentSlideNumber);
//   const settings = {
//     className: "",
//     centerMode: false,
//     infinite: true,
//     swipeToSlide: false,
//     centerPadding: "900px",
//     slidesToShow: 2,
//     speed: 300,
//     dots: true,
//     prevArrow: <SamplePrevArrow />,
//     nextArrow: <SampleNextArrow />,
//     customPaging: (i) => (
//       <MinusIcon
//         className={
//           i === currentSlideNumber ? "h-8 text-blue-500" : "h-8 text-gray-500"
//         }
//       />
//     ),
//     beforeChange: (oldIndex, newIndex) => {
//       if (newIndex > 4 || newIndex < 0) {
//         ref.current.slickGoTo(0);
//         setCurrentSlideNumber(0);
//       } else {
//         setCurrentSlideNumber(newIndex);
//       }
//     },
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           centerPadding: "10px",
//           slidesToShow: 2,

//           centerMode: false,
//           swipeToSlide: false,
//         },
//       },
//       {
//         breakpoint: 1280,
//         settings: {
//           dots: false,
//           centerPadding: "10px",
//           slidesToShow: 2,
//           className: "center",
//           centerMode: false,
//         },
//       },
//       {
//         breakpoint: 4048,
//         settings: {
//           dots: false,
//           centerPadding: "400px",
//           padding: "400px",
//           slidesToShow: 5,
//           className: "center",
//           infinite: true,
//           centerMode: false,
//           swipeToSlide: false,
//         },
//       },
//     ],
//   };
//   return (
//     <section>
//       <div className="netogame_H1 px-10 pt-20 text-center text-2xl text-black lg:hidden">
//         Introducing the Neto Game console and accessories
//       </div>

//       <div className="flex flex-col-reverse py-20 text-black lg:flex-col">
//         <div className="sm:pb-20 xl:py-0">
//           <div className={currentSlideNumber === 0 ? "relative" : "hidden"}>
//             <div className="relative">
//               <Image
//                 placeholder="blur"
//                 src={carousel2_pic_1}
//                 width={0}
//                 height={0}
//                 alt=""
//                 className="relative lg:w-1/2 lg:translate-x-full"
//               />
//             </div>
//             <div className="netogame_appear_animation z-20 flex flex-col items-center px-5 text-center text-black lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
//               <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:mb-16 lg:block">
//                 Introducing the Neto Game console and accessories
//               </div>
//               <div className="font-SST_Light text-xl text-[#0068bd] lg:text-2xl xl:text-3xl">
//                 HyperGrip Wireless Controller
//               </div>
//               <div className="netogame_p netogame_appear_animation_mobile my-5 text-sm text-[#6b6b6b] lg:mb-6">
//                 For gamers seeking complete mastery, HyperGrip is the only
//                 choice. Your hands deserve the best , choose HyperGrip !
//               </div>
//               <div>
//                 <a className="netogame_appear_animation_mobile my-6 mr-1 cursor-pointer rounded-3xl bg-blue-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-blue-700 hover:outline-offset-2 hover:outline-blue-500">
//                   Find out more
//                 </a>
//                 <a className="netogame_appear_animation_mobile my-6 ml-1 cursor-pointer rounded-3xl bg-red-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-red-700 hover:outline-offset-2 hover:outline-red-500">
//                   Buy Now
//                 </a>
//               </div>
//               <div className="pt-5">
//                 Buy from <span className="font-SST_Bold"> $79,99</span>
//               </div>
//             </div>
//           </div>
//           <div className={currentSlideNumber === 1 ? "relative" : "hidden"}>
//             <div className="relative">
//               <div className="relative">
//                 <Image
//                   placeholder="blur"
//                   src={carousel2_pic_2}
//                   width={0}
//                   height={0}
//                   alt=""
//                   className="relative lg:w-1/2 lg:translate-x-full"
//                 />
//               </div>
//             </div>
//             <div className="netogame_appear_animation z-20 flex flex-col items-center px-5 text-center text-black lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
//               <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:mb-16 lg:block">
//                 Introducing the Neto Game console and accessories
//               </div>
//               <div className="font-SST_Light text-xl text-[#0068bd] lg:text-2xl xl:text-3xl">
//                 NetoGear Console
//               </div>
//               <div className="netogame_p netogame_appear_animation_mobile my-5 text-sm text-[#6b6b6b] lg:mb-6">
//                 Experience the next generation of handheld consoles
//               </div>
//               <div>
//                 <a className="netogame_appear_animation_mobile my-6 mr-1 cursor-pointer rounded-3xl bg-blue-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-blue-700 hover:outline-offset-2 hover:outline-blue-500">
//                   Find out more
//                 </a>
//                 <a className="netogame_appear_animation_mobile my-6 ml-1 cursor-pointer rounded-3xl bg-red-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-red-700 hover:outline-offset-2 hover:outline-red-500">
//                   Buy Now
//                 </a>
//               </div>
//               <div className="pt-5">
//                 Buy from <span className="font-SST_Bold"> $899,99</span>
//               </div>
//             </div>
//           </div>
//           <div className={currentSlideNumber === 2 ? "relative" : "hidden"}>
//             <div className="relative">
//               <div className="relative">
//                 <Image
//                   placeholder="blur"
//                   src={carousel2_pic_3}
//                   width={0}
//                   height={0}
//                   alt=""
//                   className="relative lg:w-1/2 lg:translate-x-full"
//                 />
//               </div>
//             </div>
//             <div className="netogame_appear_animation z-20 flex flex-col items-center px-5 text-center text-black lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
//               <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:mb-16 lg:block">
//                 Introducing the Neto Game console and accessories
//               </div>
//               <div className="font-SST_Light text-xl text-[#0068bd] lg:text-2xl xl:text-3xl">
//                 SkyTune Wireless Earbuds
//               </div>
//               <div className="netogame_p netogame_appear_animation_mobile my-5 text-sm text-[#6b6b6b] lg:mb-6">
//                 Experience the harmony of SkyTune, where every note meets the
//                 sky
//               </div>
//               <div>
//                 <a className="netogame_appear_animation_mobile my-6 mr-1 cursor-pointer rounded-3xl bg-blue-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-blue-700 hover:outline-offset-2 hover:outline-blue-500">
//                   Find out more
//                 </a>
//                 <a className="netogame_appear_animation_mobile my-6 ml-1 cursor-pointer rounded-3xl bg-red-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-red-700 hover:outline-offset-2 hover:outline-red-500">
//                   Buy Now
//                 </a>
//               </div>
//               <div className="pt-5">
//                 Buy from <span className="font-SST_Bold"> $299,99</span>
//               </div>
//             </div>
//           </div>
//           <div className={currentSlideNumber === 3 ? "relative" : "hidden"}>
//             <div className="relative">
//               <div className="relative">
//                 <Image
//                   placeholder="blur"
//                   src={carousel2_pic_4}
//                   width={0}
//                   height={0}
//                   alt=""
//                   className="relative lg:w-1/2 lg:translate-x-full"
//                 />
//               </div>
//             </div>
//             <div className="netogame_appear_animation z-20 flex flex-col items-center px-5 text-center text-black lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
//               <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:mb-16 lg:block">
//                 Introducing the Neto Game console and accessories
//               </div>
//               <div className="font-SST_Light text-xl text-[#0068bd] lg:text-2xl xl:text-3xl">
//                 Neto VR
//               </div>
//               <div className="netogame_p netogame_appear_animation_mobile my-5 text-sm text-[#6b6b6b] lg:mb-6">
//                 Immerse yourself in the future of virtual reality with Neto VR ,
//                 where limitless possibilities await your exploration
//               </div>
//               <div>
//                 <a className="netogame_appear_animation_mobile my-6 mr-1 cursor-pointer rounded-3xl bg-blue-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-blue-700 hover:outline-offset-2 hover:outline-blue-500">
//                   Find out more
//                 </a>
//                 <a className="netogame_appear_animation_mobile my-6 ml-1 cursor-pointer rounded-3xl bg-red-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-red-700 hover:outline-offset-2 hover:outline-red-500">
//                   Buy Now
//                 </a>
//               </div>
//               <div className="pt-5">
//                 Buy from <span className="font-SST_Bold"> $1000,99</span>
//               </div>
//             </div>
//           </div>
//           <div className={currentSlideNumber === 4 ? "relative" : "hidden"}>
//             <div className="relative">
//               <div className="relative">
//                 <Image
//                   placeholder="blur"
//                   src={carousel2_pic_5}
//                   width={0}
//                   height={0}
//                   alt=""
//                   className="relative lg:w-1/2 lg:translate-x-full"
//                 />
//               </div>
//             </div>
//             <div className="netogame_appear_animation z-20 flex flex-col items-center px-5 text-center text-black lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
//               <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:mb-16 lg:block">
//                 Introducing the Neto Game console and accessories
//               </div>
//               <div className="font-SST_Light text-xl text-[#0068bd] lg:text-2xl xl:text-3xl">
//                 ThunderBeat Wireless Headset
//               </div>
//               <div className="netogame_p netogame_appear_animation_mobile my-5 text-sm text-[#6b6b6b] lg:mb-6">
//                 Feel the power of sound with ThunderBeat !
//               </div>
//               <div>
//                 <a className="netogame_appear_animation_mobile my-6 mr-1 cursor-pointer rounded-3xl bg-blue-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-blue-700 hover:outline-offset-2 hover:outline-blue-500">
//                   Find out more
//                 </a>
//                 <a className="netogame_appear_animation_mobile my-6 ml-1 cursor-pointer rounded-3xl bg-red-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-red-700 hover:outline-offset-2 hover:outline-red-500">
//                   Buy Now
//                 </a>
//               </div>
//               <div className="pt-5">
//                 Buy from <span className="font-SST_Bold">$199,99</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="relative hidden justify-center lg:flex">
//           <ChevronLeftIcon
//             className="absolute left-5 top-1/2 z-10 hidden size-9 -translate-y-1/2 cursor-pointer rounded-full bg-blue-700 text-white lg:block"
//             onClick={() =>
//               setCurrentSlideNumber(Math.max(0, currentSlideNumber - 1))
//             }
//           />
//           <ChevronRightIcon
//             className="absolute right-5 top-1/2 z-10 hidden size-9 -translate-y-1/2 cursor-pointer rounded-full bg-blue-700 text-white lg:block"
//             onClick={() =>
//               setCurrentSlideNumber(Math.min(4, currentSlideNumber + 1))
//             }
//           />
//           <div
//             className="p-1 xl:w-[12.5%]"
//             onClick={() => {
//               setCurrentSlideNumber(0);
//             }}
//           >
//             <Image
//               placeholder="blur"
//               className={
//                 currentSlideNumber === 0
//                   ? "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1 outline-none outline-2 outline-offset-2 outline-blue-600"
//                   : "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1"
//               }
//               src={carousel2_pic_1}
//               width={0}
//               height={0}
//               alt=""
//             />
//             <div
//               className={
//                 currentSlideNumber === 0
//                   ? "text-center font-SST_Light text-blue-600"
//                   : "text-center font-SST_Light"
//               }
//             >
//               HyperGrip Wireless Controller
//             </div>
//           </div>
//           <div
//             className="p-1 xl:w-[12.5%]"
//             onClick={() => {
//               setCurrentSlideNumber(1);
//             }}
//           >
//             <Image
//               placeholder="blur"
//               className={
//                 currentSlideNumber === 1
//                   ? "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1 outline-none outline-2 outline-offset-2 outline-blue-600"
//                   : "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1"
//               }
//               src={carousel2_pic_2}
//               width={0}
//               height={0}
//               alt=""
//             />
//             <div
//               className={
//                 currentSlideNumber === 1
//                   ? "text-center font-SST_Light text-blue-600"
//                   : "text-center font-SST_Light"
//               }
//             >
//               NetoGear Console
//             </div>
//           </div>
//           <div
//             className="p-1 xl:w-[12.5%]"
//             onClick={() => {
//               setCurrentSlideNumber(2);
//             }}
//           >
//             <Image
//               placeholder="blur"
//               className={
//                 currentSlideNumber === 2
//                   ? "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1 outline-none outline-2 outline-offset-2 outline-blue-600"
//                   : "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1"
//               }
//               src={carousel2_pic_3}
//               width={0}
//               height={0}
//               alt=""
//             />
//             <div
//               className={
//                 currentSlideNumber === 2
//                   ? "text-center font-SST_Light text-blue-600"
//                   : "text-center font-SST_Light"
//               }
//             >
//               SkyTune Wireless Earbuds
//             </div>
//           </div>
//           <div
//             className="p-1 xl:w-[12.5%]"
//             onClick={() => {
//               setCurrentSlideNumber(3);
//             }}
//           >
//             <Image
//               placeholder="blur"
//               className={
//                 currentSlideNumber === 3
//                   ? "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1 outline-none outline-2 outline-offset-2 outline-blue-600"
//                   : "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1"
//               }
//               src={carousel2_pic_4}
//               width={0}
//               height={0}
//               alt=""
//             />
//             <div
//               className={
//                 currentSlideNumber === 3
//                   ? "text-center font-SST_Light text-blue-600"
//                   : "text-center font-SST_Light"
//               }
//             >
//               Neto VR
//             </div>
//           </div>
//           <div
//             className="p-1 xl:w-[12.5%]"
//             onClick={() => {
//               setCurrentSlideNumber(4);
//             }}
//           >
//             <Image
//               placeholder="blur"
//               className={
//                 currentSlideNumber === 4
//                   ? "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1 outline-none outline-2 outline-offset-2 outline-blue-600"
//                   : "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1"
//               }
//               src={carousel2_pic_5}
//               width={0}
//               height={0}
//               alt=""
//             />
//             <div
//               className={
//                 currentSlideNumber === 4
//                   ? "text-center font-SST_Light text-blue-600"
//                   : "text-center font-SST_Light"
//               }
//             >
//               ThunderBeat Wireless Headset
//             </div>
//           </div>
//         </div>
//         <div className="slider-container relative w-full pb-10 lg:hidden">
//           <Slider {...settings} ref={ref}>
//             <div
//               className="p-1"
//               onClick={() => {
//                 setCurrentSlideNumber(0);
//               }}
//             >
//               <Image
//                 placeholder="blur"
//                 className={
//                   currentSlideNumber === 0
//                     ? "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1 outline-none outline-2 outline-offset-2 outline-blue-600"
//                     : "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1"
//                 }
//                 src={carousel2_pic_1}
//                 width={0}
//                 height={0}
//                 alt=""
//               />
//               <div
//                 className={
//                   currentSlideNumber === 0
//                     ? "text-center font-SST_Light text-blue-600"
//                     : "text-center font-SST_Light"
//                 }
//               >
//                 HyperGrip Wireless Controller
//               </div>
//             </div>
//             <div
//               className="p-1"
//               onClick={() => {
//                 setCurrentSlideNumber(1);
//               }}
//             >
//               <Image
//                 placeholder="blur"
//                 className={
//                   currentSlideNumber === 1
//                     ? "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1 outline-none outline-2 outline-offset-2 outline-blue-600"
//                     : "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1"
//                 }
//                 src={carousel2_pic_2}
//                 width={0}
//                 height={0}
//                 alt=""
//               />
//               <div
//                 className={
//                   currentSlideNumber === 1
//                     ? "text-center font-SST_Light text-blue-600"
//                     : "text-center font-SST_Light"
//                 }
//               >
//                 NetoGear Console
//               </div>
//             </div>
//             <div
//               className="p-1"
//               onClick={() => {
//                 setCurrentSlideNumber(2);
//               }}
//             >
//               <Image
//                 placeholder="blur"
//                 className={
//                   currentSlideNumber === 2
//                     ? "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1 outline-none outline-2 outline-offset-2 outline-blue-600"
//                     : "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1"
//                 }
//                 src={carousel2_pic_3}
//                 width={0}
//                 height={0}
//                 alt=""
//               />
//               <div
//                 className={
//                   currentSlideNumber === 2
//                     ? "text-center font-SST_Light text-blue-600"
//                     : "text-center font-SST_Light"
//                 }
//               >
//                 SkyTune Wireless Earbuds
//               </div>
//             </div>
//             <div
//               className="p-1"
//               onClick={() => {
//                 setCurrentSlideNumber(3);
//               }}
//             >
//               <Image
//                 placeholder="blur"
//                 className={
//                   currentSlideNumber === 3
//                     ? "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1 outline-none outline-2 outline-offset-2 outline-blue-600"
//                     : "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1"
//                 }
//                 src={carousel2_pic_4}
//                 width={0}
//                 height={0}
//                 alt=""
//               />
//               <div
//                 className={
//                   currentSlideNumber === 3
//                     ? "text-center font-SST_Light text-blue-600"
//                     : "text-center font-SST_Light"
//                 }
//               >
//                 Neto VR
//               </div>
//             </div>
//             <div
//               className="p-1"
//               onClick={() => {
//                 setCurrentSlideNumber(4);
//               }}
//             >
//               <Image
//                 placeholder="blur"
//                 className={
//                   currentSlideNumber === 4
//                     ? "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1 outline-none outline-2 outline-offset-2 outline-blue-600"
//                     : "home_carousel2_boxshhadow m-1 cursor-pointer rounded-xl p-1"
//                 }
//                 src={carousel2_pic_5}
//                 width={0}
//                 height={0}
//                 alt=""
//               />
//               <div
//                 className={
//                   currentSlideNumber === 4
//                     ? "text-center font-SST_Light text-blue-600"
//                     : "text-center font-SST_Light"
//                 }
//               >
//                 ThunderBeat Wireless Headset
//               </div>
//             </div>
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// };
const Carousel_2 = () => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowLeftIcon
        className={
          currentSlideNumber === 0
            ? "absolute bottom-10 left-[18%] z-10 hidden size-9 rounded-full border p-1 opacity-35 lg:block"
            : "absolute bottom-10 left-[18%] z-10 hidden size-9 cursor-pointer rounded-full border p-1 lg:block"
        }
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowRightIcon
        className={
          currentSlideNumber === 4
            ? "absolute bottom-10 right-[18%] z-10 hidden size-9 rounded-full border p-1 opacity-35 lg:block"
            : "absolute bottom-10 right-[18%] z-10 hidden size-9 cursor-pointer rounded-full border p-1 lg:block"
        }
        onClick={onClick}
      />
    );
  }
  let sliderRef = useRef(null);
  const settings = {
    className: "center",
    infinite: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    centerPadding: "350px",
    className: "center",
    centerMode: true,
    slidesToShow: 1,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
    // swipeToSlide: true,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlideNumber(newIndex);
    },
    customPaging: (i) => (
      <div
        className={
          i === currentSlideNumber
            ? "size-3 rounded-full border bg-white hover:opacity-85"
            : "size-3 rounded-full border hover:bg-slate-400 hover:opacity-85"
        }
      ></div>
    ),
    // prevArrow: <SamplePrevArrow />,
    // nextArrow: <SampleNextArrow />,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 1440,
        settings: {
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 1750,
        settings: {
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 1920,
        settings: {
          centerPadding: "400px",
        },
      },
      {
        breakpoint: 4034,
        settings: {
          centerPadding: "500px",
        },
      },
    ],
  };
  return (
    <section>
      <div>
        {/* <div className="text-center font-ElectronicArtsDisplay_Bold text-4xl uppercase text-black sm:text-4xl">
          Features
        </div> */}
        <div className="relative py-10">
          <div className="absolute bottom-0 h-2/3 w-full bg-[#3761e8] md:h-1/2"></div>
          <div className="slider-container mx-auto">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div className="w-full">
                <div className="h-full cursor-pointer rounded-xl px-3 py-8 md:px-0">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_2_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className={
                        currentSlideNumber === 0
                          ? "w-full rounded-xl transition-all duration-300 md:scale-105"
                          : "w-full rounded-xl transition-all duration-300 md:scale-90"
                      }
                    />
                  </div>

                  <div
                    className={
                      currentSlideNumber === 0
                        ? "relative px-10 pt-4 text-center transition-opacity duration-500 md:pt-10"
                        : "relative px-10 pt-4 text-center opacity-0 transition-opacity duration-500 md:pt-10"
                    }
                  >
                    <div className="">
                      <div className="pb-5 pt-3 font-ElectronicArtsDisplay_Bold text-2xl uppercase text-white sm:text-3xl xl:text-4xl">
                        Hyper Grip Wireless Controller
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        For Gamers seeking complete mastery , HyperGrip is only
                        choice . Your hands deserve the best , choose HyperGrip
                        !
                      </div>
                      <button className="ml-2 rounded-3xl border border-[#d7292c] bg-[#d7292c] p-5 py-3 font-ElectronicArtsText_Regular text-white hover:scale-[95%] sm:max-w-44 sm:text-base">
                        <div className="">Buy Now</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="h-full cursor-pointer rounded-xl px-3 py-8 pb-8 md:px-0">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_2_pic_2}
                      width={0}
                      height={0}
                      alt=""
                      className={
                        currentSlideNumber === 1
                          ? "w-full rounded-xl transition-all duration-300 md:scale-105"
                          : "w-full rounded-xl transition-all duration-300 md:scale-90"
                      }
                    />
                  </div>

                  <div
                    className={
                      currentSlideNumber === 1
                        ? "relative px-10 pt-4 text-center transition-opacity duration-500 md:pt-10"
                        : "relative px-10 pt-4 text-center opacity-0 transition-opacity duration-500 md:pt-10"
                    }
                  >
                    <div className="">
                      <div className="pb-5 pt-3 font-ElectronicArtsDisplay_Bold text-2xl uppercase text-white sm:text-3xl xl:text-4xl">
                        Neto Gear Console
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        Experience the next generation of handheld consoles
                      </div>
                      <button className="ml-2 rounded-3xl border border-[#d7292c] bg-[#d7292c] p-5 py-3 font-ElectronicArtsText_Regular text-white hover:scale-[95%] sm:max-w-44 sm:text-base">
                        <div className="">Buy Now</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="h-full cursor-pointer rounded-xl px-3 py-8 pb-8 md:px-0">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_2_pic_3}
                      width={0}
                      height={0}
                      alt=""
                      className={
                        currentSlideNumber === 2
                          ? "w-full rounded-xl transition-all duration-300 md:scale-105"
                          : "w-full rounded-xl transition-all duration-300 md:scale-90"
                      }
                    />
                  </div>

                  <div
                    className={
                      currentSlideNumber === 2
                        ? "relative px-10 pt-4 text-center transition-opacity duration-500 md:pt-10"
                        : "relative px-10 pt-4 text-center opacity-0 transition-opacity duration-500 md:pt-10"
                    }
                  >
                    <div className="">
                      <div className="pb-5 pt-3 font-ElectronicArtsDisplay_Bold text-2xl uppercase text-white sm:text-3xl xl:text-4xl">
                        SkyTune Wireless Earbuds
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        Experience the harmony of SkyTune , where every note
                        meets the sky
                      </div>
                      <button className="ml-2 rounded-3xl border border-[#d7292c] bg-[#d7292c] p-5 py-3 font-ElectronicArtsText_Regular text-white hover:scale-[95%] sm:max-w-44 sm:text-base">
                        <div className="">Buy Now</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="h-full cursor-pointer rounded-xl px-3 py-8 pb-8 md:px-0">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_2_pic_4}
                      width={0}
                      height={0}
                      alt=""
                      className={
                        currentSlideNumber === 3
                          ? "w-full rounded-xl transition-all duration-300 md:scale-105"
                          : "w-full rounded-xl transition-all duration-300 md:scale-90"
                      }
                    />
                  </div>

                  <div
                    className={
                      currentSlideNumber === 3
                        ? "relative px-10 pt-4 text-center transition-opacity duration-500 md:pt-10"
                        : "relative px-10 pt-4 text-center opacity-0 transition-opacity duration-500 md:pt-10"
                    }
                  >
                    <div className="">
                      <div className="pb-5 pt-3 font-ElectronicArtsDisplay_Bold text-2xl uppercase text-white sm:text-3xl xl:text-4xl">
                        NETO VR
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        Immerse yourself in the future of virtual reality with
                        Neto VR , where limitless possibilities await your
                        exploration
                      </div>
                      <button className="ml-2 rounded-3xl border border-[#d7292c] bg-[#d7292c] p-5 py-3 font-ElectronicArtsText_Regular text-white hover:scale-[95%] sm:max-w-44 sm:text-base">
                        <div className="">Buy Now</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="h-full cursor-pointer rounded-xl px-3 py-8 pb-8 md:px-0">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_2_pic_5}
                      width={0}
                      height={0}
                      alt=""
                      className={
                        currentSlideNumber === 4
                          ? "w-full rounded-xl transition-all duration-300 md:scale-105"
                          : "w-full rounded-xl transition-all duration-300 md:scale-90"
                      }
                    />
                  </div>

                  <div
                    className={
                      currentSlideNumber === 4
                        ? "relative px-10 pt-4 text-center transition-opacity duration-500 md:pt-10"
                        : "relative px-10 pt-4 text-center opacity-0 transition-opacity duration-500 md:pt-10"
                    }
                  >
                    <div className="">
                      <div className="pb-5 pt-3 font-ElectronicArtsDisplay_Bold text-2xl uppercase text-white sm:text-3xl xl:text-4xl">
                        ThunderBear Wireless Headset
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        Feel the power of sound with Thunderbeat !
                      </div>
                      <button className="ml-2 rounded-3xl border border-[#d7292c] bg-[#d7292c] p-5 py-3 font-ElectronicArtsText_Regular text-white hover:scale-[95%] sm:max-w-44 sm:text-base">
                        <div className="">Buy Now</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="w-full">
                <div className="h-full cursor-pointer rounded-xl py-8 pb-8 md:px-0">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_2_pic_6}
                      width={0}
                      height={0}
                      alt=""
                      className={
                        currentSlideNumber === 5
                          ? "w-full rounded-xl transition-all duration-300 md:scale-105"
                          : "w-full rounded-xl transition-all duration-300 md:scale-90"
                      }
                    />
                  </div>

                  <div
                    className={
                      currentSlideNumber === 5
                        ? "relative px-10 pt-4 text-center transition-opacity duration-500 md:pt-10"
                        : "relative px-10 pt-4 text-center opacity-0 transition-opacity duration-500 md:pt-10"
                    }
                  >
                    <div className="">
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-2xl uppercase text-white sm:text-3xl xl:text-4xl pb-5">
                        Smooth Gameplay and Professional Control
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        The gameplay of Mythus Arena is designed to provide
                        players with a smooth and enjoyable experience right
                        from the start
                      </div>
                      <button className="ml-2 rounded-3xl border border-white bg-transparent p-5 py-3 font-ElectronicArtsText_Regular text-white hover:scale-[95%] sm:max-w-44 sm:text-base">
                        <div className="">Watch Trailer</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
const Video_sec = () => {
  const video_1 = useRef();
  const video_2 = useRef();
  const video_3 = useRef();

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  function callback(enteries) {
    const [entry] = enteries;
    //* if (entry.isIntersecting && !entry.ended) */
    entry.target.play();
  }

  useEffect(() => {
    var width = window.innerWidth;

    const observer = new IntersectionObserver(callback, options);
    if (video_1.current) {
      observer.observe(video_1.current);
      if (width > 1023) video_1.current.src = `netogame/video_sec_1.mp4`;
      else video_1.current.src = `netogame/video_sec_1_mobile.mp4`;
    }
    if (video_2.current) {
      observer.observe(video_2.current);
      if (width > 1023) video_2.current.src = `netogame/video_sec_2.mp4`;
      else video_2.current.src = `netogame/video_sec_2_mobile.mp4`;
    }
    if (video_3.current) {
      observer.observe(video_3.current);
      if (width > 1023) video_3.current.src = `netogame/video_sec_3.mp4`;
      else video_3.current.src = `netogame/video_sec_3_mobile.mp4`;
    }

    const handleResize = () => {
      if (width > 1023) {
        video_1.current.src = `netogame/video_sec_1.mp4`;
        video_2.current.src = `netogame/video_sec_2.mp4`;
        video_3.current.src = `netogame/video_sec_3.mp4`;
      } else {
        video_1.current.src = `netogame/video_sec_1_mobile.mp4`;
        video_2.current.src = `netogame/video_sec_2_mobile.mp4`;
        video_3.current.src = `netogame/video_sec_3_mobile.mp4`;
      }
    };

    // window.addEventListener("resize", handleResize);
    return () => {
      if (video_1.current) observer.unobserve(video_1.current);
      if (video_2.current) observer.unobserve(video_2.current);
      if (video_3.current) observer.unobserve(video_3.current);
      // window.removeEventListener("resize", handleResize);
    };
  }, [options]);

  return (
    <section>
      <div className="bg-[#d8dee7] text-black">
        <div className="relative">
          <div className="h-[776px] overflow-hidden sm:h-auto">
            <video
              ref={video_1}
              muted
              autoPlay
              className="w-full object-fill"
              src="netogame/video_sec_1_mobile.mp4"
            ></video>
          </div>
          <div className="absolute top-1/2 z-10 px-3 lg:right-10 lg:top-1/2 lg:w-2/5 lg:-translate-y-1/2">
            <div className="netogame_H1 font-SST_Bold">Designed to Rule</div>
            <div className="netogame_P pt-3">
              Today, the Neto token, utilizing an innovative and unique
              algorithm, has succeeded in surpassing its major competitors in
              the highly competitive cryptocurrency market and has become one of
              the top tokens
            </div>
            <div className="flex flex-wrap pt-5">
              <a className="cursor-pointer rounded-2xl bg-black px-3 py-2 font-SST_Bold text-base font-bold text-[#9fa4ac] outline-none outline-2 delay-75 hover:bg-black hover:outline-offset-2 hover:outline-black xl:text-lg">
                Find out more
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[776px] overflow-hidden sm:h-auto">
            <video
              ref={video_2}
              muted
              autoPlay
              className="w-full object-fill"
              src="netogame/video_sec_2_mobile.mp4"
            ></video>
          </div>
          <div className="absolute top-1/2 z-10 px-3 lg:left-10 lg:top-1/2 lg:w-2/5 lg:-translate-y-1/2">
            <div className="netogame_H1 font-SST_Bold">
              Become a Partner of NetoGame
            </div>
            <div className="netogame_P pt-3">
              Additionally, Neto has also begun activities in producing
              accessories and products related to the company, each of which has
              the potential to create significant wealth for Neto's shareholders
            </div>
            <div className="flex flex-wrap pt-5">
              <a className="cursor-pointer rounded-2xl bg-black px-3 py-2 font-SST_Bold text-base font-bold text-[#9fa4ac] outline-none outline-2 delay-75 hover:bg-black hover:outline-offset-2 hover:outline-black xl:text-lg">
                Find out more
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[776px] overflow-hidden sm:h-auto">
            <video
              ref={video_3}
              muted
              autoPlay
              className="w-full object-fill"
              src="netogame/video_sec_3_mobile.mp4"
            ></video>
          </div>
          <div className="absolute top-1/2 z-10 px-3 lg:right-10 lg:top-1/2 lg:w-2/5 lg:-translate-y-1/2">
            <div className="netogame_H1 font-SST_Bold">
              Our Affiliate Program
            </div>
            <div className="netogame_P pt-3">
              You can join the Neto family with a free initial registration. If
              you are among the first 10,000 registrants, you will receive 1,000
              Neto tokens as a gift, which you can sell at any time
            </div>
            <div className="flex flex-wrap pt-5">
              <a className="cursor-pointer rounded-2xl bg-black px-3 py-2 font-SST_Bold text-base font-bold text-[#9fa4ac] outline-none outline-2 delay-75 hover:bg-black hover:outline-offset-2 hover:outline-black xl:text-lg">
                Find out more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Carousel_5 = () => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ChevronLeftIcon
        className="absolute left-5 top-1/2 z-10 hidden size-9 -translate-y-1/2 cursor-pointer rounded-full bg-gray-500/50 lg:block"
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ChevronRightIcon
        className="absolute right-5 top-1/2 z-10 hidden size-9 -translate-y-1/2 cursor-pointer rounded-full bg-gray-500/50 lg:block"
        onClick={onClick}
      />
    );
  }
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 2,
    speed: 300,
    dots: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    // appendDots: (dots) => (
    //   <div className="pt-">
    //     <ul> {dots} </ul>
    //   </div>
    // ),
    customPaging: (i) => {
      return (
        <MinusIcon
          className={
            i === currentSlideNumber ? "h-8 text-white" : "h-8 text-gray-500"
          }
        />
      );
    },
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlideNumber(newIndex);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div>
      <div className="slider-container relative w-full pb-10">
        <div className="flex items-baseline justify-between">
          <div className="relative left-1/2 my-5 w-max -translate-x-1/2 border-b-4 border-white hover:cursor-pointer sm:left-0 sm:ml-8 sm:translate-x-0 hover:[&_*]:-translate-y-1">
            <div className="font-SST_Bold text-5xl">MERCHANDISE</div>
          </div>
          {/* <a className="mb-5 mr-8 hidden h-max w-max cursor-pointer rounded-lg border bg-transparent px-8 py-3 text-base uppercase text-white transition-transform hover:-translate-y-1 lg:block">
            find out more
          </a> */}
        </div>
        <Slider {...settings}>
          <div className="w-full">
            <div className="relative mx-2 h-[50vh] cursor-pointer overflow-hidden rounded-xl sm:h-[45vh] md:h-[35vh] lg:h-[35vh] xl:h-[54vh]">
              <div className="absolute top-0 z-0 h-full w-full"></div>

              <Image
                placeholder="blur"
                src={carousel5_pic_1}
                width={0}
                height={0}
                alt=""
                className="h-[50vh] object-cover sm:h-[45vh] md:h-[35vh] lg:h-[35vh] xl:h-[54vh]"
              />

              <div className="absolute bottom-10 right-10 z-10 flex-col justify-center pl-4 lg:flex">
                <a className="w-max rounded-lg border bg-transparent px-8 py-3 text-base uppercase text-white transition-transform hover:-translate-y-1">
                  find out more
                </a>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative mx-2 h-[50vh] cursor-pointer overflow-hidden rounded-xl sm:h-[45vh] md:h-[35vh] lg:h-[35vh] xl:h-[54vh]">
              <div className="absolute top-0 z-0 h-full w-full"></div>

              <Image
                placeholder="blur"
                src={carousel5_pic_2}
                width={0}
                height={0}
                alt=""
                className="h-[50vh] object-cover sm:h-[45vh] md:h-[35vh] lg:h-[35vh] xl:h-[54vh]"
              />

              <div className="absolute bottom-10 right-10 z-10 flex-col justify-center pl-4 lg:flex">
                <a className="w-max rounded-lg border bg-transparent px-8 py-3 text-base uppercase text-white transition-transform hover:-translate-y-1">
                  find out more
                </a>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative mx-2 h-[50vh] cursor-pointer overflow-hidden rounded-xl sm:h-[45vh] md:h-[35vh] lg:h-[35vh] xl:h-[54vh]">
              <div className="absolute top-0 z-0 h-full w-full"></div>

              <Image
                placeholder="blur"
                src={carousel5_pic_3}
                width={0}
                height={0}
                alt=""
                className="h-[50vh] object-cover sm:h-[45vh] md:h-[35vh] lg:h-[35vh] xl:h-[54vh]"
              />

              <div className="absolute bottom-10 right-10 z-10 flex-col justify-center pl-4 lg:flex">
                <a className="w-max rounded-lg border bg-transparent px-8 py-3 text-base uppercase text-white transition-transform hover:-translate-y-1">
                  find out more
                </a>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative mx-2 h-[50vh] cursor-pointer overflow-hidden rounded-xl sm:h-[45vh] md:h-[35vh] lg:h-[35vh] xl:h-[54vh]">
              <div className="absolute top-0 z-0 h-full w-full"></div>

              <Image
                placeholder="blur"
                src={carousel5_pic_4}
                width={0}
                height={0}
                alt=""
                className="h-[50vh] object-cover sm:h-[45vh] md:h-[35vh] lg:h-[35vh] xl:h-[54vh]"
              />

              <div className="absolute bottom-10 right-10 z-10 flex-col justify-center pl-4 lg:flex">
                <a className="w-max rounded-lg border bg-transparent px-8 py-3 text-base uppercase text-white transition-transform hover:-translate-y-1">
                  find out more
                </a>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative mx-2 h-[50vh] cursor-pointer overflow-hidden rounded-xl sm:h-[45vh] md:h-[35vh] lg:h-[35vh] xl:h-[54vh]">
              <div className="absolute top-0 z-0 h-full w-full"></div>

              <Image
                placeholder="blur"
                src={carousel5_pic_5}
                width={0}
                height={0}
                alt=""
                className="h-[50vh] object-cover sm:h-[45vh] md:h-[35vh] lg:h-[35vh] xl:h-[54vh]"
              />

              <div className="absolute bottom-10 right-10 z-10 flex-col justify-center pl-4 lg:flex">
                <a className="w-max rounded-lg border bg-transparent px-8 py-3 text-base uppercase text-white transition-transform hover:-translate-y-1">
                  find out more
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* <a className="mx-auto my-5 block w-11/12 cursor-pointer rounded-lg border bg-transparent px-8 py-3 text-center text-base uppercase text-white transition-transform hover:-translate-y-1 lg:hidden">
        find out moree
      </a> */}
    </div>
  );
};
// const Sec2 = () => {
//   return (
//     <section>
//       <div>
//         <div className="relative">
//           <div className="relative h-[400px] overflow-hidden sm:h-[600px] lg:h-full">
//             <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div>
//             <picture>
//               <source
//                 srcSet="./netogame/sec2_mobile.webp"
//                 media="(max-width:1023.95px)"
//               ></source>
//               <source
//                 srcSet="./netogame/sec2_pc.webp"
//                 media="(min-width:1024px)"
//               ></source>

//               <Image
//                 placeholder="blur"
//                 src={sec2_pc}
//                 width={0}
//                 height={0}
//                 alt=""
//                 className=""
//               />
//             </picture>
//           </div>
//           <div className="z-20 flex flex-col items-center bg-[#1f1f1f] px-5 pb-20 text-center text-white lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:-translate-y-1/2 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
//             <div className="netogame_H1">Feel the difference</div>
//             <div className="netogame_p my-2 lg:mt-5">
//               Explore the next frontier of virtual reality with Neto VR, where
//               cutting-edge technology meets immersive experiences that redefine
//               your perception of reality
//             </div>
//             <div className="py-5 pb-8">
//               Buy from: <span className="font-SST_Bold"> $1000.99</span>
//             </div>
//             <div>
//               <a className="netogame_appear_animation_mobile my-6 mr-1 cursor-pointer rounded-3xl bg-white px-3 py-3 font-SST_Bold text-base text-black outline-none outline-2 delay-75 hover:bg-white hover:outline-offset-2 hover:outline-white">
//                 Find out more
//               </a>
//               <a className="netogame_appear_animation_mobile my-6 ml-1 cursor-pointer rounded-3xl bg-red-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-red-700 hover:outline-offset-2 hover:outline-red-500">
//                 Buy Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const Jiggle = () => {
  const jiggle_container = useRef();
  const jiggle_1_ref = useRef();
  const jiggle_2_ref = useRef();
  const jiggle_3_ref = useRef();
  const jiggle_4_ref = useRef();
  useEffect(() => {
    jiggle_container.current.addEventListener("mousemove", (event) => {
      const mouse_x = event.clientX;
      const mouse_y = event.clientY;
      //-3 to +3 deg
      var windows_width = window.innerWidth;
      var windows_height = window.innerHeight;

      var rotate_z = (mouse_x / windows_width) * 6 - 3;
      var translate_y = ((mouse_y / windows_height) * 6 - 3) * 5;
      jiggle_1_ref.current.style.transform = `translateY(${-translate_y}px) rotateZ(${rotate_z}deg) translateX(${rotate_z * 20}px)`;
      jiggle_2_ref.current.style.transform = `translateY(${translate_y}px) rotateZ(${-rotate_z}deg) translateX(${rotate_z * -10}px)`;
      jiggle_3_ref.current.style.transform = `translateY(${translate_y}px) rotateZ(${rotate_z}deg) translateX(${rotate_z * -10}px)`;
      jiggle_4_ref.current.style.transform = `translateY(${translate_y}px) rotateZ(${-rotate_z}deg) translateX(${rotate_z * -10}px)`;
    });
    jiggle_container.current.addEventListener("mouseleave", (event) => {
      jiggle_1_ref.current.style.transform =
        "translateY(0px) translateX(0px) rotateZ(0deg)";
      jiggle_2_ref.current.style.transform =
        "translateY(0px) translateX(0px) rotateZ(0deg)";
      jiggle_3_ref.current.style.transform =
        "translateY(0px) translateX(0px) rotateZ(0deg)";
      jiggle_4_ref.current.style.transform =
        "translateY(0px) translateX(0px) rotateZ(0deg)";
    });
    jiggle_container.current.addEventListener("touchmove", (event) => {
      var mouse_x = event.targetTouches[0].clientX;
      var mouse_y = event.targetTouches[0].clientY;
      mouse_x = Math.floor(mouse_x);
      mouse_y = Math.floor(mouse_y);
      //-3 to +3 deg
      var windows_width = window.innerWidth;
      var windows_height = window.innerHeight;

      var rotate_z = (mouse_x / windows_width) * 6 - 3;
      var translate_y = ((mouse_y / windows_height) * 6 - 3) * 5;
      jiggle_1_ref.current.style.transform = `translateY(${-translate_y}px) rotateZ(${rotate_z}deg) translateX(${rotate_z * 20}px)`;
      jiggle_2_ref.current.style.transform = `translateY(${translate_y}px) rotateZ(${-rotate_z}deg) translateX(${rotate_z * -10}px)`;
      jiggle_3_ref.current.style.transform = `translateY(${translate_y}px) rotateZ(${rotate_z}deg) translateX(${rotate_z * -10}px)`;
      jiggle_4_ref.current.style.transform = `translateY(${translate_y}px) rotateZ(${-rotate_z}deg) translateX(${rotate_z * -10}px)`;
    });
  }, []);
  return (
    <section>
      <div
        ref={jiggle_container}
        className="overflow-hidden bg-[url(../../public/netogame/jiggle_bg.png)] bg-cover bg-center bg-no-repeat pb-32 pt-20"
      >
        <div className="mx-auto w-2/3 pb-5 text-center text-black">
          <div className="netogame_H1">Feel the difference</div>
          <div className="netogame_p my-2 lg:mt-5">
            Explore the next frontier of virtual reality with Neto VR, where
            cutting-edge technology meets immersive experiences that redefine
            your perception of reality
          </div>
        </div>
        <div className="relative mx-auto w-9/12 max-w-4xl">
          <Image
            src={jiggle_1}
            alt=""
            width={0}
            height={0}
            className="transition ease-out"
            ref={jiggle_1_ref}
          />
          <Image
            src={jiggle_2}
            alt=""
            width={0}
            height={0}
            className="absolute -right-10 -top-10 w-1/2 rounded-2xl backdrop-blur-lg transition ease-out md:-right-20"
            ref={jiggle_2_ref}
          />
          <Image
            src={jiggle_3}
            alt=""
            width={0}
            height={0}
            className="absolute -bottom-10 -right-10 w-1/2 transition ease-out md:-right-20"
            ref={jiggle_3_ref}
          />
          <Image
            src={jiggle_4}
            alt=""
            width={0}
            height={0}
            className="absolute -left-9 top-1/2 w-1/2 -translate-y-1/2 rounded-2xl backdrop-blur-lg transition ease-out md:-left-20"
            ref={jiggle_4_ref}
          />
        </div>
      </div>
    </section>
  );
};

const Sec1 = () => {
  return (
    <section>
      <div className="bg-[#18141a] pt-6">
        <div className="relative">
          <div className="relative h-[330px] overflow-hidden sm:h-[500px] md:h-[640px] lg:h-full">
            {/* <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div> */}
            <picture>
              <source
                srcSet="./netogame/sec1_pic_mobile.webp"
                media="(max-width:1023.95px)"
              ></source>
              <source
                srcSet="./netogame/sec1_pic_pc.webp"
                media="(min-width:1024px)"
              ></source>

              <Image
                placeholder="blur"
                src={sec1_pc}
                width={0}
                height={0}
                alt=""
                className=""
              />
            </picture>
          </div>
          <div className="z-20 flex flex-col items-center px-5 text-center text-white lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:-translate-y-1/2 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
            <div className="netogame_H1">New saving on NetoStore</div>
            <div className="netogame_p my-2 lg:my-8">
              Explore our latest discounts and seasonal sales on games and
              accessories
            </div>
            <a className="my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white">
              Find out more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

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
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[76vh] xl:h-[66vh]">
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
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[76vh] xl:h-[66vh]">
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
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[76vh] xl:h-[66vh]">
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
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[76vh] xl:h-[66vh]">
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
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[76vh] xl:h-[66vh]">
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
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[76vh] xl:h-[66vh]">
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
export default function Home() {
  return (
    <main className="mt-16 bg-white">
      <title>NetoGame</title>
      <link rel="icon" href="/icon.ico" sizes="any" />
      <Navbar2 />
      <div className="mt-0">
        <Main_sec />
        <Category_sec />
        <div className="carousel3_bg mx-auto w-full py-5">
          <Carousel_3 />
        </div>
        <Carousel_2 />
        <Video_sec />
        <div className="bg-[#18141a] py-16">
          <Carousel_5 />
        </div>
        <Jiggle />
        <Sec1 />
        <Carousel_4 />
        <Social_bar />
      </div>
    </main>
  );
}
