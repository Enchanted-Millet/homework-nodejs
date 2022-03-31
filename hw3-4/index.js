const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = process.env.DB || 'mongoose';

if (db === 'mongoose') {
    app.use('/app/users', require('./routes/users'));
} else if (db === 'mysql') {
    app.use('/app/users', require('./routes/users_mysql'));
} else {
    console.log('Please provide a valid db to continue - mongoose or mysql');
    process.exit(0);
}

const port = process.env.PORT || 8080;

// START THE SERVER
// =============================================================================
app.listen(port, () => {
    console.log('Magic happens on port ' + port);
});
