// /** @type {import('tailwindcss').Config} */
// module.exports = {
// content: ["./src/**/*.{html,js}"],
// theme: {
//     extend: {}
// },
// plugins: []
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "app.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brightBlue: "hsl(220, 98%, 61%)",
        checkBackgroundLG: "hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        // LightTheme
        vLightGray: "hsl(0, 0%, 98%)",
        vLightGrayBlue: "hsl(236, 33%, 92%)",
        lightGrayBlue: "hsl(233, 11%, 84%)",
        darkGrayBlue: "hsl(236, 9%, 61%)",
        vDarkGrayBlue: "hsl(235, 19%, 35%)",

        // Dark Theme
        vDarkBlue: "hsl(235, 21%, 11%)",
        vDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        lightGrayBlue: "hsl(234, 39%, 85%)",
        //  (hover)
        lightGrayBlue: "hsl(236, 33%, 92%)",
        darkGrayBlue: "hsl(234, 11%, 52%)",
        vDarkGrayBlue: "hsl(233, 14%, 35%)",
        vDarkGrayBlue: "hsl(237, 14%, 26%)",
      },

      fontFamily: {
        JosefinSans: ["josefinSans"],
        // Ubuntu: ["ubuntu"],
      },
    },
  },
  plugins: [],
};
