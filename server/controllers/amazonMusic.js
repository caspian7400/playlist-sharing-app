require("dotenv").config();
const axios = require("axios");

const refresh = (req,res)=>{
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
}

const login = (req,res)=>{
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
}

module.exports = {
    refresh,
    login,
};