import nextPlugin from '@next/eslint-plugin-next';
import anyConfig from 'eslint-config-any';
import { defineConfig } from 'eslint/config';

const serverFilePatterns = ['server.cjs'];
const baseFilesPatterns = ['**/*.{js,ts,tsx}'];

export default defineConfig([
  ...anyConfig.react,
  ...[...anyConfig.node, ...anyConfig.commonjs].map((config) => ({
    ...config,
    files: serverFilePatterns,
  })),
  {
    ...nextPlugin.configs['core-web-vitals'],
    files: baseFilesPatterns,
  },
  {
    rules: {
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      camelcase: [
        'error',
        {
          allow: ['user_id'],
        },
      ],
    },
  },
]);
