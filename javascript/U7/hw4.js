function missingRange(nums) {
    const lower = 0,
        upper = 99;
    const result = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] - nums[i] === 2) {
            result.push(`${nums[i + 1] - nums[i]}`);
        } else if (nums[i + 1] - nums[i] > 2) {
            let interval = `${nums[i] + 1} -> ${nums[i + 1] - 1}`;
            result.push(interval);
        }
    }
    if (nums[0] - lower === 1) {
        result.push(`${lower}`);
    } else if (nums[0] - lower === 2) {
        result.push(`${nums[0] - lower}`);
    } else if (nums[0] - lower > 2) {
        let interval = `${lower} -> ${nums[0] - 1}`;
        result.push(interval);
    }
    if (upper - nums[nums.length - 1] === 1) {
        result.push(`${upper}`);
    } else if (upper - nums[nums.length - 1] === 2) {
        result.push(`${upper - nums[nums.length - 1]}`);
    } else if (upper - nums[nums.length - 1] > 2) {
        let interval = `${nums[nums.length - 1] + 1} -> ${upper}`;
        result.push(interval);
    }
    return result;
}

console.log(missingRange([0, 1, 3, 50, 75]));
