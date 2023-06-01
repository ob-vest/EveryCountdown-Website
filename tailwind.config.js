/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#B9B9B9",
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      underline: {
        '0%, 100%': { transform: 'scaleX(0)' },
        '50%': { transform: 'scaleX(1)' },
      }
    },
    animation: {
      wiggle: 'wiggle 0.5s ease-in-out',
      underline: 'underline 0.5s ease-in-out',
    }
    
  },
},
  plugins: [],
}

