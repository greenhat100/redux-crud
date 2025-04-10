import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './features/items/ItemSlice'

export const store = configureStore({
  reducer: {
    items: itemReducer,
  },
})
