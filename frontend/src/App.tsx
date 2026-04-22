import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Discover from './pages/Discover'
import Library from './pages/Library'
import Moods from './pages/Moods'
import Profile from './pages/Profile'

const ROUTE_TITLES: Record<string, string> = {
  '/': 'My Playlist',
  '/library': 'Library',
  '/moods': 'Moods',
  '/profile': 'Profile',
}

function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const title = ROUTE_TITLES[location.pathname] ?? 'My Playlist'

  return (
    <div className="flex min-h-screen">
      <Sidebar onNewMix={() => navigate('/')} />
      <main className="flex min-h-screen flex-1 flex-col">
        <TopBar title={title} />
        <Outlet />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Discover />} />
        <Route path="/library" element={<Library />} />
        <Route path="/moods" element={<Moods />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Discover />} />
      </Route>
    </Routes>
  )
}
