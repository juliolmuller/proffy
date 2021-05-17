import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import landingImage from '@/images/landing.png'
import studyIcon from '@/images/icons/study.png'
import heartIcon from '@/images/icons/heart.png'
import giveClassesIcon from '@/images/icons/give-classes.png'
import http from '@/services/http'
import styles from './styles'

function Landing() {
  const { navigate } = useNavigation()
  const [connectionsCount, setConnectionsCount] = useState(0)

  useEffect(() => {
    http
      .get('/connections')
      .then(({ data }) => setConnectionsCount(data.total))
  }, [])

  return (
    <View style={styles.screenWrapper}>
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
        Total de {connectionsCount} conexões já realizadas {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}

export default Landing
