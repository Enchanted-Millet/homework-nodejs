//1
const squareRoot = (num) => {
    return num ** (1/2)
}

//2
const maxConsecutive = (arr) => {
    let count = 0
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 1) {
            count++
            if(count > max) {
                max = count
            }
        } else {
            count = 0
        }
    }
    return max
}

//3
const longestCommonPrefix = (arr) => {
    arr.sort()
    let minLength = Math.min(arr[0].length, arr[arr.length - 1].length)
    let i = 0
    while (i < minLength && arr[0][i] === arr[arr.length - 1][i]) {
        i++
    }
    let result = arr[0].slice(0,i)
    return result
}

//4
const fizzBuzz = (n) => {
    let result = []
    for (let i = 1; i < n + 1; i++) {
        if(i % 3 === 0 && i % 5 !== 0) {
            result.push('Fizz')
        } else if(i % 3 !== 0 && i % 5 === 0) {
            result.push('Buzz')
        } else if(i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz')
        } else {
            result.push(i.toString())
        }
        
    }
    return result
}


console.log(squareRoot(16))
console.log(maxConsecutive([1,1,0,1,1,1]))
console.log(longestCommonPrefix(['upbeat', 'updo', 'upgrade', 'upload', 'uphill', 'upstage', 'upscale', 'up-tempo']))
console.log(fizzBuzz(15))