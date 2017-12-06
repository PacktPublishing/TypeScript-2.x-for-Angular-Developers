const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Get  API routes
const route = require('./routes/index');

// Parser for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use CORS
app.use(cors());

// Declare API routes
app.use('/api', route);

/**
* Get port from environment. Default is 3000
*/
const port = process.env.PORT || '3000';

/**
* Create HTTP server.
*/
const server = http.createServer(app);

/**
* Listen on port
*/
app.listen(port, function () {
 console.log(`API running on port ${port}`)
} );

