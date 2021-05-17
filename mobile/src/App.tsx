import React from 'react'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import {
  Archivo_400Regular as Archivo400,
  Archivo_700Bold as Archivo700,
} from '@expo-google-fonts/archivo'
import {
  Poppins_400Regular as Poppins400,
  Poppins_600SemiBold as Poppins600,
} from '@expo-google-fonts/poppins'
import RootNavigation from './navigation/AppStack'

function App() {
  const [fontsLoaded] = useFonts({ Archivo400, Archivo700, Poppins400, Poppins600 })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <RootNavigation />
      <StatusBar style="light" />
    </>
  )
}

export default App
