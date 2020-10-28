import React, { FC, ReactNode } from 'react'
import { Image, Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import backIcon from '../../images/icons/back.png'
import logoImage from '../../images/logo.png'
import styles from './styles'

interface PageHeaderProps {
  title: string
  headerRight?: ReactNode
}

const PageHeader: FC<PageHeaderProps> = (props) => {
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
