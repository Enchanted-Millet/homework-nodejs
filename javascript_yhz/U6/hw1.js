// //1. What is the result of the following code? Explain your answer.
// function printing() {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }, 1000);
//   setTimeout(function () {
//     console.log(3);
//   }, 0);
//   console.log(4);
// }
// printing();//1 4 3 2

// //2. Guess the output sequence and why?// 4 4 4 4
// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// //3. Guess the output sequence and why? // 0 1 2 3
// for (let i = 0; i < 4; i++) {
//   (function (i) {
//     setTimeout(() => console.log(i), 0);
//   })(i);
// }

// //4. Guess the output sequence and why?
// console.log("Before the timeout");
// setTimeout(function () {
//   console.log("In the timeout function");
// }, 0);
// console.log("After the timeout");

// //5. Used by Google and Amazon: what will the following code output? // Index:4, element: undefined
// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log("Index: " + i + ", element: " + arr[i]);
//   }, 3000);
// }

// //6. Write a stop timer that starts with a given number of seconds,
// // and stops after the number reaches zero
// // (for each second, you can console.log the current number).
function timer(sec) {
  let i = setInterval(() => {
    if (sec >= 0) {
      console.log(sec--);
    }
    if (sec < 0) {
      clearInterval(i);
    }
  }, 1000);
}
timer(5);
// timer(10);

// //7. Which function will be executed, and why?
// let f1 = () => {
//   console.log("I am in 1st function");
// };
// setTimeout(f1, 0);
// f1 = () => {
//   console.log("I am in 2nd function");
// };
