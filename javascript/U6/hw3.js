// requirement: num is a 32-bit signed integer, which means num should be between -(2 ^ 31) to 2 ^ 31 - 1
function reverseInt(num) {
    if (num < 2 ** 31 && num >= -(2 ** 31)) {
        return num > 0
            ? Number(
                  String(num)
                      .split('')
                      .reduce((acc, cur) => cur + acc, '')
              )
            : -('' + Math.abs(num))
                  .split('')
                  .reduce((acc, cur) => cur + acc, '');
    } else {
        throw new Error('overflow!');
    }
}

try {
    const result = reverseInt(2 ** 31 + 1);
    console.log(result);
} catch (error) {
    console.log(error.message);
} finally {
    console.log('done');
}
