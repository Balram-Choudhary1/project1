/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}","./index.{js,jsx,ts,tsx}","./src/**/*.{js,jsx,ts,tsx}" ,"./screens/**/*.{js,jsx,ts,tsx}", "./navigation/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors :{
        redprimary : "#f75348",
      },
    },
  },
  plugins: [],
}

