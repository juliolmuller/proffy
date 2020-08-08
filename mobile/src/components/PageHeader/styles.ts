import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#8257e5',
    padding: 40,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },

  title: {
    maxWidth: 160,
    marginVertical: 40,
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    lineHeight: 32,
  },
})
