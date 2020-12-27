import React, { FC, useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Feather } from '@expo/vector-icons'
import PageHeader from '../../components/PageHeader'
import TeacherCard, { Teacher } from '../../components/TeacherCard'
import http from '../../services/http'
import formData from './form-data'
import styles from './styles'

const TeachersList: FC = () => {
  const [isFiltering, setFiltering] = useState(true)
  const [subject, setSubject] = useState('')
  const [weekday, setWeekday] = useState('')
  const [time, setTime] = useState('')
  const [teachersList, setTeachersList] = useState([])
  const [favorites, setFavorites] = useState<Teacher[]>([])

  const isFavorite = (teacher: Teacher) => {
    return !!favorites.find((favorite) => favorite.id === teacher.id)
  }

  const handleFilers = async () => {
    try {
      const params = { subject, weekday, time }
      const [response, storage] = await Promise.all([
        http.get('/classes', { params }),
        AsyncStorage.getItem('favorites'),
      ])

      storage && setFavorites(JSON.parse(storage))
      response.data.length && setFiltering(false)
      setTeachersList(response.data)
    } catch {
      setTeachersList([])
    }
  }

  useEffect(() => {
    if (subject && weekday && time) {
      handleFilers()
    }
  }, [subject, weekday, time])

  return (
    <ScrollView style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={() => setFiltering(!isFiltering)}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        )}
      >
        { isFiltering && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria:</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={subject}
                onValueChange={(value) => setSubject(value.toString())}
              >
                <Picker.Item label="Selecione..." value="" color="#c1bccc" />
                {formData.subjects.map((subjectItem, index) => (
                  <Picker.Item
                    key={index}
                    label={subjectItem.label}
                    value={subjectItem.value}
                  />
                ))}
              </Picker>
            </View>

            <Text style={styles.label}>Dia da Semana:</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={weekday}
                onValueChange={(value) => setWeekday(value.toString())}
              >
                <Picker.Item label="Selecione..." value="" color="#c1bccc" />
                {formData.weekdays.map((weekdayItem, index) => (
                  <Picker.Item
                    key={index}
                    label={weekdayItem.label}
                    value={weekdayItem.value}
                  />
                ))}
              </Picker>
            </View>

            <Text style={styles.label}>Horário:</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={time}
                onValueChange={(value) => setTime(value.toString())}
              >
                <Picker.Item label="Selecione..." value="" color="#c1bccc" />
                {formData.times.map((timeItem, index) => (
                  <Picker.Item
                    key={index}
                    label={timeItem.label}
                    value={timeItem.value}
                  />
                ))}
              </Picker>
            </View>
          </View>
        )}
      </PageHeader>

      <View style={styles.teachersDeck}>
        {teachersList.map((teacher: Teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} favorite={isFavorite(teacher)} />
        ))}
      </View>
    </ScrollView>
  )
}

export default TeachersList
