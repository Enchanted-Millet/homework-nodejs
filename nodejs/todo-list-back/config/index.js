const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
