import { CounterSchema } from "./../types/counterSchema";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CounterSchema = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
