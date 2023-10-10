// import { createSlice } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";
// const initialState ={
//     cartItmes:[],
//     totalQuantity:0,
//     totalAmount:0
// }
// let cartSlice=createSlice({
//     name:"cart",
//     initialState,
//     reducers:{
//         addtoproduct(state,action){
//             const newitem=action.payload
//         const itemIndex=state.cartItmes.findIndex((item)=>item.id===action.payload.id)
//     if(itemIndex>=0){
//       state.cartItmes[itemIndex].totalQuantity+=1
//     toast("product increase one ",{
//         position:"top-center"
//     })
//     }

//     else{
//         const tempproduct={...action.payload,totalQuantity:1}
//         state.cartItmes.push(tempproduct)
//         toast("add a new product ",{
//             position:"top-center"
//         })
//      }
    
//     }

//     }
// })
// export const cardReducer=cartSlice.reducer

// export const {addtoproduct}=cartSlice.ac