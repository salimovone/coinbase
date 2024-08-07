import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false
}

export const counterSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setIsOpen: (state, {payload}) => {
      state.isOpen = payload
    },
  },
})

export const { setIsOpen } = counterSlice.actions

export default counterSlice.reducer