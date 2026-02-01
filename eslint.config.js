import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

// parsers
const tsParser = tseslint.parser;
const astroParser = astro.parser;

export default defineConfig([
  // Global configuration
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  tseslint.configs.recommended,

  {
    plugins: {
      eslintConfigPrettier,
    },
  },

  astro.configs.recommended,
  astro.configs["jsx-a11y-recommended"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
        sourceType: "module",
        ecmaVersion: "latest",
        project: "./tsconfig.json",
      },
    },
  },

  // Ignore patterns
  {
    ignores: ["dist/**", "**/*.d.ts", ".github/"],
  },
]);
