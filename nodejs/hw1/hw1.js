const http = require('http');
const matrix = require('./matrix');

function prettyPrintMatrix(matrix) {
    let prettyLog = '';
    matrix.forEach(row => {
        let printRow = '';
        row.forEach(val => {
            printRow += val + '\t';
        });
        prettyLog += printRow + '\n';
    });
    return prettyLog;
}

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost:8000');
    console.log(url);
    if (req.method === 'GET') {
        if (url.pathname === '/') {
            console.log('step 2');
            res.end(prettyPrintMatrix(matrix(5)));
        } else if (url.pathname.search(/\/matrix\/\d+/) >= 0) {
            console.log('step 3');
            const num = url.pathname.match(/\/\d+/g);
            const result = matrix(+num[0].substring(1));
            res.end(prettyPrintMatrix(result));
        } else if (url.pathname.search(/\/matrix\.html/) >= 0) {
            console.log('step 4');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            const html = `
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Matrix</title>
                    </head>
                    <body>
                        <div id="matrix">
                            <form action="/api/getMatrix" target="result" method="POST">
                                <label for="dimension">Please enter dimension:</label>
                                <input id="dimension" type="text" name="dimension" />
                                <input type="submit" value="Submit" />
                            </form>
                            <iframe name="result" frameborder="0" width="100%"></iframe>
                        </div>
                    </body>
                </html>`;
            // fs.createReadStream('./matrix.html', 'utf-8').pipe(res);
            res.end(html);
        } else {
            res.writeHead(404);
            res.end('not found');
        }
    } else if (req.method === 'POST') {
        if (url.pathname === '/api/getMatrix') {
            let body = '';
            req.on('data', function (chunk) {
                body += chunk;
            });

            req.on('end', function () {
                // body -> dimension=5
                // console.log('🚀 ~ file: hw1.js ~ line 41 ~ server ~ body', body);
                const dimension = body.split('=')[1];
                if (/^\d+$/.test(dimension)) {
                    res.end(prettyPrintMatrix(matrix(+dimension)));
                } else {
                    res.writeHead(400);
                    res.end('Please provide a valid dimension.');
                }
            });
        } else {
            res.writeHead(404);
            res.end('wrong api end point');
        }
    }
});

const port = process.env.PORT || 8000;
server.listen(port, () => console.log('app is listening on port', port));
