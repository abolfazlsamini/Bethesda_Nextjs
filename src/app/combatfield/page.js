"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import main_pic_pc from "./../../../public/combatfield/main_pic_pc.jpg";
import logo_main from "../../../public/combatfield/logo_main.png";
import half_pic_1 from "../../../public/combatfield/half_pic_1.jpg";
import half_pic_2 from "../../../public/combatfield/half_pic_2.jpg";
import col_pic_1 from "../../../public/combatfield/col_pic_1.jpg";
import col_pic_2 from "../../../public/combatfield/col_pic_2.jpg";
import col_pic_3 from "../../../public/combatfield/col_pic_3.jpg";
import col2_pic_1 from "../../../public/combatfield/col2_pic_1.jpg";
import col2_pic_2 from "../../../public/combatfield/col2_pic_2.jpg";
import col2_pic_3 from "../../../public/combatfield/col2_pic_3.jpg";
import buttom_pic_pc from "../../../public/combatfield/buttom_pic_pc.jpg";
import gradient_logo from "../../../public/combatfield/gradient_logo.png";
import Navbar from "../navbar";

const Main_sec = () => {
  return (
    <section>
      <div className="relative">
        <div>
          <picture>
            <source
              srcSet="./home/main_pic_mobile.jpg"
              media="(max-width:767.95px)"
            ></source>

            <Image
              alt=""
              src={main_pic_pc}
              width={0}
              height={0}
              className="w-full"
            />
          </picture>
        </div>
        <div className="h-max w-full bg-[#161616] px-10 py-10 md:absolute md:top-1/2 md:w-2/5 md:-translate-y-1/2 md:bg-transparent md:p-4 xl:pl-24">
          <div className="w-10/12 md:w-11/12">
            <Image
              alt=""
              src={logo_main}
              width={0}
              height={0}
              className="py-2"
            />
          </div>
          <div className="font-druk_text_medium my-2 text-xl md:text-2xl">
            NETO GAMES STUDIO , COMBAT FIELD
          </div>
          <div className="font-druk_text_medium my-2 md:text-lg">
            Combat Field introduces a new and exciting style of online PTOE
            (Player-To-Objective Experience) shooters. This game stands out from
            similar titles thanks to its captivating destructible environments,
            fast-paced gunplay, and innovative approach to shooting and cover
            mechanics. The story of this first-person shooter unfolds through a
            multi-stage dream sequence experienced by the main character
          </div>
          <div className="md:flex">
            <button className="btn font-druk_text_medium m-2 w-full rounded-3xl bg-[#F04] p-5 py-3 hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
              <div className="btn_div">Watch Trailer</div>
            </button>
            <button className="btn font-druk_text_medium m-2 w-full rounded-3xl border-2 bg-transparent p-5 py-3 hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
              <div className="btn_div">BUY NOW</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
const Frostbite_sec = () => {
  return (
    <section>
      <div className="black_bg">
        <div className="relative h-max overflow-hidden">
          <div className="px-10 py-20 text-center text-white md:px-20">
            <div className="combarfield_H1">POWERED BY UNREAL ENGINE</div>
            <div className="combarfield_P">
              The game's graphics will be incredibly realistic, thanks to the
              use of Unreal Engine . Explosion effects, dynamic textures for
              weapons, artistic design of environments and maps, characters, and
              more will be crafted with meticulous attention to detail and high
              precision
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const HalfPic_sec = () => {
  return (
    <section>
      <div className="flex-row-reverse md:flex">
        <Image
          alt=""
          src={half_pic_1}
          width={0}
          height={0}
          className="h-full md:w-1/2"
        />

        <div className="mx-auto w-11/12 md:w-1/2 md:px-16">
          <div className="combarfield_H1 text-black">
            THE GUNPLAY IN THIS GAME WILL DRIVE YOU INSANE
          </div>
          <div className="combarfield_P text-black">
            In Combat Field, you face a fast-paced and chaotic shooter
            experience. Battles in Combat Field demand that you outskill and
            outsmart your opponents to emerge victorious
          </div>
          <button className="btn font-druk_text_medium m-2 w-full rounded-3xl bg-[#F04] p-5 py-3 hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
            <div className="btn_div">LEARN MORE</div>
          </button>
        </div>
      </div>
      <div className="md:flex">
        <Image
          alt=""
          src={half_pic_2}
          width={0}
          height={0}
          className="h-full md:w-1/2"
        />

        <div className="mx-auto w-11/12 md:w-1/2 md:px-16">
          <div className="combarfield_H1 text-black">
            IN COMBAT FIELD , YOU WILL ENCOUNTER SEVEEAL UNIQUE CLASSES
          </div>
          <div className="combarfield_P text-black">
            Each of these classes has access to unique weapons and abilities.
            The Heavy class can carry light machine guns or heavy hammers and
            use these weapons to demolish walls. Additionally, this class has
            more health
          </div>
          <button className="btn font-druk_text_medium m-2 w-full rounded-3xl bg-[#F04] p-5 py-3 hover:scale-[102%] sm:max-w-44 sm:text-lg md:hover:scale-105">
            <div className="btn_div">SEE THE ALTER EGOS</div>
          </button>
        </div>
      </div>
    </section>
  );
};
const Col1_sec = () => {
  return (
    <section>
      <div className="combarfield_H1 pb-8 pt-20 text-center text-black">
        THE GAME WILL FEATURE SEVERAL MODES
      </div>
      <div className="mx-auto max-w-[1120px] px-7 md:flex md:px-20 xl:px-2">
        <div className="md:w-1/3 md:px-3">
          <Image alt="" src={col_pic_1} width={0} height={0} className="" />
          <div>
            <div className="combarfield_H2 text-black">DOMINATION</div>
            <div className="font-druk_text_medium combarfield_P my-2 text-black md:text-base">
              To score points, capture objectives, hold them, and defend. The
              first team to reach the required score wins
            </div>
          </div>
        </div>
        <div className="md:w-1/3 md:px-3">
          <Image alt="" src={col_pic_2} width={0} height={0} className="" />
          <div>
            <div className="combarfield_H2 text-black">FREE FOR ALL</div>
            <div className="font-druk_text_medium combarfield_P my-2 text-black md:text-base">
              Eliminate all opponents. The first player to reach the target
              score ends the game. The top three players win
            </div>
          </div>
        </div>
        <div className="md:w-1/3 md:px-3">
          <Image alt="" src={col_pic_3} width={0} height={0} className="" />
          <div>
            <div className="combarfield_H2 text-black">KILL CONFIRMED</div>
            <div className="font-druk_text_medium combarfield_P my-2 text-black md:text-base">
              Eliminate enemies, collect their tags, and prevent your team's
              tags from being collected by the enemy
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-center pb-32 pt-20">
        <button className="btn font-druk_text_medium m-2 w-full rounded-3xl border-2 border-black bg-transparent p-5 py-3 text-black hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
          <div className="btn_div">MORE NEWS</div>
        </button>
      </div>
    </section>
  );
};
const Col2_sec = () => {
  return (
    <section>
      <div className="mx-auto md:flex md:w-full md:px-20 xl:w-11/12 xl:px-2">
        <div className="py-3 md:w-1/3 md:px-3">
          <Image alt="" src={col2_pic_1} width={0} height={0} className="" />
          <div className="px-5 pb-8">
            <div className="combarfield_H2 text-black">RANDOM GAME</div>
            <div className="font-druk_text_medium combarfield_P my-2 text-black md:text-base">
              In the Random mode, you will connect with other online players and
              begin competing. In this mode, the system will form two teams from
              the players present in the lobby to compete against each other.
              After the match, you can stay in the lobby and continue competing
              with the same players
            </div>
          </div>
        </div>
        <div className="py-3 md:w-1/3 md:px-3">
          <Image alt="" src={col2_pic_2} width={0} height={0} className="" />
          <div className="px-5 pb-8">
            <div className="combarfield_H2 text-black">FRIENDLY GAME</div>
            <div className="font-druk_text_medium combarfield_P my-2 text-black md:text-base">
              In the Friendly Game mode, you can send game requests to your
              friends (by searching their user ID, you can send a friend
              request) and play together. Additionally, you can also compete in
              teams against other teams, which will be detailed further
            </div>
          </div>
        </div>
        <div className="py-3 md:w-1/3 md:px-3">
          <Image alt="" src={col2_pic_3} width={0} height={0} className="" />
          <div className="px-5 pb-8">
            <div className="combarfield_H2 text-black">WEEKLY REWARD</div>
            <div className="font-druk_text_medium combarfield_P my-2 text-black md:text-base">
              The game features weekly rewards distributed through loot boxes.
              These loot boxes contain tokens, weapon skins, character skins,
              and other similar prizes. The loot boxes are awarded based on the
              time spent playing the game
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-center py-20">
        <button className="btn font-druk_text_medium m-2 w-full rounded-3xl border-2 border-black bg-transparent p-5 py-3 uppercase text-black hover:scale-[102%] sm:w-max sm:text-lg md:hover:scale-105">
          <div className="btn_div">Buy Now</div>
        </button>
      </div>
    </section>
  );
};
const Bottum_pic_sec = () => {
  return (
    <section>
      <div className="relative max-h-[36rem] overflow-hidden md:max-h-max">
        <picture>
          <source
            srcSet="./home/buttom_pic_mobile.jpg"
            media="(max-width:767.95px)"
          ></source>

          <Image
            alt=""
            src={buttom_pic_pc}
            width={0}
            height={0}
            className="w-full"
          />
        </picture>

        <div className="absolute bottom-10 px-10 md:bottom-auto md:left-16 md:top-1/2 md:w-3/5 md:-translate-y-1/2 xl:w-2/5">
          <div className="combarfield_P mb-0 pb-1 text-lg">
            NETO GAME STUDIO , COMBAT FIELD
          </div>
          <div className="combarfield_P mt-0 pt-0">
            In recent years, Battle Royale games have gained more popularity
            compared to other shooter genres. However, there are gamers seeking
            a different type of experience—one that emphasizes Play-to-Earn
            (P2E) mechanics. These maps focus on achieving specific objectives
            through team collaboration, rather than competing against 100 other
            players for survival
          </div>
          <button className="btn font-druk_text_medium m-2 w-full rounded-3xl border-2 bg-white p-5 py-3 text-black hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
            <div className="btn_div">BUY NOW</div>
          </button>
        </div>
      </div>
    </section>
  );
};
const Gradient_sec = () => {
  return (
    <section className="pb-10 md:px-5">
      <div className="gradient_bg mx-auto mt-4 flex w-11/12 flex-col items-center rounded-[3rem] px-10 py-10 text-center md:w-full">
        <Image
          alt=""
          src={gradient_logo}
          width={0}
          height={0}
          className="my-2 w-10/12"
        />
        <div className="font-druk_wide_super my-2 uppercase lg:text-[27px]">
          TRY NOW ON NETO PLAY FUSION
        </div>
        <button className="btn font-druk_text_medium mt-5 w-full rounded-3xl bg-[#ff4747] p-5 py-3 uppercase hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
          <div className="btn_div">Start Now</div>
        </button>
      </div>
    </section>
  );
};
const SocialMedia_sec = () => {
  return (
    <section>
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
export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <div className="fixed_bg mt-32 overflow-hidden">
        <Main_sec />
        <Frostbite_sec />
        <HalfPic_sec />
        <Col1_sec />
        <Col2_sec />
        <Bottum_pic_sec />
        <Gradient_sec />
        <SocialMedia_sec />
      </div>
    </main>
  );
}
