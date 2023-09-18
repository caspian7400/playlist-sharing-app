import Playlist from '../../components/Playlist';
import axios from 'axios';
import SpotifyWebApi from 'spotify-web-api-node';
import { useEffect, useState } from 'react';

import { useLocation } from "react-router-dom"

const spotifyApi = new SpotifyWebApi({
    clientId: '3acea078e39840f395aab879e491c043',
})

export default function SpotifyTracks() {
    let { state } = useLocation();
    const [loading, setLoading] = useState(true);
    const [tracks, setTracks] = useState([]);
    const accessToken = state.accessToken;
    const playlist = state.playlist;
    useEffect(() => {
        if (!accessToken) {
            throw new Error('access token must be passed to SpotifyTracks.');
        }
        setLoading(true);
        spotifyApi.setAccessToken(accessToken);
        const fetchTracks = async () => {
            let container = [];
            const config = {
                offset: 0,
                limit: 50,
            }
            let count = 0
            try {
                // eslint-disable-next-line no-constant-condition
                while (true) {
                    const data = await spotifyApi.getPlaylistTracks(playlist.id, config);
                    if (!data.body.items.length) {
                        break;
                    }
                    container = container.concat((data.body.items).map(item => ({
                        name: item.track.name,
                        id: item.track.id,
                        duration: item.track.duration_ms,
                        album: item.track.album,
                        artists: item.track.artists,
                        explicit: item.track.explicit,
                        popularity: item.track.popularity,

                    })));
                    if (!data.body.next) {
                        break;
                    }
                    config.offset = config.offset + config.limit;
                    count++;
                    if (count > 3) {
                        break;
                    }
                }
                setTracks(container);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTracks();

    }, [accessToken, playlist]);
    axios.get()
    return (
        <>{
            loading ? (
                <p> Loading tracks... </p>
            ) : (
                <>
                    <div>
                        <Playlist playlist={playlist} />
                    </div>
                    <div>
                        {tracks.map(item => (<div key={item.id}>{item.name}</div>))}
                    </div>
                </>
            )
        }
        </>
    )
}
