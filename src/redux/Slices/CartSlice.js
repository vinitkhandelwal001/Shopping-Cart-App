import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
   name:"cart",
   initialState:[],
   reducers:{
        add:(state,action) => {
            state.push(action.payload); 
        },
        remove:(state,action) => {
         // is state k andar only vo hi wale item ko retain krna jo action input parameter k andar id aayi h uske equal na ho
            return state.filter((item) => item.id !== action.payload);
        },
   }
});

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;