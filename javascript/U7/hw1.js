const https = require('https');

// const req = https.request('https://pokeapi.co/api/v2/pokemon?limit=10', res => {
//     let data = '';
//     res.on('data', chunk => {
//         data += chunk;
//     });

//     res.on('end', () => {
//         console.log(JSON.parse(data));
//     });

//     res.on('error', err => {
//         console.error(err);
//     });
// });

// req.on('error', error => console.log(error));

// req.end();

function httpPromise(url) {
    return new Promise((resolve, reject) => {
        const req = https.request(url, res => {
            let data = '';
            res.on('data', chunk => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(JSON.parse(data));
            });

            res.on('error', err => {
                reject(err);
            });
        });
        req.on('error', err => {
            reject(err);
        });
        req.end();
    });
}

httpPromise('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(console.log)
    .catch(e => console.error(e));
