/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Poppins",
    },

    extend: {
      colors: {
        black: "#000000",
        blue: "#6590FF",
        red: "#E33E38",
        purple: "#8344DB",
        badgeBackground: "#8344DB1A",
        grayText: "#646464",
        bodyBackground: "#EEF2F7",
        inputBackground: "#F8F9FB",
      },

      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
