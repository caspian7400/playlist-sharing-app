import Playlist from '../../components/Playlist';
import Track from '../../components/Track';
import SpotifyWebApi from 'spotify-web-api-node';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import { useLocation } from "react-router-dom"

const spotifyApi = new SpotifyWebApi({
    clientId: '3acea078e39840f395aab879e491c043',
})

export default function SpotifyTracks() {
    let { state } = useLocation();
    const [loading, setLoading] = useState(true);
    const [tracks, setTracks] = useState([]);
    const [duration , setDuration] = useState(0);
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
                        album: item.track.album.name,
                        images: item.track.album.images,                     
                        artists: item.track.artists,
                        explicit: item.track.explicit,
                        popularity: item.track.popularity,

                    })));
                    if (!data.body.next) {
                        break;
                    }
                    config.offset = config.offset + config.limit;
                }
                setTracks(container);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTracks();

    }, [accessToken, playlist]);

    useEffect(()=>{
        let time = 0
        tracks.forEach(item=>{
            time+=item.duration
        });
        setDuration(time);

    },[tracks])
    return (
        <>{
            loading ? (
                <p> Loading tracks... </p>
            ) : (
                <Container fluid>
                    <div>

                    </div>
                    <div>
                        {tracks.map(track => (<Track key={track.id} track={track} />))}
                    </div>
                </Container>
            )
        }
        </>
    )
}

const hourFormat = (time_ms) => {
    const ms_to_hour = 3600000; // 60 x 60 x 1000
    let output = time_ms / ms_to_hour;
    const hour = parseInt(output);
    const minutes = parseInt((output - hour) * 60);
    return `${hour}h ${minutes}m`;
}