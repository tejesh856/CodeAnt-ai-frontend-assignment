/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-blue": "0px 0px 24px 0px rgba(8, 23, 53, 0.16)",
      },
      screens: {
        "max-880": { max: "880px" }, // Add a custom max-width breakpoint
        "min-880": { min: "880px" }, // Add a custom max-width breakpoint
        "max-500": { max: "500px" }, // Custom min-width breakpoint
      },
    },
  },
  plugins: [],
};
