import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const GITHUB_BOOKMARKS_KEY = 'github-bookmarks-key'

interface GitHubState {
  bookmarks: string[]
}

const initialState: GitHubState = {
  bookmarks: JSON.parse(localStorage.getItem(GITHUB_BOOKMARKS_KEY) ?? '[]'),
}

export const gitHubSlice = createSlice({
  name: 'gitHub',
  initialState,
  reducers: {
    addBookmark(state, action: PayloadAction<string>) {
      state.bookmarks.push(action.payload)
      localStorage.setItem(GITHUB_BOOKMARKS_KEY, JSON.stringify(state.bookmarks))
    },
    removeBookmark(state, action: PayloadAction<string>) {
      state.bookmarks = state.bookmarks.filter((bookmark) => bookmark !== action.payload)
      localStorage.setItem(GITHUB_BOOKMARKS_KEY, JSON.stringify(state.bookmarks))
    },
  },
})

export const gitHubActions = gitHubSlice.actions
export const gitHubReducer = gitHubSlice.reducer
