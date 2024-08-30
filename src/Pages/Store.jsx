import { configureStore } from "@reduxjs/toolkit";
import mydata from "./cartSlice";
const Store=configureStore({
    reducer:{
       mycart:mydata
    }
})
export default Store;