n = -123;
m = 120;
x = 4294967298;

function reverseNumber(num) {
  if (num < 2 ** 32) {
    let temp = Math.abs(num)
      .toString()
      .split("")
      .reduce((result, cur) => cur + result, "");
    let result = "";
    if (num < 0) {
      result = "-" + temp;
    } else {
      result = temp;
    }
    return Number(result);
  } else {
    throw new Error(`${num} is overflow`);
  }
}
console.log(reverseNumber(n));
console.log(reverseNumber(m));
console.log(reverseNumber(x));
