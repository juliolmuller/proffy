import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherCard from '../../components/TeacherCard'
import http from '../../services/http'

const TeachersList = () => {
  const [isFiltering, isFilteringSetter] = useState(true)
  const [subject, subjectSetter] = useState('')
  const [weekday, weekdaySetter] = useState('')
  const [time, timeSetter] = useState('')
  const [teachersList, teachersListSetter] = useState([])

  useEffect(() => {
    if (subject && weekday && time) {
      http.get('/classes', { params: { subject, weekday, time } })
        .then(({ data }) => { teachersListSetter(data); data.length && isFilteringSetter(false) })
        .catch(() => teachersListSetter([]))
    }
  }, [subject, weekday, time])

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={() => isFilteringSetter(!isFiltering)}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        )}
      >
        { isFiltering && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
              onChangeText={subjectSetter}
              value={subject}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputGrow}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                  onChangeText={weekdaySetter}
                  value={weekday}
              />
              </View>

              <View>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Que horas?"
                  placeholderTextColor="#c1bccc"
                  onChangeText={timeSetter}
                  value={time}
                />
              </View>
            </View>
          </View>
        )}
      </PageHeader>

      <ScrollView style={styles.teachersDeck} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}>
        {teachersList.map((teacher: any) => <TeacherCard key={teacher.id} />)}
      </ScrollView>
    </View>
  )
}

export default TeachersList
