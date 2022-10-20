function steps(number) {
  let n = recursion(number, 0);
  return n;
}

function recursion(number, step) {
  if (number === 1) {
    return step;
  }
  if (number % 2 === 0) {
    number = number / 2;
  } else {
    number = number * 3 + 1;
  }
  return recursion(number, step + 1);
}
let n = steps(8);
console.log(n);
