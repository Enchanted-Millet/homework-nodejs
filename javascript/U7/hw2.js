// 1
var student = {
    name: 'David Ray',
    sclass: 'VI',
    rollno: 12
};
console.log(Object.keys(student));

// 2
console.log(Object.keys(student).length);

// 3
function getMethods(obj) {
    return Object.keys(obj).filter(key => obj[key] instanceof Function);
}

// 5
function getAllProperties(obj) {
    const result = [];
    for (let key in obj) {
        result.push(key);
    }
    return result;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sex = 'M';

    this.getAge = function () {
        return this.age;
    };
}

Person.prototype.getName = function () {
    return this.name;
};

console.log(getAllProperties(new Person()));

// 4
// function parseURL(url) {
//     const regex =
//         /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
//     return url.match(regex);
//     return result;
// }

// console.log(
//     parseURL(
//         'https://stackoverflow.com/questions/27745/getting-parts-of-a-url-regex'
//     )
// );
