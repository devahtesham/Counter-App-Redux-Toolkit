import { configureStore } from "@reduxjs/toolkit";
import CounterSliceReducer from "./Slices/CounterSlice"

const store = configureStore({
    reducer:{
        counterReducer:CounterSliceReducer
    }
});

export default store