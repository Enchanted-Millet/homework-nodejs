//1
const arr1 = [1, 4, 6, 7, 2, 4, 5, 6, 3, 8];

function sumArr(arr) {
  return arr1.reduce((a, n) => a + n, 0);
}
console.log(sumArr(arr1));
//2
const arr2 = [null, false, 0, "", 2, "ad", true];
function filterNull(arr) {
  return arr.filter((item) => !!item);
}
console.log(filterNull(arr2));
//3
let num1 = 9119;
function squareNum(num) {
  let numStr = [];
  num
    .toString()
    .split("")
    .forEach((char) => numStr.push(char * char));
  return Number(numStr.join(""));
}
console.log(squareNum(num1));
//4
const notJC = "How can mirrors be real if our eyes aren't real";
function transferToJC(str) {
  let wordsJC = [];
  str.split(" ").forEach((word) =>
    wordsJC.push(
      word
        .charAt(0)
        .toUpperCase()
        .concat(word.slice(1 - word.length))
    )
  );
  return wordsJC.join(" ");
}
console.log(transferToJC(notJC));
