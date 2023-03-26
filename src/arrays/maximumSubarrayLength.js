// Find the length of the longest contiguous subarray, which sums up to less than or equal to k
// https://www.geeksforgeeks.org/longest-subarray-sum-elements-atmost-k/
const maxSubarrayLengthUpperLimit = (arr, k) => {
    let total = 0, count = 0, maximumCount = 0;
    arr.forEach((e, index) => {
        if ((total + e) <= k) {
            total = total + e;
            count++;
        } else if (total !== 0) {
            total = total - arr[index - count] + e;
        }
        maximumCount = Math.max(count, maximumCount);
    });
    return maximumCount;
}
const maxSubarrayLengthUpperLimitAlternateApproach = (arr, k) => {
    let sum = 0, count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (sum + arr[i] <= k) {
            sum += arr[i];
            count++;
        } else {
            sum = sum - arr[i - count] + arr[i];
        }
    }
    return count;
}
const array = [0, 0, 0, 0, 1, 2, 3, 4, 420, 1, 1, 1, 1, 1, 1, 1];
const k = 12;
console.log(maxSubarrayLengthUpperLimit(array, k));
console.log(maxSubarrayLengthUpperLimitAlternateApproach(array, k));