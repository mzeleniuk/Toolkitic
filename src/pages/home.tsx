import { ChangeEvent, useEffect, useState } from 'react'

import { useDebounce } from '../hooks/useDebounce'
import { useSearchUsersQuery } from '../store/github/github.api'

export function Home() {
  const [search, setSearch] = useState<string>('')
  const debounced = useDebounce(search)
  const { isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
  })

  useEffect(() => {
    console.log(debounced)
  }, [debounced])

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearch(event.target.value)
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="text-center text-red-600"> Something went wrong...</p>}

      <div className="relative w-[560px]">
        <input
          type="text"
          className="border mb-5 px-4 py-2 w-full h-[42px]"
          placeholder="Type GitHub username"
          value={search}
          onChange={handleSearchChange}
        />

        <div className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quae libero quis odio iste quas ipsa
          consectetur dignissimos excepturi porro doloremque sequi sint error sapiente, rem sed adipisci facilis
          assumenda.
        </div>
      </div>
    </div>
  )
}
