//1
const x = 5;
function squareRoot(num) {
  console.log(Math.sqrt(num));
  return Math.sqrt(num);
}
squareRoot(x);

//2
const arr1 = [
  1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
];
function numOflongest1(arr) {
  const only1 = arr
    .join("")
    .split(0)
    .filter((item) => item !== "")
    .sort((a, b) => b.length - a.length);
  console.log(only1[0].length);
  return only1[0].length;
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
