"use client";
import Image from "next/image";
import sec_1_pic_pc from "../../../public/mythus_arena/sec_1_pic_pc.jpg";
import sec_2_pic from "../../../public/mythus_arena/sec_2_pic.jpg";

import carousel_1_pic_1 from "../../../public/mythus_arena/carousel_1_pic_1.png";
import carousel_1_pic_2 from "../../../public/mythus_arena/carousel_1_pic_2.png";
import carousel_1_pic_3 from "../../../public/mythus_arena/carousel_1_pic_3.png";
import carousel_1_pic_4 from "../../../public/mythus_arena/carousel_1_pic_4.png";
import carousel_1_pic_5 from "../../../public/mythus_arena/carousel_1_pic_5.png";
import carousel_1_pic_6 from "../../../public/mythus_arena/carousel_1_pic_6.png";
import carousel_1_pic_7 from "../../../public/mythus_arena/carousel_1_pic_7.png";

import carousel_1_pic_header from "../../../public/mythus_arena/carousel_1_pic_header.png";
import carousel_2_pic_1 from "../../../public/mythus_arena/carousel_2_pic_1.jpg";
import carousel_2_pic_2 from "../../../public/mythus_arena/carousel_2_pic_2.jpg";
import carousel_2_pic_3 from "../../../public/mythus_arena/carousel_2_pic_3.jpg";
import carousel_2_pic_4 from "../../../public/mythus_arena/carousel_2_pic_4.jpg";
import carousel_2_pic_5 from "../../../public/mythus_arena/carousel_2_pic_5.jpg";
import carousel_2_pic_6 from "../../../public/mythus_arena/carousel_2_pic_6.jpg";

import sec_4_pic_1 from "../../../public/mythus_arena/sec_4_pic_1.jpg";
import sec_4_pic_2 from "../../../public/mythus_arena/sec_4_pic_2.jpg";
import sec_4_pic_3 from "../../../public/mythus_arena/sec_4_pic_3.jpg";
import sec_4_pic_4 from "../../../public/mythus_arena/sec_4_pic_4.jpg";
import sec_4_pic_5 from "../../../public/mythus_arena/sec_4_pic_5.jpg";

import sec_3_pic from "../../../public/mythus_arena/sec_3_pic.jpg";

// import gradient_logo from "../../../public/mythus_arena/gradient_logo.png";

import carousel4_pic_1 from "../../../public/carousel4_pic_1.webp";
import carousel4_logo_1 from "../../../public/carousel4_logo_1.webp";
import carousel4_pic_2 from "../../../public/carousel4_pic_2.webp";
import carousel4_logo_2 from "../../../public/carousel4_logo_2.webp";
import carousel4_pic_3 from "../../../public/carousel4_pic_3.webp";
import carousel4_logo_3 from "../../../public/carousel4_logo_3.webp";
import carousel4_pic_4 from "../../../public/carousel4_pic_4.webp";
import carousel4_logo_4 from "../../../public/carousel4_logo_4.webp";
import carousel4_pic_5 from "../../../public/carousel4_pic_5.webp";
import carousel4_logo_5 from "../../../public/carousel4_logo_5.webp";
import carousel4_pic_6 from "../../../public/carousel4_pic_6.webp";
import carousel4_logo_6 from "../../../public/carousel4_logo_6.webp";

import x from "../../../public/X.png";
import Ticktok from "../../../public/Tiktok.png";
import TEl from "../../../public/TEl.png";
import Discord from "../../../public/Discord.png";
import yt from "../../../public/YT.png";
import Facebook from "../../../public/Facebook.png";
import Insta from "../../../public/Insta.png";

