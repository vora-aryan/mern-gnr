import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userData: null,
  isLoading: true,
  isError: false,
};

export const fetchUSers = createAsyncThunk("fetchUsrs", async () => {
  const res = await axios.get("https://node5.onrender.com/user/user");
  const data = res.data.data;
  return data;
});

const userSlice = createSlice({
  name: "fetchUsers",

  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchUSers.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchUSers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
      //   console.log(state.userData);
    });

    builder.addCase(fetchUSers.rejected, (state, action) => {
      console.log("errror=", action.payload);
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
