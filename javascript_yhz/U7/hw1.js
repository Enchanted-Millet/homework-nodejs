const https = require("https");

function requestPromise(url) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        resolve(JSON.parse(data));
      });
      res.on("error", (err) => {
        reject(err);
      });
    });
    req.on("error", (err) => {
      reject(err);
    });
    req.end();
  });
}
requestPromise("https://pokeapi.co/api/v2/pokemon?limit=10")
  .then(console.log)
  .catch((e) => console.error(e));
