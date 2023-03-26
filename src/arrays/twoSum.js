var twoSumSortingApproach = function (nums, target) {
    const sortedNums = nums.slice(0).sort((a, b) => a - b);
    let maxIndex = sortedNums.length - 1;
    for (let i = 0; i < maxIndex; i++) {
        for (let j = i + 1; j <= maxIndex; j++) {
            if (sortedNums[i] + sortedNums[j] === target) {
                const index1 = nums.indexOf(sortedNums[i]);
                const index2 = nums.indexOf(sortedNums[j], sortedNums[i] === sortedNums[j] ? index1 + 1 : 0);
                return [index1, index2];
            } else if (sortedNums[i] + sortedNums[j] > target) {
                maxIndex = j;
                break;
            }
        }
    }
    return [];
};

var twoSum = function (nums, target) {
    let complementMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (complementMap.has(nums[i])) {
            return [i, complementMap.get(nums[i])];
        } else {
            complementMap.set(target - nums[i], i);
        }
    }
};

// console.log(twoSum([8, -2, 9, 100, 23, 2, 2, 11], 20));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([-1, -2, -3, -4, -5], -8));

/* Output: [0, 1]
Output: [1, 2]
Output: [0, 1]
Output: [2,4]

*/