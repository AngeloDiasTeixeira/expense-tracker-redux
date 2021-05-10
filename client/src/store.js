import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionsSlice";

let store = configureStore({
    reducer : {
        transactions: transactionsReducer
    }
});

export default store;