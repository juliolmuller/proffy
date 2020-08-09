import axios from 'axios'

const http = axios.create({
  baseURL: 'http://192.168.15.3:3030',
})

export default http
