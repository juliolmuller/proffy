import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  screenWrapper: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#8257e5',
    padding: 40,
  },

  banner: {
    flex: 1,

    width: '100%',
    marginTop: 30,

    resizeMode: 'contain',
  },

  greetings: {
    marginTop: 30,
    marginBottom: 20,

    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Poppins400',
    fontSize: 18,
    lineHeight: 36,
  },

  greetingsPrompt: {
    fontFamily: 'Poppins600',
  },

  buttonsGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginVertical: 40,
  },

  button: {
    flexBasis: '48%',
    alignItems: 'center',
    justifyContent: 'space-around',

    height: 150,
    borderRadius: 8,
    backgroundColor: '#333',
    padding: 24,
  },

  buttonPrimary: {
    backgroundColor: '#9871f5',
  },

  buttonSecondary: {
    backgroundColor: '#04d361',
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'Archivo700',
    fontSize: 18,
  },

  totalConnections: {
    alignSelf: 'center',
    maxWidth: 210,
    marginHorizontal: 18,

    color: '#d4c2ff',
    fontFamily: 'Poppins400',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 24,
  },
})
