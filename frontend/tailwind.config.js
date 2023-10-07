/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        yelplight: {
          primary: "#EB5524",

          secondary: "#120b13",

          accent: "#9a3412",

          neutral: "#2a323c",

          "base-100": "#1d232a",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",

          "background-color": "#fff",
          color: "black",
        },
        yelpdark: {
          "background-color": "#120b13",
          color: "#ffff",
        },
      },
    ],
    logs: false,
    base: false,
  },
};
