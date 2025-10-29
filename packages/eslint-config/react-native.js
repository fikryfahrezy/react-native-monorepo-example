import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactNativePlugin from "eslint-plugin-react-native";
import acmeConfig from './index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
  {
    extends: compat.extends("@react-native"),
  },
  {
    extends: [acmeConfig],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        React: "readonly",
      }
    },
    plugins: {
      "react": reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-native": reactNativePlugin,
    },
    rules: {
      "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      // Disabled due to ESLint 9 compatibility issues
      // "react-native/no-unused-styles": "error",
      // "react-native/split-platform-components": "error",
      "react-native/no-inline-styles": "off",
      "react-native/no-color-literals": "off",
      "react-native/no-raw-text": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": ["error", { "additionalHooks": "(useMemoOne)" }],
    },
    settings: {
      "react": {
        "version": "detect"
      }
    }
  }
]