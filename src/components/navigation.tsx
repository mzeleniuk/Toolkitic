import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="flex items-center justify-between h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold cursor-default">Toolkitic</h3>

      <p>
        <Link to="/" className="mr-5">
          Home
        </Link>

        <Link to="/bookmarks">Bookmarks</Link>
      </p>
    </nav>
  )
}
