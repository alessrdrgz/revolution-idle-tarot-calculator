/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  useTabs: true,
  semi: true,
  singleQuote: true,
  trailingComma: "none",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: ["**/*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
};
