import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:'cart',
    initialState:{
        isShown:false,
        cart:[],
        total:0,
    },
    reducers:{
        AddToCart(state,action){
             state.total = state.total + action.payload.price * action.payload.amount;
        const existItemIndex = state.cart.findIndex(item => item.id === action.payload.id)
        const existingItem = state.cart[existItemIndex];
        if (existingItem) {
            const updateItem = { ...existingItem, amount: Number(existingItem.amount) + Number(action.payload.amount) }
            state.cart[existItemIndex] = updateItem;
        } else {

            state.cart = state.cart.concat(action.payload);
        }
        },
        RemoveFromCart(state,action){
            const existItemIndex = state.cart.findIndex(item => item.id === action.payload)
            const existingItem = state.cart[existItemIndex];
            state.total = state.total - existingItem.price;

            let updateItem;
            if (existingItem.amount === 1) {
                state.cart = state.cart.filter((item) => item.id !== action.payload);
            } else {
    
                updateItem = { ...existingItem, amount: Number(existingItem.amount) - 1 }
                state.cart[existItemIndex] = updateItem;
            }
        },
 CartShowHandler(state){
    state.isShown=!state.isShown
 }
    }
})
export const cartactions=CartSlice.actions;
export default CartSlice.reducer;