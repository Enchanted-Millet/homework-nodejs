import express from "express";
import routes from "./routes.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import User2 from "./schema.js";
import dotenv from "dotenv";

dotenv.config();

const url_db =
  "mongodb+srv://lvyhnzhng:gU2Wv9Ecy02Xaf1X@cluster0.ay6vh7g.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(url_db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connect to MongoDB"))
  .catch((err) => console.log(err));
// mongoose.set("bufferCommands", false);

function addUser2db(name, age, sex, title) {
  //
  const user2 = new User2();
  user2.name = name;
  user2.age = age;
  user2.sex = sex;
  user2.title = title;
  user2.save();
  console.log(user2);
}
// addUser2db("Bah", 29, "m", "DS");
// addUser2db("Jiu", 24, "m", "Manager");
// addUser2db("Yak", 42, "f", "Consultant");

const app = express();
const port = 8808;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use("/", (req, res) => {
//   res.send("yh 2nd backend homework -- homepage");
// });
app.use("/app", routes);

app.listen(port, () => console.log(`listening to port ${port}`));
