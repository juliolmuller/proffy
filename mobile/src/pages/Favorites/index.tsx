import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherCard, { Teacher } from '../../components/TeacherCard'

const Favorites = () => {
  const [favorites, favoritesSetter] = useState<Teacher[]>([])

  useFocusEffect(() => {
    AsyncStorage.getItem('favorites').then((storage) => {
      storage && favoritesSetter(JSON.parse(storage))
    })
  })

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teachersDeck}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        {favorites.map((teacher: Teacher) => <TeacherCard key={teacher.id} teacher={teacher} favorite={true} />)}
      </ScrollView>
    </View>
  )
}

export default Favorites
