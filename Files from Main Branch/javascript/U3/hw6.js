function getValue(character) {
    return character.charCodeAt() - 'a'.charCodeAt() + 1;
}

function calcValues(str) {
    const result = {};
    const splits = str.trim().split(' ');
    splits.forEach(letters => {
        const value = letters
            .split('')
            .reduce((acc, cur) => acc + getValue(cur), 0);
        if (value in result) {
            result[value].push(letters);
        } else {
            result[value] = [letters];
        }
    });
    return result;
}

console.log(calcValues('abc cde adb dfb def ee abcd cc'));
