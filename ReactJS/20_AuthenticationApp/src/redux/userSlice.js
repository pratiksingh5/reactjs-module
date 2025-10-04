import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
});


export default userSlice.reducer;

export const {login, logout} = userSlice.actions;