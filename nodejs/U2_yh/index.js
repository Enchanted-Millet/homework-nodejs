import express from "express";
import hw1Router from "./routes/hw1.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("yh homework U2");
});
app.use("/matrix", hw1Router);

app.listen(port, () => console.log(`listening to ${port}`));
