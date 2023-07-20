import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'

import { userSlice } from './slices/userSlice'

export const createStore = () => configureStore({
  reducer: {
    user: userSlice.reducer
  }
})

export const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
