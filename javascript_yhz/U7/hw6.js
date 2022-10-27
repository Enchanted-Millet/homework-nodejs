const words = ["practice", "makes", "perfect", "coding", "makes"];
let word1 = "coding";
let word2 = "practice";

let word3 = "makes";
let word4 = "perfect";

function shortestDistance(arr, str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;
  let hasStr1 = false;
  let hasStr2 = false;
  let distance = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str1) {
      pointer1 = i;
      hasStr1 = true;
    }
    if (arr[i] === str2) {
      pointer2 = i;
      hasStr2 = true;
    }
    if (hasStr1 && hasStr2) {
      distance = Math.min(distance, Math.abs(pointer1 - pointer2));
    }
  }
  return distance;
}
console.log(shortestDistance(words, word1, word2));
console.log(shortestDistance(words, word3, word4));
