import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Loader } from './components/loader'
import { Navigation } from './components/navigation'

const Bookmarks = lazy(() =>
  import('./pages/bookmarks').then((module) => {
    return { default: module.Bookmarks }
  })
)
const Home = lazy(() =>
  import('./pages/home').then((module) => {
    return { default: module.Home }
  })
)

function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
