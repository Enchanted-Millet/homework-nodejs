// 1
function sum(arr) {
    // accumulator, current Value
    return arr.reduce((acc, cur) => (acc += cur), 0);
}

console.log(sum([1, 2, 3]));

// 2
function filterFalsyValue(arr) {
    return arr.filter(val => val);
}

console.log(filterFalsyValue([1, '', 0, null, false, {}, []]));

// 3
function squareNumber(num) {
    return ('' + num) // String(num)
        .split('') // ['9', '1', '1', '9']
        .map(n => '' + +n * +n) // Number(n)
        .join('');
}

console.log(squareNumber(9119));

// 4
function capitalize(sentence) {
    return sentence
        .trim()
        .split(' ') // -> ['How', 'can', ...]
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(capitalize("How can mirrors be real if our eyes aren't real"));
