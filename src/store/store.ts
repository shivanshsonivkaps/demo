import { combineReducers, configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../features/counterSlice.ts'
import todoSlice from '../features/todoSlice.ts'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({ counter: CounterReducer, todo: todoSlice })

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
