/** @type {import('tailwindcss').Config} */
module.exports = {
  important : true ,
  content: [
    "./src/components/**/*.{js,html,jsx}",
    "./src/pages/**/*.{js,html,jsx}",
    "./src/**/*.{js,jsx,ts,tsx}", // Include JavaScript and TypeScript files
    "./public/index.html",      // Include HTML files
  ],
  plugins: [],
}