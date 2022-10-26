// Leetcode 151 - https://leetcode.com/problems/reverse-words-in-a-string/
function reverseWords(sentence) {
    sentence = sentence.trim().split('')
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
    return sentence.join('');
}

function reverseWords2(sentence) {
    return sentence.trim().split(/\s+/).reverse().join(' ')
}

const sentence = '  the sky   is blue ';
console.log(reverseWords(sentence))


module.exports = {
    reverseWords,
    reverseWords2
}