import axios from 'axios'

export const baseURL = 'https://logotipiwe.ru/dev_proj/public/'
export const API_URL = baseURL + 'api/' + 'category/'

const API1 = axios.create({
  baseURL: API_URL
})

export default API1
