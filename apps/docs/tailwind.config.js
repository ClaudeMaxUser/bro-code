module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        "bro": {
          900: "#1e293b",
          700: "#2563eb",
          500: "#3b82f6",
          400: "#60a5fa",
          300: "#64748b",
        },
        "background": "#121121",
        "editorBackground": "#333",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
