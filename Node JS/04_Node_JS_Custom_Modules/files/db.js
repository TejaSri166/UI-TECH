const fs = require('fs');
const path = require('path');

// saveFile
let saveFile = (fileName,data) => {
    fs.mkdir(path.join(__dirname, '..' , 'data'),{ recursive: true },(err) => {
        if(err) throw err;
        fs.writeFile(path.join(__dirname, '..' , 'data' , fileName),data , 'utf8', (err) => {
            if(err) throw err;
            console.log('data is added');
        });
    });
};

module.exports = {
    saveFile
};