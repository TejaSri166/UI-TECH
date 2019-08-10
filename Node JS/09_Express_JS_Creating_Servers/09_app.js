const express = require('express');
const app = express();
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

// for HTML File
app.get('/',(request,response) => {
    response.sendFile(path.join(__dirname,'home.html'));
});

// for JSON Data
let mobile = {
    brand : 'Apple',
    color : 'silver',
    RAM : '16GB',
    price : 35000,
    isInsures : true
};

app.get('/json',(request,response) => {
    response.json(mobile);
});

// Download a file
app.get('/download',(request,response) => {
    response.download(path.join(__dirname,'Node_JS_New.pdf'));
});

// for page not found
app.use((request,response) => {
    response.send(`<h1 style="color: red">Page Not Found</h1>`);
});

app.listen(port,hostname, () => {
    console.log(`Server is started at http://${hostname}:${port}`);
});