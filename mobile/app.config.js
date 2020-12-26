import dotenv from 'dotenv-flow'

const config = dotenv.config({ purge_dotenv: true })

if (config.error) {
  throw config.error
}

export default {
  expo: {
    name: 'Proffy',
    version: '1.0.2',
    orientation: 'portrait',
    icon: './src/images/favicon.png',
    splash: {
      backgroundColor: '#9871F5',
      image: './src/images/splash.png',
      resizeMode: 'cover',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: [
      '**/*',
    ],
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: './src/images/favicon.png',
    },
    extra: { ...process.env },
  },
}
