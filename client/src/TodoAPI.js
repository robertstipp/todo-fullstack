import axios from 'axios'

const baseURL = "http://localhost:3001"

export const todoAPI = {
  getTodos: () => {
    return axios.get(`${baseURL}/todo`)
  },
  createTodo: (todo) => {
    return axios.post(`${baseURL}/todo`, {
      itemName: todo.itemName,
      itemValue: todo.itemValue,
      itemStatus: false,     
    }, {
      withCredentials: true,
      headers: {
        'Content-Type' : 'application/json'
      }
    })
  },
  updateTodo: (update, todoId) => {
    return axios.patch(`${baseURL}/todo/${todoId}`, update, {
      withCredentials: true,
      headers: {
        'Content-Type' : 'application/json'
      }
    })
  },
  deleteTodo: (todoId) => {
    return axios.delete(`${baseURL}/todo/${todoId}`, {
      withCredentials: true,
      headers: {
        'Content-Type' : 'application/json'
      }
    })
  }
}