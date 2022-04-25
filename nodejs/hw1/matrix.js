const matrix = n => {
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

const matrixRecursive = n => {
    const arr2D = new Array(n).fill(0).map(() => new Array(n).fill(0));

    const recursion = (offset = 0, size = n, counter = 1) => {
        if (size < 1) return;
        if (size === 1) {
            arr2D[offset][offset] = counter;
            return;
        }

        // top row
        for (let i = 0; i < size - 1; i++) {
            arr2D[0 + offset][i + offset] = counter++;
        }

        // rightmost column
        for (let i = 0; i < size - 1; i++) {
            arr2D[i + offset][n - 1 - offset] = counter++;
        }

        // bottom row
        for (let i = size - 1; i > 0; i--) {
            arr2D[n - 1 - offset][i + offset] = counter++;
        }

        // leftmost column
        for (let i = size - 1; i > 0; i--) {
            arr2D[i + offset][0 + offset] = counter++;
        }

        recursion(offset + 1, size - 2, counter);
    };

    recursion();
};

module.exports = matrix;
