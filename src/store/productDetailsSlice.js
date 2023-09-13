import {createSlice , createAsyncThunk} from '@reduxjs/toolkit' ;
import axios from 'axios' ;
import StatusCode from '../utility/StatusCode';

const initialState = {
    data: [] ,
    status: 'idle' ,
} ;

const ProductDetailsSlice = createSlice({
   name : 'productDetails' ,
   initialState ,
   reducers:{

    //  fetchingData(state , action){
    //     state.data = action.payload ;
    //  }
     
    } ,
    extraReducers:(builder) => {
      builder.addCase(fetchProductsDetails.fulfilled , (state , action) => {
        state.data = action.payload ;
        state.status = StatusCode.IDLE ;
      })
      .addCase(fetchProductsDetails.pending , (state , action) => {
        state.status = StatusCode.LOADING ;
      })
      .addCase(fetchProductsDetails.rejected, (state, action) => {
        state.status = StatusCode.ERROR ;
      })
    }

})
export const { fetchingDataDetails } = ProductDetailsSlice.actions ;
export default ProductDetailsSlice.reducer ;



export const fetchProductsDetails = createAsyncThunk('products/fetchDetails' , async(productId)=> {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);;
    const data = response.data; 
    return data ;
  } 
  catch (error) {
  
    console.error("Error fetching products:", error);
  }

  
})