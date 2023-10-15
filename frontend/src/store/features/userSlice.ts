import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
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
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.picture = action.payload.picture;
    },
    loading: (state, action) => {
      state.loading = action.payload.loading;
    },
  },
});

export const { authenticate, loading } = userSlice.actions;
export default userSlice.reducer;
