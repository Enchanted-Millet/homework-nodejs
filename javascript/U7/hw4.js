// Leetcode 163 - https://leetcode.com/problems/missing-ranges/
function missingRange(nums, lower = 0, upper = 99) {
    const result = [];
    nums = [lower - 1, ...nums, upper + 1]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === 2) {
            result.push(`${nums[i - 1] + 1}`);
        } else if (nums[i] - nums[i - 1] > 2) {
            let interval = `${nums[i - 1] + 1} -> ${nums[i] - 1}`;
            result.push(interval);
        }
    }
    return result;
}

console.log(missingRange([0, 1, 3, 50, 75]));
