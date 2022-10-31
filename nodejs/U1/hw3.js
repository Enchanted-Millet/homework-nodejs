const http = require('http')
const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost:8080')
    const param = url.searchParams.get('iso')
    const date = new Date(param)
	if(req.method === 'GET') {
		console.log(`${req.method} ${req.url}`)
        if (url.pathname === '/api/parsetime') {
            res.writeHead(200, {'Content-Type': 'application/json'})
				res.end(JSON.stringify(
                    {
                        hour: date.getHours(),
                        minute: date.getMinutes(),
                        second: date.getSeconds()
                    }
                ))
        } else if (url.pathname === '/api/unixtime') {
            res.writeHead(200, {'Content-Type': 'application/json'})
                res.end(JSON.stringify(
                    {
                        unixtime: date.getTime()
                    }
                ))
        } else {
            res.writeHead(404)
            res.end('not found')
        }
	} else {
		console.log(req.method + ' is not supported')
		res.end(req.method + ' is not supported')
	}
})

const port = 8080
server.listen(port, () => {

console.log(`server started on port ${port}`)

})