import express from "express";
import User2 from "./schema.js";

const router = express.Router();

router.get("/getAll", async (req, res) => {
  console.log("get all");
  const allUsers2 = await User2.find();
  res.json(allUsers2);
});
router.post("/addOne", async (req, res) => {
  const user2 = new User2({
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex,
    title: req.body.title,
  });
  try {
    await user2.save();
    console.log(`save ${user2.name}'s info!`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
