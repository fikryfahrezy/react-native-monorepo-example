import { defineConfig, globalIgnores } from "eslint/config";
import {jsConfig, prettierConfig, tsConfig} from '@acme/eslint-config';

export default defineConfig([
  globalIgnores(["dist/**", "node_modules/**"]),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [jsConfig],
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [tsConfig],
  },
  prettierConfig,
]);
