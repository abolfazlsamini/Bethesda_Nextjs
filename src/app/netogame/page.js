"use client";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusIcon,
} from "@heroicons/react/16/solid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import main_pic_1_logo from "../../../public/netogame/main_pic_1_logo.webp";
import main_pic_1_pc from "../../../public/netogame/main_pic_1_pc.webp";
import main_pic_1_controller from "../../../public/netogame/main_pic_1_controller.webp";

import main_pic_2_logo from "../../../public/netogame/main_pic_2_logo.webp";
import main_pic_2_pc from "../../../public/netogame/main_pic_2_pc.webp";
import main_pic_2_controller from "../../../public/netogame/main_pic_2_controller.webp";

import main_pic_3_logo from "../../../public/netogame/main_pic_3_logo.webp";
import main_pic_3_pc from "../../../public/netogame/main_pic_3_pc.webp";
import main_pic_3_controller from "../../../public/netogame/main_pic_3_controller.webp";

import main_pic_4_logo from "../../../public/netogame/main_pic_4_logo.webp";
import main_pic_4_pc from "../../../public/netogame/main_pic_4_pc.webp";
import main_pic_4_controller from "../../../public/netogame/main_pic_4_controller.webp";

import main_pic_5_logo from "../../../public/netogame/main_pic_5_logo.webp";
import main_pic_5_pc from "../../../public/netogame/main_pic_5_pc.webp";
import main_pic_5_controller from "../../../public/netogame/main_pic_5_controller.webp";

import main_pic_6_logo from "../../../public/netogame/main_pic_6_logo.webp";
import main_pic_6_pc from "../../../public/netogame/main_pic_6_pc.webp";
import main_pic_6_controller from "../../../public/netogame/main_pic_6_controller.webp";

import main_pic_7_logo from "../../../public/netogame/main_pic_7_logo.webp";
import main_pic_7_pc from "../../../public/netogame/main_pic_7_pc.webp";
import main_pic_7_controller from "../../../public/netogame/main_pic_7_controller.webp";

import main_pic_8_logo from "../../../public/netogame/main_pic_8_logo.webp";
import main_pic_8_pc from "../../../public/netogame/main_pic_8_pc.webp";
import main_pic_8_controller from "../../../public/netogame/main_pic_8_controller.webp";

import carousel2_pic_1 from "../../../public/netogame/carousel2_pic_1.webp";
import carousel2_pic_2 from "../../../public/netogame/carousel2_pic_2.webp";
import carousel2_pic_3 from "../../../public/netogame/carousel2_pic_3.webp";
import carousel2_pic_4 from "../../../public/netogame/carousel2_pic_4.webp";
import carousel2_pic_5 from "../../../public/netogame/carousel2_pic_5.webp";

import carousel3_pic_1_pc from "../../../public/netogame/carousel3_pic_1_pc.webp";
import carousel3_pic_2_pc from "../../../public/netogame/carousel3_pic_2_pc.webp";
import carousel3_pic_3_pc from "../../../public/netogame/carousel3_pic_3_pc.webp";
import carousel3_icon from "../../../public/netogame/carousel3_icon.svg";

import carousel4_pic_1 from "../../../public/netogame/carousel4_pic_1.webp";
import carousel4_logo_1 from "../../../public/netogame/carousel4_logo_1.webp";
import carousel4_pic_2 from "../../../public/netogame/carousel4_pic_2.webp";
import carousel4_logo_2 from "../../../public/netogame/carousel4_logo_2.webp";
import carousel4_pic_3 from "../../../public/netogame/carousel4_pic_3.webp";
import carousel4_logo_3 from "../../../public/netogame/carousel4_logo_3.webp";
import carousel4_pic_4 from "../../../public/netogame/carousel4_pic_4.webp";
import carousel4_logo_4 from "../../../public/netogame/carousel4_logo_4.webp";
import carousel4_pic_5 from "../../../public/netogame/carousel4_pic_5.webp";
import carousel4_logo_5 from "../../../public/netogame/carousel4_logo_5.webp";
import carousel4_pic_6 from "../../../public/netogame/carousel4_pic_6.webp";
import carousel4_logo_6 from "../../../public/netogame/carousel4_logo_6.webp";

import sec2_pc from "../../../public/netogame/sec2_pc.webp";

import sec1_pc from "../../../public/netogame/sec1_pic_pc.webp";

import category_pic_1 from "../../../public/netogame/category_pic_1.webp";
import category_pic_2 from "../../../public/netogame/category_pic_2.webp";
import category_pic_3 from "../../../public/netogame/category_pic_3.webp";
import category_pic_4 from "../../../public/netogame/category_pic_4.webp";
import category_pic_5 from "../../../public/netogame/category_pic_5.webp";
import category_pic_6 from "../../../public/netogame/category_pic_6.webp";

