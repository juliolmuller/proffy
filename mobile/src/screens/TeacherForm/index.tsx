import { ImageBackground, Linking, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import giveClassesBackground from '~/assets/img/give-classes-background.png'
import styles from './styles'

export function TeacherFormScreen() {
  return (
    <View style={styles.screenWrapper}>
      <ImageBackground
        source={giveClassesBackground}
        style={styles.content}
        resizeMode="contain"
      >
        <Text style={styles.headline}>
          Quer ser um Proffy?
        </Text>
        <Text style={styles.description}>
          Para começar a dar aulas, você precisa se cadastrá-las em nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={() => Linking.openURL('https://jlm-proffy.vercel.app/')} style={styles.okButton}>
        <Text style={styles.okButtonText}>Leve-me até lá!</Text>
      </RectButton>
    </View>
  )
}
