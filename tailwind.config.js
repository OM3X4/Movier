/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      'h-42' , "w-[25rem]" , "h-32" , "w-[8rem]" , "h-52" , "w-[30rem]" , "h-[11rem]" , "w-[11rem]"
    ],
    theme: {
      extend: {
        colors:{
          primary : "#1c1e31",
          secondry : "#282b45",
          purple : "#9747ff",
          dark_background : "#0b0c17",
          search: "#27293c",
          navbar: "#181a2b",
          imdb: "#c19d0a",
        }
      },
    },
    plugins: [],
  }

