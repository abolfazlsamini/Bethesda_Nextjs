"use client";
import Image from "next/image";
import sec1_pc from "../../../public/hoops_heat/sec1_pc.png";
import sec2_1 from "../../../public/hoops_heat/sec2_1.png";
import sec3_1 from "../../../public/hoops_heat/sec3_1.png";
import sec3_2 from "../../../public/hoops_heat/sec3_2.png";
import sec3_3 from "../../../public/hoops_heat/sec3_3.png";

import sec4_1 from "../../../public/hoops_heat/sec4_1.png";
import sec4_2 from "../../../public/hoops_heat/sec4_2.png";
import sec4_3 from "../../../public/hoops_heat/sec4_3.png";
import sec4_4 from "../../../public/hoops_heat/sec4_4.png";
import sec4_5 from "../../../public/hoops_heat/sec4_5.png";
import sec4_6 from "../../../public/hoops_heat/sec4_6.png";
import sec4_7 from "../../../public/hoops_heat/sec4_7.png";
import sec4_8 from "../../../public/hoops_heat/sec4_8.png";
import logo from "../../../public/hoops_heat/logo.webp";
import ytlogo from "../../../public/hoops_heat/ytlogo.png";
import gradient_logo from "../../../public/hoops_heat/gradient_logo.png";

import { useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Hoops_Heat() {
  const Navbar = () => {
    return (
      <section>
        <div className="fixed top-16 z-20 flex h-16 w-full items-center bg-[#194461] px-4">
          <a href="/hoops_heat">
            <Image src={logo} alt="" width={0} height={0} className="w-32" />
          </a>
        </div>
      </section>
    );
  };
  const Sec_1 = () => {
    return (
      <section>
        <div className="relative">
          <div className="max-h-[90vh] overflow-hidden md:max-h-max">
            <picture>
              <source
                srcSet="./hoops_heat/sec1_mobile.png"
                media="(max-width:1023.95px)"
              ></source>

              <Image
                src={sec1_pc}
                alt=""
                width={0}
                height={0}
                className="w-full object-cover"
              />
            </picture>
          </div>
          <div>
            <a
              href="#"
              className="absolute bottom-16 left-1/2 block -translate-x-1/2 rounded-xl bg-white px-7 py-3 text-2xl font-bold text-black hover:bg-gray-300"
            >
              BUY NOW
            </a>
          </div>
        </div>
      </section>
    );
  };
  const Sec_2 = () => {
    return (
      <section>
        <div className="bg-black p-8">
          <div className="relative mx-auto flex justify-center">
            <Image
              src={ytlogo}
              alt=""
              width={0}
              height={0}
              className="absolute left-1/2 top-1/2 z-30 size-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:opacity-90"
            />
            <Image src={sec2_1} alt="" width={0} height={0} />
            {/* <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/G1Qo0mYKDEc?wmode=opaque"
              title="NBA 2K25 | World of 2K"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe> */}
          </div>
        </div>
      </section>
    );
  };
  const Sec_3 = () => {
    const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <ChevronLeftIcon
          className={
            currentSlideNumber === 0
              ? "absolute bottom-0 left-[30%] z-10 size-10 rounded-full p-1 text-black opacity-35 lg:block"
              : "absolute bottom-0 left-[30%] z-10 size-10 cursor-pointer rounded-full p-1 text-black lg:block"
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
              ? "absolute bottom-0 right-[30%] z-10 size-10 rounded-full p-1 text-black opacity-35 lg:block"
              : "absolute bottom-0 right-[30%] z-10 size-10 cursor-pointer rounded-full p-1 text-black lg:block"
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
      speed: 300,
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
              ? "size-3 rounded-full border border-black bg-black hover:opacity-85"
              : "size-3 rounded-full border border-black bg-white hover:opacity-85"
          }
        ></div>
      ),

      mobileFirst: true,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            centerPadding: "50px",
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerPadding: "90px",
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
        <div className="bg-[#194461]">
          <div className="hoops_heat_sec3_bg">
            <div className="block md:hidden">
              <div className="slider-container mx-auto py-20">
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
                          src={sec3_1}
                          width={0}
                          height={0}
                          alt=""
                          className={
                            currentSlideNumber === 0
                              ? "w-full scale-105 transition-all duration-300"
                              : "w-full scale-90 transition-all duration-300"
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
                        <div className="flex flex-col items-center pt-3">
                          <div className="text-center font-SharpGroteskBold text-xl font-bold text-black">
                            HOOPS HEAT ALL-STAR EDITION
                          </div>
                          <a
                            href="#"
                            className="my-4 block w-fit rounded-xl bg-white px-7 py-3 font-SharpGroteskBold text-2xl font-bold text-black hover:bg-gray-300"
                          >
                            BUY NOW
                          </a>
                          <div className="text-center font-SharpGroteskMed text-xl font-thin text-black">
                            Showcase your All-Star talent with the Hoops Heat
                            All-Star Edition
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="h-full cursor-pointer rounded-xl px-3 py-8 pb-8 md:px-0">
                      <div>
                        <Image
                          placeholder="blur"
                          src={sec3_2}
                          width={0}
                          height={0}
                          alt=""
                          className={
                            currentSlideNumber === 1
                              ? "w-full scale-105 transition-all duration-300"
                              : "w-full scale-90 transition-all duration-300"
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
                        <div className="flex flex-col items-center pt-3">
                          <div className="text-center font-SharpGroteskBold text-xl font-bold text-white">
                            HOOPS HEAT TOURNAMENT EDITION
                          </div>
                          <a
                            href="#"
                            className="my-4 block w-fit rounded-xl bg-white px-7 py-3 font-SharpGroteskBold text-2xl font-bold text-black hover:bg-gray-300"
                          >
                            BUY NOW
                          </a>
                          <div className="text-center font-SharpGroteskMed text-xl font-thin text-white">
                            Inspire the next generation of NBA stars with the
                            HOOPS HEAT Tournament Edition
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="h-full cursor-pointer rounded-xl px-3 py-8 pb-8 md:px-0">
                      <div>
                        <Image
                          placeholder="blur"
                          src={sec3_3}
                          width={0}
                          height={0}
                          alt=""
                          className={
                            currentSlideNumber === 2
                              ? "w-full scale-105 transition-all duration-300"
                              : "w-full scale-90 transition-all duration-300"
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
                        <div className="flex flex-col items-center pt-3">
                          <div className="text-center font-SharpGroteskBold text-xl font-bold text-white">
                            HOOPS HEAT STANDARD EDITION
                          </div>
                          <a
                            href="#"
                            className="my-4 block w-fit rounded-xl bg-white px-7 py-3 font-SharpGroteskBold text-2xl font-bold text-black hover:bg-gray-300"
                          >
                            BUY NOW
                          </a>
                          <div className="text-center font-SharpGroteskMed text-xl font-thin text-white">
                            Raise banners and define your NBA legacy with the
                            HOOPS HEAT Standard Edition
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="mx-auto hidden max-w-6xl py-32 md:flex">
              <div className="w-1/3 px-8">
                <div className="p-5">
                  <Image src={sec3_1} alt="" width={0} height={0} />
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-center font-SharpGroteskBold text-xl font-bold text-white">
                    HOOPS HEAT ALL-STAR EDITION
                  </div>
                  <a
                    href="#"
                    className="my-4 block w-fit rounded-xl bg-white px-7 py-3 font-SharpGroteskBold text-2xl font-bold text-black hover:bg-gray-300"
                  >
                    BUY NOW
                  </a>
                  <div className="text-center font-SharpGroteskMed text-xl font-thin text-white">
                    Showcase your All-Star talent with the Hoops Heat All-Star
                    Edition
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-8">
                <div className="p-5">
                  <Image src={sec3_2} alt="" width={0} height={0} />
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-center font-SharpGroteskBold text-xl font-bold text-white">
                    HOOPS HEAT TOURNAMENT EDITION
                  </div>
                  <a
                    href="#"
                    className="my-4 block w-fit rounded-xl bg-white px-7 py-3 font-SharpGroteskBold text-2xl font-bold text-black hover:bg-gray-300"
                  >
                    BUY NOW
                  </a>
                  <div className="text-center font-SharpGroteskMed text-xl font-thin text-white">
                    Inspire the next generation of NBA stars with the HOOPS HEAT
                    Tournament Edition
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-8">
                <div className="p-5">
                  <Image src={sec3_3} alt="" width={0} height={0} />
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-center font-SharpGroteskBold text-xl font-bold text-white">
                    HOOPS HEAT STANDARD EDITION
                  </div>
                  <a
                    href="#"
                    className="my-4 block w-fit rounded-xl bg-white px-7 py-3 font-SharpGroteskBold text-2xl font-bold text-black hover:bg-gray-300"
                  >
                    BUY NOW
                  </a>
                  <div className="text-center font-SharpGroteskMed text-xl font-thin text-white">
                    Raise banners and define your NBA legacy with the HOOPS HEAT
                    Standard Edition
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Sec_4 = () => {
    return (
      <section>
        <div className="bg-white">
          <div className="mx-auto flex max-w-7xl flex-col-reverse items-center py-10 md:flex-row md:py-16">
            <div className="px-3 md:w-1/2">
              <Image src={sec4_1} alt="" width={0} height={0} />
            </div>
            <div className="flex flex-col items-center px-3 md:w-1/2">
              <div className="px-10 text-center font-SharpGroteskBold text-3xl font-bold uppercase text-black md:text-5xl xl:text-6xl">
                Gravity Ball
              </div>
              <div className="pb-3 pt-5 font-SharpGroteskMed font-thin text-black md:pb-0 md:text-lg xl:pt-8 xl:text-xl">
                The game Hoops Heat is a fantasy, competitive, and sports
                experience. In this game, you'll witness all sorts of outlandish
                ways to play basketball—ranging from setting opponents and the
                ball on fire, to destroying the opposing team's hoop, performing
                high-flying dunks, and making unbelievable long-range
                three-point shots. This game promises to be incredibly
                entertaining and highly addictive
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col-reverse items-center py-10 md:flex-row-reverse md:py-16">
            <div className="px-3 md:w-1/2">
              <Image src={sec4_2} alt="" width={0} height={0} />
            </div>
            <div className="flex flex-col items-center px-3 md:w-1/2">
              <div className="px-10 text-center font-SharpGroteskBold text-3xl font-bold uppercase text-black md:text-5xl xl:text-6xl">
                HOOPS HEAT will be a multi-platform game
              </div>
              <div className="pb-3 pt-5 font-SharpGroteskMed font-thin text-black md:pb-0 md:text-lg xl:pt-8 xl:text-xl">
                Our game studio, WarpStudio, is responsible for developing this
                title. The initial version will be released for mobile
                platforms. Once the mobile version is complete, work on porting
                the game to consoles will immediately begin
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col-reverse items-center py-10 md:flex-row md:py-16">
            <div className="px-3 md:w-1/2">
              <Image src={sec4_3} alt="" width={0} height={0} />
            </div>
            <div className="flex flex-col items-center px-3 md:w-1/2">
              <div className="px-10 text-center font-SharpGroteskBold text-3xl font-bold uppercase text-black md:text-5xl xl:text-6xl">
                HOOPS HEAT RANKING SYSTEM
              </div>
              <div className="pb-3 pt-5 font-SharpGroteskMed font-thin text-black md:pb-0 md:text-lg xl:pt-8 xl:text-xl">
                In the game's ranking system, players earn 3 points for each win
                and 1 point for a draw. Losing a match deducts 1 point from the
                player's total. If the player has no points, negative points are
                recorded. Additionally, placements achieved in events and
                leagues will also influence the player's score and ranking
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col-reverse items-center py-10 md:flex-row-reverse md:py-16">
            <div className="px-3 md:w-1/2">
              <Image src={sec4_4} alt="" width={0} height={0} />
            </div>
            <div className="flex flex-col items-center px-3 md:w-1/2">
              <div className="px-10 text-center font-SharpGroteskBold text-3xl font-bold uppercase text-black md:text-5xl xl:text-6xl">
                HOOPS HEAT LEAGUE MATCH
              </div>
              <div className="pb-3 pt-5 font-SharpGroteskMed font-thin text-black md:pb-0 md:text-lg xl:pt-8 xl:text-xl">
                In the LEAGUE MATCH mode, you will be matched with another
                online player. At the end of the match, you can select the
                Rematch option, and if the opponent agrees, you can play again.
                You also have the option to send them a friend request. Points
                earned or lost in this mode will directly affect your ranking
                score
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col-reverse items-center py-10 md:flex-row md:py-16">
            <div className="px-3 md:w-1/2">
              <Image src={sec4_5} alt="" width={0} height={0} />
            </div>
            <div className="flex flex-col items-center px-3 md:w-1/2">
              <div className="px-10 text-center font-SharpGroteskBold text-3xl font-bold uppercase text-black md:text-5xl xl:text-6xl">
                HOOPS HEAT LOOT BOX
              </div>
              <div className="pb-3 pt-5 font-SharpGroteskMed font-thin text-black md:pb-0 md:text-lg xl:pt-8 xl:text-xl">
                These loot boxes contain items such as coins, upgrade cards, and
                similar rewards. They are awarded based on the time spent
                playing the game. For example, players need to spend around 4
                hours in the game within 24 hours to unlock the daily loot box
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col-reverse items-center py-10 md:flex-row-reverse md:py-16">
            <div className="px-3 md:w-1/2">
              <Image src={sec4_6} alt="" width={0} height={0} />
            </div>
            <div className="flex flex-col items-center px-3 md:w-1/2">
              <div className="px-10 text-center font-SharpGroteskBold text-3xl font-bold uppercase text-black md:text-5xl xl:text-6xl">
                60 characters divided into 6 tiers
              </div>
              <div className="pb-3 pt-5 font-SharpGroteskMed font-thin text-black md:pb-0 md:text-lg xl:pt-8 xl:text-xl">
                The game will feature 60 characters divided into 6 tiers, each
                containing 10 characters. Each character will have 12 upgrade
                levels, achieved through upgrade cards that can either be earned
                or purchased. The character's appearance will change every 4
                levels, giving each one 3 unique looks as they progress.To
                upgrade a character from level 1 to level 2, 10 upgrade cards
                are required. These cards can be obtained through victories,
                loot boxes, and mission rewards, or purchased directly from the
                in-game store
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col-reverse items-center py-10 md:flex-row md:py-16">
            <div className="px-3 md:w-1/2">
              <Image src={sec4_7} alt="" width={0} height={0} />
            </div>
            <div className="flex flex-col items-center px-3 md:w-1/2">
              <div className="px-10 text-center font-SharpGroteskBold text-3xl font-bold uppercase text-black md:text-5xl xl:text-6xl">
                60 characters divided into 6 tiers
              </div>
              <div className="pb-3 pt-5 font-SharpGroteskMed font-thin text-black md:pb-0 md:text-lg xl:pt-8 xl:text-xl">
                During gameplay, users can activate special abilities, depending
                on their upgrade level. These abilities can be used one or
                multiple times, with activation durations and effects lasting
                between 2 to 4 seconds. For example: Freeze Ability: Freezes the
                opponent's character for 2 to 4 seconds, preventing them from
                moving.One Shot, One Goal Ability: Guarantees that your shot
                will score 100% during its activation. These abilities add
                strategic depth to the game and can turn the tide of a match
                when used effectively
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col-reverse items-center py-10 md:flex-row-reverse md:py-16">
            <div className="px-3 md:w-1/2">
              <Image src={sec4_8} alt="" width={0} height={0} />
            </div>
            <div className="flex flex-col items-center px-3 md:w-1/2">
              <div className="px-10 text-center font-SharpGroteskBold text-3xl font-bold uppercase text-black md:text-5xl xl:text-6xl">
                PLAY ANYWHERE, WIN EVERYWHERE
              </div>
              <div className="pb-3 pt-5 font-SharpGroteskMed font-thin text-black md:pb-0 md:text-lg xl:pt-8 xl:text-xl">
                The initial version of the game will include 7 stadiums. As
                players progress, the stadiums will become more visually
                appealing, crowded, and have larger audiences, which will
                influence the cheer and fireworks during goals and game starts.
                The home and away system is randomized, with no fixed algorithm,
                but it will be designed to ensure that players are not hosting
                more than two consecutive games. However, the home and away
                setup will differ in leagues and tournaments, following a
                specific algorithm
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Sec_5 = () => {
    return (
      <section>
        <div className="hoops_heat_sec5_bg bg-[#194461]">
          <div className="mx-auto flex max-w-7xl flex-col-reverse items-center py-16 md:flex-row">
            <div className="px-3 md:w-1/2">
              <Image src={sec4_1} alt="" width={0} height={0} />
            </div>
            <div className="flex flex-col items-center px-3 md:w-1/2">
              <div className="px-10 text-center font-SharpGroteskBold text-3xl font-bold uppercase text-white md:text-5xl xl:text-6xl">
                IT'S GAME TIME
              </div>
              <div className="pb-3 pt-5 font-SharpGroteskMed font-thin text-white md:pb-0 md:text-lg xl:pt-8 xl:text-xl">
                Various game modes with time-limited challenges will be designed
                for the game. One example is the "Zombie Mode," where characters
                will have a zombie-like appearance. In this mode, the basketball
                will be altered, and the hoops will have a bloody, meat-like
                appearance. Although the gameplay itself will remain the same,
                the visual aesthetics and in-game abilities will undergo
                significant changes to match the zombie theme
              </div>
              {/* <a
                href="#"
                className="my-4 block w-fit rounded-xl bg-black px-7 py-3 font-SharpGroteskBold text-2xl font-bold text-white hover:bg-white hover:text-black"
              >
                LEARN MORE
              </a> */}
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
      <Sec_1 />
      <Sec_2 />
      <Sec_3 />
      <Sec_4 />
      <Sec_5 />
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
