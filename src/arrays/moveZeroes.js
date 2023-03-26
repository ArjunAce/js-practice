const nums = [1, 3, 12, 0];

var moveZeroes1 = function (nums) {
    let readIndex = 0, writeIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[readIndex] === 0) {
            readIndex++;
            continue;
        }
        if (readIndex > writeIndex) {
            nums[writeIndex] = nums[readIndex];
            nums[readIndex] = 0;
        }
        writeIndex++;
        readIndex++;
    }
    return nums;
};


var swap = function (nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

var moveZeroes = function (nums) {
    for (let i = 0, cur = 0; cur < nums.length; cur++) {
        if (nums[cur] !== 0) {
            console.log('swapping');
            swap(nums, i++, cur);
        }
    }
    return nums;
}
console.log(moveZeroes(nums));
