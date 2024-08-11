"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import logo from "../../public/ps.svg";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { TfiMenu } from "react-icons/tfi";
import navbar2_icon_1 from "../../public/navbar2_icon_1.svg";

import Cloud from "../../public/navbar2/Cloud.png";
import NetoGear from "../../public/navbar2/NetoGear.png";
import Console from "../../public/navbar2/Console.png";
import Mobile from "../../public/navbar2/Mobile.png";
import NetoVR from "../../public/navbar2/Neto VR.png";

import NetoShare from "../../public/navbar2/NetoShare.png";
import NetoPlayFusion from "../../public/navbar2/Neto PlayFusion.png";
import NetoMarketing from "../../public/navbar2/Neto Marketing.png";

import HyperGrip from "../../public/navbar2/HyperGrip.png";
import SkyTune from "../../public/navbar2/SkyTune.png";
import ThunderBeat from "../../public/navbar2/ThunderBeat.png";

import ThisMonth from "../../public/navbar2/This Month.png";
import NetoBlog from "../../public/navbar2/Neto Blog.png";

import PlayFusion from "../../public/navbar2/PlayFusion.png";
import BuyAccessories from "../../public/navbar2/Buy Accessories.png";
import BuyMerchandies from "../../public/navbar2/Buy Merchandies.png";
import BuyGames from "../../public/navbar2/Buy Games.png";

import Accessories from "../../public/navbar2/Accessories.png";
import Games from "../../public/navbar2/Games.png";
import Services from "../../public/navbar2/Services.png";
import Store from "../../public/navbar2/Store.png";
import { ArrowDownIcon } from "@heroicons/react/16/solid";

