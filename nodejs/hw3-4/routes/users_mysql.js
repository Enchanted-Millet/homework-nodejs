const express = require('express');
const router = express.Router();

const connection = require('../configs/mysqlConfig');

router.get('/getAll', connection.getAll);

router.get('/getOne/:id', connection.getOne);

router.post('/insertOne', connection.insertOne);

router.delete('/deleteOne/:id', connection.deleteOne);

module.exports = router;
