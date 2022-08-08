const { generateMatrix } = require('../services/matrix');

/**
 * @param {string} from
 * @returns {Function}
 */
function drawMatrix(from) {
    return (req, res) => {
        try {
            const { dimension: dim } = req[from] || {};
            const matrix = generateMatrix(+dim);
            res.render('matrix', { matrix });
            // res.send(matrix);
        } catch (e) {
            res.status(511).json({ message: e.message });
        }
    };
}

module.exports = drawMatrix;
