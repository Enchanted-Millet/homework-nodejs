s = "the sky is blue";
function reverseSentence(str) {
  return str.split(" ").reverse().join(" ").trim();
}
console.log(reverseSentence(s));
