// 1. Leetcode 69 - https://leetcode.com/problems/sqrtx/
function sqrt(num: number): number {
    let min = Math.min(1, num),
        max = Math.max(1, num),
        mid: number;

    while (min <= max) {
        mid = min + Math.floor((max - min) / 2);
        if (mid * mid === num) {
            return mid;
        } else if (mid * mid > num) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    return max;
}

// 2. Leetcode 485 - https://leetcode.com/problems/max-consecutive-ones/
function findMaxConsecutiveOnes(nums: number[]): number {
    return nums
        .join('')
        .split('0')
        .reduce((acc, cur) => Math.max(acc, cur.length), 0);
}

// 3. Leetcode 14 - https://leetcode.com/problems/longest-common-prefix/
function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return '';

    for (let i = 0; i < strs[0].length; i++) {
        for (let str of strs) {
            if (str[i] !== strs[0][i]) {
                return str.slice(0, i);
            }
        }
    }

    return strs[0];
}

// 4.
function fizzBuzz(num: number): string[] {
    return new Array(num).fill('').map((value, idx) => {
        if ((idx + 1) % 3 === 0 && (idx + 1) % 5 === 0) {
            value = 'FizzBuzz';
        } else if ((idx + 1) % 5 === 0) {
            value = 'Buzz';
        } else if ((idx + 1) % 3 === 0) {
            value = 'Fizz';
        } else {
            value = (idx + 1).toString();
        }
        return value;
    });
}

console.log(fizzBuzz(15))