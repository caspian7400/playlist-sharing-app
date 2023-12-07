//TODO: add navbar to dashboards ffs

import querystring from 'querystring';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/homepage/styles.css';
import { Container } from 'react-bootstrap';
// import random from 'random-string-generator'
// import { encode as base64encode } from 'base64-arraybuffer'

/*********************** wait for amazon music api to be accessible *************************/

// const AMAZON_AUTH_URL = 'https://www.amazon.com/ap/oa?' +
//     querystring.stringify({
//         client_id: 'amzn1.application-oa2-client.16fc1ce53e564d7195cad733e0600fdd',
//         scope: 'profile',
//         response_type: 'code',
//         redirect_uri: 'http://localhost:5173/amazon/dashboard',
//     });

/****************************TODO******************/
// PKCE for security
// const code_verifier = random(128);
// async function generateCodeChallenge(codeVerifier) {
//     const encoder = new TextEncoder();
//     const data = encoder.encode(codeVerifier);
//     const digest = await window.crypto.subtle.digest("SHA-256", data);
//     const base64Digest = base64encode(digest);
//     // you can extract this replacing code to a function
//     return base64Digest
//         .replace(/\+/g, "-")
//         .replace(/\//g, "_")
//         .replace(/=/g, "");
// }

// generateCodeChallenge(code_verifier).then((challenge) => {
//     AMAZON_AUTH_URL.code_challenge = challenge;
// });


var spotifyScope = 'user-read-private user-read-email user-library-read user-library-modify playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public';

const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
        response_type: 'code',
        client_id: '3acea078e39840f395aab879e491c043',
        scope: spotifyScope,
        redirect_uri: 'http://localhost:5173/spotify/dashboard'
    });

export default function Home() {
    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh', backgroundColor: '#F0D60C' }}>
            <div className='icon-container'>
                <a className='btn btn-lg m-2 border-0' href={SPOTIFY_AUTH_URL}>
                    <div className='icon'>
                        <img src='../assets/spotify/icons8-spotify.svg'></img>
                    </div>
                </a>
                <a className='btn btn-lg m-2 border-0' href="">
                    <div className='icon'>
                        <img src='../assets/amazon_music/icons8-amazon-music.svg' alt="" />
                    </div>
                </a>
                <a className='btn btn-lg m-2 border-0' href="">
                    <div className='icon'>
                        <img src='../assets/apple/icons8-apple-music.svg' alt="" />
                    </div>
                </a>
                <a className='btn btn-lg m-2 border-0' href="">
                    <div className='icon'>
                        <img src='../assets/youtube-music/icons8-youtube-music.svg' alt="" />
                    </div>
                </a>
            </div>
        </Container>
    )
}
