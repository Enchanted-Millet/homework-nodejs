let str1 = "stria";
let str2 = "sting";

let str3 = "string";
let str4 = "string";

let str5 = "tring";
let str6 = "string";

function isOneEditDistance(s, t) {
  let isValid = false;
  let maxlength = Math.max(s.length, t.length);
  let left = 0;
  let right = 0;
  for (let i = 0; i <= maxlength; i++) {
    if (!isValid) {
      if (s[i] === t[i]) {
        continue;
      }
      if (s[i] === t[i + 1]) {
        left = i;
        right = i + 1;
        isValid = true;
      }

      if (s[i + 1] === t[i]) {
        left = i + 1;
        right = i;
        isValid = true;
      }
    } else {
      if (s[left++] !== t[right++]) {
        isValid = false;
        return isValid;
      }
    }
  }
  return isValid;
}
console.log(isOneEditDistance(str1, str2));
console.log(isOneEditDistance(str3, str4));
console.log(isOneEditDistance(str5, str6));
