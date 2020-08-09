import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherCard from '../../components/TeacherCard'

const TeachersList = () => {
  const [isFiltering, isFilteringSetter] = useState(true)

  function handleFilter() {
  }

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
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputGrow}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Que horas?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton onPress={handleFilter} style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Buscar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

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
}

export default TeachersList
