import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  todos : [{"itemName": "Buy Bubbles", "itemValue": "Five", "id": 1, "status": true}, 
  {"itemName": "Watch Kobe", "itemValue": "Forty Hours", "id": 2, "status": false}]
}

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state,action) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state,action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    updateTodoStatus: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.status = !todo.status;  // toggle status
      }
    },
    editTodo: (state,action) => {},
    toggleTodoFilter: (state,action) => {}
  }
})

export const {addTodo, deleteTodo, updateTodoStatus, editTodo, toggleTodoFilter} = todoSlice.actions;

export default todoSlice.reducer;