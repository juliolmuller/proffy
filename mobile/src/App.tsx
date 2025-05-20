import {
  Archivo_400Regular as Archivo400,
  Archivo_700Bold as Archivo700,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular as Poppins400,
  Poppins_600SemiBold as Poppins600,
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigation } from './navigation';

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export function App() {
  const [isAppReady] = useFonts({
    Archivo400,
    Archivo700,
    Poppins400,
    Poppins600,
  });

  const handleLayoutView = useCallback(() => {
    if (isAppReady) {
      SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={handleLayoutView}>
      <RootNavigation />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
