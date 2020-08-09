import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherCard from '../../components/TeacherCard'

const Favorites = () => (
  <View style={styles.container}>
    <PageHeader title="Meus proffys favoritos" />

    <ScrollView
      style={styles.teachersDeck}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 24,
      }}
    >
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
    </ScrollView>
  </View>
)

export default Favorites