import carousel5_pic_1 from "../../../public/netogame/carousel5_pic_1.png";
import carousel5_pic_2 from "../../../public/netogame/carousel5_pic_2.png";
import carousel5_pic_3 from "../../../public/netogame/carousel5_pic_3.png";
import carousel5_pic_4 from "../../../public/netogame/carousel5_pic_4.png";
import carousel5_pic_5 from "../../../public/netogame/carousel5_pic_5.png";

import x from "../../../public/netogame/X.png";
import Ticktok from "../../../public/netogame/Tiktok.png";
import TEl from "../../../public/netogame/TEl.png";
import Discord from "../../../public/netogame/Discord.png";
import yt from "../../../public/netogame/YT.png";
import Facebook from "../../../public/netogame/Facebook.png";
import Insta from "../../../public/netogame/Insta.png";

import { useEffect, useRef, useState } from "react";
import Navbar2 from "../navbar2";
import Navbar from "../navbar";

const Main_sec = () => {
  const controller_ref = useRef();
  const img_1 = useRef();
  const img_2 = useRef();
  const img_3 = useRef();
  const img_4 = useRef();
  const img_5 = useRef();
  const img_6 = useRef();
  const img_7 = useRef();
  const img_8 = useRef();
  const [index, setIndex] = useState(1);
  function callback(enteries) {
    const [entry] = enteries;

    if (entry.isIntersecting && entry.target.id != index)
      setIndex(Number(entry.target.id));
  }
  function onClickScroll(i) {
    if (controller_ref.current) {
      controller_ref.current.scroll({
        left: (i - 1) * 300,
        behavior: "smooth",
      });
    }
  }
  const options = {
    root: null,
    rootMargin: "300px",
    threshold: 1,
  };
  useEffect(() => {
    var width = window.innerWidth;
    if (width > 1023) return;
    const observer = new IntersectionObserver(callback, options);
    if (img_1.current) observer.observe(img_1.current);
    if (img_2.current) observer.observe(img_2.current);
    if (img_3.current) observer.observe(img_3.current);
    if (img_4.current) observer.observe(img_4.current);
    if (img_5.current) observer.observe(img_5.current);
    if (img_6.current) observer.observe(img_6.current);
    if (img_7.current) observer.observe(img_7.current);
    if (img_8.current) observer.observe(img_8.current);
    return () => {
      if (img_1.current) observer.unobserve(img_1.current);
      if (img_2.current) observer.unobserve(img_2.current);
      if (img_3.current) observer.unobserve(img_3.current);
      if (img_4.current) observer.unobserve(img_4.current);
      if (img_5.current) observer.unobserve(img_5.current);
      if (img_6.current) observer.unobserve(img_6.current);
      if (img_7.current) observer.unobserve(img_7.current);
      if (img_8.current) observer.unobserve(img_8.current);
    };
  }, [options]);
  return (
    <section>
      <div className="">
        <div>
          <div>
            <div className={index === 1 ? "relative" : "hidden"}>
              <div className="relative">
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
                    className=""
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
                <div className="netogame_H1 netogame_appear_animation_mobile">
                  From the depths of darkness
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 lg:my-5">
                  From the depths of darkness, heroes rise to return the God Of
                  Light to the earth . Who will you choose?
                </div>
                <a className="netogame_appear_animation_mobile my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white">
                  Find out more
                </a>
              </div>
            </div>
            <div className={index === 2 ? "relative" : "hidden"}>
              <div className="relative">
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
                    className=""
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
                <div className="netogame_H1 netogame_appear_animation_mobile">
                  Are you ready for real death ?
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 lg:my-5">
                  In Orbit Explore, experience the thrill of getting hit, kill
                  your enemies, and enjoy an immersive VR game
                </div>
                <a className="netogame_appear_animation_mobile my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white">
                  Find out more
                </a>
              </div>
            </div>
            <div className={index === 3 ? "relative" : "hidden"}>
              <div className="relative">
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
                    className=""
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
                <div className="netogame_H1 netogame_appear_animation_mobile">
                  Join the crew of the NetoBall
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 lg:my-5">
                  Experience the thrill of high-flying action and intense
                  competition in the ultimate head-to-head soccer showdown
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
              <div className="relative">
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
                    className=""
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
                <div className="netogame_H1 netogame_appear_animation_mobile">
                  Create Chaos in CombatField ™ Upheaval
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 lg:my-5">
                  Join the ultimate battle royale, where strategy, skill, and
                  teamwork determine your path to legendary victory
                </div>
                <a className="netogame_appear_animation_mobile my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white">
                  Find out more
                </a>
              </div>
            </div>
            <div className={index === 5 ? "relative" : "hidden"}>
              <div className="relative">
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
                    className=""
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
                <div className="netogame_H1 netogame_appear_animation_mobile">
                  Welcome to the new Basketball
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 lg:my-5">
                  Step onto the court and dominate with skill, strategy, and
                  style in the Hoops Heat
                </div>
                <a className="netogame_appear_animation_mobile my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white">
                  Find out more
                </a>
              </div>
            </div>
            <div className={index === 6 ? "relative" : "hidden"}>
              <div className="relative">
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
                    className=""
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
                <div className="netogame_H1 netogame_appear_animation_mobile">
                  Darkness calls upon you
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 lg:my-5">
                  What starts as a small-town murder investigation becomes a
                  living nightmare
                </div>
                <a className="netogame_appear_animation_mobile my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white">
                  Find out more
                </a>
              </div>
            </div>
            <div className={index === 7 ? "relative" : "hidden"}>
              <div className="relative">
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
                    className=""
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
                <div className="netogame_H1 netogame_appear_animation_mobile">
                  New savings on NetoGame Store
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 lg:my-5">
                  Explore the latest discounts and seasonal sales on new games
                  and accessories
                </div>
                <a className="netogame_appear_animation_mobile my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white">
                  Find out more
                </a>
              </div>
            </div>
            <div className={index === 8 ? "relative" : "hidden"}>
              <div className="relative">
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
                    className=""
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
                <div className="netogame_H1 netogame_appear_animation_mobile">
                  Discover Neto PlayFusion
                </div>
                <div className="netogame_p netogame_appear_animation_mobile my-2 lg:my-5">
                  By having a Neto PlayFusion account, you can benefit from
                  special services
                </div>
                <a className="netogame_appear_animation_mobile my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white">
                  Find out more
                </a>
              </div>
            </div>
          </div>
          <div className="lg:px-6">
            <div
              className="main_small_image_container relative flex max-h-52 snap-x snap-mandatory overflow-x-auto overflow-y-hidden py-6 lg:overflow-hidden"
              ref={controller_ref}
            >
              <Image
                placeholder="blur"
                onClick={() => {
                  onClickScroll(1);
                  setIndex(1);
                }}
                className="main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                src={main_pic_1_controller}
                width={0}
                height={0}
                ref={img_1}
                id="1"
                alt=""
              />
              <Image
                placeholder="blur"
                onClick={() => {
                  onClickScroll(2);
                  setIndex(2);
                }}
                className="main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                src={main_pic_2_controller}
                width={0}
                height={0}
                ref={img_2}
                id="2"
                alt=""
              />
              <Image
                placeholder="blur"
                onClick={() => {
                  onClickScroll(3);
                  setIndex(3);
                }}
                className="main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                src={main_pic_3_controller}
                width={0}
                height={0}
                ref={img_3}
                id="3"
                alt=""
              />
              <Image
                placeholder="blur"
                onClick={() => {
                  onClickScroll(4);
                  setIndex(4);
                }}
                className="main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                src={main_pic_4_controller}
                width={0}
                height={0}
                ref={img_4}
                id="4"
                alt=""
              />
              <Image
                placeholder="blur"
                onClick={() => {
                  onClickScroll(5);
                  setIndex(5);
                }}
                className="main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                src={main_pic_5_controller}
                width={0}
                height={0}
                ref={img_5}
                id="5"
                alt=""
              />
              <Image
                placeholder="blur"
                onClick={() => {
                  onClickScroll(6);
                  setIndex(6);
                }}
                className="main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                src={main_pic_6_controller}
                width={0}
                height={0}
                ref={img_6}
                id="6"
                alt=""
              />
              <Image
                placeholder="blur"
                onClick={() => {
                  onClickScroll(7);
                  setIndex(7);
                }}
                className="main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                src={main_pic_7_controller}
                width={0}
                height={0}
                ref={img_7}
                id="7"
                alt=""
              />
              <Image
                placeholder="blur"
                onClick={() => {
                  onClickScroll(8);
                  setIndex(8);
                }}
                className="main_small_image relative m-auto h-full w-[300px] cursor-pointer snap-center rounded-xl px-1 transition-transform duration-200 lg:w-[12%] lg:hover:z-10 lg:hover:-translate-y-3"
                src={main_pic_8_controller}
                width={0}
                height={0}
                ref={img_8}
                id="8"
                alt=""
              />

              {/* <div className="opacityhover absolute top-0 h-full max-h-0 w-full bg-white opacity-0 transition-opacity duration-300"></div> */}
            </div>
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
        <div className="min-h-[55vh]">
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
            <div className="category_container z-10 flex flex-wrap">
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
              <div
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
              </div>
              <div
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
              </div>
              <div
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
              </div>
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
        <div className="netogame_H1 p-10 py-7 text-center text-2xl text-black lg:text-4xl xl:text-5xl">
          Discover Neto PlayFusion
        </div>
        <div className="netogame_P mb-7 px-10 text-center text-sm text-[#6b6b6b] lg:px-20 xl:text-lg">
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
const Carousel_2 = () => {
  // const controller_ref = useRef();
  // const img_1 = useRef();
  // const img_2 = useRef();
  // const img_3 = useRef();
  // const img_4 = useRef();
  // const img_5 = useRef();
  // const img_6 = useRef();
  // const img_7 = useRef();
  // const img_8 = useRef();
  // const [index, setIndex] = useState(1);
  // function callback(enteries) {
  //   console.log(index);
  //   const [entry] = enteries;

  //   if (entry.isIntersecting && entry.target.id != index)
  //     setIndex(Number(entry.target.id));
  // }
  // function onClickScroll(i) {
  //   if (controller_ref.current) {
  //     controller_ref.current.scroll({
  //       left: (i - 1) * 300,
  //       behavior: "smooth",
  //     });
  //   }
  // }
  // const options = {
  //   root: null,
  //   rootMargin: "300px",
  //   threshold: 1,
  // };
  // useEffect(() => {
  //   var width = window.innerWidth;
  //   if (width > 1023) return;
  //   const observer = new IntersectionObserver(callback, options);
  //   if (img_1.current) observer.observe(img_1.current);
  //   if (img_2.current) observer.observe(img_2.current);
  //   if (img_3.current) observer.observe(img_3.current);
  //   if (img_4.current) observer.observe(img_4.current);
  //   if (img_5.current) observer.observe(img_5.current);
  //   if (img_6.current) observer.observe(img_6.current);
  //   if (img_7.current) observer.observe(img_7.current);
  //   if (img_8.current) observer.observe(img_8.current);
  //   return () => {
  //     if (img_1.current) observer.unobserve(img_1.current);
  //     if (img_2.current) observer.unobserve(img_2.current);
  //     if (img_3.current) observer.unobserve(img_3.current);
  //     if (img_4.current) observer.unobserve(img_4.current);
  //     if (img_5.current) observer.unobserve(img_5.current);
  //     if (img_6.current) observer.unobserve(img_6.current);
  //     if (img_7.current) observer.unobserve(img_7.current);
  //     if (img_8.current) observer.unobserve(img_8.current);
  //   };
  // }, [options]);
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ChevronLeftIcon
        className="absolute left-5 top-1/2 z-10 hidden size-9 -translate-y-1/2 cursor-pointer rounded-full bg-blue-700 text-white lg:block"
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ChevronRightIcon
        className="absolute right-5 top-1/2 z-10 hidden size-9 -translate-y-1/2 cursor-pointer rounded-full bg-blue-700 text-white lg:block"
        onClick={onClick}
      />
    );
  }
  const settings = {
    className: "",
    centerMode: false,
    infinite: true,
    swipeToSlide: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 300,
    dots: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
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
          className: "center",
          centerMode: true,
        },
      },
    ],
  };
  return (
    <section>
      <div className={currentSlideNumber === 0 ? "relative" : "hidden"}>
        <div className="netogame_H1 px-10 pt-20 text-center text-2xl text-black lg:hidden">
          Introducing the Neto Game console and accessories
        </div>
      </div>

      <div className="flex flex-col-reverse py-20 text-black lg:flex-col">
        <div>
          <div className={currentSlideNumber === 0 ? "relative" : "hidden"}>
            <div className="relative">
              <Image
                placeholder="blur"
                src={carousel2_pic_1}
                width={0}
                height={0}
                alt=""
                className="relative lg:w-1/2 lg:translate-x-full"
              />
            </div>
            <div className="netogame_appear_animation z-20 flex flex-col items-center px-5 text-center text-black lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
              <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:mb-16 lg:block">
                Introducing the Neto Game console and accessories
              </div>
              <div className="font-SST_Light text-xl text-[#0068bd] lg:text-2xl xl:text-3xl">
                HyperGrip Wireless Controller
              </div>
              <div className="netogame_p netogame_appear_animation_mobile my-5 text-sm text-[#6b6b6b] lg:mb-6">
                For gamers seeking complete mastery, HyperGrip is the only
                choice. Your hands deserve the best , choose HyperGrip !
              </div>
              <div>
                <a className="netogame_appear_animation_mobile my-6 mr-1 cursor-pointer rounded-3xl bg-blue-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-blue-700 hover:outline-offset-2 hover:outline-blue-500">
                  Find out more
                </a>
                <a className="netogame_appear_animation_mobile my-6 ml-1 cursor-pointer rounded-3xl bg-red-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-red-700 hover:outline-offset-2 hover:outline-red-500">
                  Buy Now
                </a>
              </div>
              <div className="pt-5">
                Buy from <span className="font-SST_Bold"> $79,99</span>
              </div>
            </div>
          </div>
          <div className={currentSlideNumber === 1 ? "relative" : "hidden"}>
            <div className="relative">
              <div className="relative">
                <Image
                  placeholder="blur"
                  src={carousel2_pic_2}
                  width={0}
                  height={0}
                  alt=""
                  className="relative lg:w-1/2 lg:translate-x-full"
                />
              </div>
            </div>
            <div className="netogame_appear_animation z-20 flex flex-col items-center px-5 text-center text-black lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
              <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:mb-16 lg:block">
                Introducing the Neto Game console and accessories
              </div>
              <div className="font-SST_Light text-xl text-[#0068bd] lg:text-2xl xl:text-3xl">
                NetoGear Console
              </div>
              <div className="netogame_p netogame_appear_animation_mobile my-5 text-sm text-[#6b6b6b] lg:mb-6">
                Experience the next generation of handheld consoles
              </div>
              <div>
                <a className="netogame_appear_animation_mobile my-6 mr-1 cursor-pointer rounded-3xl bg-blue-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-blue-700 hover:outline-offset-2 hover:outline-blue-500">
                  Find out more
                </a>
                <a className="netogame_appear_animation_mobile my-6 ml-1 cursor-pointer rounded-3xl bg-red-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-red-700 hover:outline-offset-2 hover:outline-red-500">
                  Buy Now
                </a>
              </div>
              <div className="pt-5">
                Buy from <span className="font-SST_Bold"> $899,99</span>
              </div>
            </div>
          </div>
          <div className={currentSlideNumber === 2 ? "relative" : "hidden"}>
            <div className="relative">
              <div className="relative">
                <Image
                  placeholder="blur"
                  src={carousel2_pic_3}
                  width={0}
                  height={0}
                  alt=""
                  className="relative lg:w-1/2 lg:translate-x-full"
                />
              </div>
            </div>
            <div className="netogame_appear_animation z-20 flex flex-col items-center px-5 text-center text-black lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
              <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:mb-16 lg:block">
                Introducing the Neto Game console and accessories
              </div>
              <div className="font-SST_Light text-xl text-[#0068bd] lg:text-2xl xl:text-3xl">
                SkyTune Wireless Earbuds
              </div>
              <div className="netogame_p netogame_appear_animation_mobile my-5 text-sm text-[#6b6b6b] lg:mb-6">
                Experience the harmony of SkyTune, where every note meets the
                sky
              </div>
              <div>
                <a className="netogame_appear_animation_mobile my-6 mr-1 cursor-pointer rounded-3xl bg-blue-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-blue-700 hover:outline-offset-2 hover:outline-blue-500">
                  Find out more
                </a>
                <a className="netogame_appear_animation_mobile my-6 ml-1 cursor-pointer rounded-3xl bg-red-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-red-700 hover:outline-offset-2 hover:outline-red-500">
                  Buy Now
                </a>
              </div>
              <div className="pt-5">
                Buy from <span className="font-SST_Bold"> $299,99</span>
              </div>
            </div>
          </div>
          <div className={currentSlideNumber === 3 ? "relative" : "hidden"}>
            <div className="relative">
              <div className="relative">
                <Image
                  placeholder="blur"
                  src={carousel2_pic_4}
                  width={0}
                  height={0}
                  alt=""
                  className="relative lg:w-1/2 lg:translate-x-full"
                />
              </div>
            </div>
            <div className="netogame_appear_animation z-20 flex flex-col items-center px-5 text-center text-black lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
              <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:mb-16 lg:block">
                Introducing the Neto Game console and accessories
              </div>
              <div className="font-SST_Light text-xl text-[#0068bd] lg:text-2xl xl:text-3xl">
                Neto VR
              </div>
              <div className="netogame_p netogame_appear_animation_mobile my-5 text-sm text-[#6b6b6b] lg:mb-6">
                Immerse yourself in the future of virtual reality with Neto VR ,
                where limitless possibilities await your exploration
              </div>
              <div>
                <a className="netogame_appear_animation_mobile my-6 mr-1 cursor-pointer rounded-3xl bg-blue-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-blue-700 hover:outline-offset-2 hover:outline-blue-500">
                  Find out more
                </a>
                <a className="netogame_appear_animation_mobile my-6 ml-1 cursor-pointer rounded-3xl bg-red-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-red-700 hover:outline-offset-2 hover:outline-red-500">
                  Buy Now
                </a>
              </div>
              <div className="pt-5">
                Buy from <span className="font-SST_Bold"> $1000,99</span>
              </div>
            </div>
          </div>
          <div className={currentSlideNumber === 4 ? "relative" : "hidden"}>
            <div className="relative">
              <div className="relative">
                <Image
                  placeholder="blur"
                  src={carousel2_pic_5}
                  width={0}
                  height={0}
                  alt=""
                  className="relative lg:w-1/2 lg:translate-x-full"
                />
              </div>
            </div>
            <div className="netogame_appear_animation z-20 flex flex-col items-center px-5 text-center text-black lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
              <div className="netogame_H1 netogame_appear_animation_mobile hidden lg:mb-16 lg:block">
                Introducing the Neto Game console and accessories
              </div>
              <div className="font-SST_Light text-xl text-[#0068bd] lg:text-2xl xl:text-3xl">
                ThunderBeat Wireless Headset
              </div>
              <div className="netogame_p netogame_appear_animation_mobile my-5 text-sm text-[#6b6b6b] lg:mb-6">
                Feel the power of sound with ThunderBeat !
              </div>
              <div>
                <a className="netogame_appear_animation_mobile my-6 mr-1 cursor-pointer rounded-3xl bg-blue-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-blue-700 hover:outline-offset-2 hover:outline-blue-500">
                  Find out more
                </a>
                <a className="netogame_appear_animation_mobile my-6 ml-1 cursor-pointer rounded-3xl bg-red-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-red-700 hover:outline-offset-2 hover:outline-red-500">
                  Buy Now
                </a>
              </div>
              <div className="pt-5">
                Buy from <span className="font-SST_Bold">$199,99</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-container relative w-full pb-10">
          <Slider {...settings}>
            <div
              className="p-1"
              onClick={() => {
                setCurrentSlideNumber(0);
              }}
            >
              <Image
                placeholder="blur"
                className={
                  currentSlideNumber === 0
                    ? "main_small_image m-1 cursor-pointer rounded-xl p-1 outline-none outline-2 outline-offset-2 outline-blue-600"
                    : "main_small_image m-1 cursor-pointer rounded-xl p-1"
                }
                src={carousel2_pic_1}
                width={0}
                height={0}
                alt=""
              />
              <div
                className={
                  currentSlideNumber === 0
                    ? "text-center font-SST_Light text-blue-600"
                    : "text-center font-SST_Light"
                }
              >
                HyperGrip Wireless Controller
              </div>
            </div>
            <div
              className="p-1"
              onClick={() => {
                setCurrentSlideNumber(1);
              }}
            >
              <Image
                placeholder="blur"
                className={
                  currentSlideNumber === 1
                    ? "main_small_image m-1 cursor-pointer rounded-xl p-1 outline-none outline-2 outline-offset-2 outline-blue-600"
                    : "main_small_image m-1 cursor-pointer rounded-xl p-1"
                }
                src={carousel2_pic_2}
                width={0}
                height={0}
                alt=""
              />
              <div
                className={
                  currentSlideNumber === 1
                    ? "text-center font-SST_Light text-blue-600"
                    : "text-center font-SST_Light"
                }
              >
                NetoGear Console
              </div>
            </div>
            <div
              className="p-1"
              onClick={() => {
                setCurrentSlideNumber(2);
              }}
            >
              <Image
                placeholder="blur"
                className={
                  currentSlideNumber === 2
                    ? "main_small_image m-1 cursor-pointer rounded-xl p-1 outline-none outline-2 outline-offset-2 outline-blue-600"
                    : "main_small_image m-1 cursor-pointer rounded-xl p-1"
                }
                src={carousel2_pic_3}
                width={0}
                height={0}
                alt=""
              />
              <div
                className={
                  currentSlideNumber === 2
                    ? "text-center font-SST_Light text-blue-600"
                    : "text-center font-SST_Light"
                }
              >
                SkyTune Wireless Earbuds
              </div>
            </div>
            <div
              className="p-1"
              onClick={() => {
                setCurrentSlideNumber(3);
              }}
            >
              <Image
                placeholder="blur"
                className={
                  currentSlideNumber === 3
                    ? "main_small_image m-1 cursor-pointer rounded-xl p-1 outline-none outline-2 outline-offset-2 outline-blue-600"
                    : "main_small_image m-1 cursor-pointer rounded-xl p-1"
                }
                src={carousel2_pic_4}
                width={0}
                height={0}
                alt=""
              />
              <div
                className={
                  currentSlideNumber === 3
                    ? "text-center font-SST_Light text-blue-600"
                    : "text-center font-SST_Light"
                }
              >
                Neto VR
              </div>
            </div>
            <div
              className="p-1"
              onClick={() => {
                setCurrentSlideNumber(4);
              }}
            >
              <Image
                placeholder="blur"
                className={
                  currentSlideNumber === 4
                    ? "main_small_image m-1 cursor-pointer rounded-xl p-1 outline-none outline-2 outline-offset-2 outline-blue-600"
                    : "main_small_image m-1 cursor-pointer rounded-xl p-1"
                }
                src={carousel2_pic_5}
                width={0}
                height={0}
                alt=""
              />
              <div
                className={
                  currentSlideNumber === 4
                    ? "text-center font-SST_Light text-blue-600"
                    : "text-center font-SST_Light"
                }
              >
                ThunderBeat Wireless Headset
              </div>
            </div>
          </Slider>
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
        video_3.current.src = `netogame/video_sec_3.mp4`;
        video_2.current.src = `netogame/video_sec_2.mp4`;
        video_1.current.src = `netogame/video_sec_1.mp4`;
      } else {
        video_3.current.src = `netogame/video_sec_3_mobile.mp4`;

        video_2.current.src = `netogame/video_sec_2_mobile.mp4`;

        video_1.current.src = `netogame/video_sec_1_mobile.mp4`;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      if (video_1.current) observer.unobserve(video_1.current);
      if (video_2.current) observer.unobserve(video_2.current);
      if (video_3.current) observer.unobserve(video_3.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [options]);

  return (
    <section>
      <div className="text-black">
        <div className="relative">
          <div className="h-[60vh] overflow-hidden border lg:h-auto">
            <video
              ref={video_1}
              muted
              src="netogame/video_sec_1_mobile.mp4"
            ></video>
          </div>
          <div className="absolute top-1/2 z-10 lg:right-10 lg:top-1/2 lg:w-2/5 lg:-translate-y-1/2">
            <div className="netogame_H1 font-SST_Bold">Designed for speed</div>
            <div className="netogame_P">
              The fast, optimized platform makes it easier than ever to download
              and play. So jumping into your game takes less time and fewer
              clicks.
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[60vh] overflow-hidden border lg:h-auto">
            <video
              ref={video_2}
              muted
              src="netogame/video_sec_2_mobile.mp4"
            ></video>
          </div>
          <div className="absolute top-1/2 z-10 lg:left-10 lg:top-1/2 lg:w-2/5 lg:-translate-y-1/2">
            <div className="netogame_H1 font-SST_Bold">Designed for speed</div>
            <div className="netogame_P">
              The fast, optimized platform makes it easier than ever to download
              and play. So jumping into your game takes less time and fewer
              clicks.
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[60vh] overflow-hidden border lg:h-auto">
            <video
              ref={video_3}
              muted
              src="netogame/video_sec_3_mobile.mp4"
            ></video>
          </div>
          <div className="absolute top-1/2 z-10 lg:right-10 lg:top-1/2 lg:w-2/5 lg:-translate-y-1/2">
            <div className="netogame_H1 font-SST_Bold">Designed for speed</div>
            <div className="netogame_P">
              The fast, optimized platform makes it easier than ever to download
              and play. So jumping into your game takes less time and fewer
              clicks.
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
          <div className="my-5 ml-8 w-max border-b-4 border-white hover:cursor-pointer hover:[&_*]:-translate-y-1">
            <div className="font-SST_Bold text-5xl">MERCHANDISE</div>
          </div>
          {/* <a className="mb-5 mr-8 hidden h-max w-max cursor-pointer rounded-lg border bg-transparent px-8 py-3 text-base uppercase text-white transition-transform hover:-translate-y-1 lg:block">
            find out more
          </a> */}
        </div>
        <Slider {...settings}>
          <div className="w-full">
            <div className="relative mx-2 h-[50vh] cursor-pointer overflow-hidden rounded-xl sm:h-[45vh] md:h-[35vh] lg:h-[35vh] xl:h-[54vh]">
              <div className="carousel5_gradient absolute top-0 z-0 h-full w-full"></div>

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
              <div className="carousel5_gradient absolute top-0 z-0 h-full w-full"></div>

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
              <div className="carousel5_gradient absolute top-0 z-0 h-full w-full"></div>

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
              <div className="carousel5_gradient absolute top-0 z-0 h-full w-full"></div>

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
              <div className="carousel5_gradient absolute top-0 z-0 h-full w-full"></div>

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
const Sec2 = () => {
  return (
    <section>
      <div>
        <div className="relative">
          <div className="relative h-[400px] overflow-hidden sm:h-[600px] lg:h-full">
            <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div>
            <picture>
              <source
                srcSet="./netogame/sec2_mobile.webp"
                media="(max-width:1023.95px)"
              ></source>
              <source
                srcSet="./netogame/sec2_pc.webp"
                media="(min-width:1024px)"
              ></source>

              <Image
                placeholder="blur"
                src={sec2_pc}
                width={0}
                height={0}
                alt=""
                className=""
              />
            </picture>
          </div>
          <div className="z-20 flex flex-col items-center bg-[#1f1f1f] px-5 pb-20 text-center text-white lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:-translate-y-1/2 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
            <div className="netogame_H1">Feel the difference</div>
            <div className="netogame_p my-2 lg:mt-5">
              Explore the next frontier of virtual reality with Neto VR, where
              cutting-edge technology meets immersive experiences that redefine
              your perception of reality
            </div>
            <div className="py-5 pb-8">
              Buy from: <span className="font-SST_Bold"> $1000.99</span>
            </div>
            <div>
              <a className="netogame_appear_animation_mobile my-6 mr-1 cursor-pointer rounded-3xl bg-white px-3 py-3 font-SST_Bold text-base text-black outline-none outline-2 delay-75 hover:bg-white hover:outline-offset-2 hover:outline-white">
                Find out more
              </a>
              <a className="netogame_appear_animation_mobile my-6 ml-1 cursor-pointer rounded-3xl bg-red-600 px-3 py-3 font-SST_Bold text-base text-white outline-none outline-2 delay-75 hover:bg-red-700 hover:outline-offset-2 hover:outline-red-500">
                Buy Now
              </a>
            </div>
          </div>
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
          <div className="relative h-[400px] overflow-hidden sm:h-[600px] lg:h-full">
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
          <div className="w-full rounded-xl">
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
                  Share of the Week: Games Within Games
                </div>
                <div className="netogame_H3 mt-3 pb-20 lg:my-5">
                  Assemble your crew of Freegunner space outlaws and team up
                  with friends online, in this new multiplayer hero shooter
                  available August 23rd on PS5 and PC.¹
                </div>
              </div>
              <div className="relative bottom-0 text-black">
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
                    <div className="">adam michel</div>
                    <div className="text-xs text-black/50">
                      Content Communications Specialist, Sony Interactive
                      Entertainment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl">
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
                  Share of the Week: Games Within Games
                </div>
                <div className="netogame_H3 mt-3 pb-20 lg:my-5">
                  Assemble your crew of Freegunner space outlaws and team up
                  with friends online, in this new multiplayer hero shooter
                  available August 23rd on PS5 and PC.¹
                </div>
              </div>
              <div className="relative bottom-0 text-black">
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
                    <div className="">adam michel</div>
                    <div className="text-xs text-black/50">
                      Content Communications Specialist, Sony Interactive
                      Entertainment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl">
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
                  Share of the Week: Games Within Games
                </div>
                <div className="netogame_H3 mt-3 pb-20 lg:my-5">
                  Assemble your crew of Freegunner space outlaws and team up
                  with friends online, in this new multiplayer hero shooter
                  available August 23rd on PS5 and PC.¹
                </div>
              </div>
              <div className="relative bottom-0 text-black">
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
                    <div className="">adam michel</div>
                    <div className="text-xs text-black/50">
                      Content Communications Specialist, Sony Interactive
                      Entertainment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl">
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
                  Share of the Week: Games Within Games
                </div>
                <div className="netogame_H3 mt-3 pb-20 lg:my-5">
                  Assemble your crew of Freegunner space outlaws and team up
                  with friends online, in this new multiplayer hero shooter
                  available August 23rd on PS5 and PC.¹
                </div>
              </div>
              <div className="relative bottom-0 text-black">
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
                    <div className="">adam michel</div>
                    <div className="text-xs text-black/50">
                      Content Communications Specialist, Sony Interactive
                      Entertainment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl">
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
                  Share of the Week: Games Within Games
                </div>
                <div className="netogame_H3 mt-3 pb-20 lg:my-5">
                  Assemble your crew of Freegunner space outlaws and team up
                  with friends online, in this new multiplayer hero shooter
                  available August 23rd on PS5 and PC.¹
                </div>
              </div>
              <div className="relative bottom-0 text-black">
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
                    <div className="">adam michel</div>
                    <div className="text-xs text-black/50">
                      Content Communications Specialist, Sony Interactive
                      Entertainment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl">
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
                <div className="netogame_H2 mt-5">
                  Share of the Week: Games Within Games
                </div>
                <div className="netogame_H3 mt-3 pb-20 lg:my-5">
                  Assemble your crew of Freegunner space outlaws and team up
                  with friends online, in this new multiplayer hero shooter
                  available August 23rd on PS5 and PC.¹
                </div>
              </div>
              <div className="relative bottom-0 text-black">
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
                    <div className="">adam michel</div>
                    <div className="text-xs text-black/50">
                      Content Communications Specialist, Sony Interactive
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
      <div className="left-5 hidden text-[#616161] md:block lg:absolute">
        Visit Other NetoGame Channels
      </div>
      <div className="mx-auto flex items-center">
        <div className="mr-4 cursor-pointer">
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

      <Navbar2 />
      {/* <div className="!font-SST_Light">
        <Navbar />
      </div> */}

      <div className="mt-0">
        <Main_sec />
        <Category_sec />
        <div className="carousel3_bg mx-auto w-full py-20">
          <Carousel_3 />
        </div>
        <Social_bar />
        <Carousel_2 />
        <Video_sec />
        <div className="bg-[#18141a] py-16">
          <Carousel_5 />
        </div>
        <Sec2 />
        <Sec1 />

        <Carousel_4 />
        <Social_bar />
      </div>
    </main>
  );
}
