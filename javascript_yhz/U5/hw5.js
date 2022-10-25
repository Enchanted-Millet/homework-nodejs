//1.1
const x1 = 8;
function squareRoot(num) {
  if (num === 1 || num === 0) {
    return num;
  }
  let start = 1;
  let end = num;
  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2);
    if (mid * mid === num) {
      return mid;
    } else if (mid * mid > num) {
      end = mid;
    } else {
      start = mid;
    }
  }
  return start;
}
console.log(squareRoot(8));
console.log(squareRoot(90));
console.log(squareRoot(187));
console.log(squareRoot(1));
console.log(squareRoot(4));

//2
const arr1 = [
  1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
];
function numOflongest1(arr) {
  const maxlength = arr
    .join("")
    .split(0)
    .filter((item) => item !== "")
    .reduce((acc, cur) => Math.max(acc, cur.length), 0);

  console.log(maxlength);
  return maxlength;
}
numOflongest1(arr1);
//3
const arr2 = ["apple", "april", "ape", "application", "append"];
const arr3 = ["dog", "racecar", "car"];
const arr4 = ["flower", "flow", "flight"];

function longestPrefix(arr) {
  let prefix = "";
  let l = arr.findIndex((word) => {
    for (let n = 0; n < arr.length; n++) {
      if (word.length > arr[n].length) {
        return false;
      }
    }
    return true;
  });
  for (let i = 0; i < arr[l].length; i++) {
    let cur = arr[0].charAt(i);
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].charAt(i) !== cur) {
        cur = "";
        return prefix;
      }
    }
    prefix += cur;
  }
  return prefix;
}

console.log(longestPrefix(arr2));
console.log(longestPrefix(arr3));
console.log(longestPrefix(arr4));
//4
num2 = 16;
function fizzBuzz(n) {
  let str_3 = "Fizz";
  let str_5 = "Buzz";
  let result = [];
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 !== 0 && (i + 1) % 5 !== 0) {
      result.push((i + 1).toString());
    } else {
      result[i] = "";
      if ((i + 1) % 3 === 0) {
        result[i] += str_3;
      }
      if ((i + 1) % 5 === 0) {
        result[i] += str_5;
      }
    }
  }
  return result;
}
console.log(fizzBuzz(num2));
