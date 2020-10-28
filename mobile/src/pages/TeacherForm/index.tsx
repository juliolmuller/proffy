import React, { FC } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import giveClassesBackground from '../../images/give-classes-background.png'
import styles from './styles'

const TeacherForm: FC = () => {
  const { goBack } = useNavigation()

  return (
    <View style={styles.container}>
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

      <RectButton onPress={goBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Entendi</Text>
      </RectButton>
    </View>
  )
}

export default TeacherForm
