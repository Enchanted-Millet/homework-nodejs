const express = require("express");
const router = express.Router();
require("../configs/mongodbConfig");
const User = require("../models/user");

// /api/users/getAll
router.get("/getAll", async (req, res) => {
  const result = await User.find();
  res.json(result);
});

router.get("/getOne/:id", async (req, res) => {
  const result = await User.findById(req.params.id);
  res.json(result);
});

router.post("/insertOne", async (req, res) => {
  const { name, age, sex, title, startDate } = req.body;
  const newUser = new User();
  Object.assign(newUser, { name, age, sex, title, startDate });
  try {
    await newUser.save();
    res.json({ message: "Success!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/deleteOne/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.params.id });
    res.json({ message: "Success!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// With RESTful API
// router.use("/").get(getAll).post(insertOne);
// router.use("/:userId").get(getOne).put(updateOne).delete(deleteOne);

module.exports = router;
