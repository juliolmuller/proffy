import dotenv from 'dotenv-flow'
import npmConfig from './package.json'

const config = dotenv.config({ purge_dotenv: true })

if (config.error) {
  throw config.error
}

export default {
  expo: {
    name: 'Proffy',
    version: npmConfig.version,
    extra: {
      ...config.parsed,
    },
    orientation: 'portrait',
    platforms: ['android', 'ios'],
    icon: './src/assets/icons/favicon.png',
    splash: {
      backgroundColor: '#9871F5',
      image: './src/assets/img/splash.png',
      resizeMode: 'cover',
    },
    assetBundlePatterns: [
      '**/*',
    ],
    updates: {
      fallbackToCacheTimeout: 0,
    },
    android: {
      package: 'juliolmuller.proffy',
      versionCode: 2,
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'juliolmuller.proffy',
      buildNumber: '1.0.0',
    },
    web: {
      favicon: './src/assets/icons/favicon.png',
    },
  },
}
