import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {userAPI} from './UserAPI'


export const loginUser = createAsyncThunk(
  "users/login",
  async (credentials, thunkAPI) => {
    try {
      const data = await userAPI.login(credentials)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
export const signupUser = createAsyncThunk(
  "users/signup",
  async (credentials, thunkAPI) => {
    try {
      const data = await userAPI.signup(credentials)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
export const logoutUser = createAsyncThunk(
  "users/logout",
  async (credentials, thunkAPI) => {
    try {
      await userAPI.logout()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  username : '',
  password : '',
  loggedIn : false,
  status: 'idle',
  error: null
}


export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    handleLogin: (state,action) => {
      console.log(state.username,state.password)
      
      // TODO - FETCH REQUEST TO API
      state.loggedIn = true;
    },
    handleLogout: (state, action) => {
      // TODO - LOGOUT
      state.loggedIn = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.status = 'succeeded'
        state.loggedIn = true
        state.username = ''
        state.password = ''
      })
      .addCase(loginUser.rejected, (state,action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(signupUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.status = 'succeeded'
        state.loggedIn = true
        state.username = ''
        state.password = ''
      })
      .addCase(signupUser.rejected, (state,action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = 'succeeded'
        state.loggedIn = false
      })
      .addCase(logoutUser.rejected, (state,action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const {setUserName, setPassword, handleLogin, handleLogout} = userSlice.actions;

export default userSlice.reducer;