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
        basket : []
    },
    reducers: {
        getProduct : (state, action ) => {
            state.basket.push(action.payload)
        },
        removeItem : (state, action) => {
            const id = action.payload;
            state.basket.splice(id - 1, 1);
        }
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

export const {getProduct, removeItem} = productsSlice.actions;
export default productsSlice.reducer;