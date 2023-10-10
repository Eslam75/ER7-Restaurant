import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";
import { cartReducer } from "./Cartslice";


const store =configureStore({
    reducer:{
        counterrrrr:counterReducer,
        cart:`cartReducer`

    }
})
export default store