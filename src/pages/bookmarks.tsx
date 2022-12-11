import { useAppSelector } from '../hooks/useRedux'

export function Bookmarks() {
  const { bookmarks } = useAppSelector((state) => state.gitHub)

  if (!bookmarks?.length) return <p className="text-center">No bookmarks</p>

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {bookmarks.map((bookmark) => (
          <li key={bookmark} className='mb-2'>
            <a href={bookmark} target="_blank">
              {bookmark}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
