//ES5
function singleton(name) {
    if (!singleton.instance) {
        this.name = name
        singleton.instance = this
    }
    return singleton.instance
}

//ES6
class singleton {
    constructor(name) {
        if (!singleton.instance) {
            this.name = name
            singleton.instance = this
        }
        return singleton.instance
    }
}

const a = new singleton('a')
const b = new singleton('b')
console.log(a === b)