import axios from 'axios'

export default () => {
  const configuration = {
    baseURL: '',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
  }

  return axios.create(configuration)
}
