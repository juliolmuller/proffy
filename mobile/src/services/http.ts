import axios from 'axios'

const http = axios.create({
  baseURL: 'http://192.168.15.1:3030/api',
})

export default http
