import axios from 'axios'

export const baseURL = 'http://logotipiwe.ru/dev_proj/public/api/'
export const API_URL = baseURL + 'api/'

const API = axios.create({
  baseURL: API_URL
})

export default API
