const express = require('express');
const app = express();
// custom module
const router = require('./router/appRouter');

const hostname = '127.0.0.1';
const port = 3000;

// Serve Static Files
app.use('/public', express.static('public'));

// Set the Template Engine EJS
app.set('view engine', 'ejs');

// call the routing
router.mapRoutes(app);

app.listen(port,hostname, () => {
    console.log(`Server is started at http://${hostname}:${port}`);
});