function recursion(n, count = 0, process = []) {
    if (n === 1) {
        return { count, process };
    }
    if (n % 2 === 0) {
        return recursion(n / 2, count + 1, [...process, n / 2]);
    } else {
        return recursion(n * 3 + 1, count + 1, [...process, n * 3 + 1]);
    }
}

console.log(recursion(3));


const obj = {name: 'test'};
obj.name = 'hello'

var x;
function fn;
...
console.log(fn());
x = 0;


function fn() {
    ...
}

var fn = function () { // () => {}

}

fn()

obj1 = {id: 1}
// obj2 = obj1;
// obj.id = 2;
obj2 = {id: 1}
obj1.id = 2
