// Import the Express.js module
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port number the server will listen on
const port = 3000;

// Define a route for GET requests to the root URL (/)
app.get('/', (req, res) => {
  // Send a string as the response
  res.send('<h1>Hello World from Express!</h1>');
});

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});