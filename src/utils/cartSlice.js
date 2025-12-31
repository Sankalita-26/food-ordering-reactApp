import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({

    name:"cart",
    initialState:{
        item:[],
    },
    //reducers are basically an object 

    reducers:{
        addItem:(state,action)=>{
            state.item.push(action.payload)
        },
        removeItem:(state)=>{
            state.item.pop()
        },
        clearCart:(state)=>{
            return {item:[]};
        },
    },
});

export const {addItem,removeItem,clearCart}=cartSlice.actions
export default cartSlice.reducer;