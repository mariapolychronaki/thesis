import { createSlice } from '@reduxjs/toolkit'

export const coachSlice = createSlice({
  name: 'coach',
  initialState: {
    value: 0,
    name: "giorgos",
    approved: false,
    rejected: false
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setApproved: (state, action) => {
      state.approved = action.payload;
      state.rejected = false;
    }, 
    setRejected: (state, action) => {
      state.approved = false;
      state.rejected = action.payload;
    }

  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setName,setRejected,setApproved } = coachSlice.actions

export default coachSlice.reducer