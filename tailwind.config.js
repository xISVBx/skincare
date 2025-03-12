/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4AACB",
        secondary: "#EA7A05",
        background: "#A4B2FA"
      },
    },
  },
  plugins: [],
}

