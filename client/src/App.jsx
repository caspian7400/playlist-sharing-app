// import React from 'react'
import querystring from 'querystring'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faApple, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Container } from 'react-bootstrap'

var scope = 'user-read-private user-read-email user-library-read user-library-modify playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public';
const AUTH_URL = 'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
        response_type: 'code',
        client_id: '3acea078e39840f395aab879e491c043',
        scope: scope,
        redirect_uri: 'http://localhost:5173'
    });
export default function Login() {
    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh', width: 'auto', backgroundColor: 'black' }}>
            <a className='btn btn-outline-dark btn-lg m-2 border-0' href={AUTH_URL}>
                <FontAwesomeIcon icon={faSpotify} size='4x' className='text-success' />
            </a>
            <a className='btn btn-outline-dark btn-lg m-2 border-0' href=''>
                <img src="../assets/amazon_music/dark/icons8-amazon-music-100.svg" alt="" />
            </a>
            <a className='btn btn-outline-dark btn-lg m-2 border-0' href=''>
                <FontAwesomeIcon icon={faApple} size='4x' className='text-light' />
            </a>
            <a className='btn btn-outline-dark btn-lg m-2 border-0' href=''>
                <FontAwesomeIcon icon={faYoutube} size='4x' className='text-danger' />
            </a>
        </Container>
    )
}
