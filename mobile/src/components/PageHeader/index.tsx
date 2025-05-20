import { useNavigation } from '@react-navigation/native';
import { ReactNode } from 'react';
import { Image, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import backIcon from '~/assets/icons/back.png';
import logoImage from '~/assets/img/logo.png';
import styles from './styles';

interface PageHeaderProps {
  headerRight?: ReactNode;
  children?: ReactNode;
  title: string;
}

export function PageHeader({ title, headerRight, children }: PageHeaderProps) {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={() => navigate('Landing')}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImage} resizeMode="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>

      {children}
    </View>
  );
}
