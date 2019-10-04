import express = require('express');
import * as http from "http"

var app = express();

// Middlewares
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Set our api routes
// import routerApi from "./api/router";
// app.use('/api',routerApi);
// Catch all other routes and return the index file
app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
  res.write('Hello from interface');
  return res.end();
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));