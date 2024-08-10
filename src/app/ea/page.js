import sec1_pic from "../../../public/ea/sec1_pic.jpg";
import sec1_logo from "../../../public/ea/sec1_logo.png";
import sec2_pic from "../../../public/ea/sec2_pic_pc.jpg";
import sec2_logo from "../../../public/ea/sec2_logo.png";
import sec3_pic from "../../../public/ea/sec3_pic_pc.jpg";
import sec3_logo from "../../../public/ea/sec3_logo.png";
import Image from "next/image";
import Navbar from "../navbar";
import Navbar2 from "../navbar2";
export default function Ea() {
  const Sec1 = () => {
    return (
      <section>
        <div className="bg-white">
          <div className="relative">
            <div className="relative max-h-[600px] overflow-hidden">
              {/* <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div> */}
              <picture>
                <source
                  srcSet="./ea/sec1_pic.jpg"
                  media="(max-width:1023.95px)"
                ></source>
                <source
                  srcSet="./ea/sec1_pic.jpg"
                  media="(min-width:1024px)"
                ></source>

                <Image
                  placeholder="blur"
                  src={sec1_pic}
                  width={0}
                  height={0}
                  alt=""
                  className="max-h-[600px] w-full object-cover"
                />
              </picture>
            </div>
            <div className="z-20 flex flex-col items-center px-5 py-10 text-center text-black lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:-translate-y-1/2 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
              <Image src={sec1_logo} width={0} height={0} alt="" className="" />
              <div className="font-CruyffSansExpanded_Heavy text-5xl uppercase">
                UEFA EURO 2024™ IS IN THE CLUB
              </div>
              <div className="netogame_p my-2 lg:my-5">
                Play UEFA EURO 2024™ in EA SPORTS FC™ 24.
              </div>
              <a className="my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white">
                Find out more
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Sec2 = () => {
    return (
      <section>
        <div className="bg-[#161616]">
          <div className="relative">
            <div className="relative overflow-hidden">
              {/* <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div> */}
              <picture>
                <source
                  srcSet="./ea/sec2_pic_mobile.jpg"
                  media="(max-width:1023.95px)"
                ></source>
                <source
                  srcSet="./ea/sec2_pic_pc.jpg"
                  media="(min-width:1024px)"
                ></source>

                <Image
                  placeholder="blur"
                  src={sec2_pic}
                  width={0}
                  height={0}
                  alt=""
                  className="w-full"
                />
              </picture>
            </div>
            <div className="z-20 flex flex-col items-center px-5 py-10 text-center text-white lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:-translate-y-1/2 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
              <Image src={sec2_logo} width={0} height={0} alt="" className="" />
              <div className="font-CruyffSansExpanded_Heavy text-5xl uppercase">
                UEFA EURO 2024™ IS IN THE CLUB
              </div>
              <div className="netogame_p my-2 lg:my-5">
                Play UEFA EURO 2024™ in EA SPORTS FC™ 24.
              </div>
              <a className="my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white">
                Find out more
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Sec3 = () => {
    return (
      <section>
        <div className="bg-[#161616]">
          <div className="relative">
            <div className="relative overflow-hidden">
              {/* <div className="netogame_gradientMainimage_mobile absolute bottom-0 z-10 h-full w-full lg:hidden"></div> */}
              <picture>
                <source
                  srcSet="./ea/sec3_pic_mobile.jpg"
                  media="(max-width:1023.95px)"
                ></source>
                <source
                  srcSet="./ea/sec3_pic_pc.jpg"
                  media="(min-width:1024px)"
                ></source>

                <Image
                  placeholder="blur"
                  src={sec3_pic}
                  width={0}
                  height={0}
                  alt=""
                  className="w-full"
                />
              </picture>
            </div>
            <div className="z-20 flex flex-col items-center px-5 py-10 text-center text-white lg:absolute lg:left-10 lg:top-1/2 lg:block lg:w-1/3 lg:-translate-y-1/2 lg:bg-transparent lg:px-0 lg:text-start xl:left-32">
              <Image src={sec3_logo} width={0} height={0} alt="" className="" />
              <div className="font-CruyffSansExpanded_Heavy text-5xl uppercase">
                UEFA EURO 2024™ IS IN THE CLUB
              </div>
              <div className="netogame_p my-2 lg:my-5">
                Play UEFA EURO 2024™ in EA SPORTS FC™ 24.
              </div>
              <a className="my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white">
                Find out more
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <main>
      <Navbar2 />
      {/* <div className="!font-SST_Light">
        <Navbar />
      </div> */}
      <div className="mt-16">
        <Sec1 />
        <Sec2 />
        <Sec3 />
      </div>
    </main>
  );
}
