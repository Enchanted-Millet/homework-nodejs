console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

console.log(1 + '2' + '2'); // 122

// javascript definitive guide
// 4.8.2 Unary Arithmetic Operators
console.log(1 + +'2' + '2'); // '2' -> 2 -> 1 + 2 -> 3 + '2' -> '32'
console.log(1 + -'1' + '2'); // '02'
console.log(+'1' + '1' + '2'); // '11' -> '112'

console.log('A' - 'B' + '2'); // Not a Number

console.log('A' - 'B' + 2); // NaN + 2

console.log('0 || 1 = ' + (0 || 1));

console.log('1 || 2 = ' + (1 || 2));

console.log('0 && 1 = ' + (0 && 1));

console.log('1 && 2 = ' + (1 && 2));

// javascript definitive guide
// 4.9.1 Equality and Inequality Operators
console.log(false == '0'); // '0' => false
console.log(false === '0');

// { fullName: { firstName: 'Aaron' } }
// console.log(obj.fullName.firstName)
// if (obj.fullName) {
// let name = obj.fullName.firstName
// }
console.log(payload.user?.personalInfo?.fullName?.firstName); // obj.fullName -> {}.firstName
