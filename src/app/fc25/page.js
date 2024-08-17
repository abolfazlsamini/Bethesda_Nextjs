"use client";
import Image from "next/image";
import sec_1_pic_pc from "../../../public/fc25/sec_1_pic_pc.jpg";
import sec_2_pic from "../../../public/fc25/sec_2_pic.jpg";
import carousel_1_pic_1 from "../../../public/fc25/carousel_1_pic_1.png";
import carousel_1_pic_header from "../../../public/fc25/carousel_1_pic_header.png";
import carousel_2_pic_1 from "../../../public/fc25/carousel_2_pic_1.jpg";

import sec_4_pic_1 from "../../../public/fc25/sec_4_pic_1.jpg";
import sec_4_pic_2 from "../../../public/fc25/sec_4_pic_2.jpg";

import sec_3_pic from "../../../public/fc25/sec_3_pic.jpg";

import gradient_logo from "../../../public/fc25/gradient_logo.png";

import Navbar from "../navbar";
import {
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusIcon,
} from "@heroicons/react/16/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";
const Sec_1 = () => {
  return (
    <section>
      <div className="items-center md:flex">
        <div className="h-full md:w-1/2 2xl:w-3/4">
          <picture>
            <source
              srcSet="./fc25/sec_1_pic_mobile.jpg"
              media="(max-width:1024.95px)"
            ></source>

            <Image
              alt=""
              src={sec_1_pic_pc}
              width={0}
              height={0}
              className=""
            />
          </picture>
        </div>
        <div className="mx-auto w-11/12 md:w-1/2 md:px-5 md:pl-10 2xl:px-24">
          <div className="py-6 font-ElectronicArtsDisplay_Bold text-4xl uppercase text-white sm:text-4xl">
            EA SPORTS FC™ 25
          </div>
          <div className="font-ElectronicArtsText_Regular text-lg text-white">
            Experience more ways to win for the club in EA SPORTS FC™ 25. Team
            up with friends in your favourite modes with the new 5v5 Rush and
            manage your club to victory as FC IQ delivers more tactical control
            than ever before.
          </div>
          <div className="my-5 flex">
            <button className="mr-2 flex rounded-3xl bg-[#70f468] p-5 py-3 font-ElectronicArtsText_Regular text-black hover:scale-[95%] sm:max-w-44 sm:text-base">
              <div className="">Pre-Order</div>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.68421 4H4V5.77778H6.0185L8.51005 14.0287C8.62195 14.4066 8.97126 14.6667 9.36841 14.6667H18.3158C18.7153 14.6667 19.0663 14.4036 19.1761 14.022L20.9656 7.79975C21.0427 7.53156 20.9886 7.24295 20.8196 7.02027C20.6505 6.79759 20.386 6.66667 20.1053 6.66667H14.7368H12.9474H8.15519L7.54121 4.63347C7.42768 4.25748 7.07933 4 6.68421 4Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M10.2632 20C11.2515 20 12.0526 19.2041 12.0526 18.2222C12.0526 17.2404 11.2515 16.4444 10.2632 16.4444C9.27486 16.4444 8.47369 17.2404 8.47369 18.2222C8.47369 19.2041 9.27486 20 10.2632 20Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M19.2105 18.2222C19.2105 19.2041 18.4094 20 17.4211 20C16.4328 20 15.6316 19.2041 15.6316 18.2222C15.6316 17.2404 16.4328 16.4444 17.4211 16.4444C18.4094 16.4444 19.2105 17.2404 19.2105 18.2222Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <button className="ml-2 flex rounded-3xl border border-white bg-transparent p-5 py-3 font-ElectronicArtsText_Regular text-white hover:scale-[95%] sm:max-w-44 sm:text-base">
              <div className="">Watch Trailer</div>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.47427 4.14935C5.76909 3.96714 6.13723 3.95058 6.44721 4.10557L20.4472 11.1056C20.786 11.275 21 11.6212 21 12C21 12.3788 20.786 12.725 20.4472 12.8944L6.44721 19.8944C6.13723 20.0494 5.76909 20.0329 5.47427 19.8507C5.17945 19.6684 5 19.3466 5 19V5C5 4.65342 5.17945 4.33156 5.47427 4.14935Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          <div className="font-ElectronicArtsText_Bold text-lg">
            Coming Jan 1, 1970
          </div>
          <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
            <div className="px-1">Available on</div>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.501 17.132c-1.577-.445-1.84-1.372-1.122-1.903.664-.493 1.796-.865 1.796-.865l4.67-1.659v1.892l-3.36 1.2c-.595.213-.685.515-.202.675.482.159 1.357.115 1.95-.101l1.611-.587v1.694c-1.79.324-3.52.255-5.343-.346m10.532-4.529V7.777c0-.565-.104-1.086-.636-1.235-.406-.133-.66.245-.66.812v12.08L9.48 18.398V4c1.386.257 3.403.864 4.487 1.23 2.759.947 3.693 2.127 3.693 4.783 0 2.588-1.597 3.57-3.627 2.59m7.79 3.213c-.392.492-1.347.843-1.347.843l-7.12 2.555V17.33l5.238-1.868c.594-.212.688-.514.202-.674-.483-.16-1.357-.114-1.952.101l-3.489 1.233v-1.958a12.28 12.28 0 0 1 2.628-.584c1.42-.156 3.157.022 4.52.538 1.535.487 1.709 1.205 1.32 1.699"
                fill="currentColor"
              ></path>
            </svg>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.374 3.413c1.924-.1 4.424 1.39 4.609 1.427.028.005.42-.169.871-.39 2.577-1.254 3.791-1.04 4.331-1.017-2.576-1.584-6.157-2.016-9.432-.471-.944.447-.968.48-.38.451zm14.473 6.624c-.68-3.225-2.722-5.253-3.008-5.253-.295 0-.976.262-1.451.56-.94.585-1.654 1.266-2.594 2.129 1.71 2.148 4.122 5.62 4.956 8.156.274.835.391 1.657.299 2.109-.069.342-.069.342.055.185.247-.311.804-1.262 1.025-1.754.299-.653.605-1.62.75-2.367.174-.907.158-2.854-.032-3.765zM9.28 7.477C8.084 6.392 6.94 5.304 5.797 4.921c-.613-.206-.658-.193-1.157.327-1.177 1.225-2.158 3.212-2.43 4.934-.219 1.379-.247 1.766-.17 2.44.225 2.036.698 3.442 1.633 4.874.383.588.488.697.375.398-.17-.443-.013-1.511.383-2.58.577-1.572 2.174-4.551 4.851-7.837zm7.312 7.031c1.786 2.189 2.608 3.983 2.193 4.786-.318.608-2.287 1.797-3.734 2.253-1.193.375-2.758.537-4.05.41-1.54-.147-3.1-.7-4.44-1.57-1.123-.734-1.378-1.038-1.378-1.637 0-1.207 1.327-3.32 3.597-5.73 1.29-1.367 3.086-2.971 3.283-2.926.379.084 3.4 3.027 4.529 4.414z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
const Sec_2 = () => {
  return (
    <section className="mx-auto max-w-[1440px]">
      <div className="m-auto my-20 w-11/12 rounded-3xl bg-[#323232] p-5 px-9 pb-12 md:px-16 md:pb-16">
        <div className="py-6 font-ElectronicArtsDisplay_Bold text-4xl text-white sm:text-4xl">
          Spotlight
        </div>
        <div className="font-ElectronicArtsText_Regular text-lg text-white">
          Team up with friends in your favourite modes with the new 5v5 Rush,
          and manage your club to victory as FC IQ delivers more tactical
          control than ever before.
        </div>
        <div className="mt-4 cursor-pointer overflow-hidden rounded-xl border border-[#00ff00] transition-transform hover:-translate-y-2 xl:flex xl:items-center">
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 rounded-full bg-black/40 p-6 hover:scale-95 hover:bg-black/50">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.47427 4.14935C5.76909 3.96714 6.13723 3.95058 6.44721 4.10557L20.4472 11.1056C20.786 11.275 21 11.6212 21 12C21 12.3788 20.786 12.725 20.4472 12.8944L6.44721 19.8944C6.13723 20.0494 5.76909 20.0329 5.47427 19.8507C5.17945 19.6684 5 19.3466 5 19V5C5 4.65342 5.17945 4.33156 5.47427 4.14935Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <Image
              src={sec_2_pic}
              width={0}
              height={0}
              alt=""
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="w-max border border-white/30 p-2 text-sm">
              Campaign
            </div>
            <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
              Augest 12, 2024
            </div>
            <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
              EA SPORTS FC™ 25 Football Ultimate Team™ Heroes - Official Site
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Carousel_1 = () => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ChevronLeftIcon
        className={
          currentSlideNumber === 0
            ? "relative z-10 m-3 mb-9 hidden size-9 rounded-full opacity-35 md:block"
            : "relative z-10 m-3 mb-9 hidden size-9 cursor-pointer rounded-full border md:block"
        }
        onClick={previous}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ChevronRightIcon
        className={
          currentSlideNumber === 4
            ? "relative z-10 m-3 mb-9 hidden size-9 rounded-full opacity-35 md:block"
            : "relative z-10 m-3 mb-9 hidden size-9 cursor-pointer rounded-full border md:block"
        }
        onClick={next}
      />
    );
  }
  const settings = {
    infinite: false,
    centerPadding: "30px",
    slidesToShow: 4,
    speed: 500,
    dots: false,
    slidesToScroll: 4,
    // swipeToSlide: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlideNumber(newIndex);
    },
    // prevArrow: <SamplePrevArrow />,
    // nextArrow: <SampleNextArrow />,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          centerPadding: "90px",
        },
      },
    ],
  };

  return (
    <section className="bg-[#323232]">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative my-40 px-5 py-20">
          <div className="p-5 lg:flex">
            <div className="lg:w-1/2">
              <div className="py-6 font-ElectronicArtsDisplay_Bold text-4xl uppercase text-white sm:text-4xl">
                Pre-order the Ultimate Edition by 20 August for limited-time
                rewards
              </div>
              <div className="font-ElectronicArtsText_Regular text-lg text-white">
                Receive an untradeable Hero or ICON Player Item in FC 24
                Ultimate Team™ from the Greats of the Game campaign and an
                untradeable Hero Player Item in FC 25 Ultimate Team™ with an
                upgraded 'Prime' version arriving in November.
              </div>
              <button className="my-5 rounded-3xl border border-white bg-transparent p-5 py-3 font-ElectronicArtsText_Regular text-white hover:scale-[95%] sm:max-w-44 sm:text-base">
                <div className="">Pre-Order</div>
              </button>
            </div>
            <div className="lg:w-[50%]">
              <div className="flex flex-col lg:flex-row">
                <Image
                  placeholder="blur"
                  src={carousel_1_pic_header}
                  width={0}
                  height={0}
                  alt=""
                  className="z-20 w-full lg:translate-x-32"
                />
                <div className="-translate-y-32 rounded-xl bg-[#1e1f1f] p-3 pt-32 lg:translate-y-0 lg:pl-48 lg:pr-10 lg:pt-10">
                  <div className="w-max border border-white/30 p-2 text-sm">
                    Limited-Time Offer
                  </div>
                  <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                    FC 25 Heroes
                  </div>
                  <div className="font-ElectronicArtsText_Regular text-lg text-white">
                    Pre-order the Ultimate Edition by 20 August for Player Items
                    in FC 24 and FC 25.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-container mx-auto">
            <div className="flex justify-end">
              <SamplePrevArrow />
              <SampleNextArrow />
            </div>
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div className="w-full pt-20">
                <div className="mx-2 h-full cursor-pointer rounded-xl bg-[#1e1f1f]">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_1_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className="w-full -translate-y-1/2"
                    />
                  </div>

                  <div className="relative -top-20">
                    <div className="pl-4">
                      <div className="w-max border border-white/30 p-2 text-sm">
                        Ultimate Edition only
                      </div>
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div>
                      <div className="font-ElectronicArtsText_Regular text-lg text-white">
                        Add an untradeable Hero Player Item to your FC 25
                        Ultimate Team™ with an upgraded 'Prime' version
                        arriving in November.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-20">
                <div className="mx-2 h-full cursor-pointer rounded-xl bg-[#1e1f1f]">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_1_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className="w-full -translate-y-1/2"
                    />
                  </div>

                  <div className="relative -top-20">
                    <div className="pl-4">
                      <div className="w-max border border-white/30 p-2 text-sm">
                        Ultimate Edition only
                      </div>
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div>
                      <div className="font-ElectronicArtsText_Regular text-lg text-white">
                        Add an untradeable Hero Player Item to your FC 25
                        Ultimate Team™ with an upgraded 'Prime' version
                        arriving in November.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-20">
                <div className="mx-2 h-full cursor-pointer rounded-xl bg-[#1e1f1f]">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_1_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className="w-full -translate-y-1/2"
                    />
                  </div>

                  <div className="relative -top-20">
                    <div className="pl-4">
                      <div className="w-max border border-white/30 p-2 text-sm">
                        Ultimate Edition only
                      </div>
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div>
                      <div className="font-ElectronicArtsText_Regular text-lg text-white">
                        Add an untradeable Hero Player Item to your FC 25
                        Ultimate Team™ with an upgraded 'Prime' version
                        arriving in November.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-20">
                <div className="mx-2 h-full cursor-pointer rounded-xl bg-[#1e1f1f]">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_1_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className="w-full -translate-y-1/2"
                    />
                  </div>

                  <div className="relative -top-20">
                    <div className="pl-4">
                      <div className="w-max border border-white/30 p-2 text-sm">
                        Ultimate Edition only
                      </div>
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div>
                      <div className="font-ElectronicArtsText_Regular text-lg text-white">
                        Add an untradeable Hero Player Item to your FC 25
                        Ultimate Team™ with an upgraded 'Prime' version
                        arriving in November.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-20">
                <div className="mx-2 h-full cursor-pointer rounded-xl bg-[#1e1f1f]">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_1_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className="w-full -translate-y-1/2"
                    />
                  </div>

                  <div className="relative -top-20">
                    <div className="pl-4">
                      <div className="w-max border border-white/30 p-2 text-sm">
                        Ultimate Edition only
                      </div>
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div>
                      <div className="font-ElectronicArtsText_Regular text-lg text-white">
                        Add an untradeable Hero Player Item to your FC 25
                        Ultimate Team™ with an upgraded 'Prime' version
                        arriving in November.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-20">
                <div className="mx-2 h-full cursor-pointer rounded-xl bg-[#1e1f1f]">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_1_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className="w-full -translate-y-1/2"
                    />
                  </div>

                  <div className="relative -top-20">
                    <div className="pl-4">
                      <div className="w-max border border-white/30 p-2 text-sm">
                        Ultimate Edition only
                      </div>
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div>
                      <div className="font-ElectronicArtsText_Regular text-lg text-white">
                        Add an untradeable Hero Player Item to your FC 25
                        Ultimate Team™ with an upgraded 'Prime' version
                        arriving in November.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-20">
                <div className="mx-2 h-full cursor-pointer rounded-xl bg-[#1e1f1f]">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_1_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className="w-full -translate-y-1/2"
                    />
                  </div>

                  <div className="relative -top-20">
                    <div className="pl-4">
                      <div className="w-max border border-white/30 p-2 text-sm">
                        Ultimate Edition only
                      </div>
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div>
                      <div className="font-ElectronicArtsText_Regular text-lg text-white">
                        Add an untradeable Hero Player Item to your FC 25
                        Ultimate Team™ with an upgraded 'Prime' version
                        arriving in November.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-20">
                <div className="mx-2 h-full cursor-pointer rounded-xl bg-[#1e1f1f]">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_1_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className="w-full -translate-y-1/2"
                    />
                  </div>

                  <div className="relative -top-20">
                    <div className="pl-4">
                      <div className="w-max border border-white/30 p-2 text-sm">
                        Ultimate Edition only
                      </div>
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div>
                      <div className="font-ElectronicArtsText_Regular text-lg text-white">
                        Add an untradeable Hero Player Item to your FC 25
                        Ultimate Team™ with an upgraded 'Prime' version
                        arriving in November.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
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
          currentSlideNumber === 6
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
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1920,
        settings: {
          centerPadding: "350px",
        },
      },
    ],
  };
  return (
    <section>
      <div>
        <div className="text-center font-ElectronicArtsDisplay_Bold text-4xl uppercase text-white sm:text-4xl">
          Features
        </div>
        <div className="relative mb-20 mt-10 py-10">
          <div className="absolute bottom-0 h-2/3 w-full bg-[#323232] md:h-1/2"></div>
          <div className="slider-container mx-auto">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div className="w-full pt-20">
                <div className="mx-2 h-full cursor-pointer rounded-xl">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_2_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className={
                        currentSlideNumber === 0
                          ? "w-full rounded-xl transition-all duration-300"
                          : "w-full rounded-xl transition-all duration-300 md:scale-75"
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
                    <div className="pl-4">
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        An overhaul of tactical foundations across the game
                        delivers greater strategic control and more realistic
                        collective movement at the team level. FC IQ also
                        utilises a new AI model, powered by real-world data, to
                        influence player tactics through all-new Player Roles.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-20">
                <div className="mx-2 h-full cursor-pointer rounded-xl">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_2_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className={
                        currentSlideNumber === 1
                          ? "w-full rounded-xl transition-all duration-300"
                          : "w-full rounded-xl transition-all duration-300 md:scale-75"
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
                    <div className="pl-4">
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        An overhaul of tactical foundations across the game
                        delivers greater strategic control and more realistic
                        collective movement at the team level. FC IQ also
                        utilises a new AI model, powered by real-world data, to
                        influence player tactics through all-new Player Roles.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-20">
                <div className="mx-2 h-full cursor-pointer rounded-xl">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_2_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className={
                        currentSlideNumber === 2
                          ? "w-full rounded-xl transition-all duration-300"
                          : "w-full rounded-xl transition-all duration-300 md:scale-75"
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
                    <div className="pl-4">
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        An overhaul of tactical foundations across the game
                        delivers greater strategic control and more realistic
                        collective movement at the team level. FC IQ also
                        utilises a new AI model, powered by real-world data, to
                        influence player tactics through all-new Player Roles.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-20">
                <div className="mx-2 h-full cursor-pointer rounded-xl">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_2_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className={
                        currentSlideNumber === 3
                          ? "w-full rounded-xl transition-all duration-300"
                          : "w-full rounded-xl transition-all duration-300 md:scale-75"
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
                    <div className="pl-4">
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        An overhaul of tactical foundations across the game
                        delivers greater strategic control and more realistic
                        collective movement at the team level. FC IQ also
                        utilises a new AI model, powered by real-world data, to
                        influence player tactics through all-new Player Roles.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-20">
                <div className="mx-2 h-full cursor-pointer rounded-xl">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_2_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className={
                        currentSlideNumber === 4
                          ? "w-full rounded-xl transition-all duration-300"
                          : "w-full rounded-xl transition-all duration-300 md:scale-75"
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
                    <div className="pl-4">
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        An overhaul of tactical foundations across the game
                        delivers greater strategic control and more realistic
                        collective movement at the team level. FC IQ also
                        utilises a new AI model, powered by real-world data, to
                        influence player tactics through all-new Player Roles.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-20">
                <div className="mx-2 h-full cursor-pointer rounded-xl">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_2_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className={
                        currentSlideNumber === 5
                          ? "w-full rounded-xl transition-all duration-300"
                          : "w-full rounded-xl transition-all duration-300 md:scale-75"
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
                    <div className="pl-4">
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        An overhaul of tactical foundations across the game
                        delivers greater strategic control and more realistic
                        collective movement at the team level. FC IQ also
                        utilises a new AI model, powered by real-world data, to
                        influence player tactics through all-new Player Roles.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-20">
                <div className="mx-2 h-full cursor-pointer rounded-xl">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_2_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className={
                        currentSlideNumber === 6
                          ? "w-full rounded-xl transition-all duration-300"
                          : "w-full rounded-xl transition-all duration-300 md:scale-75"
                      }
                    />
                  </div>

                  <div
                    className={
                      currentSlideNumber === 6
                        ? "relative px-10 pt-4 text-center transition-opacity duration-500 md:pt-10"
                        : "relative px-10 pt-4 text-center opacity-0 transition-opacity duration-500 md:pt-10"
                    }
                  >
                    <div className="pl-4">
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        An overhaul of tactical foundations across the game
                        delivers greater strategic control and more realistic
                        collective movement at the team level. FC IQ also
                        utilises a new AI model, powered by real-world data, to
                        influence player tactics through all-new Player Roles.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
// const Carousel_4 = () => {
//   const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <ArrowLeftIcon
//         className={
//           currentSlideNumber === 0
//             ? "absolute bottom-10 left-[18%] z-10 hidden size-9 rounded-full border p-1 opacity-35 lg:block"
//             : "absolute bottom-10 left-[18%] z-10 hidden size-9 cursor-pointer rounded-full border p-1 lg:block"
//         }
//         onClick={onClick}
//       />
//     );
//   }
//   function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <ArrowRightIcon
//         className={
//           currentSlideNumber === 6
//             ? "absolute bottom-10 right-[18%] z-10 hidden size-9 rounded-full border p-1 opacity-35 lg:block"
//             : "absolute bottom-10 right-[18%] z-10 hidden size-9 cursor-pointer rounded-full border p-1 lg:block"
//         }
//         onClick={onClick}
//       />
//     );
//   }
//   let sliderRef = useRef(null);
//   const settings = {
//     className: "center",
//     infinite: false,
//     prevArrow: <SamplePrevArrow />,
//     nextArrow: <SampleNextArrow />,
//     centerPadding: "350px",
//     className: "center",
//     centerMode: true,
//     slidesToShow: 1,
//     speed: 500,
//     dots: true,
//     rows: 2,
//     slidesToScroll: 1,
//     // swipeToSlide: true,
//     slidesPerRow: 1,
//     arrows: true,
//     beforeChange: (oldIndex, newIndex) => {
//       setCurrentSlideNumber(newIndex);
//     },
//     customPaging: (i) => (
//       <div
//         className={
//           i === currentSlideNumber
//             ? "size-3 rounded-full border bg-white hover:opacity-85"
//             : "size-3 rounded-full border hover:bg-slate-400 hover:opacity-85"
//         }
//       ></div>
//     ),
//     // prevArrow: <SamplePrevArrow />,
//     // nextArrow: <SampleNextArrow />,
//     mobileFirst: true,
//     responsive: [
//       {
//         breakpoint: 640,
//         settings: {
//           centerPadding: "20px",
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           centerPadding: "100px",
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           centerPadding: "100px",
//         },
//       },
//       {
//         breakpoint: 1920,
//         settings: {
//           centerPadding: "350px",
//         },
//       },
//     ],
//   };
//   return (
//     <section>
//       <div>
//         <div className="text-center font-ElectronicArtsDisplay_Bold text-4xl uppercase text-white sm:text-4xl">
//           Features
//         </div>
//         <div className="relative mb-20 mt-10 py-10">
//           <div className="absolute bottom-0 h-2/3 w-full bg-[#323232] md:h-1/2"></div>
//           <div className="slider-container mx-auto">
//             <Slider
//               ref={(slider) => {
//                 sliderRef = slider;
//               }}
//               {...settings}
//             >
//               <div className="w-full pt-20">
//                 <div className="mx-2 h-full cursor-pointer rounded-xl">
//                   <div>
//                     <Image
//                       placeholder="blur"
//                       src={carousel_2_pic_1}
//                       width={0}
//                       height={0}
//                       alt=""
//                       className={
//                         currentSlideNumber === 0
//                           ? "w-full rounded-xl transition-all duration-300"
//                           : "w-full rounded-xl transition-all duration-300 md:scale-75"
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="w-full pt-20">
//                 <div className="mx-2 h-full cursor-pointer rounded-xl">
//                   <div
//                     className={
//                       currentSlideNumber === 0
//                         ? "relative px-10 pt-4 text-center transition-opacity duration-500 md:pt-10"
//                         : "relative px-10 pt-4 text-center opacity-0 transition-opacity duration-500 md:pt-10"
//                     }
//                   >
//                     <div className="pl-4">
//                       <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
//                         FC 25 Heroes
//                       </div>
//                       <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
//                         An overhaul of tactical foundations across the game
//                         delivers greater strategic control and more realistic
//                         collective movement at the team level. FC IQ also
//                         utilises a new AI model, powered by real-world data, to
//                         influence player tactics through all-new Player Roles.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full pt-20">
//                 <div className="mx-2 h-full cursor-pointer rounded-xl">
//                   <div>
//                     <Image
//                       placeholder="blur"
//                       src={carousel_2_pic_1}
//                       width={0}
//                       height={0}
//                       alt=""
//                       className={
//                         currentSlideNumber === 1
//                           ? "w-full rounded-xl transition-all duration-300"
//                           : "w-full rounded-xl transition-all duration-300 md:scale-75"
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full pt-20">
//                 <div className="mx-2 h-full cursor-pointer rounded-xl">
//                   <div
//                     className={
//                       currentSlideNumber === 1
//                         ? "relative px-10 pt-4 text-center transition-opacity duration-500 md:pt-10"
//                         : "relative px-10 pt-4 text-center opacity-0 transition-opacity duration-500 md:pt-10"
//                     }
//                   >
//                     <div className="pl-4">
//                       <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
//                         FC 25 Heroes
//                       </div>
//                       <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
//                         An overhaul of tactical foundations across the game
//                         delivers greater strategic control and more realistic
//                         collective movement at the team level. FC IQ also
//                         utilises a new AI model, powered by real-world data, to
//                         influence player tactics through all-new Player Roles.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
const Sec_3 = () => {
  return (
    <section>
      <div className="items-center md:flex">
        <div className="h-full md:w-1/2 2xl:w-3/4">
          <Image alt="" src={sec_3_pic} width={0} height={0} className="" />
        </div>
        <div className="mx-auto w-11/12 md:w-1/2 md:px-5 md:pl-10 2xl:px-24">
          <div className="py-6 font-ElectronicArtsDisplay_Bold text-4xl uppercase text-white sm:text-4xl">
            EA SPORTS FC™ 25
          </div>
          <div className="font-ElectronicArtsText_Regular text-lg text-white">
            Experience more ways to win for the club in EA SPORTS FC™ 25. Team
            up with friends in your favourite modes with the new 5v5 Rush and
            manage your club to victory as FC IQ delivers more tactical control
            than ever before.
          </div>
          <div className="my-5 flex">
            <button className="mr-2 flex rounded-3xl bg-[#70f468] p-5 py-3 font-ElectronicArtsText_Regular text-black hover:scale-[95%] sm:max-w-44 sm:text-base">
              <div className="">Pre-Order Now</div>
            </button>
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
const Sec_4 = () => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

  let sliderRef = useRef(null);
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "350px",
    className: "center",
    centerMode: true,
    slidesToShow: 1.4,
    speed: 500,
    dots: false,
    slidesToScroll: 1,
    // swipeToSlide: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlideNumber(newIndex);
    },

    // prevArrow: <SamplePrevArrow />,
    // nextArrow: <SampleNextArrow />,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "100px",
        },
      },
    ],
  };
  return (
    <section>
      <div className="hidden md:block">
        <div className="flex flex-wrap">
          <div className="cursor-pointer overflow-hidden p-3 transition-transform hover:-translate-y-2 lg:w-full xl:w-[75%] xl:items-center">
            <div className="flex rounded-xl border border-[#00ff00]">
              <div className="relative">
                <Image
                  src={sec_4_pic_1}
                  width={0}
                  height={0}
                  alt=""
                  className="rounded-l-xl object-cover"
                />
              </div>
              <div className="p-4">
                <div className="w-maxborder border-white/30 p-2 text-sm">
                  News Article
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Augest 12, 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  EA SPORTS FC™ 25 Football Ultimate Team™ Heroes - Official
                  Site
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Take a look at everything new to Manager and Player Career in
                  FC 25.
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[25%] cursor-pointer p-3 transition-transform hover:-translate-y-2">
            <div className="rounded-xl border border-[#4b4b4b] bg-[#4b4b4b]">
              <div className="relative">
                <Image
                  src={sec_4_pic_2}
                  width={0}
                  height={0}
                  alt=""
                  className="rounded-t-xl"
                  placeholder="blur"
                />
              </div>
              <div className="p-4">
                <div className="w-max border border-white/30 p-2 text-sm">
                  News Article
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Augest 12, 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  EA SPORTS FC™ 25 Football Ultimate Team™ Heroes - Official
                  Site
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Take a look at everything new to Manager and Player Career in
                  FC 25.
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[25%] cursor-pointer p-3 transition-transform hover:-translate-y-2">
            <div className="rounded-xl border border-[#4b4b4b] bg-[#4b4b4b]">
              <div className="relative">
                <Image
                  src={sec_4_pic_2}
                  width={0}
                  height={0}
                  alt=""
                  className="rounded-t-xl"
                  placeholder="blur"
                />
              </div>
              <div className="p-4">
                <div className="w-max border border-white/30 p-2 text-sm">
                  News Article
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Augest 12, 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  EA SPORTS FC™ 25 Football Ultimate Team™ Heroes - Official
                  Site
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Take a look at everything new to Manager and Player Career in
                  FC 25.
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[25%] cursor-pointer p-3 transition-transform hover:-translate-y-2">
            <div className="rounded-xl border border-[#4b4b4b] bg-[#4b4b4b]">
              <div className="relative">
                <Image
                  src={sec_4_pic_2}
                  width={0}
                  height={0}
                  alt=""
                  className="rounded-t-xl"
                  placeholder="blur"
                />
              </div>
              <div className="p-4">
                <div className="w-max border border-white/30 p-2 text-sm">
                  News Article
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Augest 12, 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  EA SPORTS FC™ 25 Football Ultimate Team™ Heroes - Official
                  Site
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Take a look at everything new to Manager and Player Career in
                  FC 25.
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[25%] cursor-pointer p-3 transition-transform hover:-translate-y-2">
            <div className="rounded-xl border border-[#4b4b4b] bg-[#4b4b4b]">
              <div className="relative">
                <Image
                  src={sec_4_pic_2}
                  width={0}
                  height={0}
                  alt=""
                  className="rounded-t-xl"
                  placeholder="blur"
                />
              </div>
              <div className="p-4">
                <div className="w-max border border-white/30 p-2 text-sm">
                  News Article
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Augest 12, 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  EA SPORTS FC™ 25 Football Ultimate Team™ Heroes - Official
                  Site
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Take a look at everything new to Manager and Player Career in
                  FC 25.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div className="cursor-pointer overflow-hidden px-2 transition-transform xl:flex xl:items-center">
            <div className="rounded-xl border border-[#00ff00] bg-[#4b4b4b]">
              <div className="relative">
                <Image
                  src={sec_4_pic_1}
                  width={0}
                  height={0}
                  alt=""
                  className="rounded-t-xl"
                  placeholder="blur"
                />
              </div>
              <div className="p-4">
                <div className="w-max border border-white/30 p-2 text-sm">
                  News Article
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Augest 12, 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  EA SPORTS FC™ 25 Football Ultimate Team™ Heroes - Official
                  Site
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Take a look at everything new to Manager and Player Career in
                  FC 25.
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="rounded-xl bg-[#4b4b4b]">
              <Image
                src={sec_4_pic_2}
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                className="rounded-t-xl"
              />
              <div className="p-4">
                <div className="w-max border border-white/30 p-2 text-sm">
                  News Article
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Augest 12, 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  EA SPORTS FC™ 25 Football Ultimate Team™ Heroes - Official
                  Site
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Take a look at everything new to Manager and Player Career in
                  FC 25.
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="rounded-xl bg-[#4b4b4b]">
              <Image
                src={sec_4_pic_2}
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                className="rounded-t-xl"
              />
              <div className="p-4">
                <div className="w-max border border-white/30 p-2 text-sm">
                  News Article
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Augest 12, 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  EA SPORTS FC™ 25 Football Ultimate Team™ Heroes - Official
                  Site
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Take a look at everything new to Manager and Player Career in
                  FC 25.
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="rounded-xl bg-[#4b4b4b]">
              <Image
                src={sec_4_pic_2}
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                className="rounded-t-xl"
              />
              <div className="p-4">
                <div className="w-max border border-white/30 p-2 text-sm">
                  News Article
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Augest 12, 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  EA SPORTS FC™ 25 Football Ultimate Team™ Heroes - Official
                  Site
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Take a look at everything new to Manager and Player Career in
                  FC 25.
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="rounded-xl bg-[#4b4b4b]">
              <Image
                src={sec_4_pic_2}
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                className="rounded-t-xl"
              />
              <div className="p-4">
                <div className="w-max border border-white/30 p-2 text-sm">
                  News Article
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Augest 12, 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  EA SPORTS FC™ 25 Football Ultimate Team™ Heroes - Official
                  Site
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Take a look at everything new to Manager and Player Career in
                  FC 25.
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default function FC25() {
  return (
    <main className="relative">
      <title>fc25</title>
      <div className="!font-SST_Light">
        <Navbar />
      </div>
      <div className="mt-32 overflow-hidden bg-[#151616]">
        <Sec_1 />
        <Sec_2 />
        <Carousel_1 />
        <Carousel_2 />
        <div className="mx-auto max-w-[1440px] pb-28">
          <Sec_4 />
        </div>
        <div className="mx-auto max-w-[1440px] pb-28">
          <Sec_3 />
        </div>
        <section className="fixed_bg pt-5">
          <div className="mx-auto max-w-[1440px] pb-28">
            <div className="mx-auto mb-10 min-h-40 lg:flex">
              <Gradient_sec />
            </div>
            <div className="mx-auto min-h-40 lg:flex">
              <SocialMedia_sec />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
