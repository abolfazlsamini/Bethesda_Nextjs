"use client";

import sec1_pc from "../../../public/life_elevated/sec1_pc.avif";
import divider from "../../../public/life_elevated/divider.png";
import sec2_pic1 from "../../../public/life_elevated/sec2_pic1.avif";
import sec2_pic2 from "../../../public/life_elevated/sec2_pic2.avif";
import sec2_pic3 from "../../../public/life_elevated/sec2_pic3.avif";
import sec3_pic1 from "../../../public/life_elevated/sec3_pic1.avif";
import sec3_pic2 from "../../../public/life_elevated/sec3_pic2.avif";
import sec4_pic1 from "../../../public/life_elevated/sec4_pic1.avif";
import logo from "../../../public/life_elevated/logo.avif";
import sec5_pic_1 from "../../../public/life_elevated/sec5_pic_1.avif";
import sec5_pic_2 from "../../../public/life_elevated/sec5_pic_2.avif";
import sec5_paging_1_active from "../../../public/life_elevated/sec5_paging_1_active.avif";
import sec5_paging_1_notactive from "../../../public/life_elevated/sec5_paging_1_notactive.avif";
import sec6_pic_1 from "../../../public/life_elevated/sec6_pic_1.avif";

import gradient_logo from "../../../public/life_elevated/gradient_logo.png";

import Image from "next/image";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

