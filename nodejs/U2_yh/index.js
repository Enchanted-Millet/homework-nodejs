import express from "express";
import hw1_1Router from "./routes/hw1_1.js";
import hw1_2Router from "./routes/hw1_2_rt.js";
import axios from "axios";

const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "ejs");
// app.set("view", "/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});
//1-1
app.use("/matrix", hw1_1Router);
//1-2
app.use("/time", hw1_2Router);
//2-1
app.post("/hw2_1/:lowerCase", (req, res) => {
  res.send(req.params.lowerCase.toUpperCase());
});
//2-2
app.get("/api/async/:url1/:url2/:url3", (req, res) => {
  let url1 = `https://www.${req.params.url1}`;
  let url2 = `https://www.${req.params.url2}`;
  let url3 = `https://www.${req.params.url3}`;
  console.log(url1, url2, url3);
  const fetchURL = (url) => {
    return axios.get(url);
  };
  Promise.all([fetchURL(url1), fetchURL(url2), fetchURL(url3)])
    .then((data) => {
      data.forEach((result, i) => {
        console.log(i + "\t" + result.data.substring(0, 255) + "\n");
      });
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => res.send("finish"));
});

app.listen(port, () => console.log(`listening to ${port}`));
