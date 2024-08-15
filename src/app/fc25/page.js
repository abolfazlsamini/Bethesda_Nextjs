"use client";
import Image from "next/image";
import sec_1_pic_pc from "../../../public/fc25/sec_1_pic_pc.jpg";
import sec_2_pic from "../../../public/fc25/sec_2_pic.jpg";
import carousel_1_pic_1 from "../../../public/fc25/carousel_1_pic_1.png";
import carousel_2_pic_1 from "../../../public/fc25/carousel_2_pic_1.jpg";

import Navbar from "../navbar";
import {
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
    <section>
      <div className="m-auto my-20 w-11/12 rounded-3xl bg-[#323232] p-5 px-9 pb-12 md:px-16 md:pb-16">
        <div className="py-6 font-ElectronicArtsDisplay_Bold text-4xl text-white sm:text-4xl">
          Spotlight
        </div>
        <div className="font-ElectronicArtsText_Regular text-lg text-white">
          Team up with friends in your favourite modes with the new 5v5 Rush,
          and manage your club to victory as FC IQ delivers more tactical
          control than ever before.
        </div>
        <div className="mt-4 cursor-pointer overflow-hidden rounded-xl border border-[#00ff00] transition-transform hover:-translate-y-2">
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
    <section>
      <div>
        <div className="relative my-40 py-20">
          <div className="slider-container mx-auto max-w-[1380px] px-5">
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

  let sliderRef = useRef(null);
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "350px",
    className: "center",
    centerMode: true,
    slidesToShow: 1,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
    // swipeToSlide: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlideNumber(newIndex);
    },
    // customPaging: (i) => (
    //   <MinusIcon
    //     className={
    //       i === currentSlideNumber
    //         ? "h-8 text-blue-500"
    //         : "absolute -top-48 h-8 text-gray-500"
    //     }
    //   />
    // ),
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
        <div className="relative my-40 py-10">
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

                  <div className="relative px-10 pt-4 text-center md:pt-10">
                    <div className="pl-4">
                      <div className="w-max border border-white/30 p-2 text-sm">
                        Ultimate Edition only
                      </div>
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div>
                      <div className="font-ElectronicArtsText_Regular text-lg text-white">
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

                  <div className="relative px-10 pt-4 text-center md:pt-10">
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

                  <div className="relative px-10 pt-4 text-center md:pt-10">
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

                  <div className="relative px-10 pt-4 text-center md:pt-10">
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

                  <div className="relative px-10 pt-4 text-center md:pt-10">
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

                  <div className="relative px-10 pt-4 text-center md:pt-10">
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

                  <div className="relative px-10 pt-4 text-center md:pt-10">
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
                <div className="mx-2 h-full cursor-pointer rounded-xl">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_2_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className={
                        currentSlideNumber === 7
                          ? "w-full rounded-xl transition-all duration-300"
                          : "w-full rounded-xl transition-all duration-300 md:scale-75"
                      }
                    />
                  </div>

                  <div className="relative px-10 pt-4 text-center md:pt-10">
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
export default function FC25() {
  return (
    <main className="relative">
      <title>fc25</title>
      <div className="!font-SST_Light">
        <Navbar />
      </div>
      <div className="mt-32 overflow-hidden bg-[#fffffd]">
        <Sec_1 />
        <Sec_2 />
        <Carousel_1 />
        <Carousel_2 />
      </div>
    </main>
  );
}
