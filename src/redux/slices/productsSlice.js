import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk("products/getProducts", async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    return res.json();
})

export const productsSlice = createSlice({
    name : "products",
    initialState : {
        items : [],
        status : "idle",
    },
    reducers: {

    },
    extraReducers : {
        [fetchProducts.pending] : (state, action) => {
            state.status = "loading"
        },
        [fetchProducts.fulfilled] : (state, action) => {
            state.items = [...state.items, ...action.payload]
            state.status = "success"
        },
        [fetchProducts.rejected] : (state,action) => {
            state.status = "failed"
            state.error = action.error.message;
        }
    }
});


export default productsSlice.reducer;