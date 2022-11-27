import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const gitHubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (build) => ({
    searchUsers: build.query<any, string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        },
      }),
    }),
  }),
})

export const { useSearchUsersQuery } = gitHubApi
