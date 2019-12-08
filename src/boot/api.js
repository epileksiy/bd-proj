import axios from 'axios'

export const baseURL = 'http://larapress.ntzyr.xyz/'
export const API_URL = baseURL + 'api/'

const API = axios.create({
  baseURL: API_URL
})

export default API
