import { configureStore } from "@reduxjs/toolkit";
import ProductsSlices from "./rtk/slices/Products-slices";
import CartSlices from "./rtk/slices/Cart-slices";
export const store =configureStore({
    reducer:{
        Products : ProductsSlices,
        Cart : CartSlices
        // productdetail : 

    }
})