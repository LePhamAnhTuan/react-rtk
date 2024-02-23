/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#5e00ff",

          "secondary": "#9ca3af",

          "accent": "#3700ff",

          "neutral": "#001628",

          "base": "white",

          "info": "#0097e1",

          "success": "#22c55e",

          "warning": "#ff3700",

          "error": "#ff0e4a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

