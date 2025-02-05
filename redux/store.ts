import { configureStore } from '@reduxjs/toolkit'
import accountingReducer from './features/accounting/accountingSlice'

export const store = configureStore({
  reducer: {

    accounting : accountingReducer

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch