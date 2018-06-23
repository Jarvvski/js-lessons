// npm install

// require the module
var axios = require('axios');

// Get token at https://darksky.net/dev
var AUTH_TOKEN = "";

// Setup base parts
axios.defaults.baseURL = 'https://api.darksky.net';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// This is London, just google the coordinates
var cityCordinates = "51.5074,0.1278";

// do a `get` request to this URL
axios.get("/forecast/" + AUTH_TOKEN + "/" + cityCordinates)
    .then(function(response) {
        // output data
        console.log(response.data);
    })
    .catch(function(error) {
        // output error
        console.log(error);
    });
