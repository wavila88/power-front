import { configureStore } from '@reduxjs/toolkit';
import PowerReducer from './reducers/powerReducer';
import UtilsReducer from './reducers/utilsReducer'; 

export const store = configureStore({
  reducer: {
    PowerReducer,
    UtilsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch