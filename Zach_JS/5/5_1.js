// Write a JavaScript function to get the sum of an array without using any loop statement.
let x1 = [1,3,5,7,9]
let y1 = x1.reduce((a,b) => a+=b,0)
console.log(y1)

// Write a JavaScript function to filter false, null, 0 and blank values from an array without using any loop statement.
let x2 = [true, false, 3, null, 0, 'zach']
let y2 = x2.filter(a => a)
console.log(y2)

/*
Write a function that, accepts a number, 
squares every digit of it and return the result. 
For example, if we run 9119 through the function, 811181 will come out, 
because 92 is 81 and 12 is 1. 
Try to implement this function with a single line of actual code that 
consecutively calls several other functions.
*/
let x3 = 9119
let y3 = x3.toString().split('').reduce((a,x) => a += Math.pow(Number(x), 2).toString(), '')
console.log(y3)

// Capitalize 1st letter
let x4 = "How can mirrors be real if our eyes aren't real"
// let y4 = x4.split(' ').reduce((a,x) => a.push(x[0].toUpperCase() + x.slice(1)), [])
let y4 = x4.split(' ').reduce((a,x) => a += (x[0].toUpperCase() + x.slice(1) + ' ') , '')
console.log(y4)