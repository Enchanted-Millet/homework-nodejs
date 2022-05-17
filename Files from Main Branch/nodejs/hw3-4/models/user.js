const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    sex: String,
    age: Number,
    title: String,
    startDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
