//1.Write a JavaScript function to get the sum of an array without using any loop statement.

// function ArraySum (arr) {
//     let sum = arr.reduce((a,x) => a += x, 0)
//     return sum;
// }

// arr = [1,2,3,4];
// console.log(ArraySum(arr));




// 2.Write a JavaScript function to filter false, null, 0 and blank values from an array without using any loop statement.

// function falsyFilter (arr) {
//     return arr.filter(a => a != 0 && a != false && a != null && a != 0 && a != '');
// }

// arr = [1,'',null,false,2,0];
// console.log(falsyFilter(arr));




// 3.Write a function that, accepts a number, squares every digit of it and return the result. 
// For example, if we run 9119 through the function, 811181 will come out, 
// because 92 is 81 and 12 is 1. 
// Try to implement this function with a single line of actual code that consecutively calls several other functions.

// function digitSquare(num){
//     return num.toString().split('').map(a => a*a).join('');
// }
// console.log(digitSquare(9119));




// 4.Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// function jadenCase(input){
//     return input.split(' ').map(a => a[0].toUpperCase().concat(a.substring(1))).join(' ');
// }

// console.log(jadenCase("How can mirrors be real if our eyes aren't real"));


