import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { gitHubApi } from './github/github.api'
import { gitHubReducer } from './github/github.slice'

export const store = configureStore({
  reducer: {
    [gitHubApi.reducerPath]: gitHubApi.reducer,
    gitHub: gitHubReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gitHubApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
