import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const domainAndPort = (process.env.NODE_ENV === "development") ? "http://localhost:3001/" : "";

export const fetchTransactions = createAsyncThunk(
    "transactions/fetchTransactions",
    async () => {
        let response = await fetch(`${domainAndPort}api/transactions`);
        let transactions = await response.json();
        return transactions;
    }
);

export const addTransaction = createAsyncThunk(
    "transactions/addTransaction",
    async transaction => {
        await fetch(`${domainAndPort}api/transactions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transaction)
        });
        return transaction;
    }
);

export const deleteTransaction = createAsyncThunk(
    "transactions/deleteTransaction",
    async id => {
        await fetch(`${domainAndPort}api/transactions`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: id})
        });
        return id;
    }
);

let initialState = {
    items: [],
    status: "IDLE"
};

const transitionsSlice = createSlice({
    name: "transitions",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchTransactions.fulfilled, (state, action) => {
            state.items = action.payload;
        })
        .addCase(addTransaction.fulfilled, (state, action) => {
            state.items = state.items.concat(action.payload);
        })
        .addCase(deleteTransaction.fulfilled, (state, action) => {
            state.items = state.items.filter(t => t.id !== action.payload)
        })
    }
});

export default transitionsSlice.reducer;