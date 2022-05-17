const matrix = n => {
    // use map to initial 2-D array
    // const arr2D = new Array(n).fill(0).map(() => new Array(n).fill(0));

    //! Don't use this to initial multi-dimentional array
    // const arr2D = new Array(n).fill(new Array(n).fill(0));

    /*
    let arr = new Array(3).fill(new Array(3).fill(0)) => [[0,0,0], [0,0,0], [0,0,0]]

    arr[0][1] = 1 => [ [ 0, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 0 ] ]
    */

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
        // left column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    return results;
};

console.log(matrix(4));
