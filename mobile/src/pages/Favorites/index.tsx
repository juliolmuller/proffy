import React, { FC, useState } from 'react'
import { View, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import PageHeader from '../../components/PageHeader'
import TeacherCard, { Teacher } from '../../components/TeacherCard'
import styles from './styles'

const Favorites: FC = () => {
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
        {favorites.map((teacher: Teacher) => {
          console.log(teacher)
          return (
          <TeacherCard key={teacher.id} teacher={teacher} favorite={true} />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Favorites
