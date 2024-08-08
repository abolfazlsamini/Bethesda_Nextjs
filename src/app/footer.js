"use client";
import Image from "next/image";
import logo from "../../public/logo_long.png";
import logo2 from "../../public/logo_2.png";
import esrb from "../../public/esrb.svg";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState } from "react";

export default function Footer() {
  const [toggle, setToggle] = useState("-translate-x-96");
  const [accordion, SetAccordion] = useState({
    acc1: false,
    acc2: false,
    acc3: false,
    acc4: false,
    acc5: false,
    acc6: false,
  });

  return (
    <footer>
      <div className="bg-[#00439c] px-12">
        <div className="w-full border-b border-white/30 py-5">
          <Image src={logo} alt="" width={0} height={0} className="invert" />
        </div>
        <div className="w-full py-5 lg:hidden">
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
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        GAMEPLAY
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Features and Modes
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        peresentation
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
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
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Dust Storm
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Urban Siege
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Artic Blast
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Jungle Havoc
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Desert Mirage
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Metro Mayhem
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
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
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Capture the flag
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Dominitaion
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Free for all
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
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
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        UAV
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Counter UAV
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Cruise Missile
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
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
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        News
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
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
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Forum
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Newsletter Sign Up
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full border-b border-white/30 pb-5">
            <div className="flex justify-between">
              <Image
                src={logo2}
                alt=""
                width={0}
                height={0}
                className="h-full"
              />
              <Image src={esrb} alt="" width={0} height={0} className="h-14" />
            </div>
            <div className="mt-2 text-xs">
              © 2024 Sony Interactive Entertainment LLC All content, games
              titles, trade names and/or trade dress, trademarks, artwork and
              associated imagery are trademarks and/or copyright material of
              their respective owners. All rights reserved. More info
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex justify-between border-b border-white/30 py-3">
            <div>
              <div className="font-bold">about</div>
              <div>about sie</div>
              <div>careers</div>
            </div>
            <div>
              <div className="font-bold">about</div>
              <div>about sie</div>
              <div>careers</div>
            </div>
            <div>
              <div className="font-bold">about</div>
              <div>about sie</div>
              <div>careers</div>
            </div>
            <div>
              <div className="font-bold">about</div>
              <div>about sie</div>
              <div>careers</div>
            </div>
            <div>
              <div className="font-bold">about</div>
              <div>about sie</div>
              <div>careers</div>
            </div>
            <div>
              <div className="font-bold">about</div>
              <div>about sie</div>
              <div>careers</div>
            </div>
          </div>
          <div className="w-full border-b border-white/30 py-5">
            <div className="flex justify-between">
              <Image
                src={logo2}
                alt=""
                width={0}
                height={0}
                className="h-full"
              />
              <Image src={esrb} alt="" width={0} height={0} className="h-16" />
            </div>
            <div className="mt-2 text-sm">
              © 2024 Sony Interactive Entertainment LLC All content, games
              titles, trade names and/or trade dress, trademarks, artwork and
              associated imagery are trademarks and/or copyright material of
              their respective owners. All rights reserved. More info
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
