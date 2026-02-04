/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        navopen: {
          '0%': { top: '-100%' },
          '100%': { top: '0%' },
        },
        spinR: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spinL: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },

      },
      animation: {
        navopen: 'navopen 1s ease-in-out',
        spinR: 'spinR 10s linear infinite',
        spinL: 'spinL 10s linear infinite',
      },
    },
  },
  plugins: [],
}
