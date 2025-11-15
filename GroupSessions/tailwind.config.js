/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "variable-collection-colorpriamry":
          "var(--variable-collection-colorpriamry)",
        "variable-collection-coloryellow":
          "var(--variable-collection-coloryellow)",
      },
      fontFamily: {
        "16-medium": "var(--16-medium-font-family)",
      },
    },
  },
  plugins: [],
};
