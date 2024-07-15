/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gradientColorStops: {
        custom: {
          start: "rgb(131,136,143)", // Starting color
          end: "rgba(255,255,255,0)", // Ending color (white transparent)
        },
      },
      colors: {
        "neutral-white": "#FEFCF7",
        "neutral-black": "#333D4B",
        "neutral-grey": "#83888F",
        "neutral-lightgrey": "#E2DEDB",
        "accent-primary": "#0E8784",
        "accent-hover": "#66D2CF",
        "accent-secondary": "#FDD6BA",
        "white-opacity-90": "rgba(255, 255, 255, 0.9)",
        "white-opacity-0": "rgba(255, 255, 255, 0)",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },
      backgroundImage: {
        "hero-img-mobile":
          "url(/assets/home/mobile/image-hero-coffeepress.jpg)",
        "hero-img-tablet":
          "url(/assets/home/tablet/image-hero-coffeepress.jpg)",
        "hero-img-desktop":
          "url(/assets/home/desktop/image-hero-coffeepress.jpg)",
        "aboutUs-img-mobile":
          "url(/assets/about/mobile/image-hero-whitecup.jpg)",
        "aboutUs-img-tablet":
          "url(/assets/about/tablet/image-hero-whitecup.jpg)",
        "aboutUs-img-desktop":
          "url(/assets/about/desktop/image-hero-whitecup.jpg)",
        "aboutUs-bg-mobile": "url(/assets/about/mobile/bg-quality.png)",
        "aboutUs-bg-tablet": "url(/assets/about/tablet/bg-quality.png)",
        "aboutUs-bg-desktop": "url(/assets/about/desktop/bg-quality.png)",
        "plan-bg-mobile": "url(/assets/plan/mobile/image-hero-blackcup.jpg)",
        "plan-bg-tablet": "url(/assets/plan/tablet/image-hero-blackcup.jpg)",
        "plan-bg-desktop": "url(/assets/plan/desktop/image-hero-blackcup.jpg)",
      },
      maxWidth: {
        "4/5": "80%",
        half: "50%",
      },
    },
  },
  plugins: [],
}
