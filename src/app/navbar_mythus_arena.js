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

        <a className="absolute right-2 m-auto md:hidden">
          <div className="relative w-full rounded-3xl bg-[#abddd7] px-5 py-3 text-center font-Inter_VariableFont_opsz text-black sm:max-w-36 sm:text-lg md:block [&_*]:hover:max-h-[20rem] [&_.up]:hover:rotate-180">
            <div className="flex w-max items-center text-xs">
              Pre-Order Now*
            </div>
          </div>
        </a>
        <ul className="absolute left-0 top-1/2 hidden -translate-y-1/2 translate-x-3 transform sm:space-x-2 md:flex lg:mx-auto lg:w-max lg:space-x-4">
          <li className="flex items-center">
            <a className="leading-none" href="/">
              <Image
                alt=""
                className="w-32 sm:w-40"
                src={logo}
                width={0}
                height={0}
              ></Image>
            </a>
          </li>
          {/* <li className="text-gray-300"></li> */}
          <li className="flex px-1 hover:border-b-2 hover:border-b-[#abddd7] hover:bg-[#eaeaea14]">
            <a className="relative cursor-pointer self-center font-Inter_VariableFont_opsz text-lg text-white hover:text-[#abddd7] [&_*]:hover:max-h-52">
              <div className="flex items-center uppercase sm:text-sm lg:text-lg [&_.up]:hover:rotate-180">
                About
                <SlArrowDown className="up size-5 px-1 transition-transform duration-300" />
              </div>
              <div className="absolute top-12 max-h-0 w-max overflow-hidden rounded-md bg-black/80 px-2 text-white transition-all duration-500 hover:text-[#abddd7]">
                <div className="mt-2 w-full cursor-pointer px-10 py-2 text-sm text-white hover:bg-[#eaeaea14] hover:text-[#abddd7] lg:text-base">
                  Orbit Explore Story
                </div>
                <div className="w-full cursor-pointer px-10 py-2 text-sm text-white hover:bg-[#eaeaea14] hover:text-[#abddd7] lg:text-base">
                  Play On NetoGear
                </div>
                <div className="mb-2 w-full cursor-pointer px-10 py-2 text-sm text-white hover:bg-[#eaeaea14] hover:text-[#abddd7] lg:text-base">
                  Neto PlayFusion
                </div>
              </div>
            </a>
          </li>

          <li className="flex px-1 hover:border-b-2 hover:border-b-[#abddd7] hover:bg-[#eaeaea14]">
            <a className="relative cursor-pointer self-center font-Inter_VariableFont_opsz text-lg text-white hover:text-[#abddd7] [&_*]:hover:max-h-52">
              <div className="flex items-center uppercase sm:text-sm lg:text-lg [&_.up]:hover:rotate-180">
                Features
                <SlArrowDown className="up size-5 px-1 transition-transform duration-300" />
              </div>
              <div className="absolute top-12 max-h-0 w-max overflow-hidden rounded-md bg-black/80 px-2 text-white transition-all duration-500 hover:text-[#abddd7]">
                <div className="mt-2 w-full cursor-pointer px-10 py-2 text-sm text-white hover:bg-[#eaeaea14] hover:text-[#abddd7] lg:text-base">
                  NetoGear Overview
                </div>
                <div className="mb-2 w-full cursor-pointer px-10 py-2 text-sm text-white hover:bg-[#eaeaea14] hover:text-[#abddd7] lg:text-base">
                  Gameplay Features
                </div>
              </div>
            </a>
          </li>

          <li className="flex px-1 hover:border-b-2 hover:border-b-[#abddd7] hover:bg-[#eaeaea14]">
            <a
              className="relative cursor-pointer self-center font-Inter_VariableFont_opsz text-lg text-white hover:text-[#abddd7] [&_*]:hover:max-h-52"
              href="/"
            >
              <div className="flex items-center uppercase sm:text-sm lg:w-max lg:text-lg [&_.up]:hover:rotate-180">
                Orbit Explore Ratings
                {/* <SlArrowDown className="up size-5 px-1 transition-transform duration-300" /> */}
              </div>
            </a>
          </li>

          <li className="flex px-1 hover:border-b-2 hover:border-b-[#abddd7] hover:bg-[#eaeaea14]">
            <a className="relative cursor-pointer self-center font-Inter_VariableFont_opsz text-lg text-white hover:text-[#abddd7] [&_*]:hover:max-h-52">
              <div className="flex items-center uppercase sm:text-sm lg:w-max lg:text-lg [&_.up]:hover:rotate-180">
                News & Community
                <SlArrowDown className="up size-5 px-1 transition-transform duration-300" />
              </div>
              <div className="absolute top-12 max-h-0 w-max overflow-hidden rounded-md bg-black/80 px-2 text-white transition-all duration-500 hover:text-[#abddd7]">
                <div className="mt-2 w-full cursor-pointer px-10 py-2 text-sm text-white hover:bg-[#eaeaea14] hover:text-[#abddd7] lg:text-base">
                  All News
                </div>

                <div className="w-full cursor-pointer px-10 py-2 text-sm text-white hover:bg-[#eaeaea14] hover:text-[#abddd7] lg:text-base">
                  Newsletter Sign Up
                </div>
                <div className="mb-2 w-full cursor-pointer px-10 py-2 text-sm text-white hover:bg-[#eaeaea14] hover:text-[#abddd7] lg:text-base">
                  Forum
                </div>
              </div>
            </a>
          </li>
        </ul>
        <a className="absolute right-5 hidden hover:scale-[95%] md:block [&_.up]:hover:rotate-180">
          <div className="sm:max-w-42 relative hidden w-max cursor-pointer items-center justify-center rounded-3xl bg-[#abddd7] px-4 py-2 text-center font-Inter_VariableFont_opsz text-black sm:text-base md:flex [&_*]:hover:max-h-[20rem]">
            Pre-Order Now*
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
            <a className="leading-none" href="/">
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
                      <div className="border-b py-3 hover:text-[#abddd7]">
                        Orbit Explore Story
                      </div>
                      <div className="border-b py-3 hover:text-[#abddd7]">
                        Play On NetoGear
                      </div>
                      <div className="border-b py-3 hover:text-[#abddd7]">
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
                      <div className="border-b py-3 hover:text-[#abddd7]">
                        NetoGear Overview
                      </div>
                      <div className="border-b py-3 hover:text-[#abddd7]">
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
                      <div className="border-b py-3 hover:text-[#abddd7]">
                        Capture the flag
                      </div>
                      <div className="border-b py-3 hover:text-[#abddd7]">
                        Dominitaion
                      </div>
                      <div className="border-b py-3 hover:text-[#abddd7]">
                        Free for all
                      </div>
                      <div className="border-b py-3 hover:text-[#abddd7]">
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
                      <div className="border-b py-3 hover:text-[#abddd7]">
                        UAV
                      </div>
                      <div className="border-b py-3 hover:text-[#abddd7]">
                        All News
                      </div>
                      <div className="border-b py-3 hover:text-[#abddd7]">
                        Newsletter Sign Up
                      </div>
                      <div className="border-b py-3 hover:text-[#abddd7]">
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
                      <div className="border-b py-3 hover:text-[#abddd7]">
                        News
                      </div>
                      <div className="border-b py-3 hover:text-[#abddd7]">
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
                      <div className="border-b py-3 hover:text-[#abddd7]">
                        Forum
                      </div>
                      <div className="border-b py-3 hover:text-[#abddd7]">
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
