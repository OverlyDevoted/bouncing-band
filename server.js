const express = require('express');
const path = require('path');

const app = new express();
const https = require('https');
const fs = require('fs');
process.title = "demoNFT";
app.use(express.static("src"))
app.use(express.static("node_modules"))
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/src/index.html'));
});

https.createServer({
    key: fs.readFileSync(path.join(__dirname + '/key.pem')),
    cert: fs.readFileSync(path.join(__dirname + '/cert.pem'))
},
    app).listen(3000, function () {
        console.log("Demo running at https://localhost:3000/");
    });