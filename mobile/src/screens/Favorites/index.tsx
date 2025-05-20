import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { PageHeader } from '~/components';
import { TeacherCard } from '~/components';
import styles from './styles';

export function FavoritesScreen() {
  const [favoritesString, setFavoritesString] = useState('[]');
  const favorites: Teacher[] = JSON.parse(favoritesString);

  async function restoreStorage() {
    const storage = await AsyncStorage.getItem('favorites');
    storage && setFavoritesString(storage);
  }

  useFocusEffect(() => {
    restoreStorage();
  });

  return (
    <ScrollView style={styles.screenWrapper}>
      <PageHeader title="Meus proffys favoritos" />

      <View style={styles.teachersDeck}>
        {favorites.map((teacher: Teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} favorite />
        ))}
      </View>
    </ScrollView>
  );
}
