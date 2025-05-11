import nextPlugin from '@next/eslint-plugin-next';
import anyConfig from 'eslint-config-any';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...anyConfig.react,
  {
    ...nextPlugin.flatConfig.coreWebVitals,
    files: ['**/*.{js,ts,tsx}'],
  },
  {
    rules: {
      '@next/next/no-img-element': 'off',
      camelcase: [
        'error',
        {
          allow: ['user_id'],
        },
      ],
    },
  },
]);
