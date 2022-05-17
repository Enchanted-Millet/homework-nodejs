// 1. Compute and return the square root of x.
/**
 * @param {number} num
 * @return {number}
 */
function sqrt(num) {
    if (num < 0) return NaN
    else {
        let a = 1; b = num
        while (Math.abs(a - b) > 0.01) {
            a = (a + b) / 2
            b = num / a
        }
        return a;
    }
}
console.log(sqrt(4))


// 2. Compute and return the square root of x.
/**
 * @param {number[]} x
 * @return {number}
 */
 function maxOnes(x) {
    let max = 0
    let count = 0
    for (let idx = 0; idx < x.length; idx++) {
        if (x[idx] === 0) {
            count = 0
            continue
        }
        else {count ++}
        max = Math.max(max, count)
    }
    return max
 }
 console.log(maxOnes([1,1,0,0,1,1,1,1,0,1,0,1,1,0]))

 // 3. string representation of numbers from 1 to n. 'FIZZ' for mulplication of 3
