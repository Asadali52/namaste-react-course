
import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "counter",

    initialState: {
        count: 0
    },

    reducers: {
        increment: (state, action) => {
            state.count += 1;
        },
        decrement: (state, action) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
        reset: (state, action) => {
            state.count = 0;
        },
    },
});

export const { increment, decrement, incrementByAmount, reset } = CounterSlice.actions;

export default CounterSlice.reducer;