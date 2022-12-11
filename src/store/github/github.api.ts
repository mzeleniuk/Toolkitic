import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { GitHubRepo } from '../../types/repos'
import { GitHubServerResponse, GitHubUser } from '../../types/users'

export const gitHubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchUsers: build.query<GitHubUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: GitHubServerResponse<GitHubUser>) => response.items,
    }),
    getUserRepos: build.query<GitHubRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
    // createUser: build.mutation<any, void>({
    //   query: () => 'users',
    // }),
  }),
})

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = gitHubApi
