import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import astroPlugin from "eslint-plugin-astro";
import solidPlugin from "eslint-plugin-solid/configs/typescript";
import * as tsParser from "@typescript-eslint/parser";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ["node_modules", "dist", ".astro"] },
  { files: ["**/*.{js,mjs,cjs,ts,astro}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...astroPlugin.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    ...solidPlugin,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { args: "none" }],
    }
  }
];