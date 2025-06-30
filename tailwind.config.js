/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  "./*.php",                // watches index.php, about.php, etc.
  "./components/**/*.php", // watches any PHP inside folders
  "./style/input.css"       // only input.css is needed for Tailwind
],
  theme: {
    extend: {},
  },
  plugins: [],
}

