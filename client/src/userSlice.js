import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username : '',
  password : '',
  loggedIn : false
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
    }
  }
})

export const {setUserName, setPassword, handleLogin} = userSlice.actions;

export default userSlice.reducer;