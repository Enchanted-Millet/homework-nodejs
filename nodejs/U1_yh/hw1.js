import matrix from "./matrix.js";
import http from "http";

function printMatrix(matrix) {
  let result = "";
  matrix.forEach((row) => {
    let printRow = "";
    row.forEach((number) => {
      printRow += number + "\t";
    });
    result += printRow + "\n";
  });
  return result;
}
// console.log(printMatrix(matrix(5)));

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost:8000");
  //   console.log(url);
  if (req.method === "GET") {
    if (url.pathname === "/") {
      console.log("step2");
      res.end(printMatrix(matrix(5)));
    } else if (url.pathname.search(/\/matrix\/\d+/) >= 0) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      let num = url.pathname.substring(8);
      res.end(printMatrix(matrix(num)));
    } else if (url.pathname.search(/\/matrix\.html/) >= 0) {
      const html = `
      <html lang = "en-US">
      <head>
      <meta charset="UTF-8">
      </head>
      <body>
      <div>
          <form action = "/api/getMatrix" method = "POST" target = "transfer">
          <label for="matrixSize">type a number:</label>
          <input id = "matrixSize" name = "matrixSize" type = "number"/>
          <input type="submit" value = "Submit"/>
          </form>
          <iframe name = "transfer" scrolling = "no" frameborder="0" width = "1500" height = "1500"></iframe>
      </div>
      </body>
      </html>
        `;
      res.writeHead(200, { "Content-Type": "text/html" }).end(html);
    }
  } else if (req.method === "POST") {
    if (url.pathname === "/api/getMatrix") {
      let body = "";
      let num = 5;
      console.log("step4");
      req.on("data", (chunk) => {
        body += chunk;
        num = +body.substring(11);
        console.log(num);
      });
      req.on("end", () => {
        if (typeof num === "number") {
          res.end(printMatrix(matrix(num)));
        } else {
          res.writeHead(400);
          res.end("something wrong");
        }
      });
    }
  }
});

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`listening to ${port}`));
