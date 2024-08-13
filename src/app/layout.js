// import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./navbar";
import Footer from "./footer";
import Navbar2 from "./navbar2";

export const furura = localFont({
  src: [
    {
      path: "../../public/fonts/FuturaBoldCondensed.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-futura",
});
export const univers55 = localFont({
  src: [
    {
      path: "../../public/fonts/Univers55Roman.latin.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-univers55",
});
export const montera = localFont({
  src: [
    {
      path: "../../public/fonts/montserratsemibold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-montera",
});
export const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/montserratsemibold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});
export const segoeuibold = localFont({
  src: [
    {
      path: "../../public/fonts/xbox/segoeuibold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-segoeuibold",
});
export const segoeui = localFont({
  src: [
    {
      path: "../../public/fonts/xbox/segoeui.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-segoeui",
});
export const seoproblack = localFont({
  src: [
    {
      path: "../../public/fonts/xbox/seoproblack.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-seoproblack",
});

/*   hifi font */
export const A2Beckett = localFont({
  src: [
    {
      path: "../../public/fonts/hifi/A2Beckett.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-A2Beckett",
});
export const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/hifi/montserrat.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
});
export const CCCutthroat = localFont({
  src: [
    {
      path: "../../public/fonts/hifi/CCCutthroat.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-CCCutthroat",
});
export const Purista = localFont({
  src: [
    {
      path: "../../public/fonts/hifi/Purista.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-Purista",
});
export const PuristaItalic = localFont({
  src: [
    {
      path: "../../public/fonts/hifi/PuristaItalic.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-PuristaItalic",
});
export const SST_Light = localFont({
  src: [
    {
      path: "../../public/fonts/netogame/SST_Light.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-SST_Light",
});
export const SST_Bold = localFont({
  src: [
    {
      path: "../../public/fonts/netogame/SST_Bold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-SST_Bold",
});
export const CruyffSansExpanded_Heavy = localFont({
  src: [
    {
      path: "../../public/fonts/ea/CruyffSansExpanded_Heavy.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-CruyffSansExpanded_Heavy",
});
export const cruyffsans_medium = localFont({
  src: [
    {
      path: "../../public/fonts/ea/cruyffsans_medium.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cruyffsans_medium",
});
export const druk_text_medium = localFont({
  src: [
    {
      path: "../../public/fonts/combatfield/druk_text_medium.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-druk_text_medium",
});
export const druk_wide_super = localFont({
  src: [
    {
      path: "../../public/fonts/combatfield/druk_wide_super.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-druk_wide_super",
});
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NetoGame",
  description: "NetoGame",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${furura.variable} ${univers55.variable} ${montera.variable} ${roboto.variable} ${segoeuibold.variable} ${segoeui.variable} ${seoproblack.variable} ${A2Beckett.variable} ${montserrat.variable} ${CCCutthroat.variable} ${Purista.variable} ${PuristaItalic.variable} ${SST_Light.variable} ${SST_Bold.variable} ${CruyffSansExpanded_Heavy.variable} ${druk_text_medium.variable} ${druk_wide_super.variable} ${cruyffsans_medium.variable} `}
      >
        <Navbar2 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
