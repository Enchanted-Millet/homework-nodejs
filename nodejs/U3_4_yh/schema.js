import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema({
  name: String,
  age: Number,
  sex: String,
  title: String,
  startDate: { type: Date, default: Date.now },
});

const User2 = mongoose.model("User2", schema);

export default User2;
