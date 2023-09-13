import {createSlice , createAsyncThunk} from '@reduxjs/toolkit' ;
import axios from 'axios' ;
import StatusCode from '../utility/StatusCode';

const initialState = {
    data: [] ,
    status: 'idle' ,
} ;

const ProductSlice = createSlice({
   name : 'apiCall' ,
   initialState ,
   reducers:{

    //  fetchingData(state , action){
    //     state.data = action.payload ;
    //  }
     
    } ,
    extraReducers:(builder) => {
      builder.addCase(fetchProducts.fulfilled , (state , action) => {
        state.data = action.payload ;
        state.status = StatusCode.IDLE ;
      })
      .addCase(fetchProducts.pending , (state , action) => {
        state.status = StatusCode.LOADING ;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = StatusCode.ERROR ;
      })
    }

})
export const { fetchingData} = ProductSlice.actions ;
export default ProductSlice.reducer ;



export const fetchProducts= createAsyncThunk('products/get' , async()=> {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data; 
    return data ;
  } 
  catch (error) {
  
    console.error("Error fetching products:", error);
  }

  
})

// export  function fetchProducts(){
//     return async function fetchProductsThunk(dispatch , getState){
        // try {
        //     const response = await axios.get("https://fakestoreapi.com/products");
        //     const data = response.data; 
      
        //     dispatch(fetchingData(data));
        //   } 
        //   catch (error) {
          
        //     console.error("Error fetching products:", error);
        //   }
//     }
// }
