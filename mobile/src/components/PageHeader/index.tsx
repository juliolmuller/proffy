import React, { ReactNode } from 'react'
import { Image, Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import backIcon from '../../images/icons/back.png'
import logoImage from '../../images/logo.png'
import styles from './styles'

interface PageHeaderProps {
  headerRight?: ReactNode
  children?: ReactNode
  title: string
}

function PageHeader({ title, headerRight, children }: PageHeaderProps) {
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
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>

      {children}
    </View>
  )
}

export default PageHeader
