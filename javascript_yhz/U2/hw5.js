function steps(number) {
  var n = recursion(number, 0);
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
  step++;
  console.log(number, step);
  step = recursion(number, step);
  return step;
}
let n = steps(8);
console.log(n);
