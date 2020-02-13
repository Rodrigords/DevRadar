import axios from 'axios'

const api = axios.create({
//baseURL:'http://192.168.1.145:3333' // Casa
  baseURL:'http://10.255.0.181:3333' // Qintess
})

export default api