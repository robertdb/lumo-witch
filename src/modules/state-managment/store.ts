import { configureStore } from "@reduxjs/toolkit";
import { potionCounterSlice } from "./slices/potionCounter";
import { damageSlice} from "./slices/damage";

const store = configureStore({
  reducer: {
    [potionCounterSlice.name]: potionCounterSlice.reducer,
    [damageSlice.name]: damageSlice.reducer,
  }
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

