const mysql = require('mysql');

// TODO: configure your own mysql connection
// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: '',
//     password: '',
//     database: ''
// });

connection.connect();
console.log('connected!');

let globalID = 1;

module.exports = {
    getAll: (req, res) => {
        connection.query('select * from users', (err, rows) => {
            if (err) {
                res.status(500).json(err);
            }
            console.log('The user records are:', rows);
            res.json(rows);
            connection.end();
        });
    },
    getOne: (req, res) => {
        connection.query(`select * from users where id = ${req.params.id}`, (err, rows) => {
            if (err) {
                res.status(500).json(err);
            }
            console.log('The user records are:', rows);
            res.json(rows);
            // connection.end();
        });
    },
    insertOne: (req, res) => {
        const {
            id = globalID++,
            name,
            age,
            sex,
            title,
            startDate = new Date(Date.now()).toISOString().split('T')[0]
        } = req.body;
        connection.query(
            `insert into users (id, name, age, sex, title, startDate) values (${id}, '${name}', ${age}, '${sex}', '${title}', '${startDate}')`,
            (err, rows) => {
                if (err) {
                    res.status(500).json(err);
                }
                console.log('The user records are:', rows);
                res.json(rows);
                // connection.end();
            }
        );
    },
    deleteOne: (req, res) => {
        connection.query(`delete from users where id = ${req.params.id}`, (err, rows) => {
            if (err) {
                res.status(500).json(err);
            }
            console.log('The user records are:', rows);
            res.json(rows);
            connection.end();
        });
    }
};
