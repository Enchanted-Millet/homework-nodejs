const mongoose = require('mongoose');

// TODO: change to your own mongodb connect url
mongoose.connect('<your_own_mongodb_connection_url>', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
