import React, { useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import landingImage from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import http from '../../services/http'

const Landing = () => {
  const { navigate } = useNavigation()
  const [totalConnections, totalConnectionsSetter] = useState(0)

  useEffect(() => {
    http.get('/connections')
      .then(({ data: { total } }) => {
        totalConnectionsSetter(total)
      })
  }, [])

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
        <RectButton onPress={() => navigate('Study')} style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton onPress={() => navigate('TeacherForm')} style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Lecionar</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}

export default Landing
