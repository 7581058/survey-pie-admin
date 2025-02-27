import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001'

export const fetcher = (url: string) => axios.get(url).then((res) => res.data)
