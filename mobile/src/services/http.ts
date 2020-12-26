import axios from 'axios'
import Constants from 'expo-constants'

const http = axios.create({
  baseURL: Constants.manifest.extra.API_URL,
})

export default http
