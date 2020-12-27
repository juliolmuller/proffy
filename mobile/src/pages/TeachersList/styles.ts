import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f7',
  },

  searchForm: {
    marginBottom: 8,
  },

  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins400',
  },

  input: {
    flexGrow: 1,
    height: 46,
    marginTop: 4,
    marginBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputGrow: {
    flexGrow: 1,
    marginRight: 12,
  },

  teachersDeck: {
    marginTop: -40,
    paddingHorizontal: 16,
  },
})
