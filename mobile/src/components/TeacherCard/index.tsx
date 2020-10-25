import React, { useState } from 'react'
import { View, Image, Text, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'
import styles from './styles'
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import http from '../../services/http'

export interface Teacher {
  id: number
  name: string
  avatar: string
  bio: string
  whatsapp: string
  subject: string
  price: number
}

interface TeacherCardProps {
  teacher: Teacher
  favorite: boolean
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher, favorite }) => {
  const [favoriteState, favoriteStateSetter] = useState(favorite)

  function handleLinkToWhatsApp() {
    http.post('/connections', { user: teacher.id })
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }

  async function handleToggleFavorite() {
    const storage = await AsyncStorage.getItem('favorites') || '[]'
    const favorites: Teacher[] = JSON.parse(storage)

    if (favoriteState) {
      const index = favorites.findIndex((item: Teacher) => item.id === teacher.id)

      favorites.splice(index, 1)
      favoriteStateSetter(false)
    } else {
      favorites.push(teacher)
      favoriteStateSetter(true)
    }

    AsyncStorage.setItem('favorites', JSON.stringify(favorites))
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: teacher.avatar }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        {teacher.bio.replace('\n', '\n\n')}
      </Text>

      <View style={styles.cardFooter}>
        <Text style={styles.price}>
          Valor da hora/aula: {'   '}
          <Text style={styles.priceValue}>R$ {teacher.price.toFixed(2)}</Text>
        </Text>

        <View style={styles.buttonGroup}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[styles.favoriteButton, favoriteState ? styles.favoriteButtonSelected : {}]}
          >
            {favoriteState ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </RectButton>

          <RectButton onPress={handleLinkToWhatsApp} style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.buttonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherCard