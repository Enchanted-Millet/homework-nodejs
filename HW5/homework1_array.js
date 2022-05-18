// problem 1
var myArray = [1,2,3,4,5]
var sum = myArray.reduce((partialSum,x) => partialSum += x, 0)
console.log(sum)

// problem 2
function isValid(value) {
    if(value !== false || value !== null || value !== 0 || value !== "") {
        return value;
    }
}
var myArray2 = [1,2,3,null,0,5,false, '']
var result = myArray2.filter(isValid)
console.log(result)

// problem 3
function squareDigits(num){
    return Number(num.toString().split('').map(val => val * val).join(''));
}

var num = 8328
console.log(squareDigits(num))

// problem 4
const mySentence = "how can mirrors be real if our eyes aren't real"
const casedMySentence = mySentence.split(" ").map((word) => {
    return word[0].toUpperCase() + word.substring(1)
}).join(" ")
console.log(casedMySentence)
