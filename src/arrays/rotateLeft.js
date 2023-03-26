const rotLeft = (a, d) => {
    if (d > a.length / 2) {
        a.unshift(...a.splice(d));
    } else
        a.push(...a.splice(0, d));
    return a;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// [7, 8, 1, 2, 3, 4, 5, 6]
console.log(rotLeft(arr, 6));