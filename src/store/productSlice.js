import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending, (state)=>{
      state.status = "loading"
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "idle"
    })
    .addCase(getProducts.rejected, (state)=>{
      state.status = "error"
    })
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  return data;
});

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const res = await fetch(`https://fakestoreapi.com/products`);
//     const data = await res.json();
//     dispatch(fetchProducts(data));
//   };
// }
