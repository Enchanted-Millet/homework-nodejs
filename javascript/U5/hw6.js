const matrix = (n) => {
    let start_row = 0
    let start_col = 0
    let end_row = n - 1
    let end_col = n - 1
    let arr = []
    let count = 1
    for (let i = 0; i < n; i++) {
        arr.push([])
    }
    while (start_row < end_row + 1 && start_col < end_col + 1) {
        for (let i = start_col; i < end_col + 1; i++) {
            arr[start_row][i] = count
            count++
        }
        start_row++

        for (let i = start_row; i < end_row + 1; i++) {
            arr[i][end_col] = count
            count++
        }
        end_col--

        for (let i = end_col; i > start_col - 1; i--) {
            arr[end_row][i] = count
            count++
        }   
        end_row--

        for (let i = end_row; i > start_row - 1; i--) {
            arr[i][start_col] = count
            count ++
        }
        start_col++
    }

    return arr
}


console.log(matrix(4))