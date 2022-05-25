import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../features/CartSlice'
import { productApi } from '../features/ProductApi'
import productSliceReducer from '../features/ProductSlice'



export const store = configureStore({
  reducer: {
    products:productSliceReducer,
    carts:CartReducer,
    [productApi.reducerPath] :productApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(productApi.middleware)
})

