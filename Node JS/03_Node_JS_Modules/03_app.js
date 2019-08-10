// Load Core Modules
const os = require('os');
const fs = require('fs');

// Total Memory
let totalMemory = os.totalmem();
console.log(`Total Memory : ${totalMemory/1000000000} GB`);

// Free Memory
let freeMemory = os.freemem();
console.log(`Free Memory : ${freeMemory/1000000000} GB`);

// Computer Name
let computerName = os.hostname();
console.log(`Computer Name : ${computerName}`);

// home Dir
let homeDir = os.homedir();
console.log(`Home Dir : ${homeDir}`);

// Admin Name
let adminName = os.userInfo().username;
console.log(`Admin : ${adminName}`);

// File System Module
let userInformation = {
    totalMemory : os.totalmem(),
    freeMemory : os.freemem(),
    computerName : os.hostname(),
    homeDir : os.homedir(),
    adminName : os.userInfo().username
};

let userString = JSON.stringify(userInformation);

// Create a new file / Write to a file
fs.writeFile('user.json',userString,'utf8',(err) => {
    if(err) throw err;
    console.log('data is saved');
});

fs.readFile('user.json','utf8',(err,data) => {
    if(err) throw err;
    let userObj = JSON.parse(data);
    console.log(userObj);
});
