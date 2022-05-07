var longestStrChain = function (words) {
    const M = new Map();
    words.sort((a, b) => a.length - b.length);

    let result = 1;

    for (let word of words) {
        let curL = 1;
        for (let i = 0; i < word.length; i++) {
            curL = Math.max(curL, (M.get(word.replace(word[i], '')) || 0) + 1);
        }
        M.set(word, curL);
        result = Math.max(result, curL);
    }
    console.log(M);
    return result;
};

const data = [
    'ksqvsyq',
    'ks',
    'kss',
    'czvh',
    'zczpzvdhx',
    'zczpzvh',
    'zczpzvhx',
    'zcpzvh',
    'zczvh',
    'gr',
    'grukmj',
    'ksqvsq',
    'gruj',
    'kssq',
    'ksqsq',
    'grukkmj',
    'grukj',
    'zczpzfvdhx',
    'gru'
];

longestStrChain(data);
