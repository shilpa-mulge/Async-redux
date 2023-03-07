import { configureStore } from "@reduxjs/toolkit";
import cartRducer from './cartRducer'

const store=configureStore({
    reducer:{cart:cartRducer}
})
export default store;