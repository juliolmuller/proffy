import React, { ReactNode } from 'react'
import { View, Text, Image } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import backIcon from '../../assets/images/icons/back.png'
import logoImage from '../../assets/images/logo.png'

interface PageHeaderProps {
  title: string
  headerRight?: ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={() => navigate('Landing')}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImage} resizeMode="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
        {props.headerRight}
      </View>

      {props.children}
    </View>
  )
}

export default PageHeader
