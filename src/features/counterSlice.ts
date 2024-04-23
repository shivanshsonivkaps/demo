import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IcounterSlice {
  value: number
}

const initialState: IcounterSlice = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      if (state.value > 0) {
        state.value -= 1
      }
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
