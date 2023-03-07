import { createSlice } from "@reduxjs/toolkit";
const CartSlice=createSlice({
    name:'cart',
    initialState:{
        isShown:false,
        cart:[],
        TotalQuantity:0,
    },
    reducers:{
        AddToCart(state,action){
            state.TotalQuantity++;
        const existItemIndex = state.cart.findIndex(item => item.id === action.payload.id)
        const existingItem = state.cart[existItemIndex];
        if (!existingItem) {
            state.cart.push({
                id:action.payload.id,
                title:action.payload.title,
                price:action.payload.price,
                total:action.payload.price,
                amount:action.payload.amount
            })
        } else {
existingItem.amount++;
existingItem.total=existingItem.total+action.payload.price
    }
        },
        RemoveFromCart(state,action){
            state.TotalQuantity--;
            const existItemIndex = state.cart.findIndex(item => item.id === action.payload)
            const existingItem = state.cart[existItemIndex];
            if (existingItem.amount === 1) {
                state.cart = state.cart.filter((item) => item.id !== action.payload);
            } else {
    existingItem.amount--;
    existingItem.total=existingItem.total-existingItem.price
            }
        },
 CartShowHandler(state){
    state.isShown=!state.isShown
 }
    }
})
export const cartactions=CartSlice.actions;
export default CartSlice.reducer;