require('dotenv').config();
const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(cors());
app.use(bodyParser.json());

/********************** spotify section ***********************/

app.post('/spotify/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new spotifyWebApi({
        redirectUri: SPOTIFY_REDIRECT_URI,
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        refreshToken,
    });
    spotifyApi.refreshAccessToken().then((data) => {
        res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in
        });
    }).catch((err) => {
        console.log(err);
        res.sendStatus(404);
    });
})

app.post('/spotify/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new spotifyWebApi({
        redirectUri: process.env.SPOTIFY_REDIRECT_URI,
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    });
    spotifyApi.authorizationCodeGrant(code).then((data) => {
        console.log('status code:' + data.statusCode);
        console.log('received access token details\n');
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        });
    }).catch((err) => {
        console.log(err);
        res.sendStatus(404)
    });
});



/********************* amazon section **********************/

app.post('/amazon-music/login', (req, res) => {
    const code = req.body.code;
    axios.post('https://api.amazon.com/auth/o2/token', {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.AMAZON_REDIRECT_URI,
        client_id: process.env.AMAZON_CLIENT_ID,
        client_secret: process.env.AMAZON_CLIENT_SECRET,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    }).then((response) => {
        console.log(response.data);
        res.json({
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
            expisresIn: response.data.expires_in
        })
    }).catch((err) => {
        console.log(err);
        res.sendStatus(404);
    })
})

app.post('/amazon-music/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    axios.post('https://api.amazon.com/auth/o2/token', {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        redirect_uri: process.env.AMAZON_REDIRECT_URI,
        client_id: process.env.AMAZON_CLIENT_ID,
        client_secret: process.env.AMAZON_CLIENT_SECRET,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    }).then((response) => {
        console.log(response.data);
        res.json({
            accessToken: response.data.access_token,
        })
    }).catch((err) => {
        console.log(err);
        res.sendStatus(404);
    })
})

/************************** deezer section *****************************/

app.post('/deezer/login', (req, res) => {});
app.post('/deezer/refresh',(req,res)=>{});

app.listen(3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});