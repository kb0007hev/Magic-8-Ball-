const express = require('express');
const server = express();
const port = 3000;

server.get('/greeting', (req, res) => {
    res.send('Hello, Stranger');
});

server.get('/greeting/:name', (req, res) => {
    res.send('Wow! Hello there, Jimmy-boy');
});

server.listen(port, ()=> {
console.log('listening on port 3000')
}); 