export default function Navbar2() {
  const [toggle, setToggle] = useState("-translate-x-[32rem]");
  const [accordion, SetAccordion] = useState({ prev: "", curr: "" });
  const [accordionMobile, SetAccordionMobile] = useState({
    prev: "",
    curr: "",
  });
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
              <div className="text-sm">Sign In</div>
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
                <div className="flex items-center text-xl hover:text-blue-600">
                  <div>Game</div>
                  <div>
                    {accordion.curr === "acc1" ? (
                      <SlArrowUp className="ml-2 size-4" />
                    ) : (
                      <SlArrowDown className="ml-2 size-4" />
                    )}
                  </div>
                </div>
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
                <div className="flex items-center text-xl hover:text-blue-600">
                  <div>Services</div>
                  <div>
                    {accordion.curr === "acc1" ? (
                      <SlArrowUp className="ml-2 size-4" />
                    ) : (
                      <SlArrowDown className="ml-2 size-4" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="pr-5">
            <div
              className="flex cursor-pointer items-center justify-between text-black"
              onClick={() => {
                accordion.curr === "acc3"
                  ? SetAccordion({ prev: "acc3", curr: "" })
                  : SetAccordion({ prev: accordion.curr, curr: "acc3" });
              }}
            >
              <div
                className={
                  accordion.curr === "acc3"
                    ? "w-1/12 cursor-pointer text-blue-600"
                    : "w-1/12 cursor-pointer hover:text-blue-600"
                }
              >
                <div className="flex items-center text-xl hover:text-blue-600">
                  <div>Accessories</div>
                  <div>
                    {accordion.curr === "acc1" ? (
                      <SlArrowUp className="ml-2 size-4" />
                    ) : (
                      <SlArrowDown className="ml-2 size-4" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="pr-5">
            <div
              className="flex cursor-pointer items-center justify-between text-black"
              onClick={() => {
                accordion.curr === "acc4"
                  ? SetAccordion({ prev: "acc4", curr: "" })
                  : SetAccordion({ prev: accordion.curr, curr: "acc4" });
              }}
            >
              <div
                className={
                  accordion.curr === "acc4"
                    ? "w-1/12 cursor-pointer text-blue-600"
                    : "w-1/12 cursor-pointer hover:text-blue-600"
                }
              >
                <div className="flex items-center text-xl hover:text-blue-600">
                  <div>News</div>
                  <div>
                    {accordion.curr === "acc1" ? (
                      <SlArrowUp className="ml-2 size-4" />
                    ) : (
                      <SlArrowDown className="ml-2 size-4" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="pr-5">
            <div
              className="flex cursor-pointer items-center justify-between text-black"
              onClick={() => {
                accordion.curr === "acc5"
                  ? SetAccordion({ prev: "acc5", curr: "" })
                  : SetAccordion({ prev: accordion.curr, curr: "acc5" });
              }}
            >
              <div
                className={
                  accordion.curr === "acc5"
                    ? "w-1/12 cursor-pointer text-blue-600"
                    : "w-1/12 cursor-pointer hover:text-blue-600"
                }
              >
                <div className="flex items-center text-xl hover:text-blue-600">
                  <div>Shop</div>
                  <div>
                    {accordion.curr === "acc1" ? (
                      <SlArrowUp className="ml-2 size-4" />
                    ) : (
                      <SlArrowDown className="ml-2 size-4" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="pr-5">
            <div
              className="flex cursor-pointer items-center justify-between text-black"
              onClick={() => {
                accordion.curr === "acc6"
                  ? SetAccordion({ prev: "acc6", curr: "" })
                  : SetAccordion({ prev: accordion.curr, curr: "acc6" });
              }}
            >
              <div
                className={
                  accordion.curr === "acc6"
                    ? "w-1/12 cursor-pointer text-blue-600"
                    : "w-1/12 cursor-pointer hover:text-blue-600"
                }
              >
                <div className="flex items-center text-xl hover:text-blue-600">
                  <div>Support</div>
                  <div>
                    {accordion.curr === "acc1" ? (
                      <SlArrowUp className="ml-2 size-4" />
                    ) : (
                      <SlArrowDown className="ml-2 size-4" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <a className="absolute right-5">
            <div className="font-druk_text_medium relative m-2 w-full rounded-3xl bg-blue-600 p-3 py-1 text-center hover:cursor-pointer sm:max-w-36 sm:text-lg md:block">
              <div className="text-sm">Sign In</div>
            </div>
          </a>
        </ul>
        <div className="flex flex-col justify-center">
          <div>
            <div
              className={
                accordion.curr === "" // add animation only when it's not open
                  ? "max-h-0 overflow-hidden transition-[max-height] duration-500"
                  : accordion.curr === "acc1"
                    ? "max-h-[200px] w-full transition-[max-height] duration-500"
                    : "max-h-0 overflow-hidden transition-[max-height] duration-500"
              }
            >
              <div
                className={
                  accordion.curr === "acc1"
                    ? "px-5 text-black transition-opacity duration-1000"
                    : "px-5 opacity-0 transition-opacity duration-200"
                }
              >
                <div className="mx-auto flex w-max flex-wrap pt-3">
                  <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                    <Image
                      alt=""
                      className=""
                      src={Console}
                      width={0}
                      height={0}
                    />
                    <div>Console</div>
                  </div>
                  <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                    <div>
                      <Image
                        alt=""
                        className=""
                        src={Mobile}
                        width={0}
                        height={0}
                      />
                      <div>Mobile</div>
                    </div>
                  </div>
                  <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                    <Image
                      alt=""
                      className=""
                      src={NetoVR}
                      width={0}
                      height={0}
                    />
                    <div>Neto VR</div>
                  </div>
                  <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                    <Image
                      alt=""
                      className=""
                      src={NetoGear}
                      width={0}
                      height={0}
                    />
                    <div>Neto Gear</div>
                  </div>
                  <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                    <Image
                      alt=""
                      className=""
                      src={Cloud}
                      width={0}
                      height={0}
                    />
                    <div>Cloud</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              accordion.curr === "" // add animation only when it's not open
                ? "max-h-0 overflow-hidden transition-[max-height] duration-500"
                : accordion.curr === "acc2"
                  ? "max-h-[200px] w-full transition-[max-height] duration-500"
                  : "max-h-0 overflow-hidden transition-[max-height] duration-500"
            }
          >
            <div
              className={
                accordion.curr === "acc2"
                  ? "px-5 text-black transition-opacity duration-1000"
                  : "px-5 opacity-0 transition-opacity duration-200"
              }
            >
              <div className="mx-auto flex w-max flex-wrap pt-3">
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image
                    alt=""
                    className=""
                    src={NetoShare}
                    width={0}
                    height={0}
                  />
                  <div>Neto Share</div>
                </div>
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image
                    alt=""
                    className=""
                    src={NetoPlayFusion}
                    width={0}
                    height={0}
                  />
                  <div>Neto PlayFusion</div>
                </div>
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image
                    alt=""
                    className=""
                    src={NetoMarketing}
                    width={0}
                    height={0}
                  />
                  <div>Neto Marketing</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              accordion.curr === "" // add animation only when it's not open
                ? "max-h-0 overflow-hidden transition-[max-height] duration-500"
                : accordion.curr === "acc3"
                  ? "max-h-[200px] w-full transition-[max-height] duration-500"
                  : "max-h-0 overflow-hidden transition-[max-height] duration-500"
            }
          >
            <div
              className={
                accordion.curr === "acc3"
                  ? "px-5 text-black transition-opacity duration-1000"
                  : "px-5 opacity-0 transition-opacity duration-200"
              }
            >
              <div className="mx-auto flex w-max flex-wrap pt-3">
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image
                    alt=""
                    className=""
                    src={NetoVR}
                    width={0}
                    height={0}
                  />
                  <div>Neto VR</div>
                </div>
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image
                    alt=""
                    className=""
                    src={SkyTune}
                    width={0}
                    height={0}
                  />
                  <div>SkyTune</div>
                </div>
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image
                    alt=""
                    className=""
                    src={ThunderBeat}
                    width={0}
                    height={0}
                  />
                  <div>Thunder Beat</div>
                </div>
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image
                    alt=""
                    className=""
                    src={NetoGear}
                    width={0}
                    height={0}
                  />
                  <div>Neto Gear</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              accordion.curr === "" // add animation only when it's not open
                ? "max-h-0 overflow-hidden transition-[max-height] duration-500"
                : accordion.curr === "acc4"
                  ? "max-h-[200px] w-full transition-[max-height] duration-500"
                  : "max-h-0 overflow-hidden transition-[max-height] duration-500"
            }
          >
            <div
              className={
                accordion.curr === "acc4"
                  ? "px-5 text-black transition-opacity duration-1000"
                  : "px-5 opacity-0 transition-opacity duration-200"
              }
            >
              <div className="mx-auto flex w-max flex-wrap pt-3">
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image
                    alt=""
                    className=""
                    src={ThisMonth}
                    width={0}
                    height={0}
                  />
                  <div>This Month</div>
                </div>
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image
                    alt=""
                    className=""
                    src={NetoBlog}
                    width={0}
                    height={0}
                  />
                  <div>Neto Blog</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              accordion.curr === "" // add animation only when it's not open
                ? "max-h-0 overflow-hidden transition-[max-height] duration-500"
                : accordion.curr === "acc5"
                  ? "max-h-[200px] w-full transition-[max-height] duration-500"
                  : "max-h-0 overflow-hidden transition-[max-height] duration-500"
            }
          >
            <div
              className={
                accordion.curr === "acc5"
                  ? "px-5 text-black transition-opacity duration-1000"
                  : "px-5 opacity-0 transition-opacity duration-200"
              }
            >
              <div className="mx-auto flex w-max flex-wrap pt-3">
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image
                    alt=""
                    className=""
                    src={PlayFusion}
                    width={0}
                    height={0}
                  />
                  <div>Play Fusion</div>
                </div>
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image
                    alt=""
                    className=""
                    src={BuyAccessories}
                    width={0}
                    height={0}
                  />
                  <div>Buy Accessories</div>
                </div>
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image
                    alt=""
                    className=""
                    src={BuyMerchandies}
                    width={0}
                    height={0}
                  />
                  <div>Buy Merchandies</div>
                </div>
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image
                    alt=""
                    className=""
                    src={BuyGames}
                    width={0}
                    height={0}
                  />
                  <div>Buy Games</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              accordion.curr === "" // add animation only when it's not open
                ? "max-h-0 overflow-hidden transition-[max-height] duration-500"
                : accordion.curr === "acc6"
                  ? "max-h-[200px] w-full transition-[max-height] duration-500"
                  : "max-h-0 overflow-hidden transition-[max-height] duration-500"
            }
          >
            <div
              className={
                accordion.curr === "acc6"
                  ? "px-5 text-black transition-opacity duration-1000"
                  : "px-5 opacity-0 transition-opacity duration-200"
              }
            >
              <div className="mx-auto flex w-max flex-wrap pt-3">
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image
                    alt=""
                    className=""
                    src={Accessories}
                    width={0}
                    height={0}
                  />
                  <div>Accessories</div>
                </div>
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image alt="" className="" src={Cloud} width={0} height={0} />
                  <div>Cloud</div>
                </div>
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image alt="" className="" src={Games} width={0} height={0} />
                  <div>Games</div>
                </div>
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image
                    alt=""
                    className=""
                    src={Services}
                    width={0}
                    height={0}
                  />
                  <div>Services</div>
                </div>
                <div className="navbar2_shadow m-2 max-w-32 flex-col items-center px-3 text-center hover:cursor-pointer">
                  <Image alt="" className="" src={Store} width={0} height={0} />
                  <div>Store</div>
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
          <div className="overflow-hidden px-3">
            <ul>
              <li className="pb-5">
                <div
                  className="flex cursor-pointer items-center justify-between text-black"
                  onClick={() => {
                    accordionMobile.curr === "acc1"
                      ? SetAccordionMobile({ prev: "acc1", curr: "" })
                      : SetAccordionMobile({
                          prev: accordionMobile.curr,
                          curr: "acc1",
                        });
                  }}
                >
                  <div
                    className={
                      accordionMobile.curr === "acc1"
                        ? "text-blur-600 w-2/12 cursor-pointer text-blue-600"
                        : "w-2/12 cursor-pointer text-black hover:text-blue-600"
                    }
                  >
                    <Image
                      src={NetoGear}
                      alt=""
                      width={0}
                      height={0}
                      className=""
                    />
                  </div>
                  <div className="hover:text-blue-600">Game</div>
                  <div>{">"}</div>
                </div>
                <div
                  className={
                    accordionMobile.curr === "" // add animation only when it's not open
                      ? "absolute right-0 top-20 z-10 h-full w-0 bg-white shadow-2xl transition-all duration-500"
                      : accordionMobile.curr === "acc1"
                        ? accordionMobile.prev === ""
                          ? "absolute right-0 top-20 z-10 h-full w-10/12 bg-white shadow-2xl transition-all duration-500"
                          : "absolute right-0 top-20 z-10 h-full w-10/12 bg-white shadow-2xl"
                        : accordionMobile.prev === ""
                          ? "absolute z-10 hidden w-10/12 translate-x-[300px] transition-all duration-500"
                          : "absolute z-10 hidden w-10/12 translate-x-[300px]"
                  }
                >
                  <div
                    className={
                      accordionMobile.curr === "acc1"
                        ? "px-5 text-black transition-opacity duration-1000"
                        : "px-5 opacity-0 transition-opacity"
                    }
                  >
                    <div className="flex items-center pt-12">
                      <TfiMenu className="mr-3 size-5 rotate-90" />
                      <div className="text-lg">Game</div>
                    </div>
                    <div className="flex flex-wrap border-b border-black pt-3">
                      <div className="navbar2_shadow m-2 flex max-w-28 flex-col items-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={Console}
                          width={0}
                          height={0}
                        />
                        <div>Console</div>
                      </div>
                      <div className="navbar2_shadow m-2 flex max-w-28 flex-col items-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={Mobile}
                          width={0}
                          height={0}
                        />
                        <div>Console</div>
                      </div>
                      <div className="navbar2_shadow m-2 flex max-w-28 flex-col items-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={NetoVR}
                          width={0}
                          height={0}
                        />
                        <div>NetoVR</div>
                      </div>
                      <div className="navbar2_shadow m-2 flex max-w-28 flex-col items-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={NetoGear}
                          width={0}
                          height={0}
                        />
                        <div>Neto Gear</div>
                      </div>
                      <div className="navbar2_shadow m-2 flex max-w-28 flex-col items-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={Cloud}
                          width={0}
                          height={0}
                        />
                        <div>Cloud</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="pb-5">
                <div
                  className="flex cursor-pointer items-center justify-between text-black"
                  onClick={() => {
                    accordionMobile.curr === "acc2"
                      ? SetAccordionMobile({ prev: "acc2", curr: "" })
                      : SetAccordionMobile({
                          prev: accordionMobile.curr,
                          curr: "acc2",
                        });
                  }}
                >
                  <div
                    className={
                      accordionMobile.curr === "acc2"
                        ? "text-blur-600 w-2/12 cursor-pointer text-blue-600"
                        : "w-2/12 cursor-pointer text-black hover:text-blue-600"
                    }
                  >
                    <Image
                      src={NetoShare}
                      alt=""
                      width={0}
                      height={0}
                      className=""
                    />
                  </div>
                  <div className="hover:text-blue-500">Services</div>
                  <div>{">"}</div>
                </div>
                <div
                  className={
                    accordionMobile.curr === "" // add animation only when it's not open
                      ? "absolute right-0 top-20 z-10 h-full w-0 bg-white shadow-2xl transition-all duration-500"
                      : accordionMobile.curr === "acc2"
                        ? accordionMobile.prev === ""
                          ? "absolute right-0 top-20 z-10 h-full w-10/12 bg-white shadow-2xl transition-all duration-500"
                          : "absolute right-0 top-20 z-10 h-full w-10/12 bg-white shadow-2xl"
                        : accordionMobile.prev === ""
                          ? "absolute z-10 hidden w-10/12 translate-x-[500px] transition-all duration-500"
                          : "absolute z-10 hidden w-10/12 translate-x-[500px]"
                  }
                >
                  <div
                    className={
                      accordionMobile.curr === "acc2"
                        ? "px-5 text-black transition-opacity"
                        : "px-5 opacity-0 transition-opacity"
                    }
                  >
                    <div className="flex items-center pt-10">
                      <TfiMenu className="mr-3 size-5 rotate-90" />
                      <div className="text-lg">Services</div>
                    </div>
                    <div className="flex flex-wrap border-b border-black pt-3">
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={NetoShare}
                          width={0}
                          height={0}
                        />
                        <div>Neto VR</div>
                      </div>
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={NetoPlayFusion}
                          width={0}
                          height={0}
                        />
                        <div>Neto PlayFusion</div>
                      </div>
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={NetoMarketing}
                          width={0}
                          height={0}
                        />
                        <div>Neto Marketing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="pb-5">
                <div
                  className="flex cursor-pointer items-center justify-between text-black"
                  onClick={() => {
                    accordionMobile.curr === "acc3"
                      ? SetAccordionMobile({ prev: "acc3", curr: "" })
                      : SetAccordionMobile({
                          prev: accordionMobile.curr,
                          curr: "acc3",
                        });
                  }}
                >
                  <div
                    className={
                      accordionMobile.curr === "acc3"
                        ? "text-blur-600 w-2/12 cursor-pointer text-blue-600"
                        : "w-2/12 cursor-pointer text-black hover:text-blue-600"
                    }
                  >
                    <Image
                      src={HyperGrip}
                      alt=""
                      width={0}
                      height={0}
                      className=""
                    />
                  </div>
                  <div className="hover:text-blue-500">Accessories</div>
                  <div>{">"}</div>
                </div>
                <div
                  className={
                    accordionMobile.curr === "" // add animation only when it's not open
                      ? "absolute right-0 top-20 z-10 h-full w-0 bg-white shadow-2xl transition-all duration-500"
                      : accordionMobile.curr === "acc3"
                        ? accordionMobile.prev === ""
                          ? "absolute right-0 top-20 z-10 h-full w-10/12 bg-white shadow-2xl transition-all duration-500"
                          : "absolute right-0 top-20 z-10 h-full w-10/12 bg-white shadow-2xl"
                        : accordionMobile.prev === ""
                          ? "absolute z-10 hidden w-10/12 translate-x-[500px] transition-all duration-500"
                          : "absolute z-10 hidden w-10/12 translate-x-[500px]"
                  }
                >
                  <div
                    className={
                      accordionMobile.curr === "acc3"
                        ? "px-5 text-black transition-opacity"
                        : "px-5 opacity-0 transition-opacity"
                    }
                  >
                    <div className="flex items-center pt-10">
                      <TfiMenu className="mr-3 size-5 rotate-90" />
                      <div className="text-lg">Accessories</div>
                    </div>
                    <div className="flex flex-wrap border-b border-black pt-3">
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={HyperGrip}
                          width={0}
                          height={0}
                        />
                        <div>Hyper Grip</div>
                      </div>
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={NetoVR}
                          width={0}
                          height={0}
                        />
                        <div>Neto VR</div>
                      </div>
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={SkyTune}
                          width={0}
                          height={0}
                        />
                        <div>SkyTune</div>
                      </div>
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={ThunderBeat}
                          width={0}
                          height={0}
                        />
                        <div>Thunder Beat</div>
                      </div>
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={NetoGear}
                          width={0}
                          height={0}
                        />
                        <div>Neto Gear</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="pb-5">
                <div
                  className="flex cursor-pointer items-center justify-between text-black"
                  onClick={() => {
                    accordionMobile.curr === "acc4"
                      ? SetAccordionMobile({ prev: "acc4", curr: "" })
                      : SetAccordionMobile({
                          prev: accordionMobile.curr,
                          curr: "acc4",
                        });
                  }}
                >
                  <div
                    className={
                      accordionMobile.curr === "acc4"
                        ? "text-blur-600 w-2/12 cursor-pointer text-blue-600"
                        : "w-2/12 cursor-pointer text-black hover:text-blue-600"
                    }
                  >
                    <Image
                      src={ThisMonth}
                      alt=""
                      width={0}
                      height={0}
                      className=""
                    />
                  </div>
                  <div className="hover:text-blue-500">News</div>
                  <div>{">"}</div>
                </div>
                <div
                  className={
                    accordionMobile.curr === "" // add animation only when it's not open
                      ? "absolute right-0 top-20 z-10 h-full w-0 bg-white shadow-2xl transition-all duration-500"
                      : accordionMobile.curr === "acc4"
                        ? accordionMobile.prev === ""
                          ? "absolute right-0 top-20 z-10 h-full w-10/12 bg-white shadow-2xl transition-all duration-500"
                          : "absolute right-0 top-20 z-10 h-full w-10/12 bg-white shadow-2xl"
                        : accordionMobile.prev === ""
                          ? "absolute z-10 hidden w-10/12 translate-x-[500px] transition-all duration-500"
                          : "absolute z-10 hidden w-10/12 translate-x-[500px]"
                  }
                >
                  <div
                    className={
                      accordionMobile.curr === "acc4"
                        ? "px-5 text-black transition-opacity"
                        : "px-5 opacity-0 transition-opacity"
                    }
                  >
                    <div className="flex items-center pt-10">
                      <TfiMenu className="mr-3 size-5 rotate-90" />
                      <div className="text-lg">News</div>
                    </div>
                    <div className="flex flex-wrap border-b border-black pt-3">
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={ThisMonth}
                          width={0}
                          height={0}
                        />
                        <div>This Month</div>
                      </div>
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={NetoBlog}
                          width={0}
                          height={0}
                        />
                        <div>Neto Blog</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="pb-5">
                <div
                  className="flex cursor-pointer items-center justify-between text-black"
                  onClick={() => {
                    accordionMobile.curr === "acc5"
                      ? SetAccordionMobile({ prev: "acc5", curr: "" })
                      : SetAccordionMobile({
                          prev: accordionMobile.curr,
                          curr: "acc5",
                        });
                  }}
                >
                  <div
                    className={
                      accordionMobile.curr === "acc5"
                        ? "text-blur-600 w-2/12 cursor-pointer text-blue-600"
                        : "w-2/12 cursor-pointer text-black hover:text-blue-600"
                    }
                  >
                    <Image
                      src={PlayFusion}
                      alt=""
                      width={0}
                      height={0}
                      className=""
                    />
                  </div>
                  <div className="hover:text-blue-500">Shop</div>
                  <div>{">"}</div>
                </div>
                <div
                  className={
                    accordionMobile.curr === "" // add animation only when it's not open
                      ? "absolute right-0 top-20 z-10 h-full w-0 bg-white shadow-2xl transition-all duration-500"
                      : accordionMobile.curr === "acc5"
                        ? accordionMobile.prev === ""
                          ? "absolute right-0 top-20 z-10 h-full w-10/12 bg-white shadow-2xl transition-all duration-500"
                          : "absolute right-0 top-20 z-10 h-full w-10/12 bg-white shadow-2xl"
                        : accordionMobile.prev === ""
                          ? "absolute z-10 hidden w-10/12 translate-x-[500px] transition-all duration-500"
                          : "absolute z-10 hidden w-10/12 translate-x-[500px]"
                  }
                >
                  <div
                    className={
                      accordionMobile.curr === "acc5"
                        ? "px-5 text-black transition-opacity"
                        : "px-5 opacity-0 transition-opacity"
                    }
                  >
                    <div className="flex items-center pt-10">
                      <TfiMenu className="mr-3 size-5 rotate-90" />
                      <div className="text-lg">Shop</div>
                    </div>
                    <div className="flex flex-wrap border-b border-black pt-3">
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={PlayFusion}
                          width={0}
                          height={0}
                        />
                        <div>PlayFusion</div>
                      </div>
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={BuyAccessories}
                          width={0}
                          height={0}
                        />
                        <div>Buy Accessories</div>
                      </div>
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={BuyMerchandies}
                          width={0}
                          height={0}
                        />
                        <div>Buy Merchandies</div>
                      </div>
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={BuyGames}
                          width={0}
                          height={0}
                        />
                        <div>Buy Games</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="pb-5">
                <div
                  className="flex cursor-pointer items-center justify-between text-black"
                  onClick={() => {
                    accordionMobile.curr === "acc6"
                      ? SetAccordionMobile({ prev: "acc6", curr: "" })
                      : SetAccordionMobile({
                          prev: accordionMobile.curr,
                          curr: "acc6",
                        });
                  }}
                >
                  <div
                    className={
                      accordionMobile.curr === "acc6"
                        ? "text-blur-600 w-2/12 cursor-pointer text-blue-600"
                        : "w-2/12 cursor-pointer text-black hover:text-blue-600"
                    }
                  >
                    <Image
                      src={Accessories}
                      alt=""
                      width={0}
                      height={0}
                      className=""
                    />
                  </div>
                  <div className="hover:text-blue-500">Support</div>
                  <div>{">"}</div>
                </div>
                <div
                  className={
                    accordionMobile.curr === "" // add animation only when it's not open
                      ? "absolute right-0 top-20 z-10 h-full w-0 bg-white shadow-2xl transition-all duration-500"
                      : accordionMobile.curr === "acc6"
                        ? accordionMobile.prev === ""
                          ? "absolute right-0 top-20 z-10 h-full w-10/12 bg-white shadow-2xl transition-all duration-500"
                          : "absolute right-0 top-20 z-10 h-full w-10/12 bg-white shadow-2xl"
                        : accordionMobile.prev === ""
                          ? "absolute z-10 hidden w-10/12 translate-x-[500px] transition-all duration-500"
                          : "absolute z-10 hidden w-10/12 translate-x-[500px]"
                  }
                >
                  <div
                    className={
                      accordionMobile.curr === "acc6"
                        ? "px-5 text-black transition-opacity"
                        : "px-5 opacity-0 transition-opacity"
                    }
                  >
                    <div className="flex items-center pt-10">
                      <TfiMenu className="mr-3 size-5 rotate-90" />
                      <div className="text-lg">Support</div>
                    </div>
                    <div className="flex flex-wrap border-b border-black pt-3">
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={Accessories}
                          width={0}
                          height={0}
                        />
                        <div>Accessories</div>
                      </div>
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={Cloud}
                          width={0}
                          height={0}
                        />
                        <div>Cloud</div>
                      </div>
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={Games}
                          width={0}
                          height={0}
                        />
                        <div>Games</div>
                      </div>
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={Services}
                          width={0}
                          height={0}
                        />
                        <div>Services</div>
                      </div>
                      <div className="navbar2_shadow m-2 max-w-28 flex-col items-center px-3 text-center hover:cursor-pointer">
                        <Image
                          alt=""
                          className=""
                          src={Store}
                          width={0}
                          height={0}
                        />
                        <div>Store</div>
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
                    SetAccordionMobile({ ...accordionMobile, acc1: !accordion.acc1 })
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
