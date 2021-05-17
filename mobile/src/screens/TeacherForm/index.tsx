import React from 'react'
import { ImageBackground, Linking, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import giveClassesBackground from '@/images/give-classes-background.png'
import styles from './styles'

function TeacherForm() {
  return (
    <View style={styles.screenWrapper}>
      <ImageBackground
        source={giveClassesBackground}
        style={styles.content}
        resizeMode="contain"
      >
        <Text style={styles.headline}>
          Quer ser um Proffy?
        </Text>
        <Text style={styles.description}>
          Para começar a dar aulas, você precisa se cadastrá-las em nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={() => Linking.openURL('https://proffy-app-nlw.herokuapp.com')} style={styles.okButton}>
        <Text style={styles.okButtonText}>Leve-me até lá!</Text>
      </RectButton>
    </View>
  )
}

export default TeacherForm
