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
      },
    },
  },
  plugins: [],
};
