//1
const sum = (arr) =>{
    return arr.reduce((a, x) => a += x)
}

//2
const filterArray = (arr) =>{
    return arr.filter(x => !!x)
}

//3
const square = (num) =>{
    return +num.toString().split('').map(x => (x ** 2)).join('')
}

//4
const convertString = (str) =>{
    return str.trim().split(/\s+/).map(x => x[0].toUpperCase() + x.slice(1)).join(' ')

}

console.log(sum([65, 44, 12, 4]))
console.log(filterArray([false, null, 0, undefined,  , 1, 'a']))
console.log(square(9119))
console.log(convertString("How can mirrors be real if our eyes aren't real"))