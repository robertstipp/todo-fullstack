import axios from 'axios'

const baseURL = "http://localhost:3001"

export const todoAPI = {
  getTodos: () => {
    return axios.get(`${baseURL}/todo`)
  },
  createTodo: (todo) => {
    const testTodo = {
      itemName : todo.itemName,
      itemValue : todo.itemValue,
      itemStatus: false
    }
    return axios.post(`${baseURL}/todo`, {
      itemName: testTodo.itemName,
      itemValue: testTodo.itemValue,
      itemStatus: testTodo.itemStatus,     
    }, {
      withCredentials: true,
      headers: {
        'Content-Type' : 'application/json'
      }
    })
  },
  updateTodo: (update, todoId) => {
    return axios.patch(`${baseURL}/todo/${todoId}`, {update}, {
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