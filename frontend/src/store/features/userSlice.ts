import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  id: "",
  token: "",
  name: "",
  email: "",
  picture: "",
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    authenticate: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.picture = action.payload.picture;
    },
    loading: (state, action) => {
      state.loading = action.payload.loading;
    },
    logout: (state) => {
      state.email = "";
      state.id = "";
      state.name = "";
      state.picture = "";
      state.token = "";
    },
  },
});

export const { authenticate, loading, logout } = userSlice.actions;
export default userSlice.reducer;
