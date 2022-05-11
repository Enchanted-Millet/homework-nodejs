// 1. determin if x is an integer
// function isInt(n) {
//     return n === parseInt(n, 10);
// }

// function isInt(n) {
//     return typeof n === 'number' && isFinite(n) && Math.floor(n) === n;
// }

Number.isInteger(10);

// 2. sum function
// function sum() {
//     if (arguments.length === 2) {
//         return arguments[0] + arguments[1];
//     } else if (arguments.length === 1) {
//         let first = arguments[0];
//         return second => first + second;
//     }
// }

function sum(...args) {
    if (args.length >= 2) {
        return args.reduce((acc, cur) => (acc += cur), 0);
    }
    return second => args[0] + second;
}

console.log(sum(2)(3));
console.log(sum(2, 3));

// factorial
(function f(n) {
    return n > 1 ? n * f(n - 1) : n;
})(10);

(function (x) {
    return (function (y) {
        console.log(x);
    })(2);
})(1);
