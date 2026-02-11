import { configureStore } from '@reduxjs/toolkit'
import stateSlice from '../feature/globalState/state'

export const store = configureStore({
  reducer: {
    state : stateSlice
  },
})