/** @type {import('tailwindcss').Config} */

// This code configures our Tailwind theme

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#DFCC59",
        grey: "EDEDED",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgb(0,0,0,0,.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person1.png')",
        person2: "url('./assets/person2.png')",
        person3: "url('./assets/person3.png')"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};


// content is the content that Tailwind will scan for classes
// mode: this is the option for Just in time JIT mode
// theme: this is where we can extend our theme
// extend: this is where we can add new colors, fonts, etc.
// screens: this is where we can add new breakpoints for our media queries
// plugins: this is where we can add new plugins to our Tailwind installation