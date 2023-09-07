import {createSlice} from '@reduxjs/toolkit' ;
import axios from 'axios' ;

const initialState = {
    data: [] ,
} ;

const ProductSlice = createSlice({
   name : 'apiCall' ,
   initialState ,
   reducers:{
     fetchingData(state , action){
        state.data = action.payload ;
     }
     
   }

})
export const { fetchingData} = ProductSlice.actions ;
export default ProductSlice.reducer ;

export  function fetchProducts(){
    return async function fetchProductsThunk(dispatch , getState){
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            const data = response.data; 
      
            dispatch(fetchingData(data));
          } 
          catch (error) {
          
            console.error("Error fetching products:", error);
          }
    }
}
