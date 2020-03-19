const path = require('path')
const express = require('express')
const fs = require('fs');
const http = require('http');
const https = require('https');
// var forceSsl = require('force-ssl-heroku');


const privateKey = fs.readFileSync(__dirname + '/sslforfree/private.key');
const certificate = fs.readFileSync(__dirname + '/sslforfree/certificate.crt');
const ca = fs.readFileSync(__dirname + '/sslforfree/ca_bundle.crt');

const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
};

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../dist')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath, {
    dotfiles: 'allow'
}))
// app.use(forceSsl);

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});