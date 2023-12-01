const spotify = require("../controllers/spotify");
const amazon = require("../controllers/amazonMusic");
require("dotenv").config();

const api = (app) => {
    app.post("/spotify/refresh", spotify.refresh);
    app.post("/spotify/login", spotify.login);
    app.post("/amazon/refresh", amazon.refresh);
    app.post("/amazon/login", amazon.login);
}

module.exports = api;