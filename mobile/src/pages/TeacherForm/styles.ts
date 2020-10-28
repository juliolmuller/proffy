import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  headline: {
    maxWidth: 200,
    color: '#fff',
    fontFamily: 'Archivo700',
    fontSize: 45,
    lineHeight: 50,
  },

  description: {
    marginTop: 24,
    color: '#d4c2ff',
    fontFamily: 'Poppins400',
    fontSize: 16,
    lineHeight: 26,
  },

  okButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 58,
    marginVertical: 40,
    backgroundColor: '#04d361',
    borderRadius: 8,
  },

  okButtonText: {
    color: '#fff',
    fontFamily: 'Archivo700',
    fontSize: 16,
  },
})
