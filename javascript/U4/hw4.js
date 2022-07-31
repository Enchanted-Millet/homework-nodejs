// class MyClass {

// }

// const Singleton = (function () {
//     let instance;

//     function createInstance() {
//         let classInstance = new MyClass();
//         return classInstance;
//     }

//     return {
//         getInstance: function () {
//             if (!instance) {
//                 instance = createInstance;
//             }
//             return instance;
//         }
//     }
// })();

// module.export = Singleton;

// ES5
// var Singleton = (function () {
//     var instance = null;

//     function Singleton() {
//         if (!instance) {
//             instance = this;
//             this.obj = {
//                 version: Math.floor(Math.random() * 2000)
//             }
//         }
//         return instance;
//     }

//     return Singleton;
// })();

// Singleton.prototype.get = function (key) {
//     return this.obj[key];
// }

// ES6 / 2015
class Singleton {
    constructor() {
        if (Singleton.instance instanceof Singleton) {
            return Singleton.instance;
        }
        this.obj = {
            version: Math.floor(Math.random() * 2000)
        };
        Singleton.instance = this;
    }
    get(key) {
        return this.obj[key];
    }
}

const a = new Singleton();
const b = new Singleton();
console.log(a.get('version'));
console.log(b.get('version'));
