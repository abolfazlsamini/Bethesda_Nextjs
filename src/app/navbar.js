"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import logo from "../../public/ps.svg";
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
    <div className="fixed top-0 z-50 min-h-16 w-full">
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
        <a className="text-3xl font-bold leading-none md:hidden" href="/">
          <Image
            alt=""
            className="w-40 px-3 py-1"
            src={logo}
            width={0}
            height={0}
          ></Image>
        </a>
        <a className="absolute right-5 m-auto md:hidden">
          <div className="font-druk_text_medium relative m-2 w-full rounded-3xl bg-[#F04] p-5 py-3 text-center sm:max-w-36 sm:text-lg md:block [&_*]:hover:max-h-52">
            <div className="text-xs">
              BUY NOW
              <div className="absolute right-1 m-auto max-h-0 w-32 overflow-hidden bg-black px-2 text-white transition-all duration-500">
                <button className="btn font-druk_text_medium mt-2 w-full rounded-3xl border-2 bg-transparent p-5 py-3 hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
                  <div className="btn_div">BUY NOW</div>
                </button>
                <button className="btn font-druk_text_medium my-2 w-full rounded-3xl border-2 bg-transparent p-5 py-3 hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
                  <div className="btn_div">BUY NOW</div>
                </button>
              </div>
            </div>
          </div>
        </a>
        <ul className="absolute left-0 top-1/2 hidden -translate-y-1/2 translate-x-3 transform sm:space-x-3 md:flex lg:mx-auto lg:w-auto lg:space-x-6">
          <li>
            <a className="font-bold leading-none" href="/">
              <Image
                alt=""
                className="w-32"
                src={logo}
                width={0}
                height={0}
              ></Image>
            </a>
          </li>
          <li className="text-gray-300"></li>
          <li className="flex pb-2">
            <a
              className="font-druk_text_medium relative self-center text-lg font-bold text-white hover:text-[#f04] [&_*]:hover:max-h-52"
              href="/"
            >
              <div className="flex items-center uppercase [&_.up]:hover:rotate-180">
                About
                <SlArrowDown className="up size-5 px-1 transition-transform duration-300" />
              </div>
              <div className="absolute -left-1/2 max-h-0 w-48 overflow-hidden bg-black text-white transition-all duration-500 hover:text-[#f04]">
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  GamePlay
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Features and Modes
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  peresentation
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  NT Playfusion membership
                </div>
              </div>
            </a>
          </li>
          {/* <li className="text-gray-300"></li> */}
          <li className="flex pb-2">
            <a
              className="font-druk_text_medium relative self-center text-lg font-bold text-white hover:text-[#f04] [&_*]:hover:max-h-52"
              href="/"
            >
              <div className="flex items-center uppercase [&_.up]:hover:rotate-180">
                maps
                <SlArrowDown className="up size-5 px-1 transition-transform duration-300" />
              </div>
              <div className="absolute -left-1/2 max-h-0 w-48 overflow-hidden bg-black text-white transition-all duration-500 hover:text-[#f04]">
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Dust Storm
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Urban Siege
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Artic Blast
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Jungle Havoc
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Desert Mirage
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Metro Mayhem
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Devils Mountain
                </div>
              </div>
            </a>
          </li>
          {/* <li className="text-gray-300"></li> */}
          <li className="flex pb-2">
            <a
              className="font-druk_text_medium relative self-center text-lg font-bold text-white hover:text-[#f04] [&_*]:hover:max-h-52"
              href="/"
            >
              <div className="flex items-center uppercase [&_.up]:hover:rotate-180">
                game mode
                <SlArrowDown className="up size-5 px-1 transition-transform duration-300" />
              </div>
              <div className="absolute -left-1/2 max-h-0 w-48 overflow-hidden bg-black text-white transition-all duration-500 hover:text-[#f04]">
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
              </div>
            </a>
          </li>
          {/* <li className="text-gray-300"></li> */}
          <li className="flex pb-2">
            <a
              className="font-druk_text_medium relative self-center text-lg font-bold text-white hover:text-[#f04] [&_*]:hover:max-h-52"
              href="/"
            >
              <div className="flex items-center uppercase [&_.up]:hover:rotate-180">
                Assistant Tools
                <SlArrowDown className="up size-5 px-1 transition-transform duration-300" />
              </div>
              <div className="absolute -left-1/2 max-h-0 w-48 overflow-hidden bg-black text-white transition-all duration-500 hover:text-[#f04]">
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  UAV
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Counter UAV
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Cruise Missile
                </div>
                <div className="cursor-pointer px-10 py-2 text-sm text-white hover:text-[#f04]">
                  Remote Turret
                </div>
              </div>
            </a>
          </li>
          {/* <li className="text-gray-300"></li> */}
          <li className="flex pb-2">
            <a
              className="font-druk_text_medium relative self-center text-lg font-bold text-white hover:text-[#f04] [&_*]:hover:max-h-52"
              href="/"
            >
              <div className="flex items-center uppercase [&_.up]:hover:rotate-180">
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
          {/* <li className="text-gray-300"></li> */}
          <li className="flex pb-2">
            <a
              className="font-druk_text_medium relative self-center text-lg font-bold text-white hover:text-[#f04] [&_*]:hover:max-h-52"
              href="/"
            >
              <div className="flex items-center uppercase [&_.up]:hover:rotate-180">
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
          </li>
          {/* <li className="text-gray-300"></li> */}
        </ul>
        <a className="absolute right-5 hidden md:block">
          <div className="font-druk_text_medium relative m-2 hidden w-full rounded-3xl bg-[#F04] p-5 py-3 text-center sm:max-w-36 sm:text-lg md:block [&_*]:hover:max-h-52">
            BUY NOW
            <div className="absolute right-0 top-12 max-h-0 w-48 overflow-hidden bg-black text-white transition-all duration-500">
              <button className="btn font-druk_text_medium m-2 w-full rounded-3xl border-2 bg-transparent p-5 py-3 hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
                <div className="btn_div">BUY NOW</div>
              </button>
              <button className="btn font-druk_text_medium m-2 w-full rounded-3xl border-2 bg-transparent p-5 py-3 hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
                <div className="btn_div">BUY NOW</div>
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
          className={`fixed bottom-0 left-0 top-0 ${toggle} flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-black px-6 py-6 duration-500`}
        >
          <div className="mb-8 flex items-center">
            {/* <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <svg className="h-12" alt="logo" viewBox="0 0 10240 10240">
                <path d="M8284 9162 c-2 -207 -55 -427 -161 -667 -147 -333 -404 -644 -733 -886 -81 -59 -247 -169 -256 -169 -3 0 -18 -9 -34 -20 -26 -19 -344 -180 -354 -180 -3 0 -29 -11 -58 -24 -227 -101 -642 -225 -973 -290 -125 -25 -397 -70 -480 -80 -22 -3 -76 -9 -120 -15 -100 -13 -142 -17 -357 -36 -29 -2 -98 -7 -153 -10 -267 -15 -436 -28 -525 -40 -14 -2 -45 -7 -70 -10 -59 -8 -99 -14 -130 -20 -14 -3 -41 -7 -60 -11 -19 -3 -39 -7 -45 -8 -5 -2 -28 -6 -50 -10 -234 -45 -617 -165 -822 -257 -23 -10 -45 -19 -48 -19 -7 0 -284 -138 -340 -170 -631 -355 -1107 -842 -1402 -1432 -159 -320 -251 -633 -308 -1056 -26 -190 -27 -635 -1 -832 3 -19 7 -59 10 -89 4 -30 11 -84 17 -120 6 -36 12 -77 14 -91 7 -43 33 -174 39 -190 3 -8 7 -28 9 -45 6 -35 52 -221 72 -285 7 -25 23 -79 35 -120 29 -99 118 -283 189 -389 67 -103 203 -244 286 -298 75 -49 178 -103 196 -103 16 0 27 16 77 110 124 231 304 529 485 800 82 124 153 227 157 230 3 3 28 36 54 74 116 167 384 497 546 671 148 160 448 450 560 542 14 12 54 45 90 75 88 73 219 172 313 238 42 29 77 57 77 62 0 5 -13 34 -29 66 -69 137 -149 405 -181 602 -7 41 -14 82 -15 90 -1 8 -6 46 -10 83 -3 37 -8 77 -10 88 -2 11 -7 65 -11 122 -3 56 -8 104 -9 107 -2 3 0 12 5 19 6 10 10 8 15 -10 10 -34 167 -346 228 -454 118 -210 319 -515 340 -515 4 0 40 18 80 40 230 128 521 255 787 343 118 40 336 102 395 113 28 5 53 11 105 23 25 5 59 12 75 15 17 3 41 8 55 11 34 7 274 43 335 50 152 18 372 29 565 29 194 0 481 -11 489 -19 2 -3 -3 -6 -12 -6 -9 -1 -20 -2 -24 -3 -33 -8 -73 -16 -98 -21 -61 -10 -264 -56 -390 -90 -649 -170 -1243 -437 -1770 -794 -60 -41 -121 -82 -134 -93 l-24 -18 124 -59 c109 -52 282 -116 404 -149 92 -26 192 -51 220 -55 17 -3 64 -12 105 -21 71 -14 151 -28 230 -41 19 -3 46 -7 60 -10 14 -2 45 -7 70 -10 25 -4 56 -8 70 -10 14 -2 53 -7 88 -10 35 -4 71 -8 81 -10 10 -2 51 -6 92 -9 101 -9 141 -14 147 -21 3 -3 -15 -5 -39 -6 -24 0 -52 -2 -62 -4 -21 -4 -139 -12 -307 -22 -242 -14 -700 -7 -880 13 -41 4 -187 27 -250 39 -125 23 -274 68 -373 111 -43 19 -81 34 -86 34 -4 0 -16 -8 -27 -17 -10 -10 -37 -33 -59 -52 -166 -141 -422 -395 -592 -586 -228 -257 -536 -672 -688 -925 -21 -36 -43 -66 -47 -68 -4 -2 -8 -7 -8 -11 0 -5 -24 -48 -54 -97 -156 -261 -493 -915 -480 -935 2 -3 47 -21 101 -38 54 -18 107 -36 118 -41 58 -25 458 -138 640 -181 118 -27 126 -29 155 -35 14 -2 45 -9 70 -14 66 -15 137 -28 300 -55 37 -7 248 -33 305 -39 28 -3 84 -9 125 -13 163 -16 792 -8 913 12 12 2 58 9 102 15 248 35 423 76 665 157 58 19 134 46 170 60 86 33 344 156 348 166 2 4 8 7 13 7 14 0 205 116 303 184 180 126 287 216 466 396 282 281 511 593 775 1055 43 75 178 347 225 455 100 227 236 602 286 790 59 220 95 364 120 485 6 28 45 245 50 275 2 14 7 41 10 60 3 19 8 49 10 65 2 17 6 46 9 65 15 100 35 262 40 335 3 39 8 89 10 112 22 225 33 803 21 1043 -3 41 -7 129 -11 195 -3 66 -8 136 -10 155 -2 19 -6 76 -10 125 -3 50 -8 101 -10 115 -2 14 -6 57 -10 95 -7 72 -12 113 -20 175 -2 19 -7 55 -10 80 -6 46 -43 295 -51 340 -2 14 -9 54 -15 90 -5 36 -16 97 -24 135 -8 39 -17 84 -20 100 -12 68 -18 97 -50 248 -19 87 -47 204 -61 260 -14 56 -27 109 -29 117 -30 147 -232 810 -253 832 -4 4 -7 -23 -8 -60z"></path>
              </svg>
            </a> */}
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
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
