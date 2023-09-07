import {configureStore} from '@reduxjs/toolkit' ;
import CartSlice from '../store/CartSlice' ;
import ProductSlice from '../store/apiCallSlice'

const store  = configureStore({
    reducer:{
      cart: CartSlice ,
      apiCall : ProductSlice

    }
})

export default store;