// import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faSoundcloud , faApple , faYoutube} from '@fortawesome/free-brands-svg-icons'
import { Container } from 'react-bootstrap'

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=3acea078e39840f395aab879e491c043&response_type=code&redirect_uri=http://localhost:5173&scope=playlist-modify-private'
export default function Login() {
    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh', width: 'auto' }}>
            <a className='btn btn-outline-dark btn-lg m-2' href={AUTH_URL}>
                <FontAwesomeIcon icon={faSpotify} size='4x'/>
            </a>
            <a className='btn btn-outline-dark btn-lg m-2' href=''>
                <FontAwesomeIcon icon={faSoundcloud} size='4x'/>
            </a>
            <a className='btn btn-outline-dark btn-lg m-2' href=''>
                <FontAwesomeIcon icon={faApple} size='4x'/>
            </a>
            <a className='btn btn-outline-dark btn-lg m-2' href=''>
                <FontAwesomeIcon icon={faYoutube} size='4x'/>
            </a>
        </Container>
    )
}