import Navbar from "../navbar_mythus_arena";
import {
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
              srcSet="./mythus_arena/sec_1_pic_mobile.jpg"
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
            MYTHUS ARENA
          </div>
          <div className="font-ElectronicArtsText_Regular text-lg text-white">
            Welcome to Mythus Arena, a groundbreaking strategy game set in the
            vast expanse of the cosmos. Immerse yourself in an epic adventure
            where seven parallel worlds clash in a battle for dominance
          </div>
          <div className="my-5 flex">
            <button className="mr-2 flex rounded-3xl bg-[#abddd7] p-5 py-3 font-ElectronicArtsText_Regular text-black hover:scale-[95%] sm:max-w-44 sm:text-base">
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
            Coming Oct 17 , 2027
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
          Breathtaking Graphics
        </div>
        <div className="font-ElectronicArtsText_Regular text-lg text-white">
          Leveraging the power of the Unreal Engine, Mythus Arena brings to life
          visually stunning landscapes and meticulously designed environments
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
              October 17 , 2027
            </div>
            <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
              You can experience the story part of the game in October 2027
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
          currentSlideNumber === 3
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
    speed: 350,
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
        breakpoint: 450,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          centerPadding: "90px",
        },
      },
    ],
  };

  return (
    <section className="bg-[#323232]">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative my-40 px-5 py-20">
          <div className="p-5 lg:flex lg:flex-col xl:flex-row">
            <div className="xl:w-1/2 xl:pr-16">
              <div className="py-6 font-ElectronicArtsDisplay_Bold text-4xl uppercase text-white sm:text-4xl">
                Pre-order the Ultimate Edition by 20 August 2027 for
                limited-time rewards
              </div>
              <div className="font-ElectronicArtsText_Regular text-lg text-white">
                In Mythus Arena, the discovery of seven parallel worlds shatters
                the peace and ignites a fierce struggle for supremacy.
                Commanders from each of these worlds, driven by ambition and a
                thirst for power, launch daring invasions into the other realms
              </div>
              <button className="my-5 rounded-3xl border border-white bg-transparent p-5 py-3 font-ElectronicArtsText_Regular text-white hover:scale-[95%] sm:max-w-44 sm:text-base">
                <div className="">Pre-Order</div>
              </button>
            </div>
            <div className="ml-auto lg:w-2/3 xl:w-1/2 xl:pl-16">
              <div className="relative flex flex-col lg:flex-row">
                <Image
                  placeholder="blur"
                  src={carousel_1_pic_header}
                  width={0}
                  height={0}
                  alt=""
                  className="absolute left-1/2 top-0 z-20 -translate-x-1/2 lg:-left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-1/2"
                />
                <div className="mt-32 rounded-xl bg-[#1e1f1f] p-3 pt-32 lg:mt-0 lg:py-16 xl:pl-48 xl:pr-10 xl:pt-10">
                  <div className="ml-auto lg:w-2/3">
                    <div className="w-max border border-white/30 p-2 text-sm">
                      Limited-Time Offer
                    </div>
                    <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                      Mythus Arena
                    </div>
                    <div className="font-ElectronicArtsText_Regular text-lg text-white">
                      Mythus arena have a Seven Unique Worlds . Enjoy the
                      fantastic graphics of Mythus arena on all platforms
                    </div>
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
              <div className="w-full pt-44">
                <div className="relative mx-2 min-h-[390px] cursor-pointer rounded-xl bg-[#1e1f1f] lg:min-h-[420px]">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_1_pic_1}
                      width={0}
                      height={0}
                      alt=""
                      className="absolute -top-1/4 sm:-top-1/3 md:-top-1/2 lg:-top-1/4"
                    />
                  </div>

                  <div className="pt-32 sm:pt-36">
                    <div className="pl-4">
                      {/* <div className="w-max border border-white/30 p-2 text-sm">
                        Ultimate Edition only
                      </div>
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div> */}
                      <div className="font-ElectronicArtsText_Regular text-lg text-white">
                        As a commander, you will lead your forces, forge
                        alliances, and strategize to conquer these mysterious
                        lands
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-44">
                <div className="relative mx-2 min-h-[390px] cursor-pointer rounded-xl bg-[#1e1f1f] lg:min-h-[420px]">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_1_pic_2}
                      width={0}
                      height={0}
                      alt=""
                      className="absolute -top-1/4 sm:-top-1/3 md:-top-1/2 lg:-top-1/4"
                    />
                  </div>

                  <div className="pt-32 sm:pt-36">
                    <div className="pl-4">
                      {/* <div className="w-max border border-white/30 p-2 text-sm">
                        Ultimate Edition only
                      </div>
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div> */}
                      <div className="font-ElectronicArtsText_Regular text-lg text-white">
                        Leveraging the power of the Unreal Engine, Mythus Arena
                        brings to life visually stunning landscapes and
                        meticulously designed environments
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-44">
                <div className="relative mx-2 min-h-[390px] cursor-pointer rounded-xl bg-[#1e1f1f] lg:min-h-[420px]">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_1_pic_3}
                      width={0}
                      height={0}
                      alt=""
                      className="absolute -top-1/4 sm:-top-1/3 md:-top-1/2 lg:-top-1/4"
                    />
                  </div>

                  <div className="pt-32 sm:pt-36">
                    <div className="pl-4">
                      {/* <div className="w-max border border-white/30 p-2 text-sm">
                        Ultimate Edition only
                      </div>
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div> */}
                      <div className="font-ElectronicArtsText_Regular text-lg text-white">
                        You can experience this game and compete with others
                        through gaming platforms such as mobile, PlayStation 5
                        consoles, Xbox Series X and S, as well as PC
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-44">
                <div className="relative mx-2 min-h-[390px] cursor-pointer rounded-xl bg-[#1e1f1f] lg:min-h-[420px]">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_1_pic_4}
                      width={0}
                      height={0}
                      alt=""
                      className="absolute -top-1/4 sm:-top-1/3 md:-top-1/2 lg:-top-1/4"
                    />
                  </div>

                  <div className="pt-32 sm:pt-36">
                    <div className="pl-4">
                      {/* <div className="w-max border border-white/30 p-2 text-sm">
                        Ultimate Edition only
                      </div>
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div> */}
                      <div className="font-ElectronicArtsText_Regular text-lg text-white">
                        Mythus Arena offers a strategic gameplay experience that
                        is both deep and accessible. Engage in fast-paced
                        battles where quick thinking and tactical prowess are
                        your greatest allies
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-44">
                <div className="relative mx-2 min-h-[390px] cursor-pointer rounded-xl bg-[#1e1f1f] lg:min-h-[420px]">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_1_pic_5}
                      width={0}
                      height={0}
                      alt=""
                      className="absolute -top-1/4 sm:-top-1/3 md:-top-1/2 lg:-top-1/4"
                    />
                  </div>

                  <div className="pt-32 sm:pt-36">
                    <div className="pl-4">
                      {/* <div className="w-max border border-white/30 p-2 text-sm">
                        Ultimate Edition only
                      </div>
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div> */}
                      <div className="font-ElectronicArtsText_Regular text-lg text-white">
                        Utilize a wide array of abilities and weapons to
                        outmaneuver and outfight your opponents
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-44">
                <div className="relative mx-2 min-h-[390px] cursor-pointer rounded-xl bg-[#1e1f1f] lg:min-h-[420px]">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_1_pic_6}
                      width={0}
                      height={0}
                      alt=""
                      className="absolute -top-1/4 sm:-top-1/3 md:-top-1/2 lg:-top-1/4"
                    />
                  </div>

                  <div className="pt-32 sm:pt-36">
                    <div className="pl-4">
                      {/* <div className="w-max border border-white/30 p-2 text-sm">
                        Ultimate Edition only
                      </div>
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div> */}
                      <div className="font-ElectronicArtsText_Regular text-lg text-white">
                        Be among the first to receive news and updates on
                        everything Mythus Arena. Join Neto PlayFusion today and
                        start your adventure
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-44">
                <div className="relative mx-2 min-h-[390px] cursor-pointer rounded-xl bg-[#1e1f1f] lg:min-h-[420px]">
                  <div>
                    <Image
                      placeholder="blur"
                      src={carousel_1_pic_7}
                      width={0}
                      height={0}
                      alt=""
                      className="absolute -top-1/4 sm:-top-1/3 md:-top-1/2 lg:-top-1/4"
                    />
                  </div>

                  <div className="pt-32 sm:pt-36">
                    <div className="pl-4">
                      {/* <div className="w-max border border-white/30 p-2 text-sm">
                        Ultimate Edition only
                      </div>
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        FC 25 Heroes
                      </div> */}
                      <div className="font-ElectronicArtsText_Regular text-lg text-white">
                        By following our social media channels, you won't miss
                        out on game news and updates, and you'll always stay
                        informed
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
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        Mythus Arena
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        Mythus Arena is an exciting and engaging strategy game
                        set to be released for both consoles and mobile devices
                      </div>
                      <button className="ml-2 rounded-3xl border border-white bg-transparent p-5 py-3 font-ElectronicArtsText_Regular text-white hover:scale-[95%] sm:max-w-44 sm:text-base">
                        <div className="">Watch Trailer</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="h-full cursor-pointer rounded-xl py-8 pb-8 md:px-0">
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
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        Legendary Lands
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        In Mythus Arena, players will explore seven distinct and
                        mysterious lands, each inspired by ancient and legendary
                        civilizations such as the Egyptian Pyramids, Persepolis,
                        the Hanging Gardens of Babylon, and more
                      </div>
                      <button className="ml-2 rounded-3xl border border-white bg-transparent p-5 py-3 font-ElectronicArtsText_Regular text-white hover:scale-[95%] sm:max-w-44 sm:text-base">
                        <div className="">Watch Trailer</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="h-full cursor-pointer rounded-xl py-8 pb-8 md:px-0">
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
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        Characters and Updates
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        Mythus Arena will feature a vast array of unique
                        characters. Each character comes with their own special
                        abilities and traits, allowing players to craft a wide
                        range of strategies
                      </div>
                      <button className="ml-2 rounded-3xl border border-white bg-transparent p-5 py-3 font-ElectronicArtsText_Regular text-white hover:scale-[95%] sm:max-w-44 sm:text-base">
                        <div className="">Watch Trailer</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="h-full cursor-pointer rounded-xl py-8 pb-8 md:px-0">
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
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        Smooth Controls and 3D Graphics
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        One of the standout features of Mythus Arena is its
                        incredibly smooth and precise controls on consoles.
                        Additionally, the 3D mode on mobile offers players a
                        stunning visual experience
                      </div>
                      <button className="ml-2 rounded-3xl border border-white bg-transparent p-5 py-3 font-ElectronicArtsText_Regular text-white hover:scale-[95%] sm:max-w-44 sm:text-base">
                        <div className="">Watch Trailer</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="h-full cursor-pointer rounded-xl py-8 pb-8 md:px-0">
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
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                        Sound and Music
                      </div>
                      <div className="pb-10 font-ElectronicArtsText_Regular text-lg text-white">
                        This unique combination of sound and music transforms
                        Mythus Arena into an artistic masterpiece, taking you on
                        an exciting journey through history and legends with
                        every moment
                      </div>
                      <button className="ml-2 rounded-3xl border border-white bg-transparent p-5 py-3 font-ElectronicArtsText_Regular text-white hover:scale-[95%] sm:max-w-44 sm:text-base">
                        <div className="">Watch Trailer</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
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
                      <div className="pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
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
//                           : "w-full rounded-xl transition-all duration-300 md:scale-90"
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
//                           : "w-full rounded-xl transition-all duration-300 md:scale-90"
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
            Pre-order Mythus Arena
          </div>
          <div className="font-ElectronicArtsText_Regular text-lg text-white">
            Mythus Arena immerses you in a mythical and enchanting world with
            its captivating sound design and music. Every sound and musical
            piece is crafted to enhance the legendary and mysterious atmosphere
            of the game, offering players a deeply immersive experience
          </div>
          <div className="my-5 flex">
            <button className="mr-2 flex rounded-3xl bg-[#abddd7] p-5 py-3 font-ElectronicArtsText_Regular text-black hover:scale-[95%] sm:max-w-44 sm:text-base">
              <div className="">Pre-Order Now</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
