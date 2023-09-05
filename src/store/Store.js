import {configureStore} from '@reduxjs/toolkit' ;
import CartSlice from '../store/CartSlice' ;

const store  = configureStore({
    reducer:{
      cart: CartSlice ,
    }
})

export default store;