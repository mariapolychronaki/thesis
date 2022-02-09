import { configureStore } from '@reduxjs/toolkit'
import coachReducer from './Slices/coachSlice'

export default configureStore({
  reducer: { 
      coach : coachReducer
  }
})