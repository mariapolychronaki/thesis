import { configureStore } from '@reduxjs/toolkit'
import coachReducer from './Slices/coachSlice'
import modalReducer from './Slices/ModalSlice'

export default configureStore({
  reducer: { 
      coach : coachReducer,
      modal : modalReducer
  }
})