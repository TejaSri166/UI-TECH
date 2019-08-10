// Load Local Module
let utility = require('./util/utlility');
let db = require('./files/db');

let revStr = utility.reverseStr('Good Morning');
let fileName = 'data.txt';
db.saveFile(fileName,revStr);



