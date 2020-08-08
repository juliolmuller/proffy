import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  greetings: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 50,
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    lineHeight: 34,
    textAlign: 'center',
  },

  greetingsPrompt: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsGroup: {
    flexGrow: 1,
    flexDirection: 'row',
    // marginTop: 40,
    justifyContent: 'space-between',
  },

  button: {
    height: 150,
    flexBasis: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  buttonPrimary: {
    backgroundColor: '#9871f5',
  },

  buttonSecondary: {
    backgroundColor: '#04d361',
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 18,
  },

  totalConnections: {
    alignSelf: 'center',
    maxWidth: 210,
    marginTop: 20,
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 20,
  },
})
