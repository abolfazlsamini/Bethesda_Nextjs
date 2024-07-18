"use client";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Carousel from "../carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useInView, InView } from "react-intersection-observer";
import pic_1 from "../../../public/xbox/pic_1.jpg";
import pic_2 from "../../../public/xbox/pic_2.jpg";
import pic_3 from "../../../public/xbox/pic_3.jpg";
import pic_4 from "../../../public/xbox/pic_4.jpg";
import pic_5 from "../../../public/xbox/pic_5.jpg";
import pic_6 from "../../../public/xbox/pic_6.jpg";
import pic_7 from "../../../public/xbox/pic_7.jpg";
import pic_8 from "../../../public/xbox/pic_8.jpg";
import pic_9 from "../../../public/xbox/pic_9.jpg";
import pic_10 from "../../../public/xbox/pic_10.jpg";
import pic_11 from "../../../public/xbox/pic_11.jpg";
import pic_12 from "../../../public/xbox/pic_12.jpg";
import pic_13 from "../../../public/xbox/pic_13.jpg";
import pic_14 from "../../../public/xbox/pic_14.jpg";
import iconbar1 from "../../../public/xbox/iconbar1.svg";
import iconbar2 from "../../../public/xbox/iconbar2.svg";
import iconbar3 from "../../../public/xbox/iconbar3.svg";
import iconbar4 from "../../../public/xbox/iconbar4.svg";
import iconbar5 from "../../../public/xbox/iconbar5.svg";
import iconbar6 from "../../../public/xbox/iconbar6.svg";

