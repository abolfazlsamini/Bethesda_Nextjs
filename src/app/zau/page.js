"use client";
import Image from "next/image";

import sec1_pic_pc from "../../../public/zau/sec1_pic_pc.jpg";
import sec1_logo from "../../../public/zau/sec1_logo.png";

import sec2_pic_1 from "../../../public/zau/sec2_pic_1.jpg";
import sec2_pic_2 from "../../../public/zau/sec2_pic_2.jpg";
import sec2_pic_3 from "../../../public/zau/sec2_pic_3.jpg";

import sec3_pic_1 from "../../../public/zau/sec3_pic_1.jpg";
import sec3_pic_2 from "../../../public/zau/sec3_pic_2.jpg";
import sec3_pic_3 from "../../../public/zau/sec3_pic_3.jpg";
import gradient_logo from "../../../public/zau/gradient_logo.png";

import Navbar from "../navbar_zau";

export default function Zau() {
  const Sec_1 = () => {
    return (
      <section>
        <div className="relative min-h-[100vh] w-full bg-[#161616] md:min-h-0">
          <div>
            <picture>
              <source
                srcSet="./zau/sec1_pic_mobile.jpg"
                media="(max-width:767.95px)"
              ></source>
              <Image
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                src={sec1_pic_pc}
                className=""
              />
            </picture>
          </div>
          <div className="absolute bottom-0 left-1/2 mx-auto flex w-11/12 -translate-x-1/2 flex-col items-center md:bottom-1/2 md:left-20 md:block md:w-1/2 md:translate-x-0 md:translate-y-1/2 2xl:left-1/4 2xl:w-1/4">
            <Image width={0} height={0} alt="" src={sec1_logo} />
            <div className="font-neueplaktext_regular my-2 text-xl">
              Check out the Tales of Kenzera™: ZAU launch trailer and embark on
              your adventure through the beautiful and treacherous lands of
              Kenzera today!
            </div>
            <div className="my-2 w-full py-2 xl:flex">
              <a className="font-zau relative my-2 block w-full cursor-pointer rounded-sm bg-[#0ecdd4] px-7 py-3 text-center text-xl uppercase text-black md:w-max md:hover:scale-105 xl:my-4 xl:mr-4 md:[&_*]:hover:scale-95">
                <div className="">BUY NOW</div>
              </a>
              <a className="font-zau relative mb-4 mt-2 block w-full cursor-pointer rounded-sm border-2 px-7 py-3 text-center text-xl uppercase text-white md:w-max md:hover:scale-105 xl:my-4 md:[&_*]:hover:scale-95">
                <div className="">watch the trailer</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Discord = () => {
    return (
      <section>
        <div className="zau_discord_bg">
          <div className="mx-auto flex flex-col items-center justify-between px-10 py-5 md:flex-row md:px-20 xl:w-3/4">
            <div className="font-zau text-2xl font-bold uppercase text-black">
              Chat with the team on Discord
            </div>
            <a className="font-zau relative my-2 block w-full cursor-pointer rounded-sm border-2 border-black px-7 py-3 text-center text-xl font-bold uppercase text-black md:w-max md:hover:scale-105 md:[&_div]:hover:scale-95">
              <div className="flex items-center">
                <span className="pr-2">join now</span>
                <span>
                  <svg
                    viewBox="0 0 71 55"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    width={20}
                    height={20}
                  >
                    <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978Z M23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253Z M47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"></path>
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  };
  const Sec_2 = () => {
    return (
      <section>
        <div>
          <div className="zau_src_2_bg_1 flex flex-col items-center md:flex-row-reverse">
            <div className="md:w-1/2">
              <Image
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                src={sec2_pic_1}
                className=""
              />
            </div>
            <div className="md:w-1/2">
              <div className="mx-auto w-11/12 py-20 md:w-9/12 md:py-0">
                <div className="font-t1korium text-[54px] 2xl:text-[100px]">
                  BECOME THE WARRIOR SHAMAN
                </div>
                <div className="font-neueplaktext_regular my-2 text-xl">
                  Embark on a poignant single-player story shaped by actor
                  Abubakar Salim's own experience with grief, discovering how
                  love gives us the courage to press on after devastating loss.
                  As Zau, you must face your own emotions to become a worthy
                  Nganga: a spiritual healer.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="zau_src_2_bg_2 flex flex-col items-center md:flex-row">
            <div className="md:w-1/2">
              <Image
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                src={sec2_pic_2}
                className=""
              />
            </div>
            <div className="md:w-1/2">
              <div className="mx-auto w-11/12 py-20 md:w-9/12 md:py-0">
                <div className="font-t1korium text-[54px] 2xl:text-[100px]">
                  BECOME THE WARRIOR SHAMAN
                </div>
                <div className="font-neueplaktext_regular my-2 text-xl">
                  Embark on a poignant single-player story shaped by actor
                  Abubakar Salim's own experience with grief, discovering how
                  love gives us the courage to press on after devastating loss.
                  As Zau, you must face your own emotions to become a worthy
                  Nganga: a spiritual healer.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="zau_src_2_bg_3 flex flex-col items-center md:flex-row-reverse">
            <div className="md:w-1/2">
              <Image
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                src={sec2_pic_3}
                className=""
              />
            </div>
            <div className="md:w-1/2">
              <div className="mx-auto w-11/12 py-20 md:w-9/12 md:py-0">
                <div className="font-t1korium text-[54px] 2xl:text-[100px]">
                  BECOME THE WARRIOR SHAMAN
                </div>
                <div className="font-neueplaktext_regular my-2 text-xl">
                  Embark on a poignant single-player story shaped by actor
                  Abubakar Salim's own experience with grief, discovering how
                  love gives us the courage to press on after devastating loss.
                  As Zau, you must face your own emotions to become a worthy
                  Nganga: a spiritual healer.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Sec_3 = () => {
    return (
      <section>
        <div className="zau_src_3_bg py-20">
          <div className="font-t1korium text-center text-[54px] 2xl:text-[100px]">
            LATEST NEWS
          </div>
          <div className="mx-auto md:flex md:w-10/12">
            <div className="zau_card_shadow mb-4 cursor-pointer bg-white transition-all duration-500 ease-in-out hover:-translate-y-1 md:mr-4 md:w-1/3">
              <Image
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                src={sec3_pic_1}
                className="hidden md:block"
              />
              <div className="px-5 md:py-4">
                <div className="font-zau font-bold text-[#0ecdd4]">
                  JUN 11, 2024
                </div>
                <div className="font-zau text-xl font-bold uppercase text-black xl:text-2xl">
                  Play the new Tales of Kenzera™: ZAU demo now!
                </div>
                <div className="font-neueplaktext_regular mt-2 hidden text-xl text-black md:block">
                  Wield the dance of the shaman in the updated demo, now
                  available on Steam. Trial coming to Xbox and PlayStation this
                  week!
                </div>
              </div>
            </div>
            <div className="zau_card_shadow mb-4 cursor-pointer bg-white transition-all duration-500 ease-in-out hover:-translate-y-1 md:mr-4 md:w-1/3">
              <Image
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                src={sec3_pic_2}
                className="hidden md:block"
              />
              <div className="px-5 md:py-4">
                <div className="font-zau font-bold text-[#0ecdd4]">
                  JUN 11, 2024
                </div>
                <div className="font-zau text-xl font-bold uppercase text-black xl:text-2xl">
                  Play the new Tales of Kenzera™: ZAU demo now!
                </div>
                <div className="font-neueplaktext_regular mt-2 hidden text-xl text-black md:block">
                  Details regarding the 1.1.1 hotfix
                </div>
              </div>
            </div>
            <div className="zau_card_shadow mb-4 cursor-pointer bg-white transition-all duration-500 ease-in-out hover:-translate-y-1 md:mr-4 md:w-1/3">
              <Image
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                src={sec3_pic_3}
                className="hidden md:block"
              />
              <div className="px-5 md:py-4">
                <div className="font-zau font-bold text-[#0ecdd4]">
                  JUN 11, 2024
                </div>
                <div className="font-zau text-xl font-bold uppercase text-black xl:text-2xl">
                  Play the new Tales of Kenzera™: ZAU demo now!
                </div>
                <div className="font-neueplaktext_regular mt-2 hidden text-xl text-black md:block">
                  Wield the dance of the shaman in the updated demo, now
                  available on Steam. Trial coming to Xbox and PlayStation this
                  week!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Gradient_sec = () => {
    return (
      <section className="pb-10 md:px-5">
        <div className="gradient_bg_orbitexplore mx-auto mt-4 flex w-11/12 flex-col items-center rounded-[3rem] px-10 py-10 text-center md:w-full">
          <Image
            alt=""
            src={gradient_logo}
            width={0}
            height={0}
            className="my-2 w-10/12"
          />
          <div className="my-2 font-druk_wide_super uppercase lg:text-[27px]">
            TRY NOW ON NETO PLAY FUSION
          </div>
          <button className="btn mt-5 w-full rounded-3xl bg-[#ff4747] p-5 py-3 font-druk_text_medium uppercase hover:scale-[102%] sm:max-w-36 sm:text-lg md:hover:scale-105">
            <div className="btn_div">Start Now</div>
          </button>
        </div>
      </section>
    );
  };
  const SocialMedia_sec = () => {
    return (
      <section className="mx-auto">
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
  return (
    <section>
      <title>Orbit Explore</title>

      <div className="">
        <Navbar />
      </div>
      <div>
        <Sec_1 />
        <Discord />
        <Sec_2 />
        <Sec_3 />
        <section className="fixed_bg pt-5">
          <div className="mx-auto mb-10 min-h-40 lg:flex">
            <Gradient_sec />
          </div>
          <div className="mx-auto min-h-40 lg:flex">
            <SocialMedia_sec />
          </div>
        </section>
      </div>
    </section>
  );
}
