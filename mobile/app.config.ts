/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair, camelcase */
import { type ExpoConfig } from 'expo/config';

import npmConfig from './package.json' with { type: 'json' };

export default {
  name: 'Proffy',
  slug: 'proffy',
  scheme: 'proffy',
  version: npmConfig.version,
  owner: 'juliolmuller',
  orientation: 'portrait',
  icon: './src/assets/icons/favicon.png',
  userInterfaceStyle: 'light',
  assetBundlePatterns: ['**/*'],
  plugins: [
    'expo-font',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#9871F5',
        image: './src/assets/img/splash.png',
        resizeMode: 'cover',
        enableFullScreenImage_legacy: true,
      },
    ],
    [
      'expo-build-properties',
      {
        android: {
          usesCleartextTraffic: true,
        },
      },
    ],
  ],
  extra: {
    eas: {
      projectId: '0b3c46ed-4e75-4294-a66c-3c9320d05e4a',
    },
  },
  android: {
    package: 'com.juliolmuller.proffy',
    adaptiveIcon: {
      foregroundImage: './src/assets/icons/favicon.png',
      backgroundColor: '#ffffff',
    },
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.juliolmuller.proffy',
  },
  web: {
    favicon: './src/assets/icons/favicon.png',
  },
} satisfies ExpoConfig;
