function getProperties(obj, isFunction = false) {
    // if (isFunction) {
    //     return Object.keys(obj)
    //         .filter(key => obj[key] instanceof Function)
    //         .join(', ');
    // }
    // return Object.keys(obj).join(', ');

    const keys = [];
    // for (let key in obj) {
    //     keys.push(key);
    // }
    // return keys.join(', ');

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys.join(', ');
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

let obj = {
    name: 'test',
    address: '1234 1st st',
    city: 'san jose',
    getName: function () {
        return this.name;
    }
};

console.log(getProperties(new Person()));


function parseURL(url) {
    const regex = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/
    const result = new URL(url);

    // return url.match(regex);
    return result;
}

console.log(parseURL('https://stackoverflow.com/questions/27745/getting-parts-of-a-url-regex'))