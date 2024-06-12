import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
};

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    depositAmount: (state, action) => {
      state.amount += action.payload;
    },
    withDrawAmount: (state, action) => {
      state.amount -= action.payload;
    },
  },
});

export const { depositAmount, withDrawAmount } = bankSlice.actions;
export default bankSlice.reducer;
