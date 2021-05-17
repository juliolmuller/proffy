import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import PageHeader from '../../components/PageHeader'
import TeacherCard from '../../components/TeacherCard'
import styles from './styles'

function Favorites() {
  const [favoritesString, setFavoritesString] = useState('[]')
  const favorites: Teacher[] = JSON.parse(favoritesString)

  async function restoreStorage() {
    const storage = await AsyncStorage.getItem('favorites')
    storage && setFavoritesString(storage)
  }

  useFocusEffect(() => {
    restoreStorage()
  })

  return (
    <ScrollView style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <View style={styles.teachersDeck}>
        {favorites.map((teacher: Teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} favorite />
        ))}
      </View>
    </ScrollView>
  )
}

export default Favorites
