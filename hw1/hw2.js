const fs = require('fs');
const path = require('path');

// node hw2.js ./ txt
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
