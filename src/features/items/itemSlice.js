import { createSlice, nanoid } from '@reduxjs/toolkit'

const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (text) => ({
        payload: { id: nanoid(), text },
      }),
    },
    editItem: (state, action) => {
      const { id, newText } = action.payload
      const item = state.find((i) => i.id === id)
      if (item) item.text = newText
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addItem, editItem, deleteItem } = itemSlice.actions
export default itemSlice.reducer
