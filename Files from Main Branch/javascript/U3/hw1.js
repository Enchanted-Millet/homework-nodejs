// 1
var foo = { bar: { deep: 'pony', dangerouslySetInnerHTML: 'lol' } };
var {
    bar: { deep, dangerouslySetInnerHTML: sure }
} = foo;
console.log(deep);
console.log(sure);

// 2
function es6() {
    var left = 10;
    var right = 20;
    if (right > left) {
        [left, right] = [right, left];
    }
    console.log('left = ' + left, 'right = ' + right);
}

es6();

// 3
var { foo } = { bar: 'baz' };
console.log(foo);

// 4
var key = 'such_dynamic';
var { [key]: foo } = { such_dynamic: 'bar' };
console.log(foo);

// 5
var [a] = [];
console.log(a);
var [b = 10] = [NaN];
console.log(b);
var [c = 10] = [];
console.log(c);

// 6
// function getCoords() {
//     return {
//         x: 10,
//         y: 22
//     };
// }
// var { x, y } = getCoords();
// console.log(x);
// console.log(y);

// 7
function random({ min = 1, max = 300 }) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(random({}));
console.log(random({ max: 24 }));

// 8. To concatenate two strings through spread ?
let stringA = 'this is string a';
let stringB = 'this is string b';
console.log(`${stringA}\n${stringB}\n`);
console.log(stringA + '\n' + stringB + '\n');
console.log(stringA.concat('\n', stringB, '\n'));
console.log([stringA, stringB].join('\n'));

// 9. To combine multiple arrays through spread
let arrayA = [1, 2, 3, 4, 5];
let arrayB = ['5', '4', '3', '2', '1'];
console.log([...arrayA, ...arrayB]);

// 10. To select certain parameters over the others in a function?

// 11
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x);
console.log(y);
console.log(z);

// 12
function compare(a, b) {
    return a - b;
}

let result = compare(...[1, 2]);
// let result = compare([1, 2]);
console.log(result);

// 13
var rivers = ['Nile', 'Ganges', 'Yangte'];
var moreRivers = ['Danube', 'Amazon'];
 
rivers.push(...moreRivers); // [', '', '', [moreRivers]]
console.log(rivers);

// 14
let chars = ['A', ...'BC', 'D'];
console.log(...'BC');
console.log(chars); 
