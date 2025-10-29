import { defineConfig } from "eslint/config";
import acmeConfig from '@acme/eslint-config';

export default defineConfig([
  {
    extends: [acmeConfig],
  }
]);
