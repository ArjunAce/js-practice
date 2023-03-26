let nums = [2, 3, 6, 6, 5];
let high = 0, secondHigh = 0;
for(let i = 0; i < nums.length; i++) {
    if(nums[i] > high) {
        secondHigh = high;
        high = nums[i];
    } else if(nums[i] > secondHigh && nums[i] !== high) {
        secondHigh = nums[i];
    }
}
console.log(secondHigh);