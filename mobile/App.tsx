import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const App = () =>(
  <View style={styles.container}>
    <Text>Hello, there! 😵</Text>
    <StatusBar style="auto" />
  </View>
)

export default App
