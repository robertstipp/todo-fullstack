import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import todoReducer  from './todoSlice'

export const store = configureStore({
  reducer : {
    user: userReducer,
    todos: todoReducer
  }
})