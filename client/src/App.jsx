import {BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import SpotifyDashboard from './pages/SpotifyDashboard'
import AmazonDashboard from './pages/AmazonDashboard'
import NotFound from './pages/NotFound'

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/spotify/dashboard" element={<SpotifyDashboard />} />
            <Route path="/amazon/dashboard" element={<AmazonDashboard />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App