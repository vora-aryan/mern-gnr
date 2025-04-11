import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // state.cart = [
      //   ...state.cart,
      //   { ...action.payload, id: crypto.randomUUID() },
      // ];

      console.log(action);

      const newItem = { ...action.payload, id: crypto.randomUUID() };
      state.cart.push(newItem);

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
