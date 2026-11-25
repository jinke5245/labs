import { defineConfig, includeIgnoreFile } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import ts from "typescript-eslint";
import shell from "@eslint/shell";
import json from "@eslint/json";
import yaml from "eslint-plugin-yml";
import toml from "eslint-plugin-toml";
import markdown from "@eslint/markdown";
import prettier from "eslint-config-prettier";
import jsonschema from "eslint-plugin-json-schema-validator";

export default defineConfig([
  includeIgnoreFile(`${import.meta.dirname}/.gitignore`),
  {
    ignores: [
      ".agents/",
      "*-lock.*",
      "*.lock",
      "CHANGELOG.md",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: [
      "js/recommended",
      ts.configs.recommended,
    ],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["**/*.json"],
    plugins: { json, jsonschema },
    language: "json/json",
    extends: [
      "json/recommended",
      "jsonschema/recommended",
    ],
  },
  {
    files: ["**/*.jsonc"],
    plugins: { json, jsonschema },
    language: "json/jsonc",
    extends: [
      "json/recommended",
      "jsonschema/recommended",
    ],
  },
  {
    files: ["**/*.json5"],
    plugins: { json, jsonschema },
    language: "json/json5",
    extends: [
      "json/recommended",
      "jsonschema/recommended",
    ],
  },
  {
    files: ["**/*.y?(a)ml"],
    plugins: { yaml, jsonschema },
    language: "yaml/yaml",
    extends: [
      "yaml/recommended",
      "jsonschema/recommended",
    ],
  },
  {
    files: ["**/*.toml"],
    plugins: { toml, jsonschema },
    language: "toml/toml",
    extends: [
      "toml/recommended",
      "jsonschema/recommended",
    ],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
  {
    files: [
      "**/*.sh",
      "**/*.bash",
    ],
    plugins: { shell },
    language: "shell/bash",
    extends: ["shell/recommended"],
  },
  prettier,
]);
