import {configureStore} from '@reduxjs/toolkit' ;
import CartSlice from '../store/CartSlice' ;
import ProductSlice from '../store/apiCallSlice';
import ProductDetailsSlice from './productDetailsSlice';

const store  = configureStore({
    reducer:{
      cart      : CartSlice ,
      apiCall   : ProductSlice ,
productDetails  : ProductDetailsSlice ,
    }
})

export default store;