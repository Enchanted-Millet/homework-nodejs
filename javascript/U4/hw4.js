//ES5
// function Singleton() {
//     if (Singleton.instance instanceof Singleton) {
//         return Singleton.instance
        
//     }
//     Singleton.instance = this
// }

//ES6
class Singleton {
    constructor() {
        if (Singleton.instance instanceof Singleton) {
            return Singleton.instance
        }
        Singleton.instance = this
    }
}

const a = new Singleton()
const b = new Singleton()
console.log(a === b)