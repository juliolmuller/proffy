import React from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import landingImage from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

const Landing = () => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <Image source={landingImage} style={styles.banner} />

      <Text style={styles.greetings}>
        Seja bem vind@! {'\n'}
        <Text style={styles.greetingsPrompt}>
          o que deseja fazer?
        </Text>
      </Text>

      <View style={styles.buttonsGroup}>
        <RectButton onPress={() => navigate('TeachersLIst')} style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton onPress={() => navigate('TeacherForm')} style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Lecionar</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de 237 conexões já realizadas {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}

export default Landing
