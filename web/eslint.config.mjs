import nextPlugin from '@next/eslint-plugin-next';
import anyConfig from 'eslint-config-any';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...anyConfig.react,
  {
    ...nextPlugin.flatConfig.coreWebVitals,
    files: ['**/*.{js,jsx,ts,tsx}'],
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
