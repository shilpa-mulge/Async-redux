import { createSlice } from "@reduxjs/toolkit";
import { UiActions } from "./uiSlice";
const CartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[],
        TotalQuantity:0,
        changed:false,
    },
    reducers:{
        AddToCart(state,action){
            state.changed=true;
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
            state.changed=true;
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
        ReplaceCart(state,action){
            state.TotalQuantity=action.payload.TotalQuantity;
            state.cart=action.payload.cart;
        }
    }
})

export const sendGetRequest=()=>{
    return async(dispatch)=>{
        dispatch(UiActions.shownotifiaction({
            status:'pending',
            title:'Sending.....',
            message:'Fetching cart data!',
          }))
          const sendGetHttp=async()=>{
            const response=await fetch("https://expense-tracker-b91f4-default-rtdb.firebaseio.com/cart.json")
              if(!response.ok){
                throw new Error("Fetching cart data faild!")
                }
               const data=await response.json();
               return data;
          }
          try{
const fetchedData=await sendGetHttp();
dispatch(cartactions.ReplaceCart({cart:fetchedData.cart||[],TotalQuantity:fetchedData.TotalQuantity}))
dispatch(UiActions.shownotifiaction({
    status:'Success',
    title:'Success!',
    message:'Feched cart data Successfuly!',
  }))
          }catch(err){
            dispatch(UiActions.shownotifiaction({
                status:'error',
                title:'Error',
                message:'Getting cart data Faild!',
              }))
          }
    
        }
}


export const sendRequest=(cart)=>{
    return async(dispatch)=>{
        dispatch(UiActions.shownotifiaction({
            status:'pending',
            title:'Sending.....',
            message:'Sending cart data!',
          }))
          const sendHttp=async()=>{
            const response=await fetch("https://expense-tracker-b91f4-default-rtdb.firebaseio.com/cart.json",{
                method:'PUT',
                body:JSON.stringify({cart:cart.cart,TotalQuantity:cart.TotalQuantity})
              })
              if(!response.ok){
                throw new Error("Sending cart data faild!")
                }
          }
          try{
await sendHttp();
dispatch(UiActions.shownotifiaction({
    status:'Success',
    title:'Success!',
    message:'Sent cart data Successfuly!',
  }))
          }catch(err){
            dispatch(UiActions.shownotifiaction({
                status:'error',
                title:'Error',
                message:'Sending cart data Faild!',
              }))
          }
    
        }
}


export const cartactions=CartSlice.actions;
export default CartSlice.reducer;