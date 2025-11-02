import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import jestPlugin from "eslint-plugin-jest";
import prettierPlugin from "eslint-plugin-prettier";
import eslintPrettierConfig from "eslint-config-prettier";

export const prettierConfig = eslintPrettierConfig;

/** @type {import("eslint").Linter.Config } */
export const jsConfig = {
  languageOptions: {
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      JSX: "readonly",
    },
  },
  plugins: {
    import: importPlugin,
    jest: jestPlugin,
    prettier: prettierPlugin,
  },
  rules: {
    "max-len": ["error", 120],
    "import/no-extraneous-dependencies": "error",
    "import/extensions": ["error", "never", { svg: "always", json: "always" }],
    "import/order": ["error", { "newlines-between": "always" }],
    "import/no-duplicates": "error",
    "import/no-useless-path-segments": "error",
    "import/no-cycle": ["error", { ignoreExternal: true }],
    "import/prefer-default-export": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/no-unused-modules": "off",
    "import/no-deprecated": "off",
    "import/no-anonymous-default-export": "error",
    "import/no-default-export": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
    camelcase: "error",
    "prefer-destructuring": "error",
    "no-nested-ternary": "error",
    "comma-dangle": "off",
    "no-shadow": "off",
    curly: "error",
    "prettier/prettier": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};

/** @type {import("eslint").Linter.Config } */
export const tsConfig = {
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      project: true,
    },
  },
  plugins: {
    "@typescript-eslint": typescriptPlugin,
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-shadow": ["error"],
  },
};
