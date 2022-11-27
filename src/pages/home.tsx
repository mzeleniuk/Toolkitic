import { useSearchUsersQuery } from '../store/github/github.api'

export function Home() {
  const { data } = useSearchUsersQuery('james')
  console.log(data);

  return <h1>Home</h1>
}
