import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  todos : [{"itemName": "Buy Bubbles", "id": 1, "status": true}, 
  {"itemName": "Watch Kobe", "id": 2, "status": false}],
  activeFilter: 'all'
}

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    getTodos: (state,action) => {
      console.log(action.payload)
      state.todos = action.payload
    },
    addTodo: (state,action) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state,action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    updateTodoStatus: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.status = !todo.status;
      }
    },
    // TODO - EDITABLE LIST ITEM
    editTodo: (state, action) => {
      const { id, newValue } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.itemName = newValue;
      }
    },
    toggleTodoFilter: (state,action) => {
      state.activeFilter = action.payload
    }
  }
})

export const {getTodos, addTodo, deleteTodo, updateTodoStatus, editTodo, toggleTodoFilter} = todoSlice.actions;

export default todoSlice.reducer;