import React from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles'
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

interface TeacherCardProps {}

const TeacherCard: React.FC<TeacherCardProps> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: 'https://github.com/juliolmuller.png' }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Julio L. Muller</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. {'\n\n'} */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>

      <View style={styles.cardFooter}>
        <Text style={styles.price}>
          Valor da hora/aula: {'   '}
          <Text style={styles.priceValue}>R$ 80,00</Text>
        </Text>

        <View style={styles.buttonGroup}>
          <RectButton style={styles.favoriteButton}>
            <Image source={heartOutlineIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.buttonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherCard
