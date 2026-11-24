const c = (v) => `rgb(var(${v}) / <alpha-value>)`;
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./content/**/*.js"],
  theme: {
    extend: {
      colors: { bg: c("--bg"), surface: c("--surface"), ink: c("--ink"), muted: c("--muted"), line: c("--line"), accent: c("--accent") },
      fontFamily: {
        display: ["'Bricolage Grotesque Variable'", "system-ui", "sans-serif"],
        sans: ["'Instrument Sans Variable'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
