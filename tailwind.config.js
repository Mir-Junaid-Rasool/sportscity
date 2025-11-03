// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      borderColor: {
        border: "hsl(var(--border) / <alpha-value>)", // This is crucial!
      },
      // Optionally:
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        // ...add other variables here
      }
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",  // make sure your file paths are covered
  ],
};
