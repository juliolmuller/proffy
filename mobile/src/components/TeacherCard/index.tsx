import React, { useState } from 'react'
import { Linking, Image, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import http from '@/services/http'
import heartOutlineIcon from '@/assets/icons/heart-outline.png'
import unfavoriteIcon from '@/assets/icons/unfavorite.png'
import whatsappIcon from '@/assets/icons/whatsapp.png'
import styles from './styles'

interface TeacherCardProps {
  teacher: Teacher
  favorite: boolean
}

function TeacherCard({ teacher, favorite }: TeacherCardProps) {
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
