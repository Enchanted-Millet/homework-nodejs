s = "the sky is blue";
s2 = "the sky is turning blue";
// function reverseSentence(str) {
//   return str.split(" ").reverse().join(" ").trim();
// }
// console.log(reverseSentence(s));

function reverseSentence2(str) {
  //in place
  let arr_words = str.split(" ");
  let start = 0;
  let end = arr_words.length - 1;
  while (start < end) {
    [arr_words[start], arr_words[end]] = [arr_words[end], arr_words[start]];
    start++;
    end--;
  }
  return arr_words.join(" ").trim();
}
console.log(reverseSentence2(s));
console.log(reverseSentence2(s2));
