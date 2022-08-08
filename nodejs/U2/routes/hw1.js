const express = require('express');
const router = express.Router();
const drawMatrix = require('../controllers/matrix');

// router.get('/:dimension', (req, res) => {
//     const { dim } = req.params;
//     const matrix = generateMatrix(+dim);
//     res.render('matrix', { matrix });
// });
router.get('/:dimension', drawMatrix('params'));

// router.post('/api/getMatrix', (req, res) => {
//     const { dimension: dim } = req.body;
//     const matrix = generateMatrix(+dim);
//     res.render('matrix', { matrix });
// });
router.post('/api/getMatrix', drawMatrix('body'));

module.exports = router;
