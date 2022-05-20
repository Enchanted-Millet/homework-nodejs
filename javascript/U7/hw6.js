function wordDistance(words, word1, word2) {
    const mapping = words.reduce((acc, cur, idx) => {
        if (cur in acc) {
            acc[cur].push(idx);
        } else {
            acc[cur] = [idx];
        }
        return acc;
    }, {});
    let first = 0,
        second = 0;
    const wordIdx1 = mapping[word1],
        wordIdx2 = mapping[word2];
    let result = Number.MAX_SAFE_INTEGER;
    while (first < wordIdx1.length && second < wordIdx2.length) {
        result = Math.min(result, Math.abs(wordIdx1[first] - wordIdx2[second]));
        if (wordIdx1[first] < wordIdx2[second]) {
            first++;
        } else if (wordIdx1[first] > wordIdx2[second]) {
            second++;
        } else {
            break;
        }
    }
    return result;
}

console.log(wordDistance(['practice', 'makes', 'perfect', 'coding', 'makes'], 'coding', 'practice'));
