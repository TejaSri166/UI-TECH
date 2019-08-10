const path = require('path');
const bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

let mapRoutes = (app) => {

    // for home page
    app.get('/',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views', 'home.html'));
    });

// for about page
    app.get('/about',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views', 'about.html'));
    });

   // for profile page
    app.get('/profile',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views', 'profile.html'));
    });

    // for profile page Request parameters
    app.get('/profile/:id',(request,response) => {
        let param = request.params;
        console.log(param);
        response.sendFile(path.join(__dirname,'..','views', 'profile.html'));
    });

// for GET Request services page
    app.get('/services',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views', 'services.html'));
    });

    // POST Request for Services Page
    app.post('/service-request' ,urlencodedParser,(request,response) => {
        let formData = request.body;
        console.log(formData);
        response.sendFile(path.join(__dirname,'..','views', 'services.html'));
    });

// for contact page  , Query Strings
    app.get('/contact',(request,response) => {
        let query = request.query;
        console.log(query);
        response.sendFile(path.join(__dirname,'..','views', 'contact.html'));
    });

// for page not found
    app.use((request,response) => {
        response.send(`<h1 style="color: red">Page Not Found</h1>`);
    });
};

module.exports = {
    mapRoutes
};