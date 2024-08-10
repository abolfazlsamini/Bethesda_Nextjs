"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import logo from "../../public/ps.svg";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { TfiMenu } from "react-icons/tfi";
import navbar2_icon_1 from "../../public/navbar2_icon_1.svg";

export default function Navbar2() {
  const [toggle, setToggle] = useState("-translate-x-[32rem]");
  const [accordion, SetAccordion] = useState({ prev: "", curr: "" });
  function click() {
    if (toggle === "-translate-x-[32rem]") setToggle("translate-x-0");
    else setToggle("-translate-x-[32rem]");
  }
  return (
    <div className="fixed top-0 z-30 min-h-16 w-full">
      <div className="min-h-16 bg-white px-4 py-1">
        <div className="flex w-full items-center justify-between md:hidden">
          <button className="navbar-burger p-3 text-black">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              onClick={click}
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
          <a className="text-3xl font-bold leading-none md:hidden" href="/">
            <Image
              alt=""
              className="w-24 px-3 py-1 invert"
              src={logo}
              width={0}
              height={0}
            ></Image>
          </a>
          <a className="">
            <div className="font-druk_text_medium relative m-2 w-full rounded-3xl bg-blue-600 p-3 py-1 text-center hover:cursor-pointer sm:max-w-36 sm:text-lg md:block">
              <div className="text-xs">Sign In</div>
            </div>
          </a>
        </div>
        <ul className="top-1/2 hidden transform md:flex md:items-center">
          <li>
            <a className="m-0 w-max font-bold leading-none" href="/">
              <Image
                alt=""
                className="w-20 invert"
                src={logo}
                width={0}
                height={0}
              ></Image>
            </a>
          </li>
          <li className="px-5">
            <div
              className="flex cursor-pointer items-center justify-between text-black"
              onClick={() => {
                accordion.curr === "acc1"
                  ? SetAccordion({ prev: "acc1", curr: "" })
                  : SetAccordion({ prev: accordion.curr, curr: "acc1" });
              }}
            >
              <div
                className={
                  accordion.curr === "acc1"
                    ? "w-1/12 cursor-pointer text-blue-600"
                    : "w-1/12 cursor-pointer text-black hover:text-blue-600"
                }
              >
                <div className="text-xl hover:text-blue-600">Game</div>
              </div>
            </div>
          </li>
          <li className="pr-5">
            <div
              className="flex cursor-pointer items-center justify-between text-black"
              onClick={() => {
                accordion.curr === "acc2"
                  ? SetAccordion({ prev: "acc2", curr: "" })
                  : SetAccordion({ prev: accordion.curr, curr: "acc2" });
              }}
            >
              <div
                className={
                  accordion.curr === "acc2"
                    ? "w-1/12 cursor-pointer text-blue-600"
                    : "w-1/12 cursor-pointer hover:text-blue-600"
                }
              >
                <div className="text-xl hover:text-blue-600">PS5</div>
              </div>
            </div>
          </li>
          <a className="absolute right-5">
            <div className="font-druk_text_medium relative m-2 w-full rounded-3xl bg-blue-600 p-3 py-1 text-center hover:cursor-pointer sm:max-w-36 sm:text-lg md:block">
              <div className="text-xs">Sign In</div>
            </div>
          </a>
        </ul>
        <div className="flex flex-col justify-center">
          <div>
            <div
              className={
                accordion.curr === "" // add animation only when it's not open
                  ? "max-h-0 transition-[max-height] duration-500"
                  : accordion.curr === "acc1"
                    ? "max-h-[200px] w-full transition-[max-height] duration-500"
                    : "max-h-0 transition-[max-height] duration-500"
              }
            >
              <div
                className={
                  accordion.curr === "acc1"
                    ? "px-5 text-black transition-opacity"
                    : "px-5 opacity-0 transition-opacity"
                }
              >
                <div className="mx-auto flex w-max flex-wrap pt-3">
                  <div className="m-2 flex size-32 items-center hover:shadow-2xl">
                    <Image
                      alt=""
                      className="invert"
                      src={logo}
                      width={0}
                      height={0}
                    />
                  </div>
                  <div className="m-2 flex size-32 items-center hover:shadow-2xl">
                    <Image
                      alt=""
                      className="invert"
                      src={logo}
                      width={0}
                      height={0}
                    />
                  </div>
                  <div className="m-2 flex size-32 items-center hover:shadow-2xl">
                    <Image
                      alt=""
                      className="invert"
                      src={logo}
                      width={0}
                      height={0}
                    />
                  </div>
                </div>
                <div className="mx-auto flex w-max">
                  <div className="pr-5">
                    <a href="#" className="text-black hover:text-blue-600">
                      Browse by genre
                    </a>
                  </div>
                  <div className="pr-5">
                    <a href="#" className="text-black hover:text-blue-600">
                      PlayStation indies
                    </a>
                  </div>
                  <div className="pr-5">
                    <a href="#" className="text-black hover:text-blue-600">
                      PlayStation indies
                    </a>
                  </div>
                  <div className="pr-5">
                    <a href="#" className="text-black hover:text-blue-600">
                      PlayStation indies
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              accordion.curr === "" // add animation only when it's not open
                ? "max-h-0 transition-[max-height] duration-500"
                : accordion.curr === "acc2"
                  ? "max-h-[200px] w-full transition-[max-height] duration-500"
                  : "max-h-0 transition-[max-height] duration-500"
            }
          >
            <div
              className={
                accordion.curr === "acc2"
                  ? "px-5 text-black transition-opacity"
                  : "px-5 opacity-0 transition-opacity"
              }
            >
              <div className="mx-auto flex w-max flex-wrap pt-3">
                <div className="m-2 flex size-32 items-center hover:shadow-2xl">
                  <Image
                    alt=""
                    className="invert"
                    src={logo}
                    width={0}
                    height={0}
                  />
                </div>
                <div className="m-2 flex size-32 items-center hover:shadow-2xl">
                  <Image
                    alt=""
                    className="invert"
                    src={logo}
                    width={0}
                    height={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*             mobile               */}
      <div
        className={`navbar-menu relative z-50 overflow-hidden transition-all duration-1000`}
      >
        <div
          onClick={click}
          className={
            toggle === "translate-x-0"
              ? "navbar-backdrop fixed inset-0 bg-gray-800 opacity-30"
              : "hidden"
          }
        ></div>
        <nav
          className={`fixed bottom-0 left-0 top-0 ${toggle} z-40 flex w-full max-w-lg flex-col overflow-hidden border-r bg-white pb-6 duration-500`}
        >
          <div className="z-20 mb-8 flex items-center bg-white shadow-2xl">
            <a className="font-bold leading-none" href="/">
              <Image
                alt=""
                className="w-32 invert"
                src={logo}
                width={0}
                height={0}
              />
            </a>
            <button className="navbar-close absolute right-7">
              <svg
                className="h-6 w-6 cursor-pointer text-black hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={click}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="overflow-hidden px-6">
            <ul>
              <li className="pb-5">
                <div
                  className="flex cursor-pointer items-center justify-between text-black"
                  onClick={() => {
                    accordion.curr === "acc1"
                      ? SetAccordion({ prev: "acc1", curr: "" })
                      : SetAccordion({ prev: accordion.curr, curr: "acc1" });
                  }}
                >
                  <div
                    className={
                      accordion.curr === "acc1"
                        ? "text-blur-600 w-1/12 cursor-pointer text-blue-600"
                        : "w-1/12 cursor-pointer text-black hover:text-blue-600"
                    }
                  >
                    <svg
                      className="h-full w-full"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11 2.5c0-0.275 0.225-0.5 0.5-0.5h2c0.275 0 0.5 0.225 0.5 0.5v2c0 0.275-0.225 0.5-0.5 0.5h-2c-0.275 0-0.5-0.225-0.5-0.5v-2zM8 5c1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.656 0-3-1.344-3-3s1.344-3 3-3zM14 13.5v0c0 0.275-0.225 0.5-0.5 0.5h-11c-0.275 0-0.5-0.225-0.5-0.5v0-6.5h1.1c-0.066 0.322-0.1 0.656-0.1 1 0 2.762 2.237 5 5 5s5-2.238 5-5c0-0.344-0.034-0.678-0.1-1h1.1v6.5z"></path>
                    </svg>
                  </div>
                  <div className="hover:text-blue-600">Game</div>
                  <div>{">"}</div>
                </div>
                <div
                  className={
                    accordion.curr === "" // add animation only when it's not open
                      ? "absolute right-0 top-20 z-10 h-full w-0 bg-blue-100 shadow-2xl transition-all duration-500"
                      : accordion.curr === "acc1"
                        ? accordion.prev === ""
                          ? "absolute right-0 top-20 z-10 h-full w-10/12 bg-blue-100 shadow-2xl transition-all duration-500"
                          : "absolute right-0 top-20 z-10 h-full w-10/12 bg-blue-100 shadow-2xl"
                        : accordion.prev === ""
                          ? "absolute z-10 hidden w-10/12 translate-x-[300px] transition-all duration-500"
                          : "absolute z-10 hidden w-10/12 translate-x-[300px]"
                  }
                >
                  <div
                    className={
                      accordion.curr === "acc1"
                        ? "px-5 text-black transition-opacity"
                        : "px-5 opacity-0 transition-opacity"
                    }
                  >
                    <div className="flex items-center pt-10">
                      <TfiMenu className="mr-3 size-5 rotate-90" />
                      <div className="text-lg">Game</div>
                    </div>
                    <div className="flex flex-wrap border-b border-black pt-3">
                      <div className="m-2 flex size-32 items-center hover:shadow-2xl">
                        <Image
                          alt=""
                          className="invert"
                          src={logo}
                          width={0}
                          height={0}
                        />
                      </div>
                      <div className="m-2 flex size-32 items-center hover:shadow-2xl">
                        <Image
                          alt=""
                          className="invert"
                          src={logo}
                          width={0}
                          height={0}
                        />
                      </div>
                      <div className="m-2 flex size-32 items-center hover:shadow-2xl">
                        <Image
                          alt=""
                          className="invert"
                          src={logo}
                          width={0}
                          height={0}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="pt-5">
                        <a href="#" className="text-black hover:text-blue-600">
                          Browse by genre
                        </a>
                      </div>
                      <div className="pt-5">
                        <a href="#" className="text-black hover:text-blue-600">
                          PlayStation indies
                        </a>
                      </div>
                      <div className="pt-5">
                        <a href="#" className="text-black hover:text-blue-600">
                          PlayStation indies
                        </a>
                      </div>
                      <div className="pt-5">
                        <a href="#" className="text-black hover:text-blue-600">
                          PlayStation indies
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="pb-5">
                <div
                  className="flex cursor-pointer items-center justify-between text-black"
                  onClick={() => {
                    accordion.curr === "acc2"
                      ? SetAccordion({ prev: "acc2", curr: "" })
                      : SetAccordion({ prev: accordion.curr, curr: "acc2" });
                  }}
                >
                  <div
                    className={
                      accordion.curr === "acc2"
                        ? "text-blur-600 w-1/12 cursor-pointer text-blue-600"
                        : "w-1/12 cursor-pointer text-black hover:text-blue-600"
                    }
                  >
                    <svg
                      className="h-full w-full"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11 2.5c0-0.275 0.225-0.5 0.5-0.5h2c0.275 0 0.5 0.225 0.5 0.5v2c0 0.275-0.225 0.5-0.5 0.5h-2c-0.275 0-0.5-0.225-0.5-0.5v-2zM8 5c1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.656 0-3-1.344-3-3s1.344-3 3-3zM14 13.5v0c0 0.275-0.225 0.5-0.5 0.5h-11c-0.275 0-0.5-0.225-0.5-0.5v0-6.5h1.1c-0.066 0.322-0.1 0.656-0.1 1 0 2.762 2.237 5 5 5s5-2.238 5-5c0-0.344-0.034-0.678-0.1-1h1.1v6.5z"></path>
                    </svg>
                  </div>
                  <div className="hover:text-blue-500">PS5</div>
                  <div>{">"}</div>
                </div>
                <div
                  className={
                    accordion.curr === "" // add animation only when it's not open
                      ? "absolute right-0 top-20 z-10 h-full w-0 bg-red-100 shadow-2xl transition-all duration-500"
                      : accordion.curr === "acc2"
                        ? accordion.prev === ""
                          ? "absolute right-0 top-20 z-10 h-full w-10/12 bg-red-100 shadow-2xl transition-all duration-500"
                          : "absolute right-0 top-20 z-10 h-full w-10/12 bg-red-100 shadow-2xl"
                        : accordion.prev === ""
                          ? "absolute z-10 hidden w-10/12 translate-x-[500px] transition-all duration-500"
                          : "absolute z-10 hidden w-10/12 translate-x-[500px]"
                  }
                >
                  <div
                    className={
                      accordion.curr === "acc2"
                        ? "px-5 text-black transition-opacity"
                        : "px-5 opacity-0 transition-opacity"
                    }
                  >
                    <div className="flex items-center pt-10">
                      <TfiMenu className="mr-3 size-5 rotate-90" />
                      <div className="text-lg">Game</div>
                    </div>
                    <div className="flex flex-wrap border-b border-black pt-3">
                      <div className="m-2 flex size-32 items-center hover:shadow-2xl">
                        <Image
                          alt=""
                          className="invert"
                          src={logo}
                          width={0}
                          height={0}
                        />
                      </div>
                      <div className="m-2 flex size-32 items-center hover:shadow-2xl">
                        <Image
                          alt=""
                          className="invert"
                          src={logo}
                          width={0}
                          height={0}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="pt-5">
                        <a href="#" className="text-black hover:text-blue-600">
                          Browse by genre
                        </a>
                      </div>
                      <div className="pt-5">
                        <a href="#" className="text-black hover:text-blue-600">
                          PlayStation indies
                        </a>
                      </div>
                      <div className="pt-5">
                        <a href="#" className="text-black hover:text-blue-600">
                          PlayStation indies
                        </a>
                      </div>
                      <div className="pt-5">
                        <a href="#" className="text-black hover:text-blue-600">
                          PlayStation indies
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* <ul>
              <li className="mb-1">
                <div
                  onClick={() =>
                    SetAccordion({ ...accordion, acc1: !accordion.acc1 })
                  }
                  className="relative cursor-pointer py-3 transition-all duration-300"
                >
                  <div className={accordion.acc1 ? "" : "border-b"}>
                    <div className="flex items-center uppercase">
                      About
                      <SlArrowDown
                        className={
                          accordion.acc1
                            ? "size-5 rotate-180 px-1 transition-transform duration-300"
                            : "size-5 px-1 transition-transform duration-300"
                        }
                      />
                    </div>
                    <div
                      className={
                        accordion.acc1
                          ? "max-h-52 px-3 transition-all duration-300"
                          : "max-h-0 overflow-hidden pb-3 opacity-10 transition-all duration-300"
                      }
                    >
                      <div className="border-b py-3 hover:text-[#f00]">
                        GAMEPLAY
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Features and Modes
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        peresentation
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        NT Playfusion membership
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mb-1">
                <div
                  onClick={() =>
                    SetAccordion({ ...accordion, acc2: !accordion.acc2 })
                  }
                  className="relative cursor-pointer py-3 transition-all duration-300"
                >
                  <div className={accordion.acc2 ? "" : "border-b"}>
                    <div className="flex items-center uppercase">
                      maps
                      <SlArrowDown
                        className={
                          accordion.acc2
                            ? "size-5 rotate-180 px-1 transition-all duration-300"
                            : "size-5 px-1 transition-all duration-300"
                        }
                      />
                    </div>
                    <div
                      className={
                        accordion.acc2
                          ? "max-h-[64rem] px-3 transition-all duration-300"
                          : "max-h-0 overflow-hidden pb-3 opacity-10 transition-all duration-300"
                      }
                    >
                      <div className="border-b py-3 hover:text-[#f00]">
                        Dust Storm
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Urban Siege
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Artic Blast
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Jungle Havoc
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Desert Mirage
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Metro Mayhem
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Devils Mountain
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mb-1">
                <div
                  onClick={() =>
                    SetAccordion({ ...accordion, acc3: !accordion.acc3 })
                  }
                  className="relative cursor-pointer py-3 transition-all duration-300"
                >
                  <div className={accordion.acc3 ? "" : "border-b"}>
                    <div className="flex items-center uppercase">
                      game mode
                      <SlArrowDown
                        className={
                          accordion.acc3
                            ? "size-5 rotate-180 px-1 transition-all duration-300"
                            : "size-5 px-1 transition-all duration-300"
                        }
                      />
                    </div>
                    <div
                      className={
                        accordion.acc3
                          ? "max-h-52 px-3 transition-all duration-300"
                          : "max-h-0 overflow-hidden pb-3 opacity-10 transition-all duration-300"
                      }
                    >
                      <div className="border-b py-3 hover:text-[#f00]">
                        Capture the flag
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Dominitaion
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Free for all
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Kill Confirmed
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mb-1">
                <div
                  onClick={() =>
                    SetAccordion({ ...accordion, acc4: !accordion.acc4 })
                  }
                  className="relative cursor-pointer py-3 transition-all duration-300"
                >
                  <div className={accordion.acc4 ? "" : "border-b"}>
                    <div className="flex items-center uppercase">
                      assistant tools
                      <SlArrowDown
                        className={
                          accordion.acc4
                            ? "size-5 rotate-180 px-1 transition-all duration-300"
                            : "size-5 px-1 transition-all duration-300"
                        }
                      />
                    </div>
                    <div
                      className={
                        accordion.acc4
                          ? "max-h-52 px-3 transition-all duration-300"
                          : "max-h-0 overflow-hidden pb-3 opacity-10 transition-all duration-300"
                      }
                    >
                      <div className="border-b py-3 hover:text-[#f00]">UAV</div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Counter UAV
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Cruise Missile
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Remote Turret
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mb-1">
                <div
                  onClick={() =>
                    SetAccordion({ ...accordion, acc5: !accordion.acc5 })
                  }
                  className="relative cursor-pointer py-3 transition-all duration-300"
                >
                  <div className={accordion.acc5 ? "" : "border-b"}>
                    <div className="flex items-center uppercase">
                      news and media
                      <SlArrowDown
                        className={
                          accordion.acc5
                            ? "size-5 rotate-180 px-1 transition-all duration-300"
                            : "size-5 px-1 transition-all duration-300"
                        }
                      />
                    </div>
                    <div
                      className={
                        accordion.acc5
                          ? "max-h-52 px-3 transition-all duration-300"
                          : "max-h-0 overflow-hidden pb-3 opacity-10 transition-all duration-300"
                      }
                    >
                      <div className="border-b py-3 hover:text-[#f00]">
                        News
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Trailer & Screenshots
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mb-1">
                <div
                  onClick={() =>
                    SetAccordion({ ...accordion, acc6: !accordion.acc6 })
                  }
                  className="relative cursor-pointer py-3 transition-all duration-300"
                >
                  <div className={accordion.acc6 ? "" : "border-b"}>
                    <div className="flex items-center uppercase">
                      community
                      <SlArrowDown
                        className={
                          accordion.acc6
                            ? "size-5 rotate-180 px-1 transition-all duration-300"
                            : "size-5 px-1 transition-all duration-300"
                        }
                      />
                    </div>
                    <div
                      className={
                        accordion.acc6
                          ? "max-h-52 px-3 transition-all duration-300"
                          : "max-h-0 overflow-hidden pb-3 opacity-10 transition-all duration-300"
                      }
                    >
                      <div className="border-b py-3 hover:text-[#f00]">
                        Forum
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Newsletter Sign Up
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul> */}
          </div>
        </nav>
      </div>
    </div>
  );
}
