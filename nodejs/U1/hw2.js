const fs = require('fs');
const path = require('path');

/**
 * How to run this file:
 * node hw2.js <path_to_folder> <file extension>
 * e.g. node hw2.js ./ txt
 */

const myArgs = process.argv.slice(2)
const [directory, extension] = myArgs

fs.readdir(path.resolve(directory), (err, files) => {
    if(err) {
        console.log('No such file or directory.')  
    } else {
        const result = files.filter(file => path.extname(file) === '.'+ extension)
        result.forEach(res => console.log(res));
        }
});