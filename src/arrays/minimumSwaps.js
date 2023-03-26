const minimumSwaps = (arr) => {
    let swaps = 0;
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] !== i + 1) {
            [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
            swaps++;
        }
    }
    return swaps;
}
let arr = [7, 1, 3, 2, 4, 5, 6];
arr = [1, 2, 3, 4, 5, 9, 7, 8, 6, 10, 11, 12, 13, 14, 15, 16, 18, 17, 19, 20];
// arr = [2, 3, 4, 1, 5];
console.log(minimumSwaps(arr));