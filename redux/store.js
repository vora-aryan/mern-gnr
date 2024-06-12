import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/slices/CartSlice";
import bankReducer from "../redux/slices/BankSlice";
import userReduer from "../redux/slices/UsersSlice";

export const store = configureStore({
  reducer: { cart: cartReducer, bank: bankReducer, users: userReduer },
});