// const Gradient_sec = () => {
//   return (
//     <section className="pb-10 md:px-5">
//       <div className="gradient_bg_mythus_arena mx-auto mt-4 flex w-11/12 flex-col items-center rounded-[3rem] px-10 py-10 text-center md:w-full">
//         <Image
//           alt=""
//           src={gradient_logo}
//           width={0}
//           height={0}
//           className="my-2 w-10/12"
//         />
//         <div className="my-2 font-druk_wide_super uppercase lg:text-[27px]">
//           TRY NOW ON NETO PLAY FUSION
//         </div>
//         <button className="btn mt-5 w-full rounded-3xl bg-[#abddd7] p-5 py-3 font-druk_text_medium uppercase text-black hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
//           <div className="btn_div">Start Now</div>
//         </button>
//       </div>
//     </section>
//   );
// };
// const SocialMedia_sec = () => {
//   return (
//     <section className="mx-auto">
//       <div className="overflow-hidden py-10 text-center">
//         <div className="combarfield_H1 pb-5 text-black">
//           FOLLOW US ON OUR SOCIAL MEDIA
//         </div>
//         <div className="flex justify-center pb-5">
//           <div className="border-r border-black p-5 sm:p-10">
//             <a className="cursor-pointer text-black transition duration-300 ease-in-out">
//               <svg
//                 className="h-8 w-8 transition-all duration-100 hover:scale-110"
//                 fill="currentColor"
//                 viewBox="0 0 40 40"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M3.623 6.972v4.9565H0v6.061h3.623V36h7.442V17.99h4.994s.4678-2.9062.6945-6.0838h-5.6603v-4.144c0-.6194.8114-1.4525 1.6134-1.4525h4.0548V0h-5.513C3.4388-.0004 3.6228 6.0664 3.6228 6.972z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </a>
//           </div>
//           <div className="border-r border-black p-5 sm:p-10">
//             <a className="cursor-pointer text-black transition duration-300 ease-in-out">
//               <svg
//                 className="h-8 w-8 transition-all duration-100 hover:scale-110"
//                 fill="currentColor"
//                 viewBox="0 0 60 62"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M35.7082 25.9642L58.0445 0H52.7515L33.3569 22.5444L17.8664 0H0L23.4246 34.091L0 61.3185H5.2933L25.7746 37.5109L42.1336 61.3185H60L35.7069 25.9642H35.7082ZM28.4582 34.3914L26.0849 30.9967L7.20055 3.98472H15.3307L30.5706 25.7843L32.944 29.1789L52.754 57.515H44.6238L28.4582 34.3927V34.3914Z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </a>
//           </div>
//           <div className="border-r border-black p-5 sm:p-10">
//             <a className="cursor-pointer text-black transition duration-300 ease-in-out">
//               <svg
//                 className="h-8 w-8 transition-all duration-100 hover:scale-110"
//                 fill="currentColor"
//                 viewBox="0 0 192 192"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M180.32,53.36A22.12,22.12,0,0,0,164.76,37.7C151,34,96,34,96,34s-55,0-68.76,3.7A22.12,22.12,0,0,0,11.68,53.36C8,67.18,8,96,8,96s0,28.82,3.68,42.64A22.12,22.12,0,0,0,27.24,154.3C41,158,96,158,96,158s55,0,68.76-3.7a22.12,22.12,0,0,0,15.56-15.66C184,124.82,184,96,184,96S184,67.18,180.32,53.36Z"
//                   clipRule="evenodd"
//                 ></path>
//                 <polygon
//                   fill="#fff"
//                   stroke="none"
//                   points="78 122.17 124 96 78 69.83 78 122.17"
//                 ></polygon>
//               </svg>
//             </a>
//           </div>
//           <div className="p-5 sm:p-10">
//             <a className="cursor-pointer text-black transition duration-300 ease-in-out">
//               <svg
//                 className="h-8 w-8 transition-all duration-100 hover:scale-110"
//                 fill="currentColor"
//                 viewBox="0 0 40 40"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M18 0c-4.8885 0-5.5015.0207-7.4214.1083C8.6626.1957 7.3542.5 6.2093.945c-1.1836.46-2.1875 1.0754-3.1882 2.076C2.0205 4.022 1.405 5.0258.945 6.2094.5 7.3543.1957 8.6627.1083 10.5786.0207 12.4986 0 13.1116 0 18c0 4.8885.0207 5.5015.1083 7.4214.0874 1.916.3917 3.2244.8367 4.3693.46 1.1836 1.0754 2.1875 2.076 3.1882 1.0008 1.0006 2.0047 1.616 3.1883 2.076 1.145.445 2.4534.7493 4.3693.8367 1.92.0876 2.533.1083 7.4214.1083 4.8885 0 5.5015-.0207 7.4214-.1083 1.916-.0874 3.2244-.3917 4.3693-.8366 1.1836-.46 2.1875-1.0754 3.1882-2.076 1.0006-1.0008 1.616-2.0047 2.076-3.1883.445-1.145.7493-2.4534.8367-4.3693.0876-1.92.1083-2.533.1083-7.4214 0-4.8885-.0207-5.5015-.1083-7.4214-.0874-1.916-.3917-3.2244-.8366-4.3693-.46-1.1836-1.0754-2.1875-2.076-3.1882-1.0008-1.0006-2.0047-1.616-3.1883-2.076C28.6457.5 27.3373.1957 25.4214.1083 23.5014.0207 22.8884 0 18 0zm0 3.2432c4.8062 0 5.3755.0184 7.2735.105 1.755.08 2.708.3733 3.3424.6198.84.3265 1.4397.7165 2.0695 1.3465.63.6298 1.02 1.2294 1.3465 2.0696.2465.6344.5398 1.5875.6198 3.3425.0866 1.898.105 2.4673.105 7.2735 0 4.8062-.0184 5.3755-.105 7.2735-.08 1.755-.3733 2.708-.6198 3.3424-.3265.84-.7165 1.4397-1.3465 2.0695-.6298.63-1.2294 1.02-2.0696 1.3465-.6344.2465-1.5875.5398-3.3425.6198-1.8977.0866-2.467.105-7.2735.105-4.8066 0-5.3757-.0184-7.2735-.105-1.755-.08-2.708-.3733-3.3424-.6198-.84-.3265-1.4397-.7165-2.0695-1.3465-.63-.6298-1.02-1.2294-1.3465-2.0696-.2465-.6344-.5398-1.5875-.6198-3.3425-.0866-1.898-.105-2.4673-.105-7.2735 0-4.8062.0184-5.3755.105-7.2735.08-1.755.3733-2.708.6198-3.3424.3265-.84.7165-1.4397 1.3465-2.0695.6298-.63 1.2294-1.02 2.0696-1.3465.6344-.2465 1.5875-.5398 3.3425-.6198 1.898-.0866 2.4673-.105 7.2735-.105zm-.1297 5.4098c-5.0843 0-9.206 4.1216-9.206 9.206 0 5.0843 4.1217 9.206 9.206 9.206s9.206-4.1217 9.206-9.206c0-5.0844-4.1217-9.206-9.206-9.206zm0 15.1817c-3.3003 0-5.9758-2.6754-5.9758-5.9757 0-3.3004 2.6755-5.9758 5.9758-5.9758 3.3003 0 5.9758 2.6754 5.9758 5.9758 0 3.3003-2.6754 5.9757-5.9757 5.9757zM29.7838 8.3823c0-1.1963-.9698-2.166-2.166-2.166-1.1963 0-2.1662.9697-2.1662 2.166s.97 2.166 2.166 2.166c1.1964 0 2.1662-.9697 2.1662-2.166z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </a>
//           </div>
//         </div>
//         <div className="combarfield_P text-black">
//           <a href="#" className="text-[#F04]">
//             Sign-up for our newsletter{" "}
//           </a>
//           to be the first to know about new updates.
//         </div>
//       </div>
//     </section>
//   );
// };
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
      <div className="my-6 text-center font-ElectronicArtsDisplay_Bold text-3xl uppercase text-white sm:text-4xl">
        Mythus Arena
      </div>
      <div className="hidden md:block">
        <div className="flex justify-between px-10 py-7">
          <div className="text-center font-ElectronicArtsDisplay_Bold text-4xl uppercase text-white sm:text-4xl">
            Be updated
          </div>
          <button className="ml-2 rounded-3xl border border-white bg-transparent px-9 py-3 font-ElectronicArtsText_Regular text-white hover:scale-[95%] sm:max-w-44 sm:text-base">
            <div className="">Join Us</div>
          </button>
        </div>
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
                  Pre-Order
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  October 17 , 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  MYTHUS ARENA
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Designed to deliver a unique and revolutionary experience in
                  the world of strategy games
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
                  Pre-Order
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  October 17 , 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  MYTHUS ARENA
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Mythus Arena immerses you in a mythical and enchanting world
                  with its captivating sound design and music
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[25%] cursor-pointer p-3 transition-transform hover:-translate-y-2">
            <div className="rounded-xl border border-[#4b4b4b] bg-[#4b4b4b]">
              <div className="relative">
                <Image
                  src={sec_4_pic_3}
                  width={0}
                  height={0}
                  alt=""
                  className="rounded-t-xl"
                  placeholder="blur"
                />
              </div>
              <div className="p-4">
                <div className="w-max border border-white/30 p-2 text-sm">
                  Pre-Order
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  October 17 , 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  MYTHUS ARENA
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Every sound and musical piece is crafted to enhance the
                  legendary and mysterious atmosphere of the game, offering
                  players a deeply immersive experience
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[25%] cursor-pointer p-3 transition-transform hover:-translate-y-2">
            <div className="rounded-xl border border-[#4b4b4b] bg-[#4b4b4b]">
              <div className="relative">
                <Image
                  src={sec_4_pic_4}
                  width={0}
                  height={0}
                  alt=""
                  className="rounded-t-xl"
                  placeholder="blur"
                />
              </div>
              <div className="p-4">
                <div className="w-max border border-white/30 p-2 text-sm">
                  Pre-Order
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  October 17 , 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  MYTHUS ARENA
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  You will have complete control over your characters,
                  environment, and lands
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[25%] cursor-pointer p-3 transition-transform hover:-translate-y-2">
            <div className="rounded-xl border border-[#4b4b4b] bg-[#4b4b4b]">
              <div className="relative">
                <Image
                  src={sec_4_pic_5}
                  width={0}
                  height={0}
                  alt=""
                  className="rounded-t-xl"
                  placeholder="blur"
                />
              </div>
              <div className="p-4">
                <div className="w-max border border-white/30 p-2 text-sm">
                  Pre-Order
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  October 17 , 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  MYTHUS ARENA
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  This professional control allows you to execute your
                  strategies with high precision and dominate the game
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="my-4 ml-10 font-ElectronicArtsDisplay_Bold text-3xl text-white sm:text-4xl">
          Be updated
        </div>

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
                  Pre-Order
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  October 17 , 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  MYTHUS ARENA
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Designed to deliver a unique and revolutionary experience in
                  the world of strategy games
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
                  Pre-Order
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  October 17 , 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  MYTHUS ARENA
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Mythus Arena immerses you in a mythical and enchanting world
                  with its captivating sound design and music
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="rounded-xl bg-[#4b4b4b]">
              <Image
                src={sec_4_pic_3}
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                className="rounded-t-xl"
              />
              <div className="p-4">
                <div className="w-max border border-white/30 p-2 text-sm">
                  Pre-Order
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  October 17 , 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  MYTHUS ARENA
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  Every sound and musical piece is crafted to enhance the
                  legendary and mysterious atmosphere of the game, offering
                  players a deeply immersive experience
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="rounded-xl bg-[#4b4b4b]">
              <Image
                src={sec_4_pic_4}
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                className="rounded-t-xl"
              />
              <div className="p-4">
                <div className="w-max border border-white/30 p-2 text-sm">
                  Pre-Order
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  October 17 , 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  MYTHUS ARENA
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  You will have complete control over your characters,
                  environment, and lands
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="rounded-xl bg-[#4b4b4b]">
              <Image
                src={sec_4_pic_5}
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                className="rounded-t-xl"
              />
              <div className="p-4">
                <div className="w-max border border-white/30 p-2 text-sm">
                  Pre-Order
                </div>
                <div className="flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  October 17 , 2024
                </div>
                <div className="textEllipsis pt-3 font-ElectronicArtsDisplay_Bold text-xl uppercase text-white sm:text-xl">
                  MYTHUS ARENA
                </div>
                <div className="textEllipsis flex items-center pt-3 font-ElectronicArtsText_Regular text-sm">
                  This professional control allows you to execute your
                  strategies with high precision and dominate the game
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <button className="ml-10 mt-6 rounded-3xl border border-white bg-transparent px-9 py-3 font-ElectronicArtsText_Regular text-white hover:scale-[95%] sm:max-w-44 sm:text-base">
          <div className="">Join Us</div>
        </button>
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
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[50vh] xl:h-[66vh]">
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
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[50vh] xl:h-[66vh]">
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
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[50vh] xl:h-[66vh]">
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
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[50vh] xl:h-[66vh]">
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
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[50vh] xl:h-[66vh]">
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
          <div className="h-[55vh] rounded-xl sm:h-[70vh] lg:h-[50vh] xl:h-[66vh]">
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
export default function mythus_arena() {
  return (
    <main className="relative">
      <title>Mythus Arena</title>
      {/* <div className="!font-SST_Light">
        <Navbar />
      </div> */}
      <div className="mt-16 overflow-hidden bg-[#151616]">
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
        {/* <section className="fixed_bg pt-5">
          <div className="mx-auto max-w-[1440px] pb-28">
            <div className="mx-auto mb-10 min-h-40 lg:flex">
              <Gradient_sec />
            </div>
            <div className="mx-auto min-h-40 lg:flex">
              <SocialMedia_sec />
            </div>
          </div>
        </section> */}
        <section className="fixed_bg pt-5">
          <Carousel_4 />
        </section>
        <Social_bar />
      </div>
    </main>
  );
}
