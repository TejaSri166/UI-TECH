const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

let server = http.createServer((request,response) => {
    let url = request.url;
    console.log(url);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    if(url === '/'){
        fs.readFile(path.join(__dirname , 'home.html'),'utf8',(err,data) => {
            response.end(data);
        } );
    }
    else if(url === '/about'){
        fs.readFile(path.join(__dirname , 'about.html'),'utf8',(err,data) => {
            response.end(data);
        } );
    }
    else if(url === '/services'){
        fs.readFile(path.join(__dirname , 'services.html'),'utf8',(err,data) => {
            response.end(data);
        } );
    }
    else if(url === '/contact'){
        fs.readFile(path.join(__dirname , 'contact.html'),'utf8',(err,data) => {
            response.end(data);
        } );
    }
    else{
        response.end(`<h1 style="color: red">Page Not Found</h1>`);
    }
});

server.listen(port,hostname, () => {
    console.log(`Server is started at http://${hostname}:${port}`);
});