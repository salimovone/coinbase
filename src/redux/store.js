import { configureStore } from '@reduxjs/toolkit'
import navbarSlice from './navbarSlice'

export const store = configureStore({
  reducer: {
    navbar: navbarSlice
  },
})