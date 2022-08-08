const fs = require('fs');
const path = require('path');

/**
 * How to run this file:
 * node hw2.js <path_to_folder> <file extension>
 * e.g. node hw2.js ./ txt
 */
const customArgs = process.argv.slice(2);
const [dirPath, extension] = customArgs;

fs.readdir(path.join(__dirname, dirPath), (err, files) => {
    if (err) {
        console.error(err);
    } else {
        const result = files.filter(file => file.endsWith('.' + extension));
        result.forEach(file => console.log(file));
    }
});
