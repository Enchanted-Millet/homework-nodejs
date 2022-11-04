import express from "express";
import User2 from "./schema.js";

const router = express.Router();

router.get("/getAll", async (req, res) => {
  console.log("get all");
  const allUsers = await User2.find();
  res.json(allUsers);
});

router.get("/getOne/:id", async (req, res) => {
  const oneUser = await User2.findById(req.params.id);
  res.json(oneUser);
});

router.post("/insertOne", async (req, res) => {
  const user = new User2({
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex,
    title: req.body.title,
  });
  try {
    await user.save();
    console.log(`save ${user.name}'s info!`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/deleteOne/:id", async (req, res) => {
  const userID = req.params.id;
  await User2.findByIdAndDelete(userID).then((query) => {
    if (!query) {
      res.send(`not find id = ${userID} in database`);
    } else {
      res.end(`id = ${userID} has deleted`);
    }
  });
});

//RESTful api
router.get("/app", async (req, res) => {
  const allUsers = await User2.find();
  res.json(allUsers);
});
router.get("/app/:id", async (req, res) => {
  const oneUser = await User2.findById(req.params.id);
  res.send(oneUser);
});
router.post("/app", (req, res) => {
  const { name, age, sex, title } = req.body;
  User2.create({
    name: name,
    age: age,
    sex: sex,
    title: title,
  }).then((data) => res.send(`${data.name} is in the database now`));
});
router.delete("/app/:id", (req, res) => {
  const id = req.params.id;
  User2.findByIdAndDelete(id).then((query) => {
    if (query) {
      res.send(`id = ${id} has been delete`);
    } else {
      res.send(`not find id = ${id} in database`);
    }
  });
});

export default router;
