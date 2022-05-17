// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//     }, 1000);
// }

function countDown(t) {
    console.log(t);
    let intervalID = setInterval(() => {
        console.log(--t);
        if (t === 0) clearInterval(intervalID);
    }, 1000);
}
countDown(5);

// let a = { name: 'test' };
// let f1 = () => {
//     console.log('I am in 1st function', a);
// };
// setTimeout(f1, 0);
// f1 = () => {
//     console.log('I am in 2nd function');
// };
// a = { name: 'another' };
