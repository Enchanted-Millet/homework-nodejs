class shape {
    constructor(type) {
        this.type = type
    }
    getType() {
        return this.type
    }
}

class Triangle extends shape {
    constructor(a, b, c) {
        super('triangle')
        this.a = a
        this.b = b
        this.c = c
    }
}

Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c
}


var t = new Triangle(1, 2, 3);
console.log(t.constructor === Triangle);

console.log(shape.prototype.isPrototypeOf(t));

console.log(t.getPerimeter());

console.log(t.getType());


class Numarr {
    constructor(numbers) {
            this.numbers = numbers
    }
}

Numarr.prototype.shuffle = function() {
    let i = this.numbers.length; 
    while (i) { 
        let j = Math.floor(Math.random() * i--); 
        [this.numbers[j], this.numbers[i]] = [this.numbers[i], this.numbers[j]]; 
    }
    return this.numbers
}

const arr = new Numarr([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(arr.shuffle())
