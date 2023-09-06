import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import { Container } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node';
import Playlist from '../components/Playlist';
import User from '../components/User';
import PropTypes from 'prop-types';


const spotifyApi = new SpotifyWebApi({
    clientId: '3acea078e39840f395aab879e491c043',
})
export default function Dashboard({ code }) {
    const accessToken = useAuth(code);
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (!accessToken) return;
        setLoading(true);
        spotifyApi.setAccessToken(accessToken);
        let container = [];
        let offset = 0;
        const limit = 50;
        const fetchUserData = async () => {
            try {
                const data = await spotifyApi.getMe();
                setUserData(data.body);
            } catch (error) {
                console.log(error);
            }
        }
        const fetchPlaylists = async () => {
            try {
                // eslint-disable-next-line no-constant-condition
                while (true) {
                    const data = await spotifyApi.getUserPlaylists({ limit, offset });
                    if (!data.body.items.length) {
                        break;
                    }

                    container = container.concat((data.body.items.filter(item => (item.owner.display_name != 'Spotify' && item.tracks.total != 0))).map(item => ({
                        name: item.name,
                        id: item.id,
                        images: item.images,
                        tracks: item.tracks,
                        owner: item.owner,
                        public: item.public
                    })));
                    if (!data.body.next) {
                        break;
                    }
                    offset += limit;
                }
                setPlaylists(container);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPlaylists();
        fetchUserData();
    }, [accessToken]);
    return (
        <>
            {
                loading ? (
                    <p> Loading playlists...</p >
                ) : (
                    <>
                        <User userData={userData}></User>
                        <Container fluid>
                            <div className='d-flex flex-wrap' style={{ marginLeft: '5%' }}>
                                {playlists.map((playlist) => (
                                    <Playlist playlist={playlist} key={playlist.id} />
                                ))}
                            </div>
                        </Container>
                    </>
                )
            }
        </>
    )
}

Dashboard.propTypes = {
    code: PropTypes.string.isRequired,
}
