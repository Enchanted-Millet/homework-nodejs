const mongoose = require('mongoose');

const Colors = {
    red: 'red',
    green: 'green',
    blue: 'blue',
    yellow: 'yellow',
    purple: 'purple',
    cyan: 'cyan',
    magenta: 'magenta',
    grey: 'grey'
};

const todoTaskSchema = new mongoose.Schema({
    text: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false },
    color: { type: String, default: Colors.grey }
});

module.exports = mongoose.model('TodoTask', todoTaskSchema);
