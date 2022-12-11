import { ChangeEvent, lazy, useEffect, useState } from 'react'

import { useDebounce } from '../hooks/useDebounce'
import { useSearchUsersQuery, useLazyGetUserReposQuery } from '../store/github/github.api'
import { GitHubUser } from '../types/users'

const RepoCard = lazy(() =>
  import('../components/repoCard').then((module) => {
    return { default: module.RepoCard }
  })
)

export function Home() {
  const [search, setSearch] = useState<string>('')
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false)
  const debounced = useDebounce(search)
  const {
    data: users,
    isError,
    isLoading,
  } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  })
  const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserReposQuery()

  useEffect(() => {
    setIsDropDownOpen(debounced.length > 3 && !!users?.length)
  }, [debounced, users])

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearch(event.target.value)
  }

  function handleUserClick(username: string): void {
    fetchRepos(username)
    setIsDropDownOpen(false)
  }

  return (
    <div className="flex justify-center pt-10 mx-auto w-screen">
      {isError && <p className="text-center text-red-600"> Something went wrong...</p>}

      <div className="relative w-[560px]">
        <input
          type="text"
          className="border mb-5 px-4 py-2 w-full h-[42px]"
          placeholder="Type GitHub username"
          value={search}
          onChange={handleSearchChange}
        />

        {isLoading && <p className="text-center">Loading...</p>}

        {isDropDownOpen && (
          <ul className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white list-none overflow-y-scroll">
            {users?.map((user: GitHubUser) => (
              <li
                key={user.id}
                className="px-4 py-2 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                onClick={() => handleUserClick(user.login)}
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}

        <div className="text-center">
          {areReposLoading && <p className="text-center">Repos are loading...</p>}

          {repos?.map((repo) => (
            <RepoCard repo={repo} key={repo.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
