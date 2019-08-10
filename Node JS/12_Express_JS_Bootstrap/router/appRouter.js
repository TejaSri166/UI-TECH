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

    // for contact page
    app.get('/contact',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views', 'contact.html'));
    });

    // for services page
    app.get('/services',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views', 'services.html'));
    });

    // for Profile page
    app.get('/profile',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views', 'profile.html'));
    });

    // for Profile Parameter page
    app.get('/profile/:name',(request,response) => {
        let name = request.params.name;
        console.log(name);
        let employee = {
            name : 'John',
            age : 40
        };
        response.render(path.join(__dirname,'..','views', 'profile'), {employee : employee});
    });

// for page not found
    app.use((request,response) => {
        response.send(`<h1 style="color: red">Page Not Found</h1>`);
    });
};

module.exports = {
    mapRoutes
};