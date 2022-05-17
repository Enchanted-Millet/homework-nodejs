var num = 10,
    name = 'Addy Osmani',
    obj1 = {
        value: 'first value'
    },
    obj2 = {
        value: 'second value'
    },
    obj3 = obj2;

function change(num, name, obj1, obj2) {
    num = num * 10;
    name = 'Paul Irish';
    obj1 = obj2;
    obj2.value = 'new value';
}

change(num, name, obj1, obj2);

console.log(num);
console.log(name);
console.log(obj1.value);
console.log(obj2.value);
console.log(obj3.value);
