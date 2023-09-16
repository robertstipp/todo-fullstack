import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import { todoAPI } from './TodoAPI';

const initialState = {
  todos : [],
  activeFilter: 'all',
  status: 'idle',
  error: null
}


export const getTodos = createAsyncThunk(
  'todo/getTodos',
  async (_,thunkAPI) => {
    try {
      const response = await todoAPI.getTodos()
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const createTodo = createAsyncThunk(
  'todo/createTodo',
  async (todo,thunkAPI) => {
    try {
      const response = await todoAPI.createTodo(todo)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const updateTodo = createAsyncThunk (
  'todo/updateTodo',
  async ({update, todoId},thunkAPI) => {
    try {
      const data = await todoAPI.updateTodo(update,todoId)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// TODO : FIX NAME -> NO ToDO Just Todo
export const deleteToDo =  createAsyncThunk(
  'todo/deleteTodo',
  async (todoId, thunkAPI) => {
    try {
      const data = await todoAPI.deleteTodo(todoId)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)



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
    },
    // TODO: Handle Logout and clearing of TODO state
    clearTodos: (state,action) => {
      state.todos = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getTodos.fulfilled, (state,action) => {
        state.status = 'fulfilled'
        state.todos = action.payload || []
      })
      .addCase(getTodos.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(createTodo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createTodo.fulfilled, (state,action) => {
        state.status = 'fulfilled'
        state.todos.push(action.payload)
      })
      .addCase(createTodo.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export const {addTodo, deleteTodo, updateTodoStatus, editTodo, toggleTodoFilter, clearTodos} = todoSlice.actions;

export default todoSlice.reducer;