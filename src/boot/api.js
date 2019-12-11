import axios from 'axios'

export const baseURL = 'https://logotipiwe.ru/dev_proj/public/'
export const API_URL = baseURL + 'api/'

const API = axios.create({
  baseURL: API_URL
})

export default API