const IconBar_sec = () => {
  return (
    <section>
      <div className=" max-w-[800px] sm:flex justify-center mx-auto pt-3">
        <div className="flex ">
          <div className="text-[#107c10] mx-auto max-w-[130px] md:mx-8 px-5 sm:p-1 text-center sm:w-[75px] xl:w-[90px]">
            <a
              className="flex flex-col hover:text-[#107c10]  btn_parent mb-5 text-base uppercase cursor-pointer "
              href="#"
            >
              <div>
                <Image src={iconbar1} width={1000} height={1000} />
              </div>
              <div className="text-sm font-seoproblack uppercase">DG GOLD</div>
            </a>
          </div>
          <div className="text-[#107c10] mx-auto max-w-[130px] md:mx-8 px-5 sm:p-1 text-center sm:w-[75px] xl:w-[90px]">
            <a
              className="flex flex-col hover:text-[#107c10]  btn_parent mb-5 text-base uppercase cursor-pointer "
              href="#"
            >
              <div>
                <Image src={iconbar2} width={1000} height={1000} />
              </div>
              <div className="text-sm font-seoproblack uppercase">Games</div>
            </a>
          </div>
          <div className="text-[#107c10] mx-auto max-w-[130px] md:mx-8 px-5 sm:p-1 text-center sm:w-[75px] xl:w-[90px]">
            <a
              className="flex flex-col hover:text-[#107c10]  btn_parent mb-5 text-base uppercase cursor-pointer "
              href="#"
            >
              <div>
                <Image src={iconbar3} width={1000} height={1000} />
              </div>
              <div className="text-sm font-seoproblack uppercase">consoles</div>
            </a>
          </div>
        </div>
        <div className="flex">
          <div className="text-[#107c10] mx-auto max-w-[130px] md:mx-8 px-5 sm:p-1 text-center sm:w-[75px] xl:w-[90px]">
            <a
              className="flex flex-col hover:text-[#107c10]  btn_parent mb-5 text-base uppercase cursor-pointer "
              href="#"
            >
              <div>
                <Image src={iconbar4} width={1000} height={1000} />
              </div>
              <div className="text-sm font-seoproblack uppercase">
                accessories
              </div>
            </a>
          </div>
          <div className="text-[#107c10] mx-auto max-w-[130px] md:mx-8 px-5 sm:p-1 text-center sm:w-[75px] xl:w-[90px]">
            <a
              className="flex flex-col hover:text-[#107c10]  btn_parent mb-5 text-base uppercase cursor-pointer "
              href="#"
            >
              <div>
                <Image src={iconbar5} width={1000} height={1000} />
              </div>
              <div className="text-sm font-seoproblack uppercase">play</div>
            </a>
          </div>
          <div className="text-[#107c10] mx-auto max-w-[130px] md:mx-8 px-5 sm:p-1 text-center sm:w-[75px] xl:w-[90px]">
            <a
              className="flex flex-col hover:text-[#107c10]  btn_parent mb-5 text-base uppercase cursor-pointer "
              href="#"
            >
              <div>
                <Image src={iconbar6} width={1000} height={1000} />
              </div>
              <div className="text-sm font-seoproblack uppercase">sign in</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Component = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section className="font-segoeuibold">
      <section>
        <div className="flex flex-wrap mt-9">
          <div className="flex flex-wrap lg:w-1/2">
            <div className="px-1 sm:pr-1">
              <InView>
                {({ inView, ref, entry }) => (
                  <div
                    ref={ref}
                    className={
                      inView ? "animatedCard" : "opacity-10 translate-y-8"
                    }
                  >
                    <div className="relative w-full ">
                      <div className="overflow-hidden">
                        <picture>
                          <source
                            srcSet="./xbox/pic_3_mobile.jpg"
                            media="(max-width:639.95px)"
                          ></source>
                          <source
                            srcSet="./xbox/pic_3.jpg"
                            media="(min-width:640px)"
                          ></source>
                          <Image
                            alt=""
                            className="hover:scale-110 transition-all "
                            width={1000}
                            height={1000}
                            src={pic_3}
                          />
                        </picture>
                      </div>
                      <div className="sm:absolute sm:bottom-10 sm:bg-transparent bg-[#333] sm:w-full p-3 sm:px-10 xl:px-14 sm:flex sm:justify-center sm:flex-col">
                        <div className="text-2xl mb-5 font-bold leading-[2rem] xl:text-5xl sm:text-[36px] ">
                          Have an DG Gold Acount ? You can Play Playstation , No
                          Console Required
                        </div>
                        <div className="text-sm mb-5 xl:text-xl font-segoeui">
                          Play Hundreds Of Games With Dream Gleam Gold Acount
                        </div>
                        <a
                          className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                          href="#"
                        >
                          <div className="font-extrabold  text-sm font-seoproblack">
                            explore more
                          </div>
                          <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            </div>

            <div className="px-1 pt-1">
              <InView>
                {({ inView, ref, entry }) => (
                  <div
                    ref={ref}
                    className={
                      inView ? "animatedCard" : "opacity-10 translate-y-8"
                    }
                  >
                    <div className="relative w-full sm:flex sm:flex-row ">
                      <div className="sm:w-1/2 overflow-hidden">
                        <picture>
                          <source
                            srcSet="./xbox/pic_4_mobile.jpg"
                            media="(max-width:639.95px)"
                          ></source>
                          <source
                            srcSet="./xbox/pic_4.jpg"
                            media="(min-width:640px)"
                          ></source>
                          <Image
                            alt=""
                            className="hover:scale-110 transition-all "
                            width={1000}
                            height={1000}
                            src={pic_4}
                          />
                        </picture>
                      </div>
                      <div className="bg-xbox_green sm:w-1/2 p-3 xl:px-14 sm:flex sm:justify-center  sm:flex-col">
                        <div className="text-2xl mb-5 font-bold xl:text-3xl leading-6">
                          LEGENDS IS HERE
                        </div>
                        <div className="text-sm mb-5 xl:text-xl font-segoeui">
                          Choose from a lineup of outlaws, soldiers, misfits,
                          and misanthropes, each with their own set of skills.
                          The Vortex Games welcome all comers - survive long
                          enough, and they call you a Legend
                        </div>
                        <a
                          className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                          href="#"
                        >
                          <div className="font-extrabold  text-sm font-seoproblack">
                            Learn More
                          </div>
                          <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            </div>
          </div>
          <div className="flex flex-wrap lg:w-1/2 pt-1 lg:pt-0">
            <div className="px-1">
              <InView>
                {({ inView, ref, entry }) => (
                  <div
                    ref={ref}
                    className={
                      inView ? "animatedCard" : "opacity-10 translate-y-8"
                    }
                  >
                    <div className="relative w-full  sm:flex sm:flex-row-reverse">
                      <div className="sm:w-1/2 overflow-hidden">
                        <picture>
                          <source
                            srcSet="./xbox/pic_1_mobile.jpg"
                            media="(max-width:639.95px)"
                          ></source>
                          <source
                            srcSet="./xbox/pic_1.jpg"
                            media="(min-width:640px)"
                          ></source>
                          <Image
                            alt=""
                            className="hover:scale-110 transition-all "
                            width={1000}
                            height={1000}
                            src={pic_1}
                          />
                        </picture>
                      </div>
                      <div className="bg-xbox_green sm:w-1/2 p-3 xl:px-14 sm:flex sm:justify-center  sm:flex-col">
                        <div className="bg-[#ffd800] px-1 text-black w-max mb-5 text-sm font-bold">
                          JOIN FREE
                        </div>
                        <div className="text-2xl mb-5 font-bold xl:text-3xl leading-6">
                          Manage everything with DG Relate
                        </div>
                        <div className="text-sm mb-5 xl:text-xl font-segoeui">
                          You can view and manage all your points, rewards,
                          tokens, and more in your DG Relate account
                        </div>
                        <a
                          className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                          href="#"
                        >
                          <div className="font-extrabold  text-sm font-seoproblack">
                            Learn More
                          </div>
                          <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            </div>
            <div className="sm:h-3/4 px-1 pt-1">
              <InView>
                {({ inView, ref, entry }) => (
                  <div
                    ref={ref}
                    className={
                      inView ? "animatedCard" : "opacity-10 translate-y-8"
                    }
                  >
                    <div className="relative w-full overflow-hidden">
                      <div className="overflow-hidden">
                        <picture>
                          <source
                            srcSet="./xbox/pic_2_mobile.jpg"
                            media="(max-width:639.95px)"
                          ></source>
                          <source
                            srcSet="./xbox/pic_2.jpg"
                            media="(min-width:640px)"
                          ></source>
                          <Image
                            alt=""
                            className="hover:scale-110 transition-all "
                            width={1000}
                            height={1000}
                            src={pic_2}
                          />
                        </picture>
                      </div>
                      <div className="sm:absolute sm:bottom-10 sm:bg-transparent bg-[#333] sm:w-full p-3 sm:px-10 xl:px-14 sm:flex sm:justify-center sm:flex-col">
                        <div className="text-2xl mb-5 font-bold leading-[2rem] xl:text-5xl sm:text-[36px] ">
                          Be a shareholder of our games
                        </div>
                        <div className="text-sm mb-5 xl:text-xl font-segoeui">
                          You can participate in the company's profits by buying
                          game shares
                        </div>
                        <a
                          className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                          href="#"
                        >
                          <div className="font-extrabold  text-sm font-seoproblack">
                            learn more
                          </div>
                          <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:flex">
          <div className="px-1 pt-1">
            <InView>
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className={
                    inView ? "animatedCard" : "opacity-10 translate-y-8"
                  }
                >
                  <div className="relative w-full  sm:flex sm:flex-row">
                    <div className="sm:w-1/2 overflow-hidden">
                      <picture>
                        <source
                          srcSet="./xbox/pic_5_mobile.jpg"
                          media="(max-width:639.95px)"
                        ></source>
                        <source
                          srcSet="./xbox/pic_5.jpg"
                          media="(min-width:640px)"
                        ></source>
                        <Image
                          alt=""
                          className="hover:scale-110 transition-all "
                          width={1000}
                          height={1000}
                          src={pic_5}
                        />
                      </picture>
                    </div>
                    <div className="bg-xbox_green sm:w-1/2 p-3 xl:px-14 sm:flex sm:justify-center  sm:flex-col">
                      <div className="bg-[#ffd800] px-1 text-black w-max mb-5 text-sm font-bold">
                        JOIN NOW FOR $1
                      </div>
                      <div className="text-2xl mb-5 font-bold xl:text-3xl leading-6">
                        Outstanding Gameplay and Shooting Mechanics
                      </div>
                      <div className="text-sm mb-5 xl:text-xl font-segoeui">
                        Tropicaloop offers an outstanding gameplay experience
                        with smooth and responsive shooting mechanics
                      </div>
                      <a
                        className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                        href="#"
                      >
                        <div className="font-extrabold  text-sm font-seoproblack">
                          Learn More
                        </div>
                        <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </InView>
          </div>
          <div className="px-1 pt-1 ">
            <InView>
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className={
                    inView ? "animatedCard" : "opacity-10 translate-y-8"
                  }
                >
                  <div className="relative w-full  sm:flex sm:flex-row-reverse">
                    <div className="sm:w-1/2 overflow-hidden">
                      <picture>
                        <source
                          srcSet="./xbox/pic_6_mobile.jpg"
                          media="(max-width:639.95px)"
                        ></source>
                        <source
                          srcSet="./xbox/pic_6.jpg"
                          media="(min-width:640px)"
                        ></source>
                        <Image
                          alt=""
                          className="hover:scale-110 transition-all "
                          width={1000}
                          height={1000}
                          src={pic_6}
                        />
                      </picture>
                    </div>
                    <div className="bg-xbox_green sm:w-1/2 p-3 xl:px-14 sm:flex sm:justify-center  sm:flex-col">
                      <div className="bg-[#ffd800] px-1 text-black w-max mb-5 text-sm font-bold">
                        JOIN NOW FOR $1
                      </div>
                      <div className="text-2xl mb-5 font-bold xl:text-3xl leading-6">
                        Conquer The World , One strategic move ahead
                      </div>
                      <div className="text-sm mb-5 xl:text-xl font-segoeui">
                        Never underestimate your opponents; to conquer their
                        territory, you must engage with a unique strategy
                      </div>
                      <a
                        className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                        href="#"
                      >
                        <div className="font-extrabold  text-sm font-seoproblack">
                          Learn More
                        </div>
                        <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </InView>
          </div>
        </div>
      </section>
      <section>
        <div className="px-1 pt-1">
          <InView>
            {({ inView, ref, entry }) => (
              <div
                ref={ref}
                className={inView ? "animatedCard" : "opacity-10 translate-y-8"}
              >
                <div className="relative">
                  <div className="overflow-hidden">
                    <picture>
                      <source
                        srcSet="./xbox/pic_7_mobile.jpg"
                        media="(max-width:639.95px)"
                      ></source>
                      <source
                        srcSet="./xbox/pic_7.jpg"
                        media="(min-width:640px)"
                      ></source>
                      <Image
                        alt=""
                        className="hover:scale-110 sm:hover:scale-100 transition-all w-full"
                        width={1000}
                        height={1000}
                        src={pic_7}
                      />
                    </picture>
                  </div>
                  <div className="sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:bg-transparent right-0 bg-[#333] sm:w-2/5 p-3 sm:px-10 xl:px-14 sm:flex sm:justify-center sm:flex-col">
                    <div className="text-2xl mb-5 font-bold leading-[2.2rem] md:leading-10 xl:text-5xl sm:text-[20px] lg:text-[27px]">
                      Have an DG Gold Acount ? You can Play XBOX , No Console
                      Required
                    </div>
                    <div className="text-sm mb-5 xl:text-xl font-segoeui">
                      Play Hundreds Of Games With Dream Gleam Gold Acount
                    </div>
                    <a
                      className="flex btn_parent mb-5 text-lg uppercase cursor-pointer bg-[#9bf00b] text-[#054b16] hover:text-[#054b16] w-max px-6 py-2"
                      href="#"
                    >
                      <div className="font-extrabold  text-sm font-seoproblack">
                        learn more
                      </div>
                      <ChevronRightIcon className="size-5 text-[#054b16] hover:text-[#054b16] btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </InView>
        </div>
      </section>
      <section>
        <div className="lg:flex">
          <div className="px-1 pt-1">
            <InView>
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className={
                    inView ? "animatedCard" : "opacity-10 translate-y-8"
                  }
                >
                  <div className="relative w-full  sm:flex sm:flex-row">
                    <div className="sm:w-1/2 overflow-hidden">
                      <picture>
                        <source
                          srcSet="./xbox/pic_8_mobile.jpg"
                          media="(max-width:639.95px)"
                        ></source>
                        <source
                          srcSet="./xbox/pic_8.jpg"
                          media="(min-width:640px)"
                        ></source>
                        <Image
                          alt=""
                          className="hover:scale-110 transition-all "
                          width={1000}
                          height={1000}
                          src={pic_8}
                        />
                      </picture>
                    </div>
                    <div className="bg-xbox_green sm:w-1/2 p-3 xl:px-14 sm:flex sm:justify-center  sm:flex-col">
                      <div className="bg-[#ffd800] px-1 text-black w-max mb-5 text-sm font-bold">
                        JOIN NOW FOR $1
                      </div>
                      <div className="text-2xl mb-5 font-bold xl:text-3xl leading-6">
                        IT'S SHOWTIME IN ROCKET
                      </div>
                      <div className="text-sm mb-5 xl:text-xl font-segoeui">
                        The Motorbiker arrives at Rocket with fresh playlists,
                        additional events, and brand-new vehicles!
                      </div>
                      <a
                        className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                        href="#"
                      >
                        <div className="font-extrabold  text-sm font-seoproblack">
                          join now
                        </div>
                        <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </InView>
          </div>
          <div className="px-1 pt-1">
            <InView>
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className={
                    inView ? "animatedCard" : "opacity-10 translate-y-8"
                  }
                >
                  <div className="relative w-full  sm:flex sm:flex-row-reverse">
                    <div className="sm:w-1/2 overflow-hidden">
                      <picture>
                        <source
                          srcSet="./xbox/pic_9_mobile.jpg"
                          media="(max-width:639.95px)"
                        ></source>
                        <source
                          srcSet="./xbox/pic_9.jpg"
                          media="(min-width:640px)"
                        ></source>
                        <Image
                          alt=""
                          className="hover:scale-110 transition-all "
                          width={1000}
                          height={1000}
                          src={pic_9}
                        />
                      </picture>
                    </div>
                    <div className="bg-xbox_green sm:w-1/2 p-3 xl:px-14 sm:flex sm:justify-center  sm:flex-col">
                      <div className="bg-[#ffd800] px-1 text-black w-max mb-5 text-sm font-bold">
                        JOIN NOW FOR $1
                      </div>
                      <div className="text-2xl mb-5 font-bold xl:text-3xl leading-6">
                        Money Making Machine
                      </div>
                      <div className="text-sm mb-5 xl:text-xl font-segoeui">
                        In MM Machine, by collecting coins and profits
                        throughout the game, you receive airdrop tokens. These
                        tokens can serve as a real source of income for you
                      </div>
                      <a
                        className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                        href="#"
                      >
                        <div className="font-extrabold  text-sm font-seoproblack">
                          join now
                        </div>
                        <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </InView>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-wrap sm:flex-row-reverse">
          <div className="flex flex-wrap lg:w-1/2">
            <div className="px-1 pt-1">
              <InView>
                {({ inView, ref, entry }) => (
                  <div
                    ref={ref}
                    className={
                      inView ? "animatedCard" : "opacity-10 translate-y-8"
                    }
                  >
                    <div className="relative w-full ">
                      <div className="overflow-hidden">
                        <picture>
                          <source
                            srcSet="./xbox/pic_11_mobile.jpg"
                            media="(max-width:639.95px)"
                          ></source>
                          <source
                            srcSet="./xbox/pic_11.jpg"
                            media="(min-width:640px)"
                          ></source>
                          <Image
                            alt=""
                            className="hover:scale-110 transition-all "
                            width={1000}
                            height={1000}
                            src={pic_11}
                          />
                        </picture>
                      </div>
                      <div className="sm:absolute sm:bottom-10 sm:bg-transparent bg-[#333] sm:w-full p-3 sm:px-10 xl:px-14 sm:flex sm:justify-center sm:flex-col">
                        <div className="text-2xl mb-5 font-bold leading-[2rem] xl:text-5xl sm:text-[36px] ">
                          CHECK OUT THE REVIEWS FROM CRITICS ON THE ROCKET
                          MOTORBIKER!
                        </div>
                        <div className="text-sm mb-5 xl:text-xl font-segoeui">
                          Play Hundreds if games with DG Gold
                        </div>
                        <a
                          className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                          href="#"
                        >
                          <div className="font-extrabold  text-sm font-seoproblack">
                            explore more
                          </div>
                          <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            </div>

            <div className="px-1 pt-1">
              <InView>
                {({ inView, ref, entry }) => (
                  <div
                    ref={ref}
                    className={
                      inView ? "animatedCard" : "opacity-10 translate-y-8"
                    }
                  >
                    <div className="relative w-full sm:flex sm:flex-row-reverse ">
                      <div className="sm:w-1/2 overflow-hidden">
                        <picture>
                          <source
                            srcSet="./xbox/pic_13_mobile.jpg"
                            media="(max-width:639.95px)"
                          ></source>
                          <source
                            srcSet="./xbox/pic_13.jpg"
                            media="(min-width:640px)"
                          ></source>
                          <Image
                            alt=""
                            className="hover:scale-110 transition-all "
                            width={1000}
                            height={1000}
                            src={pic_13}
                          />
                        </picture>
                      </div>
                      <div className="bg-transparent text-black sm:w-1/2 p-3 xl:px-14 sm:flex sm:justify-center  sm:flex-col">
                        <div className="text-2xl mb-5 font-bold xl:text-3xl leading-6">
                          Benefit Of Space Adventure
                        </div>
                        <div className="text-sm mb-5 xl:text-xl font-segoeui">
                          have you ever thought about earning money while
                          playing ? Space Adventure makes this path easy for you
                        </div>
                        <a
                          className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                          href="#"
                        >
                          <div className="font-extrabold  text-sm font-seoproblack">
                            join now
                          </div>
                          <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            </div>
          </div>
          <div className="flex flex-wrap lg:w-1/2">
            <div className="px-1 pt-1">
              <InView>
                {({ inView, ref, entry }) => (
                  <div
                    ref={ref}
                    className={
                      inView ? "animatedCard" : "opacity-10 translate-y-8"
                    }
                  >
                    <div className="relative w-full  sm:flex sm:flex-row">
                      <div className="sm:w-1/2 overflow-hidden">
                        <picture>
                          <source
                            srcSet="./xbox/pic_10_mobile.jpg"
                            media="(max-width:639.95px)"
                          ></source>
                          <source
                            srcSet="./xbox/pic_10.jpg"
                            media="(min-width:640px)"
                          ></source>
                          <Image
                            alt=""
                            className="hover:scale-110 transition-all "
                            width={1000}
                            height={1000}
                            src={pic_10}
                          />
                        </picture>
                      </div>
                      <div className="bg-transparent text-black sm:w-1/2 p-3 xl:px-14 sm:flex sm:justify-center  sm:flex-col">
                        <div className="bg-[#ffd800] px-1 text-black w-max mb-5 text-sm font-bold">
                          JOIN NOW FOR $1
                        </div>
                        <div className="text-2xl mb-5 font-bold xl:text-3xl leading-6">
                          Break the rules in Vortex Legends
                        </div>
                        <div className="text-sm mb-5 xl:text-xl font-segoeui">
                          Upheaval with Solos Takeover, new Legend Alter, a
                          shattered Broken Moon, customizable Vortex Artifacts,
                          and more
                        </div>
                        <a
                          className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                          href="#"
                        >
                          <div className="font-extrabold  text-sm font-seoproblack">
                            join now
                          </div>
                          <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            </div>
            <div className="px-1 pt-1">
              <InView>
                {({ inView, ref, entry }) => (
                  <div
                    ref={ref}
                    className={
                      inView ? "animatedCard" : "opacity-10 translate-y-8"
                    }
                  >
                    <div className="relative w-full overflow-hidden">
                      <div className="overflow-hidden">
                        <picture>
                          <source
                            srcSet="./xbox/pic_12_mobile.jpg"
                            media="(max-width:639.95px)"
                          ></source>
                          <source
                            srcSet="./xbox/pic_12.jpg"
                            media="(min-width:640px)"
                          ></source>
                          <Image
                            alt=""
                            className="hover:scale-110 transition-all "
                            width={1000}
                            height={1000}
                            src={pic_12}
                          />
                        </picture>
                      </div>
                      <div className="sm:absolute sm:bottom-10 sm:bg-transparent bg-[#333] sm:w-full p-3 sm:px-10 xl:px-14 sm:flex sm:justify-center sm:flex-col">
                        <div className="text-2xl mb-5 font-bold leading-[2rem] xl:text-5xl sm:text-[36px] ">
                          Elevate your game
                        </div>
                        <div className="text-sm mb-5 xl:text-xl font-segoeui">
                          Stay on target and play on console, PC, and mobile
                        </div>
                        <a
                          className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                          href="#"
                        >
                          <div className="font-extrabold  text-sm font-seoproblack">
                            learn more
                          </div>
                          <ChevronRightIcon className="size-5 btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-1 pt-1">
          <InView>
            {({ inView, ref, entry }) => (
              <div
                ref={ref}
                className={inView ? "animatedCard" : "opacity-10 translate-y-8"}
              >
                <div className="relative">
                  <div className="overflow-hidden">
                    <picture>
                      <source
                        srcSet="./xbox/pic_14_mobile.jpg"
                        media="(max-width:639.95px)"
                      ></source>
                      <source
                        srcSet="./xbox/pic_14.jpg"
                        media="(min-width:640px)"
                      ></source>
                      <Image
                        alt=""
                        className="hover:scale-110 sm:hover:scale-100 transition-all w-full"
                        width={1000}
                        height={1000}
                        src={pic_14}
                      />
                    </picture>
                  </div>
                  <div className="sm:absolute text-black sm:top-1/2 sm:-translate-y-1/2 sm:bg-transparent right-0 bg-white sm:w-2/5 p-3 sm:px-10 xl:px-14 sm:flex sm:justify-center sm:flex-col">
                    <div className="text-2xl mb-5 font-bold leading-[2.2rem] md:leading-10 xl:text-5xl sm:text-[20px] lg:text-[27px]">
                      Dream Gleam SHOP
                    </div>
                    <div className="text-sm mb-5 xl:text-xl font-segoeui">
                      Check out the latest Accessories
                    </div>
                    <a
                      className="flex btn_parent mb-5 text-lg uppercase cursor-pointer bg-[#9bf00b] text-[#054b16] hover:text-[#054b16] w-max px-6 py-2"
                      href="#"
                    >
                      <div className="font-extrabold  text-sm font-seoproblack">
                        learn more
                      </div>
                      <ChevronRightIcon className="size-5 text-[#054b16] hover:text-[#054b16] btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </InView>
        </div>
      </section>
    </section>
  );
};

export default function Xbox() {
  return (
    <main className="bg-white">
      <Carousel />
      <IconBar_sec />
      <div className="mt-8">
        <Component />
      </div>
    </main>
  );
}
