"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import pic_1 from "../../public/xbox/carousel_1_pc.jpg";
import pic_2 from "../../public/xbox/carousel_2_pc.jpg";
import pic_3 from "../../public/xbox/carousel_3_pc.jpg";

export default function Carousel() {
  const [active_img, setActive_img] = useState(1);
  const [leftright_animation, setLeftright_animation] = useState();
  const [leftright_animation_img, setLeftright_animation_img] = useState();

  const list = {
    0: [
      "/xbox/pic_3_mobile.jpg",
      "Rocket Motorbiker",
      "Its show time in rocker",
      "#",
    ],
    1: [
      "/xbox/pic_3_mobile.jpg",
      "Vortex",
      "Kill your enemy and get the prize",
      "#",
    ],
    2: [
      "/xbox/pic_3_mobile.jpg",
      "Helenic conquest",
      "Build your castle, defend it, attack, and upgrade",
      "#",
    ],
    3: [
      "/xbox/pic_3_mobile.jpg",
      "Tropical Havoc",
      "Welcome to our fantastic island, where nothing makes sense",
      "#",
    ],
  };

  function next() {
    setLeftright_animation("slideAnimationLeft");
    setLeftright_animation_img("slideAnimationLeftImg");
    if (active_img < 3) setActive_img(active_img + 1);
    else setActive_img(1);
  }
  function back() {
    setLeftright_animation("slideAnimationRight");
    setLeftright_animation_img("slideAnimationRightImg");
    if (active_img > 1) setActive_img(active_img - 1);
    else setActive_img(3);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 10000);

    return () => clearInterval(interval);
  }, [active_img]);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const [pointerUp, setPointerUp] = useState(null);
  const [pointerDown, setPointerDown] = useState(null);

  const minSwipeDistance = 50;

  const onPointerDown = (e) => {
    setPointerUp(null);
    setPointerDown(e.clientX);
  };
  const onPointerUp = (e) => {
    var distance = pointerDown - e.clientX;
    if (!pointerDown) return;

    if (distance > minSwipeDistance) next();
    if (distance < -minSwipeDistance) back();
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) back();
    if (isRightSwipe) next();
  };

  return (
    <section>
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div className="relative drag overflow-hidden">
          <div
            onClick={next}
            className="absolute z-10 cursor-pointer right-2 top-1/2 -translate-y-1/2"
          >
            <ChevronRightIcon className="size-8 bg-black rounded-[50%]"></ChevronRightIcon>
          </div>
          <div
            onClick={back}
            className="absolute z-10 cursor-pointer left-2 top-1/2 -translate-y-1/2"
          >
            <ChevronLeftIcon className="size-8 bg-black rounded-[50%]"></ChevronLeftIcon>
          </div>
          <div
            className={
              active_img === 1 ? `${leftright_animation_img}` : "hidden"
            }
          >
            <picture>
              <source
                srcSet={`./xbox/carousel_1_mobile.jpg`}
                media="(max-width:639.95px)"
              ></source>
              <source
                srcSet={`./xbox/carousel_1_pc.jpg`}
                media="(min-width:640px)"
              ></source>

              <Image
                priority={true}
                id="carouselImage"
                className="w-full"
                draggable={false}
                src={pic_1}
                width={1000}
                height={1000}
                alt=""
              />
            </picture>
          </div>
          <div
            className={
              active_img === 2 ? `${leftright_animation_img}` : "hidden"
            }
          >
            <picture>
              <source
                srcSet={`./xbox/carousel_2_mobile.jpg`}
                media="(max-width:639.95px)"
              ></source>
              <source
                srcSet={`./xbox/carousel_2_pc.jpg`}
                media="(min-width:640px)"
              ></source>

              <Image
                priority={true}
                id="carouselImage"
                className="w-full"
                draggable={false}
                src={pic_1}
                width={1000}
                height={1000}
                alt=""
              />
            </picture>
          </div>
          <div
            className={
              active_img === 3 ? `${leftright_animation_img}` : "hidden"
            }
          >
            <picture>
              <source
                srcSet={`./xbox/carousel_3_mobile.jpg`}
                media="(max-width:639.95px)"
              ></source>
              <source
                srcSet={`./xbox/carousel_3_pc.jpg`}
                media="(min-width:640px)"
              ></source>

              <Image
                priority={true}
                id="carouselImage"
                className="w-full"
                draggable={false}
                src={pic_1}
                width={1000}
                height={1000}
                alt=""
              />
            </picture>
          </div>
          <div>
            <div className="flex justify-center">
              <div
                className={
                  active_img === 1
                    ? `absolute top-1/2 w-10/12 mx-auto sm:top-0 sm:h-full text-center sm:text-left flex items-center sm:items-start mt-10 sm:mt-0 justify-center flex-col sm:w-1/3 sm:right-20 ${leftright_animation}`
                    : "hidden"
                }
              >
                <div className="bg-[#ffd800] px-1 text-black w-max mb-3 text-sm font-bold">
                  Coming soon to DG GOLD
                </div>
                <div className="text-2xl mb-3 font-bold leading-[2rem] xl:text-5xl sm:text-[36px] ">
                  TROPICALOOP
                </div>
                <div className="text-xl mb-5 font-segoeui sm:leading-[1.6rem] xl:text-3xl sm:text-[20px] ">
                  A Strong Storyline that Keeps You Hooked
                </div>
                <a
                  className="flex btn_parent mb-3 text-lg uppercase cursor-pointer bg-[#9bf00b] text-[#054b16] hover:text-[#054b16] w-max px-6 py-2"
                  href="#"
                >
                  <div className="font-extrabold btn_child_text text-sm font-seoproblack">
                    learn more
                  </div>
                  <ChevronRightIcon className="size-5 text-[#054b16] hover:text-[#054b16] btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className={
                  active_img === 2
                    ? `absolute top-1/2 w-10/12 mx-auto sm:top-0 sm:h-full text-center sm:text-left flex items-center sm:items-start mt-10 sm:mt-0 justify-center flex-col sm:w-1/3 sm:right-20 ${leftright_animation}`
                    : "hidden"
                }
              >
                <div className="bg-[#ffd800] px-1 text-black w-max mb-3 text-sm font-bold">
                  Coming Soon To DG GOLD
                </div>
                <div className="text-2xl mb-3 font-bold leading-[2rem] xl:text-5xl sm:text-[36px] ">
                  VORTEX LEGENDS
                </div>
                <div className="text-xl mb-5 font-segoeui sm:leading-[1.6rem] xl:text-3xl sm:text-[20px] ">
                  Pick your character, Round up your squad.
                  <br />
                  Show everyone what Legends are made of
                </div>
                <div className="flex items-center">
                  <a
                    className="flex btn_parent mb-3 text-lg uppercase cursor-pointer mr-3 bg-[#9bf00b] text-[#054b16] hover:text-[#054b16] w-max px-6 py-2"
                    href="#"
                  >
                    <div className="font-extrabold btn_child_text text-sm font-seoproblack">
                      pre order now
                    </div>
                    <ChevronRightIcon className="size-5 text-[#054b16] hover:text-[#054b16] btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                  </a>
                  <a
                    className="flex btn_parent mb-5 text-lg uppercase cursor-pointer "
                    href="#"
                  >
                    <div className="font-extrabold text-[#9bf00b] text-sm font-seoproblack">
                      learn more
                    </div>
                    <ChevronRightIcon className="size-5 btn_child_arrow text-[#9bf00b] hover:translate-x-12"></ChevronRightIcon>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className={
                  active_img === 3
                    ? `absolute top-1/2 w-10/12 mx-auto text-black sm:top-0 sm:h-full text-center sm:text-left flex items-center sm:items-start mt-10 sm:mt-0 justify-center flex-col sm:w-1/3 sm:left-20 ${leftright_animation}`
                    : "hidden"
                }
              >
                <div className="bg-[#ffd800] px-1 text-black w-max mb-3 text-sm font-bold">
                  JOIN NOW FOR $1
                </div>
                <div className="text-2xl mb-3 font-bold leading-[2rem] xl:text-5xl sm:text-[36px] ">
                  ROCKET MOTORBIKER
                </div>
                <div className="text-xl mb-5 font-segoeui sm:leading-[1.6rem] xl:text-3xl sm:text-[20px] ">
                  Play With Any Game Platfrom . Win Anywhere
                </div>
                <a
                  className="flex btn_parent text-lg uppercase cursor-pointer bg-[#9bf00b] text-[#054b16] hover:text-[#054b16] w-max px-6"
                  href="#"
                >
                  <div className="font-extrabold btn_child_text text-sm font-seoproblack">
                    learn more
                  </div>
                  <ChevronRightIcon className="size-5 text-[#054b16] hover:text-[#054b16] btn_child_arrow hover:translate-x-12"></ChevronRightIcon>
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