export default function LifeElevated() {
  const Navbar = () => {
    return (
      <section>
        <div className="fixed top-16 z-20 flex h-16 w-full items-center bg-[#131210] px-4">
          <a href="/life_elevated">
            <Image src={logo} alt="" width={0} height={0} className="w-32" />
          </a>
        </div>
      </section>
    );
  };
  const Sec1 = () => {
    return (
      <section>
        <div className="relative">
          <div>
            <picture>
              <source
                srcSet="./life_elevated/sec1_mobile.avif"
                media="(max-width:1023.95px)"
              ></source>

              <Image src={sec1_pc} alt="" width={0} height={0} />
            </picture>
          </div>
          <div className="absolute bottom-10 flex w-full flex-col items-center px-5 md:right-10 md:w-auto">
            <div className="pb-3 text-center font-Boxed_BoldItalic_webfont text-4xl md:pb-10">
              MAKE MAYHEM YOUR BUSINESS
            </div>
            <div>
              <a
                href="#"
                className="life_elevated_btn_bg mx-2 px-7 py-1 font-Boxed_BoldItalic_webfont text-2xl uppercase text-black"
              >
                Watch trailer
              </a>
              <a
                href="#"
                className="life_elevated_btn_bg mx-2 px-7 py-1 font-Boxed_BoldItalic_webfont text-2xl uppercase text-black"
              >
                buy now
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Sec2 = () => {
    const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <ChevronLeftIcon
          className={
            currentSlideNumber === 0
              ? "absolute -bottom-3 left-[30%] z-10 size-14 rounded-full p-1 text-[#f9da01] opacity-35 lg:block"
              : "absolute -bottom-3 left-[30%] z-10 size-14 cursor-pointer rounded-full p-1 text-[#f9da01] lg:block"
          }
          onClick={onClick}
        />
      );
    }
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <ChevronRightIcon
          className={
            currentSlideNumber === 2
              ? "absolute -bottom-3 right-[30%] z-10 size-14 rounded-full p-1 text-[#f9da01] opacity-35 lg:block"
              : "absolute -bottom-3 right-[30%] z-10 size-14 cursor-pointer rounded-full p-1 text-[#f9da01] lg:block"
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
      centerPadding: "0px",
      className: "center",
      centerMode: true,
      slidesToShow: 1,
      speed: 300,
      swipeToSlide: false,
      swipe: false,
      dots: true,
      slidesToScroll: 1,
      arrows: true,
      beforeChange: (oldIndex, newIndex) => {
        setCurrentSlideNumber(newIndex);
      },
      customPaging: (i) => (
        <div
          className={
            i === currentSlideNumber
              ? "absolute -bottom-3 size-3 rounded-full border border-black text-[#389cb1] hover:opacity-85"
              : "absolute -bottom-3 size-3 rounded-full border border-black text-white hover:opacity-85"
          }
        >
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="currentcolor"
            stroke="#ffffff"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 0L15.4282 4V12L8.5 16L1.5718 12V4L8.5 0Z"
              fill="#currentcolor"
            />
          </svg>
        </div>
      ),
    };
    return (
      <section>
        <div className="life_elevated_sec2_bg_1 relative pt-10">
          <Image
            width={0}
            height={0}
            alt=""
            src={divider}
            className="absolute top-0 h-8 w-full"
          />
          <div className="mx-auto max-w-7xl pt-14">
            <div className="px-4 pb-16">
              <div className="pb-3 text-center font-Boxed_BoldItalic_webfont text-5xl text-[#f9da01] md:pb-10 lg:text-6xl">
                MAKE MAYHEM YOUR BUSINESS
              </div>
              <div className="font-Sofia_Pro_Regular lg:text-lg 2xl:text-xl">
                Within the perpetually war-torn metropolis of Promethea, you'll
                control Anu, Octavio, and Fran on the worst day of their lives.
                Help these three lovable losers as they endeavor to change the
                world (and maybe even save it)! Face down a planetary invasion,
                vicious vault monster, and cold-hearted capitalist in this
                cinematic thrill ride where what happens next is up to you! Meet
                a motley cast full of misfits, assassin bots, and talking guns
                in this race to the top!
              </div>
            </div>
            <div>
              <div>
                <div className="hidden justify-center pb-20 md:flex">
                  <Image
                    src={sec2_pic1}
                    alt=""
                    width={0}
                    height={0}
                    className="px-5 md:w-1/3"
                  />
                  <Image
                    src={sec2_pic2}
                    alt=""
                    width={0}
                    height={0}
                    className="px-5 md:w-1/3"
                  />
                  <Image
                    src={sec2_pic3}
                    alt=""
                    width={0}
                    height={0}
                    className="px-5 md:w-1/3"
                  />
                </div>
                <div className="pb-20 md:hidden">
                  <Slider
                    ref={(slider) => {
                      sliderRef = slider;
                    }}
                    {...settings}
                    className="pb-5"
                  >
                    <Image
                      src={sec2_pic1}
                      alt=""
                      width={0}
                      height={0}
                      className="px-5 md:w-1/3"
                    />
                    <Image
                      src={sec2_pic2}
                      alt=""
                      width={0}
                      height={0}
                      className="px-5 md:w-1/3"
                    />
                    <Image
                      src={sec2_pic3}
                      alt=""
                      width={0}
                      height={0}
                      className="px-5 md:w-1/3"
                    />
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Sec3 = () => {
    const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <ChevronLeftIcon
          className={
            currentSlideNumber === 0
              ? "absolute -bottom-3 left-[30%] z-10 size-14 rounded-full p-1 text-[#f9da01] opacity-35 lg:block"
              : "absolute -bottom-3 left-[30%] z-10 size-14 cursor-pointer rounded-full p-1 text-[#f9da01] lg:block"
          }
          onClick={onClick}
        />
      );
    }
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <ChevronRightIcon
          className={
            currentSlideNumber === 1
              ? "absolute -bottom-3 right-[30%] z-10 size-14 rounded-full p-1 text-[#f9da01] opacity-35 lg:block"
              : "absolute -bottom-3 right-[30%] z-10 size-14 cursor-pointer rounded-full p-1 text-[#f9da01] lg:block"
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
      centerPadding: "0px",
      className: "center",
      centerMode: true,
      slidesToShow: 1,
      speed: 300,
      swipeToSlide: false,
      swipe: false,
      dots: true,
      slidesToScroll: 1,
      arrows: true,
      beforeChange: (oldIndex, newIndex) => {
        setCurrentSlideNumber(newIndex);
      },
      customPaging: (i) => (
        <div
          className={
            i === currentSlideNumber
              ? "absolute -bottom-3 size-3 rounded-full border border-black text-[#389cb1] hover:opacity-85"
              : "absolute -bottom-3 size-3 rounded-full border border-black text-white hover:opacity-85"
          }
        >
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="currentcolor"
            stroke="#ffffff"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 0L15.4282 4V12L8.5 16L1.5718 12V4L8.5 0Z"
              fill="#currentcolor"
            />
          </svg>
        </div>
      ),
    };
    return (
      <section>
        <div className="life_elevated_sec2_bg_3 relative pt-10">
          <Image
            width={0}
            height={0}
            alt=""
            src={divider}
            className="absolute top-0 h-8 w-full"
          />
          <div className="mx-auto max-w-6xl pt-14">
            <div>
              <div>
                <div className="hidden justify-between px-20 pb-20 md:flex">
                  <div className="flex flex-col items-center px-5 md:w-[40%]">
                    <Image
                      src={sec3_pic1}
                      alt=""
                      width={0}
                      height={0}
                      className="p-3"
                    />
                    <div className="flex flex-col items-center">
                      <div className="pb-3 text-center font-Boxed_BoldItalic_webfont text-2xl md:pb-10">
                        NEW TALES FROM THE BORDERLANDS STANDARD EDITION
                      </div>
                      <a
                        href="#"
                        className="life_elevated_btn_bg mx-2 px-7 py-1 font-Boxed_BoldItalic_webfont text-2xl uppercase text-black"
                      >
                        buy now
                      </a>
                    </div>
                    <div className="self-start pb-3 pt-5 font-Sofia_Pro_Regular text-xl font-bold">
                      Standard Includes:
                    </div>
                    <ul
                      style={{ paddingInlineStart: "50px" }}
                      className="list-disc self-start"
                    >
                      <li className="pb-3 font-Sofia_Pro_Regular text-xl">
                        Full Game
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center px-5 md:w-[40%]">
                    <Image
                      src={sec3_pic2}
                      alt=""
                      width={0}
                      height={0}
                      className="p-3"
                    />
                    <div className="flex flex-col items-center">
                      <div className="pb-3 text-center font-Boxed_BoldItalic_webfont text-2xl md:pb-10">
                        NEW TALES FROM THE BORDERLANDS STANDARD EDITION
                      </div>
                      <a
                        href="#"
                        className="life_elevated_btn_bg mx-2 px-7 py-1 font-Boxed_BoldItalic_webfont text-2xl uppercase text-black"
                      >
                        buy now
                      </a>
                    </div>
                    <div className="self-start pb-3 pt-5 font-Sofia_Pro_Regular text-xl font-bold">
                      Deluxe Includes:
                    </div>
                    <ul
                      style={{ paddingInlineStart: "50px" }}
                      className="list-disc self-start"
                    >
                      <li className="pb-3 font-Sofia_Pro_Regular text-xl">
                        Full Game
                      </li>
                      <li className="pb-3 font-Sofia_Pro_Regular text-xl">
                        Tales from the Borderlands Full Game
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pb-20 md:hidden">
                  <Slider
                    ref={(slider) => {
                      sliderRef = slider;
                    }}
                    {...settings}
                    className="pb-5"
                  >
                    <div className="px-8">
                      <div className="flex flex-col items-center">
                        <Image
                          src={sec3_pic1}
                          alt=""
                          width={0}
                          height={0}
                          className=""
                        />
                        <div className="py-3 text-center font-Boxed_BoldItalic_webfont text-2xl md:pb-10">
                          NEW TALES FROM THE BORDERLANDS STANDARD EDITION
                        </div>
                        <a
                          href="#"
                          className="life_elevated_btn_bg mx-2 px-7 py-1 font-Boxed_BoldItalic_webfont text-2xl uppercase text-black"
                        >
                          buy now
                        </a>
                      </div>
                      <div className="pb-3 pt-5 font-Sofia_Pro_Regular text-xl font-bold md:pb-10">
                        Deluxe Includes:
                      </div>
                      <ul
                        style={{ paddingInlineStart: "50px" }}
                        className="list-disc self-start"
                      >
                        <li className="pb-3 font-Sofia_Pro_Regular text-xl">
                          Full Game
                        </li>
                      </ul>
                    </div>
                    <div className="px-8">
                      <div className="flex flex-col items-center">
                        <Image
                          src={sec3_pic2}
                          alt=""
                          width={0}
                          height={0}
                          className=""
                        />
                        <div className="py-3 text-center font-Boxed_BoldItalic_webfont text-2xl md:pb-10">
                          NEW TALES FROM THE BORDERLANDS STANDARD EDITION
                        </div>
                        <a
                          href="#"
                          className="life_elevated_btn_bg mx-2 px-7 py-1 font-Boxed_BoldItalic_webfont text-2xl uppercase text-black"
                        >
                          buy now
                        </a>
                      </div>
                      <div className="pb-3 pt-5 font-Sofia_Pro_Regular text-xl font-bold md:pb-10">
                        Deluxe Includes:
                      </div>
                      <ul
                        style={{ paddingInlineStart: "50px" }}
                        className="list-disc self-start"
                      >
                        <li className="pb-3 font-Sofia_Pro_Regular text-xl">
                          Full Game
                        </li>
                        <li className="pb-3 font-Sofia_Pro_Regular text-xl">
                          Tales from the Borderlands Full Game
                        </li>
                      </ul>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Sec4 = () => {
    const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <ChevronLeftIcon
          className={
            currentSlideNumber === 0
              ? "absolute -bottom-3 left-[12%] z-10 size-14 cursor-pointer rounded-full p-1 text-[#f9da01] md:left-[35%] lg:block"
              : "absolute -bottom-3 left-[12%] z-10 size-14 cursor-pointer rounded-full p-1 text-[#f9da01] md:left-[35%] lg:block"
          }
          onClick={onClick}
        />
      );
    }
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <ChevronRightIcon
          className={
            currentSlideNumber === 4
              ? "absolute -bottom-3 right-[12%] z-10 size-14 cursor-pointer rounded-full p-1 text-[#f9da01] md:right-[35%] lg:block"
              : "absolute -bottom-3 right-[12%] z-10 size-14 cursor-pointer rounded-full p-1 text-[#f9da01] md:right-[35%] lg:block"
          }
          onClick={onClick}
        />
      );
    }
    let sliderRef = useRef(null);
    const settings = {
      infinite: false,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
      centerPadding: "0px",
      centerMode: false,
      slidesToShow: 3,
      speed: 300,
      swipeToSlide: false,
      swipe: false,
      slidesToScroll: 3,
      dots: true,
      arrows: true,
      beforeChange: (oldIndex, newIndex) => {
        setCurrentSlideNumber(newIndex);
      },
      customPaging: (i) => {
        return (
          <>
            <div
              className={
                i === currentSlideNumber
                  ? "absolute -bottom-3 size-3 cursor-default rounded-full border border-black text-[#389cb1] md:hidden"
                  : "absolute -bottom-3 size-3 cursor-default rounded-full border border-black text-white md:hidden"
              }
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="currentcolor"
                stroke="#ffffff"
                strokeWidth="2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 0L15.4282 4V12L8.5 16L1.5718 12V4L8.5 0Z"
                  fill="#currentcolor"
                />
              </svg>
            </div>
            <div
              className={
                i === currentSlideNumber / 3
                  ? "absolute -bottom-3 hidden size-3 cursor-default rounded-full border border-black text-[#389cb1] md:block"
                  : "absolute -bottom-3 hidden size-3 cursor-default rounded-full border border-black text-white md:block"
              }
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="currentcolor"
                stroke="#ffffff"
                strokeWidth="2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 0L15.4282 4V12L8.5 16L1.5718 12V4L8.5 0Z"
                  fill="#currentcolor"
                />
              </svg>
            </div>
          </>
        );
      },
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1750,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 4034,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    };
    return (
      <section>
        <div className="life_elevated_sec2_bg_2 relative pt-10">
          <Image
            width={0}
            height={0}
            alt=""
            src={divider}
            className="absolute top-0 z-50 h-8 w-full"
          />
          <div className="mx-auto max-w-6xl pt-14">
            <div>
              <div>
                <div className="pb-20">
                  <Slider
                    ref={(slider) => {
                      sliderRef = slider;
                    }}
                    {...settings}
                    className="pb-5"
                  >
                    <div className="px-8">
                      <div className="flex flex-col items-center bg-black">
                        <Image
                          src={sec4_pic1}
                          alt=""
                          width={0}
                          height={0}
                          className=""
                        />
                        <div className="flex flex-col px-4">
                          <div className="py-3 text-center font-Boxed_BoldItalic_webfont text-2xl md:pb-10">
                            NEW TALES FROM THE BORDERLANDS STANDARD EDITION
                          </div>
                          <a className="cursor-pointer pb-6 pl-3 pt-32 font-Sofia_Pro_Regular text-xl font-bold uppercase italic text-[#4bd1ed] hover:text-white md:pb-10">
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="px-8">
                      <div className="flex flex-col items-center bg-black">
                        <Image
                          src={sec4_pic1}
                          alt=""
                          width={0}
                          height={0}
                          className=""
                        />
                        <div className="flex flex-col px-4">
                          <div className="py-3 text-center font-Boxed_BoldItalic_webfont text-2xl md:pb-10">
                            NEW TALES FROM THE BORDERLANDS STANDARD EDITION
                          </div>
                          <a className="cursor-pointer pb-6 pl-3 pt-32 font-Sofia_Pro_Regular text-xl font-bold uppercase italic text-[#4bd1ed] hover:text-white md:pb-10">
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="px-8">
                      <div className="flex flex-col items-center bg-black">
                        <Image
                          src={sec4_pic1}
                          alt=""
                          width={0}
                          height={0}
                          className=""
                        />
                        <div className="flex flex-col px-4">
                          <div className="py-3 text-center font-Boxed_BoldItalic_webfont text-2xl md:pb-10">
                            NEW TALES FROM THE BORDERLANDS STANDARD EDITION
                          </div>
                          <a className="cursor-pointer pb-6 pl-3 pt-32 font-Sofia_Pro_Regular text-xl font-bold uppercase italic text-[#4bd1ed] hover:text-white md:pb-10">
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="px-8">
                      <div className="flex flex-col items-center bg-black">
                        <Image
                          src={sec4_pic1}
                          alt=""
                          width={0}
                          height={0}
                          className=""
                        />
                        <div className="flex flex-col px-4">
                          <div className="py-3 text-center font-Boxed_BoldItalic_webfont text-2xl md:pb-10">
                            NEW TALES FROM THE BORDERLANDS STANDARD EDITION
                          </div>
                          <a className="cursor-pointer pb-6 pl-3 pt-32 font-Sofia_Pro_Regular text-xl font-bold uppercase italic text-[#4bd1ed] hover:text-white md:pb-10">
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="px-8">
                      <div className="flex flex-col items-center bg-black">
                        <Image
                          src={sec4_pic1}
                          alt=""
                          width={0}
                          height={0}
                          className=""
                        />
                        <div className="flex flex-col px-4">
                          <div className="py-3 text-center font-Boxed_BoldItalic_webfont text-2xl md:pb-10">
                            NEW TALES FROM THE BORDERLANDS STANDARD EDITION
                          </div>
                          <a className="cursor-pointer pb-6 pl-3 pt-32 font-Sofia_Pro_Regular text-xl font-bold uppercase italic text-[#4bd1ed] hover:text-white md:pb-10">
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="px-8">
                      <div className="flex flex-col items-center bg-black">
                        <Image
                          src={sec4_pic1}
                          alt=""
                          width={0}
                          height={0}
                          className=""
                        />
                        <div className="flex flex-col px-4">
                          <div className="py-3 text-center font-Boxed_BoldItalic_webfont text-2xl md:pb-10">
                            NEW TALES FROM THE BORDERLANDS STANDARD EDITION
                          </div>
                          <a className="cursor-pointer pb-6 pl-3 pt-32 font-Sofia_Pro_Regular text-xl font-bold uppercase italic text-[#4bd1ed] hover:text-white md:pb-10">
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="px-8">
                      <div className="flex flex-col items-center bg-black">
                        <Image
                          src={sec4_pic1}
                          alt=""
                          width={0}
                          height={0}
                          className=""
                        />
                        <div className="flex flex-col px-4">
                          <div className="py-3 text-center font-Boxed_BoldItalic_webfont text-2xl md:pb-10">
                            NEW TALES FROM THE BORDERLANDS STANDARD EDITION
                          </div>
                          <a className="cursor-pointer pb-6 pl-3 pt-32 font-Sofia_Pro_Regular text-xl font-bold uppercase italic text-[#4bd1ed] hover:text-white md:pb-10">
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="px-8">
                      <div className="flex flex-col items-center bg-black">
                        <Image
                          src={sec4_pic1}
                          alt=""
                          width={0}
                          height={0}
                          className=""
                        />
                        <div className="flex flex-col px-4">
                          <div className="py-3 text-center font-Boxed_BoldItalic_webfont text-2xl md:pb-10">
                            NEW TALES FROM THE BORDERLANDS STANDARD EDITION
                          </div>
                          <a className="cursor-pointer pb-6 pl-3 pt-32 font-Sofia_Pro_Regular text-xl font-bold uppercase italic text-[#4bd1ed] hover:text-white md:pb-10">
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="px-8">
                      <div className="flex flex-col items-center bg-black">
                        <Image
                          src={sec4_pic1}
                          alt=""
                          width={0}
                          height={0}
                          className=""
                        />
                        <div className="flex flex-col px-4">
                          <div className="py-3 text-center font-Boxed_BoldItalic_webfont text-2xl md:pb-10">
                            NEW TALES FROM THE BORDERLANDS STANDARD EDITION
                          </div>
                          <a className="cursor-pointer pb-6 pl-3 pt-32 font-Sofia_Pro_Regular text-xl font-bold uppercase italic text-[#4bd1ed] hover:text-white md:pb-10">
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Sec5 = () => {
    const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <ChevronLeftIcon
          className={
            currentSlideNumber === 0
              ? "absolute -bottom-3 left-[30%] z-10 size-14 cursor-pointer rounded-full p-1 text-[#f9da01] md:left-[35%] lg:block"
              : "absolute -bottom-3 left-[30%] z-10 size-14 cursor-pointer rounded-full p-1 text-[#f9da01] md:left-[35%] lg:block"
          }
          onClick={onClick}
        />
      );
    }
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <ChevronRightIcon
          className={
            currentSlideNumber === 4
              ? "absolute -bottom-3 right-[30%] z-10 size-14 cursor-pointer rounded-full p-1 text-[#f9da01] md:right-[35%] lg:block"
              : "absolute -bottom-3 right-[30%] z-10 size-14 cursor-pointer rounded-full p-1 text-[#f9da01] md:right-[35%] lg:block"
          }
          onClick={onClick}
        />
      );
    }
    let sliderRef = useRef(null);
    let sliderRef2 = useRef(null);
    const settings = {
      infinite: false,
      // prevArrow: <SamplePrevArrow />,
      // nextArrow: <SampleNextArrow />,
      centerPadding: "0px",
      centerMode: false,
      slidesToShow: 1,
      speed: 900,
      fade: true,
      swipeToSlide: false,
      swipe: false,
      slidesToScroll: 1,
      dots: false,
      dotsClass: "slick-dots slick-thumb",
      arrows: false,
      beforeChange: (oldIndex, newIndex) => {
        setCurrentSlideNumber(newIndex);
      },
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 4034,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const settings2 = {
      infinite: false,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
      centerPadding: "0px",
      centerMode: false,
      slidesToShow: 4,
      speed: 400,
      swipeToSlide: false,
      swipe: false,
      slidesToScroll: 4,
      dots: true,
      arrows: true,
      beforeChange: (oldIndex, newIndex) => {
        setCurrentSlideNumber(newIndex);
      },
      customPaging: (i) => {
        return (
          <div
            className={
              i === currentSlideNumber / 4
                ? "absolute -bottom-3 size-3 cursor-default rounded-full border border-black text-[#389cb1] md:hidden"
                : "absolute -bottom-3 size-3 cursor-default rounded-full border border-black text-white md:hidden"
            }
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="currentcolor"
              stroke="#ffffff"
              strokeWidth="2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 0L15.4282 4V12L8.5 16L1.5718 12V4L8.5 0Z"
                fill="#currentcolor"
              />
            </svg>
          </div>
        );
      },
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToScroll: 4,
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToScroll: 4,
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 1750,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 4034,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
      ],
    };
    return (
      <section>
        <div className="relative pb-10 pt-2">
          <Image
            width={0}
            height={0}
            alt=""
            src={divider}
            className="absolute top-0 z-10 h-8 w-full"
          />
          <div>
            <div className="slider-container">
              <Slider
                ref={(slider) => {
                  sliderRef = slider;
                }}
                {...settings}
                className="pb-5"
              >
                <div className="relative pb-10">
                  <div className="flex h-[600px] flex-col items-center bg-black md:h-auto">
                    <Image
                      src={sec5_pic_1}
                      alt=""
                      width={0}
                      height={0}
                      className="h-full object-cover"
                    />
                    <div className="absolute bottom-0 max-w-4xl px-4 md:bottom-10">
                      <div className="pb-3 text-center font-Boxed_BoldItalic_webfont text-4xl text-[#f9da01] md:pb-10">
                        ANU
                      </div>
                      <div className="font-Sofia_Pro_Regular text-lg">
                        Dr. Anuradha Dhar is an enthusiastic-but-tense genius
                        who abhors violence and killing. Despite being prone to
                        panic attacks when things get hectic, Anu always trusts
                        in the power of science to somehow make it all better.
                        Did we mention she works for Atlas? Well, you know what
                        they say: "If you can't beat 'em, join the company and
                        try to make positive change internally!"
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative pb-10">
                  <div className="flex h-[600px] flex-col items-center bg-black md:h-auto">
                    <Image
                      src={sec5_pic_2}
                      alt=""
                      width={0}
                      height={0}
                      className="h-full object-cover"
                    />
                    <div className="absolute bottom-0 max-w-4xl px-4 md:bottom-10">
                      <div className="pb-3 text-center font-Boxed_BoldItalic_webfont text-4xl text-[#f9da01] md:pb-10">
                        ANU
                      </div>
                      <div className="font-Sofia_Pro_Regular text-lg">
                        Dr. Anuradha Dhar is an enthusiastic-but-tense genius
                        who abhors violence and killing. Despite being prone to
                        panic attacks when things get hectic, Anu always trusts
                        in the power of science to somehow make it all better.
                        Did we mention she works for Atlas? Well, you know what
                        they say: "If you can't beat 'em, join the company and
                        try to make positive change internally!"
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="mx-auto max-w-6xl">
              <div className="hidden justify-evenly md:flex">
                <Image
                  src={
                    currentSlideNumber === 0
                      ? sec5_paging_1_active
                      : sec5_paging_1_notactive
                  }
                  width={0}
                  height={0}
                  alt=""
                  onClick={() => sliderRef.slickGoTo(0)}
                  className={
                    currentSlideNumber === 0
                      ? "w-1/12 border-2"
                      : "w-1/12 cursor-pointer hover:border-2"
                  }
                />
                <Image
                  src={
                    currentSlideNumber === 1
                      ? sec5_paging_1_active
                      : sec5_paging_1_notactive
                  }
                  width={0}
                  height={0}
                  alt=""
                  onClick={() => sliderRef.slickGoTo(1)}
                  className={
                    currentSlideNumber === 1
                      ? "w-1/12 border-2"
                      : "w-1/12 cursor-pointer hover:border-2"
                  }
                />
                <Image
                  src={
                    currentSlideNumber === 2
                      ? sec5_paging_1_active
                      : sec5_paging_1_notactive
                  }
                  width={0}
                  height={0}
                  alt=""
                  onClick={() => setCurrentSlideNumber(2)}
                  className={
                    currentSlideNumber === 2
                      ? "w-1/12 border-2"
                      : "w-1/12 cursor-pointer hover:border-2"
                  }
                />
                <Image
                  src={
                    currentSlideNumber === 3
                      ? sec5_paging_1_active
                      : sec5_paging_1_notactive
                  }
                  width={0}
                  height={0}
                  alt=""
                  onClick={() => setCurrentSlideNumber(3)}
                  className={
                    currentSlideNumber === 3
                      ? "w-1/12 border-2"
                      : "w-1/12 cursor-pointer hover:border-2"
                  }
                />
                <Image
                  src={
                    currentSlideNumber === 4
                      ? sec5_paging_1_active
                      : sec5_paging_1_notactive
                  }
                  width={0}
                  height={0}
                  alt=""
                  onClick={() => setCurrentSlideNumber(4)}
                  className={
                    currentSlideNumber === 4
                      ? "w-1/12 border-2"
                      : "w-1/12 cursor-pointer hover:border-2"
                  }
                />
                <Image
                  src={
                    currentSlideNumber === 5
                      ? sec5_paging_1_active
                      : sec5_paging_1_notactive
                  }
                  width={0}
                  height={0}
                  alt=""
                  onClick={() => setCurrentSlideNumber(5)}
                  className={
                    currentSlideNumber === 5
                      ? "w-1/12 border-2"
                      : "w-1/12 cursor-pointer hover:border-2"
                  }
                />
                <Image
                  src={
                    currentSlideNumber === 6
                      ? sec5_paging_1_active
                      : sec5_paging_1_notactive
                  }
                  width={0}
                  height={0}
                  alt=""
                  onClick={() => setCurrentSlideNumber(6)}
                  className={
                    currentSlideNumber === 6
                      ? "w-1/12 border-2"
                      : "w-1/12 cursor-pointer hover:border-2"
                  }
                />
                <Image
                  src={
                    currentSlideNumber === 7
                      ? sec5_paging_1_active
                      : sec5_paging_1_notactive
                  }
                  width={0}
                  height={0}
                  alt=""
                  onClick={() => setCurrentSlideNumber(7)}
                  className={
                    currentSlideNumber === 7
                      ? "w-1/12 border-2"
                      : "w-1/12 cursor-pointer hover:border-2"
                  }
                />
              </div>
              <div className="block md:hidden">
                <div className="slider-container">
                  <Slider
                    ref={(slider) => {
                      sliderRef2 = slider;
                    }}
                    {...settings2}
                    className="pb-5"
                  >
                    <div className="w-1/12 p-2">
                      <Image
                        src={
                          currentSlideNumber === 0
                            ? sec5_paging_1_active
                            : sec5_paging_1_notactive
                        }
                        width={0}
                        height={0}
                        alt=""
                        onClick={() => sliderRef.slickGoTo(0)}
                        className={currentSlideNumber === 0 ? "border-2" : ""}
                      />
                    </div>
                    <div className="w-1/12 p-2">
                      <Image
                        src={
                          currentSlideNumber === 1
                            ? sec5_paging_1_active
                            : sec5_paging_1_notactive
                        }
                        width={0}
                        height={0}
                        alt=""
                        onClick={() => sliderRef.slickGoTo(1)}
                        className={currentSlideNumber === 1 ? "border-2" : ""}
                      />
                    </div>
                    <div className="w-1/12 p-2">
                      <Image
                        src={
                          currentSlideNumber === 2
                            ? sec5_paging_1_active
                            : sec5_paging_1_notactive
                        }
                        width={0}
                        height={0}
                        alt=""
                        onClick={() => sliderRef.slickGoTo(2)}
                        className={currentSlideNumber === 2 ? "border-2" : ""}
                      />
                    </div>
                    <div className="w-1/12 p-2">
                      <Image
                        src={
                          currentSlideNumber === 3
                            ? sec5_paging_1_active
                            : sec5_paging_1_notactive
                        }
                        width={0}
                        height={0}
                        alt=""
                        onClick={() => sliderRef.slickGoTo(3)}
                        className={currentSlideNumber === 3 ? "border-2" : ""}
                      />
                    </div>
                    <div className="w-1/12 p-2">
                      <Image
                        src={
                          currentSlideNumber === 4
                            ? sec5_paging_1_active
                            : sec5_paging_1_notactive
                        }
                        width={0}
                        height={0}
                        alt=""
                        onClick={() => sliderRef.slickGoTo(4)}
                        className={currentSlideNumber === 4 ? "border-2" : ""}
                      />
                    </div>
                    <div className="w-1/12 p-2">
                      <Image
                        src={
                          currentSlideNumber === 5
                            ? sec5_paging_1_active
                            : sec5_paging_1_notactive
                        }
                        width={0}
                        height={0}
                        alt=""
                        onClick={() => sliderRef.slickGoTo(5)}
                        className={currentSlideNumber === 5 ? "border-2" : ""}
                      />
                    </div>
                    <div className="w-1/12 p-2">
                      <Image
                        src={
                          currentSlideNumber === 6
                            ? sec5_paging_1_active
                            : sec5_paging_1_notactive
                        }
                        width={0}
                        height={0}
                        alt=""
                        onClick={() => sliderRef.slickGoTo(6)}
                        className={currentSlideNumber === 6 ? "border-2" : ""}
                      />
                    </div>
                    <div className="w-1/12 p-2">
                      <Image
                        src={
                          currentSlideNumber === 7
                            ? sec5_paging_1_active
                            : sec5_paging_1_notactive
                        }
                        width={0}
                        height={0}
                        alt=""
                        onClick={() => sliderRef.slickGoTo(7)}
                        className={currentSlideNumber === 7 ? "border-2" : ""}
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Sec6 = () => {
    return (
      <section>
        <div className="life_elevated_sec2_bg_1 relative pt-10">
          <Image
            width={0}
            height={0}
            alt=""
            src={divider}
            className="absolute top-0 h-8 w-full"
          />
          <div>
            <div className="pb-3 text-center font-Boxed_BoldItalic_webfont text-5xl text-[#f9da01] md:pb-10 md:text-6xl">
              IT'S TIME TO FIGHT BACK
            </div>
            <div className="mx-auto max-w-7xl justify-between px-5 pb-20 md:flex">
              <div className="flex flex-col items-center px-5 md:w-[40%]">
                <Image
                  src={sec6_pic_1}
                  alt=""
                  width={0}
                  height={0}
                  className="p-3"
                />
                <div className="flex flex-col items-center">
                  <div className="self-start pb-3 font-Boxed_BoldItalic_webfont text-3xl text-[#f9da01] md:pb-10 md:text-xl md:leading-10">
                    THE UNDERDOG STORY OF THREE LOVABLE LOSERS
                  </div>

                  <div className="pb-3 pt-5 text-center font-Sofia_Pro_Regular text-xl">
                    Decide the fates of altruistic scientist Anu, her ambitious,
                    "streetwise" brother Octavio, and the fierce,
                    frogurt-slinging Fran. With nothing left to lose and
                    everything to gain, you'll claw and con your way through
                    this thrilling five-part story full of gun-toting goons,
                    otherworldly beasts, and delicious tacos.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center px-5 md:w-[40%]">
                <Image
                  src={sec6_pic_1}
                  alt=""
                  width={0}
                  height={0}
                  className="p-3"
                />
                <div className="flex flex-col items-center">
                  <div className="self-start pb-3 font-Boxed_BoldItalic_webfont text-3xl text-[#f9da01] md:pb-10 md:text-xl md:leading-10">
                    THE UNDERDOG STORY OF THREE LOVABLE LOSERS
                  </div>

                  <div className="pb-3 pt-5 text-center font-Sofia_Pro_Regular text-xl">
                    Decide the fates of altruistic scientist Anu, her ambitious,
                    "streetwise" brother Octavio, and the fierce,
                    frogurt-slinging Fran. With nothing left to lose and
                    everything to gain, you'll claw and con your way through
                    this thrilling five-part story full of gun-toting goons,
                    otherworldly beasts, and delicious tacos.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center px-5 md:w-[40%]">
                <Image
                  src={sec6_pic_1}
                  alt=""
                  width={0}
                  height={0}
                  className="p-3"
                />
                <div className="flex flex-col items-center">
                  <div className="self-start pb-3 font-Boxed_BoldItalic_webfont text-3xl text-[#f9da01] md:pb-10 md:text-xl md:leading-10">
                    THE UNDERDOG STORY OF THREE LOVABLE LOSERS
                  </div>

                  <div className="pb-3 pt-5 text-center font-Sofia_Pro_Regular text-xl">
                    Decide the fates of altruistic scientist Anu, her ambitious,
                    "streetwise" brother Octavio, and the fierce,
                    frogurt-slinging Fran. With nothing left to lose and
                    everything to gain, you'll claw and con your way through
                    this thrilling five-part story full of gun-toting goons,
                    otherworldly beasts, and delicious tacos.
                  </div>
                </div>
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
        <div className="gradient_bg_orbitexplore mx-auto mt-4 flex w-11/12 flex-col items-center rounded-[3rem] px-10 py-10 text-center md:w-full">
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
    <main className="mt-32">
      <Navbar />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6 />
      <section className="fixed_bg pt-5">
        <div className="mx-auto mb-10 min-h-40 max-w-7xl lg:flex">
          <Gradient_sec />
        </div>
        <div className="mx-auto min-h-40 lg:flex">
          <SocialMedia_sec />
        </div>
      </section>
    </main>
  );
}
