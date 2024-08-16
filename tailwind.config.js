/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: "var(--font-futura)",
        univers55: "var(--font-univers55)",
        montera: "var(--font-montera)",
        roboto: "var(--font-roboto)",
        ElectronicArtsText_Bold: "var(--font-ElectronicArtsText_Bold)",
        ElectronicArtsDisplay_Bold: "var(--font-ElectronicArtsDisplay_Bold)",
        ElectronicArtsText_Regular: "var(--font-ElectronicArtsText_Regular)",
        A2Beckett: "var(--font-A2Beckett)",
        montserrat: "var(--font-montserrat)",
        CCCutthroat: "var(--font-CCCutthroat)",
        Purista: "var(--font-Purista)",
        PuristaItalic: "var(--font-PuristaItalic)",
        SST_Light: "var(--font-SST_Light)",
        SST_Bold: "var(--font-SST_Bold)",
        CruyffSansExpanded_Heavy: "var(--font-CruyffSansExpanded_Heavy)",
        cruyffsans_medium: "var(--font-cruyffsans_medium)",
        druk_text_medium: "var(--font-druk_text_medium)",
        druk_wide_super: "var(--font-druk_wide_super)",
        Inter_VariableFont_opsz: "var(--font-Inter_VariableFont_opsz)",
      },
      dropShadow: {
        hifilogoshadow: "8px 8px 0px rgba(0,0,0,.85)",
      },
      boxShadowColor: {
        navbar2_icons: "box-shadow: 0px 0px 5px 2px #888888",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "image-shadow":
          "linear-gradient(transparent 0%, rgba(34, 34, 34, 0.5) 25%, rgba(34, 34, 34, 0.75) 60%, rgba(34, 34, 34, 0.9) 90%)",
        "image-shadow-top":
          "linear-gradient(#222 0%, rgba(34, 34, 34, 0.75) 25%, rgba(34, 34, 34, 0.5) 60%, transparent 90%)",
        latest4:
          "linear-gradient(transparent 0%, rgba(83, 47, 43, 0.5) 25%, rgba(83, 47, 43, 0.75) 60%, rgb(83, 47, 43) 90%)",
        latest5:
          "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(131, 36, 5, 0.5) 25%, rgba(131, 36, 5, 0.75) 60%, rgb(131, 36, 5) 90%)",
        latest6:
          "linear-gradient(transparent 0%, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0.75) 60%, rgb(0, 0, 0) 90%)",
        latest7:
          "linear-gradient(transparent 0%, rgba(73, 90, 84, 0.5) 25%, rgba(73, 90, 84, 0.75) 60%, rgb(73, 90, 84) 90%)",
        hifi_blue_gradient:
          "linear-gradient(to bottom,transparent 40%, rgb(1, 74, 185) 100%)",
      },
      backgroundColor: {
        deathloop_orange: "#cf5d20",
        deathloop_green: "#0f7c55",
        deathloop_orange_hover: "rgb(186, 83, 28)",
        youtube_red: "rgb(229, 0, 0)",
        deathloop_white: "#DCDBC8",
        deathloop_gray: "rgba(220,219,200,0.7)",
        xbox_green: "#107c10 ",
        xbox_yellow: "rgb(255, 216, 0)",
        hifi_blue: "rgb(1, 74, 185)",
      },
      textColor: {
        deathloop_orange: "#cf5d20",
        deathloop_white: "#DCDBC8",
      },
      height: {
        "28vh": "28vh",
        "70vh": "70vh",
        "100vh": "100vh",
        "1000px": "1000px",
        "40%": "40%",
      },
      minHeight: {
        "120vh": "120vh",
        "40vh": "40vh",
      },
      boxShadow: {
        round: "0px 25px 17px -6px rgba(0, 0, 0, .2)",
        xbox: "0px 3px 15px rgba(0,0,0,0.5)",
      },
      margin: {
        "10px": "10px",
      },
    },
  },
  plugins: [],
};
