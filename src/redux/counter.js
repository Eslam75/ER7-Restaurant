const { createSlice } = require("@reduxjs/toolkit");
const initialState={count:1,nameEs:""}
let counter=createSlice({
    name:"counterrr",
    initialState,
    reducers:{
    increament:(state)=>{
            state.count++
            state.nameEs="eslam"
        },
        descrement:(state)=>{
            state.count--
        }
    }
})

export   let counterReducer=counter.reducer

export   let {increament,descrement}=counter.actions