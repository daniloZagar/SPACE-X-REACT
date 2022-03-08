const { readBuilderProgram } = require("typescript");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#494f52",
      },
    },
  },
  plugins: [],
};
