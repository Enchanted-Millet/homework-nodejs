const http = require('http')
const matrixToString = require('./matrix')

//Step 2
const server = http.createServer((req, res) => {
	if(req.method === 'GET') {
        if (req.url) {
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end(matrix(5))
        }
    }
})


//Step 3
const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost:8080')
	if(req.method === 'GET') {
        if (url.pathname.match(/\/matrix\/\d+/g)) {
            let str = url.pathname.match(/\/matrix\/\d+/g).toString()
            let index = str.lastIndexOf("\/")
            let param = str.substring(index + 1, str.length)
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end(matrixToString(param))
        } else {
            res.writeHead(404)
            res.end('not found')
        }
    }
})


//Step 4
const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost:8080')
	if(req.method === 'GET') {
        if (req.url) {
            const html = `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title>Spiral Matrix</title>
                </head>
                <body>
                    <h1>Spiral Matrix</h1>
                    <form method="POST" action="/api/getMatrix">
                        <label for= "dimension">Please Enter dimension: </label>
                        <input id="dimension" type="text" name="dimension">
                        <button >Submit</button>
                    </form>
                </body>
            </html>`

            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(html)
        }
    } else if (req.method === 'POST') {
        if (url.pathname === '/api/getMatrix') {
            let str = ''
            req.on('data', (chunk) => {
                str += chunk
            })
            req.on('end', () => {
                const dimension = str.split('=')[1]
                if (dimension >= 0) {
                    res.writeHead(200, {"Content-Type": "text/plain"})
                    res.end(matrixToString(dimension))
                } else {
                    res.writeHead(400)
                    res.end('invalid dimension')
                }
            })
        } else {
            res.writeHead(404)
            res.end('wrong api end point')
        }
    }
})


const port = 8080
server.listen(port, function() {
			console.log(`server startd on port ${port}`)
		}
)