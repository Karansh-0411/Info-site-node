const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Determine the file to serve based on the URL
    let filePath = '';
    if (req.url === '/' || req.url === '/index') {
        filePath = path.join(__dirname, 'pages', 'index.html');
    } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'pages',  'about.html');
    } else if(req.url === '/contact-me') {
        filePath = path.join(__dirname, 'pages', 'contact-me.html');
    } 
    else {
        filePath = path.join(__dirname, 'pages', '404.html');
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
