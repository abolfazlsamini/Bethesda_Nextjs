"use client";
import Image from "next/image";
import logo from "../../public/logo_long.png";
import logo2 from "../../public/logo_2.png";
import esrb from "../../public/esrb.svg";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState } from "react";
import windows from "../../public/windows.png";
import PlayStore from "../../public/PlayStore.png";
import AppStore from "../../public/AppStore.png";
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
          <Image src={logo} alt="" width={0} height={0} className="" />
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
                          ? "max-h-[9000px] px-3 transition-all duration-300"
                          : "max-h-0 overflow-hidden pb-3 opacity-10 transition-all duration-300"
                      }
                    >
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        About NETO
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Neto Studios
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Neto Token
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
                      Prouct
                      <SlArrowDown
                        className={
                          accordion.acc2
                            ? "size-5 rotate-180 px-1 transition-transform duration-300"
                            : "size-5 px-1 transition-transform duration-300"
                        }
                      />
                    </div>
                    <div
                      className={
                        accordion.acc2
                          ? "max-h-[9000px] px-3 transition-all duration-300"
                          : "max-h-0 overflow-hidden pb-3 opacity-10 transition-all duration-300"
                      }
                    >
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Games
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        HyperGrid
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Neto VR
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Neto Gear
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Skytune
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        ThunderBeat
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
                      Games
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
                          ? "max-h-[9000px] px-3 transition-all duration-300"
                          : "max-h-0 overflow-hidden pb-3 opacity-10 transition-all duration-300"
                      }
                    >
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Console
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Neto VR
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Mobile
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Neto Gear
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
                      Support
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
                          ? "max-h-[9000px] px-3 transition-all duration-300"
                          : "max-h-0 overflow-hidden pb-3 opacity-10 transition-all duration-300"
                      }
                    >
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Store
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Games
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Cloud
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Services
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Accessories
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
                      Resources
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
                          ? "max-h-[9000px] px-3 transition-all duration-300"
                          : "max-h-0 overflow-hidden pb-3 opacity-10 transition-all duration-300"
                      }
                    >
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Neto terms of services
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Age Ratings
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Health Warnings
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Developers
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
                      Connect
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
                          ? "max-h-[9000px] px-3 transition-all duration-300"
                          : "max-h-0 overflow-hidden pb-3 opacity-10 transition-all duration-300"
                      }
                    >
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        App Store
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        PlayStore
                      </div>
                      <div className="border-b py-3 hover:text-[#ffffff99]">
                        Windows
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
              © 2024 Neto Interactive Entertainment LLC All content, games
              titles, trade names and/or trade dress, trademarks, artwork and
              associated imagery are trademarks and/or copyright material of
              their respective owners. All rights reserved. More info
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex justify-between border-b border-white/30 pb-3">
            <div>
              <div className="pb-3 font-bold">About</div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                About NETO
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Neto Studios
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Neto Token
              </div>
            </div>
            <div>
              <div className="pb-3 font-bold">Prouct</div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Games
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                HyperGrid
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Neto VR
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Neto Gear
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Skytune
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                ThunderBeat
              </div>
            </div>
            <div>
              <div className="pb-3 font-bold">Games</div>

              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Console
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Neto VR
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Mobile
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Neto Gear
              </div>
            </div>
            <div>
              <div className="pb-3 font-bold">Support</div>

              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Store
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Games
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Cloud
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Services
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Accessories
              </div>
            </div>
            <div>
              <div className="pb-3 font-bold">Resources</div>

              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Neto terms of services
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Age Ratings
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Health Warnings
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Developers
              </div>
            </div>
            <div>
              <div className="pb-3 font-bold">Connect</div>
              <div className="mx-auto mb-2 flex items-center">
                <div className="cursor-pointer">
                  <Image
                    width={0}
                    height={0}
                    className="w-7 pr-2"
                    alt=""
                    src={windows}
                  />
                </div>
                <div className="cursor-pointer">
                  <Image
                    width={0}
                    height={0}
                    className="w-7 pr-2"
                    alt=""
                    src={PlayStore}
                  />
                </div>
                <div className="cursor-pointer">
                  <Image
                    width={0}
                    height={0}
                    className="w-7 pr-2"
                    alt=""
                    src={AppStore}
                  />
                </div>
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                App Store
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                PlayStore
              </div>
              <div className="pb-3 hover:cursor-pointer hover:text-[#ffffff99]">
                Windows
              </div>
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
              © 2024 Neto Interactive Entertainment LLC All content, games
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
