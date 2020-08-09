import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherCard from '../../components/TeacherCard'

const TeachersList = () => (
  <View style={styles.container}>
    <PageHeader title="Proffys disponíveis" />

    <ScrollView>
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
    </ScrollView>
  </View>
)

export default TeachersList
