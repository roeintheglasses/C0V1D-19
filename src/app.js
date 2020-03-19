const path = require('path')
const express = require('express')
var forceSsl = require('force-ssl-heroku');


const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../dist')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.use(forceSsl);


app.listen(port, () => {
    console.log('Server is up on port : ' + port + '.')
})