import axios from 'axios'

export const baseURL = 'http://logotipiwe.ru/dev_proj/public/'
export const API_URL = baseURL + 'api'

const API1 = axios.create({
  baseURL: API_URL
})

export default API1
