const matrix = n => {
    // const arr2D = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const results = [];
    for (let i = 0; i < n; i++) {
        results.push([]);
    }
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;
        // Right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;
        // Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;
        // start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    return results;
};

function prettyPrintMatrix(matrix) {
    let prettyLog = '';
    matrix.forEach(row => {
        let printRow = '';
        row.forEach(val => {
            printRow += val + '\t';
        });
        prettyLog += printRow + '\n';
    });
    return prettyLog;
}

module.exports = {
    generateMatrix: matrix,
    prettyPrintMatrix
};
