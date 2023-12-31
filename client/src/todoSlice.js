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
      await todoAPI.updateTodo(update,todoId)
      return {update, todoId}
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// TODO : FIX NAME -> NO ToDO Just Todo
export const deleteTodo =  createAsyncThunk(
  'todo/deleteTodo',
  async (todoId, thunkAPI) => {
    try {
      await todoAPI.deleteTodo(todoId)
      return todoId
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)



export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
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
      .addCase(deleteTodo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteTodo.fulfilled, (state,action) => {
        state.status = 'fulfilled'
        state.todos=state.todos.filter((todo)=>todo._id !== action.payload)
      })
      .addCase(deleteTodo.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(updateTodo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateTodo.fulfilled, (state,action) => {
        state.status = 'fulfilled'
        const {update, todoId} = action.payload
        const index = state.todos.findIndex(todo => todo._id === todoId);
        const oldTodo = state.todos[index]
        if (index !== -1) {
          state.todos[index] = {...oldTodo, ...update}
        }
      })
      .addCase(updateTodo.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export const {toggleTodoFilter, clearTodos} = todoSlice.actions;

export default todoSlice.reducer;