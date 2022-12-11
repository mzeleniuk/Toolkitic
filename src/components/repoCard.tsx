import { GitHubRepo } from '../types/repos'

export function RepoCard({ repo }: { repo: GitHubRepo }) {
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
      </a>
    </div>
  )
}
