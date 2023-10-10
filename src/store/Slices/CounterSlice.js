import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

const CounterSlice = createSlice({
    name: "COUNTER",
    initialState: initialState,
    reducers: {
        increment: (state,action) => {
            state.counter+=1
            
        },

        decrement: (state) => {
            state.counter-=1
        },

    }
})
// console.log('CounterSlice', CounterSlice)
const { increment, decrement } = CounterSlice.actions
export { increment, decrement }
export default CounterSlice.reducer