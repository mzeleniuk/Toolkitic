import { useActions } from '../hooks/useActions'
import { GitHubRepo } from '../types/repos'

export function RepoCard({ repo }: { repo: GitHubRepo }) {
  const { addBookmark } = useActions()

  const handleAddClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addBookmark(repo.html_url)
  }

  if (!repo) return null

  return (
    <div className="border rounded px-5 py-5 mb-5 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>

        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>

        {repo.description && <p className="text-small font-thin">{repo.description}</p>}

        <button
          type="button"
          className="px-4 py-2 bg-yellow-400 rounded hover:shadow-md transition-all"
          onClick={handleAddClick}
        >
          Add
        </button>
      </a>
    </div>
  )
}
