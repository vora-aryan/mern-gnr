import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: [],
  // isLoading: false,
  // todoData: [],
  // isError: false,
};

// export const fetchData = createAsyncThunk("fetchTodos", async () => {
//   try {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
//     return res.data;
//   } catch (error) {
//     console.log("error=", error);
//   }
// });

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart = [
        ...state.cart,
        { ...action.payload, id: crypto.randomUUID() },
      ];
      // const newItem = { ...action.payload, id: crypto.randomUUID() };
      // state.cart.push(newItem);

      // console.log("state = ", state);
      // console.log("action payload = ", action.payload);

      console.log(state.cart);
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      console.log(action.payload.id);
      console.log(state.cart);
    },
  },
});

export const { addItem } = cartSlice.actions;
export const { removeItem } = cartSlice.actions;

export default cartSlice.reducer;
