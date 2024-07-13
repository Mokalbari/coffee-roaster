/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gradientColorStops: {
        custom: {
          start: "rgb(131,136,143)", // Couleur de départ
          end: "rgba(255,255,255,0)", // Couleur de fin (blanc transparent)
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
      },

      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },
      backgroundImage: {
        "hero-img-mobile":
          "url(/home/mokalbari/coding/frontend-mentor/coffee-roaster/src/assets/home/mobile/image-hero-coffeepress.jpg)",
        "hero-img-tablet":
          "url(/home/mokalbari/coding/frontend-mentor/coffee-roaster/src/assets/home/tablet/image-hero-coffeepress.jpg)",
        "hero-img-desktop":
          "url(/home/mokalbari/coding/frontend-mentor/coffee-roaster/src/assets/home/desktop/image-hero-coffeepress.jpg)",
        "aboutUs-img-mobile":
          "url(/home/mokalbari/coding/frontend-mentor/coffee-roaster/src/assets/about/mobile/image-hero-whitecup.jpg)",
        "aboutUs-img-tablet":
          "url(/home/mokalbari/coding/frontend-mentor/coffee-roaster/src/assets/about/tablet/image-hero-whitecup.jpg)",
        "aboutUs-img-desktop":
          "url(/home/mokalbari/coding/frontend-mentor/coffee-roaster/src/assets/about/desktop/image-hero-whitecup.jpg)",
        "aboutUs-bg-mobile":
          "url(/home/mokalbari/coding/frontend-mentor/coffee-roaster/src/assets/about/mobile/bg-quality.png)",
        "aboutUs-bg-tablet":
          "url(/home/mokalbari/coding/frontend-mentor/coffee-roaster/src/assets/about/tablet/bg-quality.png)",
        "aboutUs-bg-desktop":
          "url(/home/mokalbari/coding/frontend-mentor/coffee-roaster/src/assets/about/desktop/bg-quality.png)",
        "plan-bg-mobile":
          "url(/home/mokalbari/coding/frontend-mentor/coffee-roaster/src/assets/plan/mobile/image-hero-blackcup.jpg)",
        "plan-bg-tablet":
          "url(/home/mokalbari/coding/frontend-mentor/coffee-roaster/src/assets/plan/tablet/image-hero-blackcup.jpg)",
        "plan-bg-desktop":
          "url(/home/mokalbari/coding/frontend-mentor/coffee-roaster/src/assets/plan/desktop/image-hero-blackcup.jpg)",
      },
      maxWidth: {
        "4/5": "80%",
        half: "50%",
      },
    },
  },
  plugins: [],
}
