string = "abc cde adb dfb def ee abcd cc";

function createDict() {
  let dict = {};
  const str = "abcdefghijklmnopqrstuvwxyz";
  for (i = 0; i < str.length; i++) {
    dict[str.charAt(i)] = i + 1;
  }
  return dict;
}

function strToOutput(input, dict) {
  let output = {};
  let strArray = input.split(" ");
  for (str of strArray) {
    let sum = 0;
    for (char of str) {
      sum += dict[char];
    }
    if (!output[sum]) {
      output[sum] = [str];
    } else {
      output[sum].push(str);
    }
  }
  return output;
}
const dict = createDict();
const output = strToOutput(string, dict);
console.log(output);
