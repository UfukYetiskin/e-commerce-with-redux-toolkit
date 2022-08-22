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
            state.basket = state.basket.splice(id -1 , 1);
        },
        increaseFilter : (state, action) => {
            const pros = action.payload;
            const sortIncreaseProduct = [...pros].sort((a,b) => a.price - b.price)
            state.items = sortIncreaseProduct;
        } ,
        decreaseFilter : (state, action) => {
            const pros = action.payload;
            const sortIncreaseProduct = [...pros].sort((a,b) =>  b.price - a.price)
            state.items = sortIncreaseProduct;
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

export const {getProduct, removeItem, increaseFilter, decreaseFilter} = productsSlice.actions;
export default productsSlice.reducer;