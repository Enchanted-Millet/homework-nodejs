function reverseWords(sentence) {
    let start = 0,
        end = sentence.length - 1;
    while (start < end) {
        [sentence[start++], sentence[end--]] = [sentence[end], sentence[start]];
    }
    (start = 0), (end = 0);
    let pivot = 0;
    while (pivot < sentence.length) {
        if (sentence[end] !== ' ' && end < sentence.length) {
            end++;
        } else {
            pivot = end;
            // need to go back one place to avoid whitespace
            end--;
            while (start < end) {
                [sentence[start++], sentence[end--]] = [
                    sentence[end],
                    sentence[start]
                ];
            }
            start = pivot + 1;
            end = pivot + 1;
        }
    }
}

const sentence = 'the sky is blue'.split('');
reverseWords(sentence);
console.log(sentence);
