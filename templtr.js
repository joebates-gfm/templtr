// Node.js program to demonstrate the   
// fs.mkdir() Method
  
// Include fs and path module
const fs = require('fs');
const path = require('path');
   
fs.mkdir(path.join(`${__dirname}/test`, 'poop'), (err) => {
    console.log({err})
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
});