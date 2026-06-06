import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { PageHeader, TeacherCard } from '~/components';
import http from '~/services/http';

import formData from './form-data';
import styles from './styles';

interface Filters {
  subject: string;
  time: string;
  weekday: string;
}

export function TeachersListScreen() {
  const [isFiltering, setFiltering] = useState(true);
  const [subject, setSubject] = useState('');
  const [weekday, setWeekday] = useState('');
  const [time, setTime] = useState('');
  const [teachersList, setTeachersList] = useState([]);
  const [favorites, setFavorites] = useState<Teacher[]>([]);

  function isFavorite(teacher: Teacher) {
    return !!favorites.find((favorite) => favorite.id === teacher.id);
  }

  async function fetchTeachers(filters: Filters) {
    try {
      const [response, storage] = await Promise.all([
        http.get('/classes', { params: filters }),
        AsyncStorage.getItem('favorites'),
      ]);

      if (storage) {
        setFavorites(JSON.parse(storage));
      }
      if (response.data.length) {
        setFiltering(false);
      }

      setTeachersList(response.data);
    } catch {
      setTeachersList([]);
    }
  }

  function handleFilterChange(field: keyof Filters, value: string) {
    const nextFilters = {
      subject,
      weekday,
      time,
      [field]: value,
    };

    if (field === 'subject') setSubject(value);
    if (field === 'weekday') setWeekday(value);
    if (field === 'time') setTime(value);

    if (nextFilters.subject && nextFilters.weekday && nextFilters.time) {
      void fetchTeachers(nextFilters);
    }
  }

  return (
    <ScrollView style={styles.screenWrapper}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={() => setFiltering(!isFiltering)}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltering && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria:</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={subject}
                onValueChange={(value) => handleFilterChange('subject', value.toString())}
              >
                <Picker.Item label="Selecione..." value="" color="#c1bccc" />
                {formData.subjects.map((subjectItem, index) => (
                  <Picker.Item key={index} label={subjectItem.label} value={subjectItem.value} />
                ))}
              </Picker>
            </View>

            <Text style={styles.label}>Dia da Semana:</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={weekday}
                onValueChange={(value) => handleFilterChange('weekday', value.toString())}
              >
                <Picker.Item label="Selecione..." value="" color="#c1bccc" />
                {formData.weekdays.map((weekdayItem, index) => (
                  <Picker.Item key={index} label={weekdayItem.label} value={weekdayItem.value} />
                ))}
              </Picker>
            </View>

            <Text style={styles.label}>Horário:</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={time}
                onValueChange={(value) => handleFilterChange('time', value.toString())}
              >
                <Picker.Item label="Selecione..." value="" color="#c1bccc" />
                {formData.times.map((timeItem, index) => (
                  <Picker.Item key={index} label={timeItem.label} value={timeItem.value} />
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
  );
}
