const http = require('http');
const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost:8000');

    if (req.method === 'GET') {
        if (url.pathname === '/api/parsetime') {
            const date = new Date(url.searchParams.get('iso'));
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(
                JSON.stringify(
                    {
                        hour: date.getHours(),
                        minute: date.getMinutes(),
                        second: date.getSeconds()
                    },
                    null,
                    2
                )
            );
        } else if (url.pathname === '/api/unixtime') {
            const date = new Date(url.searchParams.get('iso'));
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ unixtime: date.getTime() }, null, 2));
        } else {
            res.writeHead(404);
            res.end('not found');
        }
    }
});

const port = process.env.PORT || 8000;
server.listen(port, () => console.log('app is listening on port', port));
