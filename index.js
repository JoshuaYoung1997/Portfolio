// File name - port_80.js
// Importing 'http' module 
const http = require('http');

// Setting Port Number as 80 
const port = 1234;

// Setting hostname as the localhost
// NOTE: You can set hostname to something 
// else as well, for example, say 127.0.0.1
const hostname = "0.0.0.0";

// Creating Server 
const server = http.createServer((req,res)=>{

    // Handling Request and Response 
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain')
    res.end("Welcome to my portfolio")
});

// Making the server to listen to required
// hostname and port number
server.listen(port,hostname,()=>{

    // Callback 
    console.log(`Server running at http://${hostname}:${port}/`);
});