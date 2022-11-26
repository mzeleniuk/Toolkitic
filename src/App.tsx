import { Route, Routes } from 'react-router-dom'

import { Bookmarks } from './pages/bookmarks'
import { Home } from './pages/home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
    </Routes>
  )
}

export default App
