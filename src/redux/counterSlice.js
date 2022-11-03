import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "counter",
	initialState: { //初期のstate
		value: 0,
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; //inputに打ち込む値を受け取る
    }
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
