const path = require('path')
const express = require('express')
const fs = require('fs');
const https = require('https');
// var forceSsl = require('force-ssl-heroku');


const privateKey = fs.readFileSync(__dirname + '/sslforfree/private.key');
const certificate = fs.readFileSync(__dirname + '/sslforfree/certificate.crt');
const ca = fs.readFileSync(__dirname + '/sslforfree/ca_bundle.crt');

const options = {
    key: privateKey,
    cert: certificate,
    ca: ca
};

const app = express()
const port = 8085

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../dist')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath, {
    dotfiles: 'allow'
}))
// app.use(forceSsl);

var server = https.createServer(options, app);

server.listen(port, () => {
    console.log("server starting on port : " + port)
});