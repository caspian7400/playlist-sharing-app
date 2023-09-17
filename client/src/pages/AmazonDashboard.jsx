/* eslint-disable no-unused-vars */
// amazon music api not accessible yet. :(

import { useState, useEffect } from 'react';
import useAuth from "../auth/AmazonAuth";
import axios from 'axios';
import querystring from 'querystring'

const code = new URLSearchParams(window.location.search).get('code');
const client_id = 'amzn1.application-oa2-client.16fc1ce53e564d7195cad733e0600fdd'
const baseUrl = 'https://api.music.amazon.dev'

export default function AmazonDashboard() {
    const accessToken = useAuth(code);
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});
    useEffect(() => {
        if (!accessToken) return;
        setLoading(true);
        const fetchPlaylists = async () => {
            let container = [];
            let offset = 0;
            const limit = 100;
            try {
                const config = {
                    headers: {
                        'x-api-key': client_id,
                        'Authorization': `Bearer ${accessToken}`
                    },
                    params: {
                        limit,
                    }
                }
                // const response = await axios.get(`${baseUrl}/v1/me/playlists?`, config);
                const response = await axios.get(`${baseUrl}/v1/me/albums/?ids=B0064UPU4G,B091BHTFTZ,B0869N1S7F`);
                console.log(response);
            } catch (e) {
                console.log(e);
            }
        };

        const fetchUserData = () => {
            try {
                const url = baseUrl;
                const response = axios.get(url)
                console.log(response);
            } catch (e) {
                console.log(e);
            }
        }
        fetchPlaylists();
        // fetchUserData();
    }, [accessToken]);
    // console.log(accessToken);
    return (
        setLoading ? <div>
            <h1>loading playlists...</h1>
        </div> : <div>
            {`Dashboard ${accessToken}`}
        </div>
    )
}

//base url : https://api.music.amazon.dev