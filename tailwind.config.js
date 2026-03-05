
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { brand: {50:"#f0f7ef",100:"#dcedda",200:"#b8dab3",300:"#8fc586",400:"#5a9f4e",500:"#2B651D",600:"#255419",700:"#1e4315",800:"#173211",900:"#10210c"}}}},
  plugins: [],
}
