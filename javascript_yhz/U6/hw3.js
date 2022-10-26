const [n, m, x] = [-123, 120, 2 * 32 + 1];

function reverseNumber(num) {
  if (Math.abs(num) < 2 ** 32) {
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

try {
  const n = -5000000000;
  console.log(reverseNumber(n));
} catch (error) {
  console.log(error);
} finally {
  console.log("finish");
}
