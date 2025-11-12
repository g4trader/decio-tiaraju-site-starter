
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { brand: {50:"#f2f7ff",100:"#e6efff",200:"#bfd8ff",300:"#99c1ff",400:"#4d93ff",500:"#0066ff",600:"#005ce6",700:"#0047b3",800:"#003380",900:"#001f4d"}}}},
  plugins: [],
}
