function reverseInt(num) {
    if (num <= 2 ** 32) {
        return num > 0
            ? +('' + num).split('').reduce((acc, cur) => cur + acc, '')
            : -('' + Math.abs(num))
                  .split('')
                  .reduce((acc, cur) => cur + acc, '');
    } else {
        throw new Error('overflow!');
    }
}

try {
    const result = reverseInt(2 ** 32 + 1);
    console.log(result);
} catch (error) {
    console.log(error);
}
