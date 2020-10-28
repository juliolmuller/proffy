import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  container: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    overflow: 'hidden',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  avatar: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: '#aaa',
  },

  profileInfo: {
    flexGrow: 1,
    marginLeft: 16,
  },

  name: {
    color: '#32264d',
    fontFamily: 'Archivo700',
    fontSize: 20,
  },

  subject: {
    marginTop: 4,
    color: '#6a6180',
    fontFamily: 'Poppins400',
    fontSize: 12,

  },

  bio: {
    marginHorizontal: 24,
    color: '#6a6180',
    fontFamily: 'Poppins400',
    fontSize: 16,
    lineHeight: 24,
  },

  cardFooter: {
    alignItems: 'center',
    marginTop: 16,
    padding: 24,
    backgroundColor: '#fafafc',
  },

  price: {
    color: '#6a6180',
    fontFamily: 'Poppins400',
    fontSize: 14,
  },

  priceValue: {
    marginLeft: 16,
    color: '#8257e5',
    fontFamily: 'Archivo700',
    fontSize: 16,
  },

  buttonGroup: {
    flexDirection: 'row',
    marginTop: 16,
  },

  favoriteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: 56,
    marginRight: 8,
    backgroundColor: '#8257e5',
    borderRadius: 8,
  },

  favoriteButtonSelected: {
    backgroundColor: '#e33d3d',
  },

  contactButton: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    backgroundColor: '#04d361',
    borderRadius: 8,
  },

  buttonText: {
    marginLeft: 16,
    color: '#fff',
    fontFamily: 'Archivo700',
    fontSize: 16,
  },
})
