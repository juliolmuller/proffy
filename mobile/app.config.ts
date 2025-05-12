import dotenv from 'dotenv-flow';
import { ExpoConfig } from 'expo/config';
import npmConfig from './package.json';

const envVars = dotenv.config({ purge_dotenv: true });

if (envVars.error) {
  throw envVars.error;
}

const config: ExpoConfig = {
  name: 'Proffy',
  slug: 'proffy',
  scheme: 'proffy',
  version: npmConfig.version,
  owner: 'juliolmuller',
  orientation: 'portrait',
  icon: './src/assets/icons/favicon.png',
  userInterfaceStyle: 'light',
  splash: {
    backgroundColor: '#9871F5',
    image: './src/assets/img/splash.png',
    resizeMode: 'cover',
  },
  assetBundlePatterns: ['**/*'],
  plugins: [
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
    ...envVars.parsed,
  },
  android: {
    package: 'com.juliolmuller.proffy',
    adaptiveIcon: {
      foregroundImage: './src/assets/adaptive-icon.png',
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
};

export default config;
