import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    data: [],
  },
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateData } = counterSlice.actions

export default counterSlice.reducer