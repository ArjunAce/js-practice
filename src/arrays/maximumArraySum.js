// Find the length of the longest contiguous subarray, which sums up to less than or equal to k
/* Max Sum <= K */
const maxSumWithUpperLimit = (arr, k) => {
    let low = 0, high = 0, sum = 0;
    let maxSum = 0;
    while (high < arr.length) {
        if (sum + arr[high] <= k) {
            sum += arr[high];
            if (sum === k) {
                break;
            }
            high++;
        } else if (low === high) {
            sum = 0;
            low++;
            high++;
        } else {
            maxSum = Math.max(maxSum, sum);
            sum -= arr[low];
            low++;
        }
    }
    return Math.max(maxSum, sum);
}
// console.log(maxSumWithUpperLimit([1, 2, 3, 4, 5], 11));
// console.log(maxSumWithUpperLimit([2, 4, 6, 8, 10], 7));

/* Max Sum without upper limit */


const maxSumWithoutUpperLimit = (arr) => {
    let sum = 0; max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        max = Math.max(max, sum);
        sum = Math.max(sum, 0);
    }
    return max;
}
console.log(maxSumWithoutUpperLimit([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSumWithoutUpperLimit([1]));
console.log(maxSumWithoutUpperLimit([0]));
console.log(maxSumWithoutUpperLimit([-1]));
console.log(maxSumWithoutUpperLimit([-2147483647]));

