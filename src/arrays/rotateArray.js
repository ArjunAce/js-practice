/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length;
    if (k === 0)
        return;
    const reverseArray = (start, end) => {
        for (let i = 0; i < (end - start) / 2; i++)
            [nums[start + i], nums[end - i]] = [nums[end - i], nums[start + i]];
    }
    reverseArray(0, nums.length - 1);
    reverseArray(0, k - 1);
    reverseArray(k, nums.length - 1);
};
const nums = [1, 2, 3, 4, 5];
rotate(nums, 2);
console.log(nums);