import axios from 'axios'
import { API_KEY } from '../config'

const api = axios.create({ baseURL: 'https://api.rawg.io/api' })

export const endpoints = {
    games: (page = 1, search = '', platforms = {}) =>
        `/games?page=${page}&page_size=10&search=${search}&${platforms}&key=${API_KEY}`,
    platforms: `/platforms/lists/parents?key=${API_KEY}`,
    gameById: (id: number) => `/games/${id}?key=${API_KEY}`
}

export default api