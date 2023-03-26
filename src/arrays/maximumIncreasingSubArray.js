const maximumIncreasingSubArray = (arr) => {
    let sum = arr[0], max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i])
            sum += arr[i];
        else
            sum = arr[i];
        max = Math.max(max, sum);
    }
    return max;
}

console.log(maximumIncreasingSubArray([16, 15, 16]));

