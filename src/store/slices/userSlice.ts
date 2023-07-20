import { createSlice } from '@reduxjs/toolkit'
import { TUserInitial, TUserData } from './types'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

const SLICE_NAME = 'user'

const initialState: TUserInitial = {
  user: null,
  wallet: null,
} 

export const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUserData>) => {
      state.user = action.payload
    },
    setWallet: (state, action: PayloadAction<any>) => {
      state.wallet = action.payload
    }
  }
})

export const { setUser, setWallet } = userSlice.actions

export const selectUser = (state: RootState) => state.user.user
export const selectWallet = (state: RootState) => state.user.wallet

export const reducer = userSlice.reducer
