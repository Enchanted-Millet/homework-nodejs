const mongoose = require('mongoose');

// TODO: change to your own mongodb connect url
mongoose.connect(process.env.MONGODB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
