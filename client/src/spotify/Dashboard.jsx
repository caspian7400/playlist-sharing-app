import { useEffect, useState } from 'react';
import useAuth from '../useAuth';
import { Container } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
    clientId: '3acea078e39840f395aab879e491c043',
})
// eslint-disable-next-line react/prop-types
export default function Dashboard({ code }) {
    const accessToken = useAuth(code);
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!accessToken) return;
        setLoading(true);
        spotifyApi.setAccessToken(accessToken);
        let container = [];
        let offset = 0;
        const limit = 50;

        const fetchPlaylists = async () => {
            try {
                // eslint-disable-next-line no-constant-condition
                while (true) {
                    const data = await spotifyApi.getUserPlaylists({ limit, offset });
                    if (!data.body.items.length) {
                        break;
                    }
                    // container = container.concat((data.body.items.filter(item => item.owner.display_name != 'Spotify')).map(item => { ({ name: item.name, id: item.id, images: item.images }) }));
                    if (!data.body.next) {
                        break;
                    }
                    offset += limit;
                }
                console.log(container);
                setPlaylists(container);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPlaylists();
    }, [accessToken]);
    return (
        <Container>
            {loading ? (
                <p>Loading playlists...</p>
            ) : (
                <div>
                    {playlists.map((playlist) => (
                        <div key={playlist.id}>
                            <h3>{playlist.name}</h3>
                            <img src={playlist.images[0].url} alt={playlist.playlistName} style={{ width: '100px', height: '100px' }} />
                        </div>
                    ))}
                </div>
            )}
        </Container>
    )
}
