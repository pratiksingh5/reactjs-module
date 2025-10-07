import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,
//   isAuthenticated: false,
//   token: null
// };

const persistentData = localStorage.getItem("user");

const initialState = persistentData ? JSON.parse(persistentData) : {
  user: null,
  isAuthenticated: false,
  token: null
}

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      // console.log("action", action)
      // console.log("action payload", action.payload)

      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(state));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
});


export default userSlice.reducer;

export const {login, logout} = userSlice.actions;