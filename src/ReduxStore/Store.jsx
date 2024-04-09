import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice"
import ProducReducer from './Productslice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product:ProducReducer 
  }
});

export default store;
