import { configureStore } from "@reduxjs/toolkit";
import cartRducer from './cartRducer'
import UiReducer from './uiSlice'
const store=configureStore({
    reducer:{cart:cartRducer, ui:UiReducer}
})
export default store;