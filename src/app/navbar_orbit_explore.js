"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import logo from "../../public/navbar_logo_orbit_explore.png";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export default function Navbar() {
  const [toggle, setToggle] = useState("-translate-x-96");
  const [accordion, SetAccordion] = useState({
    acc1: false,
    acc2: false,
    acc3: false,
    acc4: false,
    acc5: false,
    acc6: false,
  });
  function click() {
    if (toggle === "-translate-x-96") setToggle("translate-x-0");
    else setToggle("-translate-x-96");
  }
  return (
    <div className="fixed top-16 z-30 min-h-16 w-full">
      <div className="flex min-h-16 items-center justify-start bg-black px-4 py-1">
        <div className="md:hidden">
          <button className="navbar-burger flex items-center p-3 text-white">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              onClick={click}
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <a className="absolute right-5 m-auto md:hidden">
          <div className="relative m-2 w-full rounded-3xl bg-[#ff9000] p-5 py-3 text-center font-SST_Light sm:max-w-36 sm:text-lg md:block [&_*]:hover:max-h-[20rem]">
            <div className="mx-5 text-xs">
              BUY NOW
              <div className="absolute right-0 top-12 max-h-0 w-48 overflow-hidden bg-white/90 text-black transition-all duration-500">
                <button className="btn m-2 w-11/12 rounded-3xl border-2 border-black bg-transparent p-5 py-3 font-SST_Light hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
                  <div className="btn_div">Neto Store</div>
                </button>
                <button className="btn m-2 w-11/12 rounded-3xl border-2 border-black bg-transparent p-5 py-3 font-SST_Light hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
                  <div className="btn_div">Meta Quest</div>
                </button>
                <button className="btn m-2 w-11/12 rounded-3xl border-2 border-black bg-transparent p-5 py-3 font-SST_Light hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
                  <div className="btn_div">PS VR2</div>
                </button>
                <button className="btn m-2 w-11/12 rounded-3xl border-2 border-black bg-transparent p-5 py-3 text-center font-SST_Light hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
                  <div className="btn_div">Apple Vision</div>
                </button>
              </div>
            </div>
          </div>
        </a>
        <ul className="absolute left-0 top-1/2 hidden -translate-y-1/2 translate-x-3 transform sm:space-x-2 md:flex lg:mx-auto lg:w-auto lg:space-x-4">
          <li className="flex items-center pb-3">
            <a className="font-bold leading-none" href="/">
              <Image
                alt=""
                className="w-32 sm:w-28"
                src={logo}
                width={0}
                height={0}
              ></Image>
            </a>
          </li>
          <li className="text-gray-300"></li>
          <li className="flex pb-2">
            <a
              className="relative self-center font-SST_Light text-lg font-bold text-white hover:text-[#f04] [&_*]:hover:max-h-52"
              href="/"
            >
              <div className="flex items-center uppercase sm:text-sm [&_.up]:hover:rotate-180">
                About
                <SlArrowDown className="up size-5 px-1 transition-transform duration-300" />
              </div>
              <div className="absolute -left-1/2 max-h-0 w-48 overflow-hidden bg-black text-white transition-all duration-500 hover:text-[#f04]">
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Orbit Explore Story
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Play On NetoGear
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Neto PlayFusion
                </div>
              </div>
            </a>
          </li>
          {/* <li className="text-gray-300"></li> */}
          <li className="flex pb-2">
            <a
              className="relative self-center font-SST_Light text-lg font-bold text-white hover:text-[#f04] [&_*]:hover:max-h-52"
              href="/"
            >
              <div className="flex items-center uppercase sm:text-sm [&_.up]:hover:rotate-180">
                Features
                <SlArrowDown className="up size-5 px-1 transition-transform duration-300" />
              </div>
              <div className="absolute -left-1/2 max-h-0 w-48 overflow-hidden bg-black text-white transition-all duration-500 hover:text-[#f04]">
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  NetoGear Overview
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Gameplay Features
                </div>
              </div>
            </a>
          </li>
          {/* <li className="text-gray-300"></li> */}
          <li className="flex pb-2">
            <a
              className="relative self-center font-SST_Light text-lg font-bold text-white hover:text-[#f04] [&_*]:hover:max-h-52"
              href="/"
            >
              <div className="flex items-center uppercase sm:w-min sm:text-sm lg:w-auto [&_.up]:hover:rotate-180">
                Orbit Explore Ratings
                {/* <SlArrowDown className="up size-5 px-1 transition-transform duration-300" /> */}
              </div>
              {/* <div className="absolute -left-1/2 max-h-0 w-48 overflow-hidden bg-black text-white transition-all duration-500 hover:text-[#f04]">
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Capture the flag
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Dominitaion
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Free for all
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Kill Confirmed
                </div>
              </div> */}
            </a>
          </li>
          {/* <li className="text-gray-300"></li> */}
          <li className="flex pb-2">
            <a
              className="relative self-center font-SST_Light text-lg font-bold text-white hover:text-[#f04] [&_*]:hover:max-h-52"
              href="/"
            >
              <div className="flex items-center uppercase sm:w-min sm:text-sm lg:w-auto [&_.up]:hover:rotate-180">
                News & Community
                <SlArrowDown className="up size-5 px-1 transition-transform duration-300" />
              </div>
              <div className="absolute -left-1/2 max-h-0 w-48 overflow-hidden bg-black text-white transition-all duration-500 hover:text-[#f04]">
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  All News
                </div>

                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Newsletter Sign Up
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Forum
                </div>
              </div>
            </a>
          </li>

          {/* <li className="flex pb-2">
            <a
              className="relative self-center font-SST_Light text-lg font-bold text-white hover:text-[#f04] [&_*]:hover:max-h-52"
              href="/"
            >
              <div className="flex items-center uppercase sm:w-min sm:text-sm lg:w-auto [&_.up]:hover:rotate-180">
                news and media
                <SlArrowDown className="up size-5 px-1 transition-transform duration-300" />
              </div>
              <div className="absolute -left-1/2 max-h-0 w-48 overflow-hidden bg-black text-white transition-all duration-500 hover:text-[#f04]">
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  News
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Trailer & Screenshots
                </div>
              </div>
            </a>
          </li>

          <li className="flex pb-2">
            <a
              className="relative self-center font-SST_Light text-lg font-bold text-white hover:text-[#f04] [&_*]:hover:max-h-52"
              href="/"
            >
              <div className="flex items-center uppercase sm:text-sm [&_.up]:hover:rotate-180">
                Community
                <SlArrowDown className="up size-5 px-1 transition-transform duration-300" />
              </div>

              <div className="absolute -left-1/2 max-h-0 w-48 overflow-hidden bg-black text-white transition-all duration-500 hover:text-[#f04]">
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Forum
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Newsletter Sign Up
                </div>
              </div>
            </a>
          </li> */}
        </ul>
        <a className="absolute right-5 hidden md:block">
          <div className="relative m-2 hidden w-full cursor-pointer rounded-3xl bg-[#ff9000] p-5 py-3 text-center font-SST_Light sm:max-w-36 sm:text-lg md:block [&_*]:hover:max-h-[20rem]">
            BUY NOW
            <div className="absolute right-0 top-12 max-h-0 w-48 overflow-hidden bg-white/90 text-black transition-all duration-500">
              <button className="btn m-2 w-full rounded-3xl border-2 border-black bg-transparent p-5 py-3 font-SST_Light hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
                <div className="btn_div">Neto Store</div>
              </button>
              <button className="btn m-2 w-full rounded-3xl border-2 border-black bg-transparent p-5 py-3 font-SST_Light hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
                <div className="btn_div">Meta Quest</div>
              </button>
              <button className="btn m-2 w-full rounded-3xl border-2 border-black bg-transparent p-5 py-3 font-SST_Light hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
                <div className="btn_div">PS VR2</div>
              </button>
              <button className="btn m-2 w-full rounded-3xl border-2 border-black bg-transparent p-5 py-3 font-SST_Light hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
                <div className="btn_div w-max">Apple Vision</div>
              </button>
            </div>
          </div>
        </a>
      </div>
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
          className={`fixed bottom-0 left-0 top-16 ${toggle} flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-black px-6 py-6 duration-500`}
        >
          <div className="mb-8 flex items-center">
            <a className="font-bold leading-none" href="/">
              <Image
                alt=""
                className="w-32"
                src={logo}
                width={0}
                height={0}
              ></Image>
            </a>
            <button className="navbar-close absolute right-7">
              <svg
                className="h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-500"
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
          <div>
            <ul>
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
                        Orbit Explore Story
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Play On NetoGear
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Neto PlayFusion
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
                      Features
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
                        NetoGear Overview
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Gameplay Features
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
                      Orbit Explore Ratings
                      {/* <SlArrowDown
                        className={
                          accordion.acc3
                            ? "size-5 rotate-180 px-1 transition-all duration-300"
                            : "size-5 px-1 transition-all duration-300"
                        }
                      /> */}
                    </div>
                    {/* <div
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
                    </div> */}
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
                      News & Community
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
                        All News
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Newsletter Sign Up
                      </div>
                      <div className="border-b py-3 hover:text-[#f00]">
                        Forum
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li className="mb-1">
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
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
