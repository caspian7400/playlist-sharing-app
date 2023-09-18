/* eslint-disable no-undef */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SpotifyDashboard from './pages/spotify/SpotifyDashboard'
import SpotifyTracks from './pages/spotify/SpotifyTracks'
import AmazonDashboard from './pages/amazon-music/AmazonDashboard'
import AmazonMusicTracks from './pages/amazon-music/AmazonMusicTracks'
import NotFound from './pages/NotFound'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/spotify/dashboard" element={<SpotifyDashboard />} />
                <Route path="spotify/dashboard/playlist/:playlistId/tracks" element={<SpotifyTracks />} />
                <Route path="/amazon-music/dashboard" element={<AmazonDashboard />} />
                <Route path="amazon-music/playlist/:playlistId/tracks" element={<AmazonMusicTracks />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App