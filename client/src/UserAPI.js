import axios from 'axios'

const baseURL = "http://localhost:3001"

export const userAPI = {
  login: (credentials) => {
    // TODO: Switch post request body to cred
    return axios.post(`${baseURL}/user/login`, {
      username: 'bobby',
      password: "pass123"
    },{
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  signup: (credentials) => {
    // TODO: Switch post request body to cred
    return axios.post(`${baseURL}/user/signup`, {
      username: 'bobby50',
      password: "pass123"
    },{
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  logout: () => {
    return axios.post(`${baseURL}/user/logout`,{
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
