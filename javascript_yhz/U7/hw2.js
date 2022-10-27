let student1 = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
let student2 = {
  name: "David Rayy",
  class: "VI",
  age: 12,
  speak: function () {
    console.log(this.name);
    console.log(this.age);
  },
  behaviour: function () {
    console.log("hiiii");
  },
};
//1
function printKeys(obj) {
  console.log(Object.keys(obj));
  return Object.keys(obj);
}
printKeys(student1);

//2
function printCount(obj) {
  console.log(Object.getOwnPropertyNames(obj).length);
  return Object.getOwnPropertyNames(obj).length;
}
printCount(student1);

//3
function printMethods(obj) {
  return Object.values(obj).filter((value) => typeof value === "function");
}
console.log(printMethods(student2));

//4

//5
// class Student {
//   constructor(name, age = 20, major = "cs") {
//     this.name = name;
//     this.age = age;
//     this.major = major;
//   }
//   study() {
//     console.log(`student ${this.name} is taking ${this.major} courses`);
//   }
// }
// Student.prototype.takeExam = function () {
//   console.log(`student ${this.name} is taking an exam of ${this.major}`);
// };

class Student {
  constructor(name, age = 20, major = "cs") {
    this.name = name;
    this.age = age;
    this.major = major;

    this.study = function () {
      console.log(`student ${this.name} is taking ${this.major} courses`);
    };
  }
}
Student.prototype.takeExam = function () {
  console.log(`student ${this.name} is taking an exam of ${this.major}`);
};

function printProperties(obj) {
  properties = [];
  for (let key in obj) {
    //????
    properties.push(key);
  }
  console.log(Object.getOwnPropertyNames(obj));
  console.log(Object.keys(obj));
  console.log(properties);
  return properties;
}
printProperties(new Student("Anna"));
